/**
 * Created by glzc on 2017/12/27.
 */
import React,{Component} from 'react';
import {requireNativeComponent} from 'react-native';
const ETDHomepageView = requireNativeComponent('ETDHomepageView', ScrollViewDemo)
export default class ScrollViewDemo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <ETDHomepageView {...this.props}>{this.props.children}</ETDHomepageView>
        )
    }
}