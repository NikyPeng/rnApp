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
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class Mine extends Component{
    constructor(props){
        super(props)
        this.state = {
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
            ]
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
    onRefresh(pullRefresh){
        console.log('pullRefresh:', pullRefresh)
        setTimeout(() => {
            pullRefresh.onRefreshEnd()
        }, 2000)
    }
    onLoadMore(pullRefresh){
        console.log('onLoadMore')
    }
    _renderScrollComponent(props){
        console.log('========',props)
        return (
            <PullRefreshScrollView onRefresh={(PullRefresh)=>this.onRefresh(PullRefresh)} {...props}     />
        )
    }
    render(){
        return (
            <View style={mineStyles.container}>
                <ListView
                    dataSource={ds.cloneWithRows(this.state.obj)}
                    renderRow={this._renderRow.bind(this)}
                    renderHeader={this._renderHeader.bind(this)}
                    renderScrollComponent={this._renderScrollComponent.bind(this)}
                    refreshedText="财富结缘，易生相伴"
                    refreshText="财富结缘，易生相伴"
                    />
            </View>
        )
    }
}