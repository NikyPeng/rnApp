/**
 * Created by glzc on 2017/12/21.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {observer} from 'mobx-react/native'
import Util from './../../utils/utils'
import HomeData from './../../datas/home/index'
import PageList from './component/listPage'
const initData = [
    {id: '001',name: '苹果', price: '5.6', store: 100},
    {id: '002',name: '香蕉', price: '4.6', store: 100},
    {id: '003',name: '猕猴桃', price: '12.6', store: 100},
    {id: '004',name: '菠萝', price: '9.8', store: 100},
    {id: '005',name: '柚子', price: '11.2', store: 100},
    {id: '006',name: '榴莲', price: '32.8', store: 100},
]
@observer
export default class Home extends Component{
    constructor(props){
        super(props)
        this.homeData = new HomeData()
    }
    componentWillMount(){
        initData.forEach(v => {
            this.homeData.setListDatas(v)
        })
    }
    _add(){
        this.homeData.add()
    }
    _reduce(){
        this.homeData.reduce()
    }
    toPage(){
        this.props.navigation.navigate('homePageList', {data: this.homeData.listDatas})
    }
    render(){
        return (
            <View style={homeStyle.container}>
                <View style={[homeStyle.flexRow,homeStyle.btnBox]}>
                    <Text>Welcome to home{this.homeData.count}</Text>
                </View>
                <View style={[homeStyle.flexRow,homeStyle.btnBox,{justifyContent: 'space-around'}]}>
                    <View>
                        <TouchableOpacity activeOpacity={1} onPress={this._add.bind(this)}>
                            <View style={[homeStyle.flexRow,homeStyle.btn]}>
                                <Text style={homeStyle.text}>加一</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity activeOpacity={1} onPress={this._reduce.bind(this)}>
                            <View style={[homeStyle.flexRow,homeStyle.btn]}>
                                <Text style={homeStyle.text}>减一</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[homeStyle.flexRow,homeStyle.btnBox,{justifyContent: 'space-around'}]}>
                    <View>
                        <TouchableOpacity activeOpacity={1} onPress={this.toPage.bind(this)}>
                            <View style={[homeStyle.flexRow,homeStyle.btn]}>
                                <Text style={homeStyle.text}>前往水果列表页</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: Util.pixel*15,
        paddingRight: Util.pixel*15,
    },
    btnBox: {
        height: Util.pixel*50
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: Util.pixel*120,
        height: Util.pixel*45,
        borderWidth: Util.pixel*1,
        borderRadius: Util.pixel*4,
    },
    text: {
        fontSize: Util.commonFontSize(14),
        alignSelf: 'center',
    }
})