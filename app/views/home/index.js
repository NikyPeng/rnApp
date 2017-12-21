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

@observer
export default class Home extends Component{
    constructor(props){
        super(props)
        this.homeData = new HomeData()
    }
    _add(){
        this.homeData.add()
    }
    _reduce(){
        this.homeData.reduce()
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

            </View>
        )
    }
}
const homeStyle = StyleSheet.create({
    container: {
        flex: 1
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