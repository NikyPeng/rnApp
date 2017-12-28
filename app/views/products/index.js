/**
 * Created by glzc on 2017/12/21.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    requireNativeComponent,
} from 'react-native';
//const ETDHomepageView = requireNativeComponent('ETDHomepageView', null)
import ScrollViewDemo from './component/ScrollViewDemo';
import productStyles from './../../styles/products/productStyles'
export default class Products extends Component{
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
    render(){
        return (
            <View style={{flex: 1}}>
                <ScrollViewDemo style={{flex: 1}}>
                    {
                        this.state.obj.map(v => <View style={[productStyles.flexRow,productStyles.item]} key={v.key}><Text>{v.text}</Text></View>)
                    }
                </ScrollViewDemo>
            </View>
        )
    }
}