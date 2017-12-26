/**
 * Created by glzc on 2017/12/22.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import listPageStyles from './../../../styles/home/listPageStyles'
export default class PageList extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        console.log('==========', JSON.stringify(this.props.navigation))
    }
    _toPage(routeName, params){
        this.props.navigation.navigate(routeName, params)
    }
    _renderHeader(){
        return (
            <View style={{backgroundColor: '#fff'}}>
                <View style={[listPageStyles.flexRow,listPageStyles.tabHeader]}>
                    <View style={[listPageStyles.flexRow,listPageStyles.tabTd]}>
                        <Text style={listPageStyles.itemText}>水果名称</Text>
                    </View>
                    <View style={[listPageStyles.flexRow,listPageStyles.tabTd]}>
                        <Text style={listPageStyles.itemText}>单价(元／kg)</Text>
                    </View>
                    <View style={[listPageStyles.flexRow,listPageStyles.tabTd]}>
                        <Text style={listPageStyles.itemText}>库存(kg)</Text>
                    </View>
                    <View style={[listPageStyles.flexRow,listPageStyles.tabTd]}>
                        <Text style={listPageStyles.itemText}>操作</Text>
                    </View>
                </View>
            </View>
        )
    }
    _renderRow({item, idx}){
        return (
            <TouchableOpacity style={{backgroundColor: '#fff'}} activeOpacity={0.7}>
                <View style={[listPageStyles.flexRow,listPageStyles.tabTr]}>
                    <View style={[listPageStyles.flexRow,listPageStyles.tabTd]}>
                        <Text style={listPageStyles.itemText}>{item.name}</Text>
                    </View>
                    <View style={[listPageStyles.flexRow,listPageStyles.tabTd]}>
                        <Text style={listPageStyles.itemText}>{item.price}</Text>
                    </View>
                    <View style={[listPageStyles.flexRow,listPageStyles.tabTd]}>
                        <Text style={listPageStyles.itemText}>{item.store}</Text>
                    </View>
                    <TouchableOpacity style={[listPageStyles.flexRow,listPageStyles.tabTd]} activeOpacity={0.7} onPress={this._toPage.bind(this,'homeBuyPage', {data: item})}>
                        <View style={[listPageStyles.flexRow,listPageStyles.buyBtn]}>
                            <Text style={[listPageStyles.itemText,{color: '#fff'}]}>购买</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
    _renderFooter(){
        return (
            <View></View>
        )
    }
    _key(item, index){
        return index
    }
    render(){
        return (
            <View style={[listPageStyles.container,listPageStyles.listStyle]}>
                <FlatList
                    ListHeaderComponent={this._renderHeader()}
                    renderItem={this._renderRow.bind(this)}
                    data={this.props.navigation.state.params.data}
                    keyExtractor={this._key.bind(this)}
                    />
            </View>
        )
    }
}