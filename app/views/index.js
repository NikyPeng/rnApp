/**
 * Created by glzc on 2017/12/21.
 */
import React,{Component} from 'react';
import {
    View
} from 'react-native';
import AppRouters from './routers';

export default class MobxAppMain extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{flex: 1}}>
                <AppRouters />
            </View>
        )

    }
}