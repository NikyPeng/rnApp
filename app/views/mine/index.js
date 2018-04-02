/**
 * Created by glzc on 2017/12/21.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
} from 'react-native';
import PullRefreshScrollView from './../../components/pullRefreshScrollView/pullRefreshScrollView';
import mineStyles from './../../styles/mine/mineStyles';
import ScrollViewDemo from './../products/component/ScrollViewDemo';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class Mine extends Component{
    constructor(props){
        super(props)
        this.state = {
            objO: [
                {key: '001',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '002',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '003',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '004',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '005',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '006',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '007',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '008',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '009',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '010',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '011',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '012',text: 'lksajdklsadsadk;sadkasdsald'},
            ],
            obj: [
                {key: '001',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '002',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '003',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '004',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '005',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '006',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '007',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '008',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '009',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '010',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '011',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '012',text: 'lksajdklsadsadk;sadkasdsald'},
            ],
            ob: [
                {key: '013',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '014',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '015',text: 'lksajdklsadsadk;sadkasdsald'},
                {key: '016',text: 'lksajdklsadsadk;sadkasdsald'},
            ],
            isFirst: true,
        }
    }
    _renderHeader(){
        return (
            <View style={mineStyles.listHeader}></View>
        )
    }
    _renderRow(item){
        return (
            <View style={[mineStyles.flexRow,mineStyles.item]}>
                <Text>{item.text}</Text>
            </View>
        )
    }
    onRefresh(PullRefresh){
        //console.log('pullRefresh:', pullRefresh)
        //setTimeout(() => {
        //    pullRefresh.onRefreshEnd()
        //}, 2000)
    }
    onLoadMore(pullRefresh){
        console.log('onLoadMore')
    }
    _renderScrollComponent(props){
        console.log('========',props)
        return (
            <PullRefreshScrollView onRefresh={(PullRefresh)=>this.onRefresh(PullRefresh)} {...props}     />
        )
        /*return (
            <ScrollViewDemo style={{flex: 1}} {...props} />
        )*/
    }
    _onEndReached(){
        if(this.state.isFirst){
            this.setState({
                isFirst: false
            })
            return;
        }
        this.setState({
            obj: this.state.obj.concat(this.state.ob)
        })
    }
    render(){
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={ds.cloneWithRows(this.state.obj)}
                    renderRow={this._renderRow.bind(this)}
                    renderHeader={this._renderHeader.bind(this)}
                    renderScrollComponent={(props) => <PullRefreshScrollView
                                                            onRefresh={(PullRefresh) => {
                                                                        setTimeout(() => {
                                                                            this.setState({obj: [].concat(this.state.objO)},() => {PullRefresh.onRefreshEnd()})
                                                                        }, 2000)}}
                                                            {...props}/>}
                    onEndReached={this._onEndReached.bind(this)}
                    onEndReachedThreshold={25}
                    refreshedText="财富结缘，易生相伴"
                    refreshText="财富结缘，易生相伴"
                    />
            </View>
        )
    }
}