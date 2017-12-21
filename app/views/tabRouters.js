/**
 * Created by glzc on 2017/12/21.
 */
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Util from './../utils/utils'
import Home from './home/index'
import Products from './products/index'
import Mine from './mine/index'
import More from './more'

//首页tab配置
const homePage = {
    title: 'home',
    tabBarIcon: (e) => {
        return <Image source={e.focused ? require('./../imgs/common/active_home_icon.png') : require('./../imgs/common/home_icon.png')} />
    },
    tabBarLabel: '首页'
}

//项目列表tab配置
const productsPage = {
    title: 'products',
    tabBarIcon: (e) => {
        return <Image source={e.focused ? require('./../imgs/common/active_projectList_icon.png') : require('./../imgs/common/projectList_icon.png')} />
    },
    tabBarLabel: '项目列表'
}

//我的tab配置
const minePage = {
    title: 'mine',
    tabBarIcon: (e) => {
        return <Image source={e.focused ? require('./../imgs/common/active_mine_icon.png') : require('./../imgs/common/mine_icon.png')} />
    },
    tabBarLabel: '我的'
}

//更多tab配置
const morePage = {
    title: 'more',
    tabBarIcon: (e) => {
        return <Image source={e.focused ? require('./../imgs/common/active_more_icon.png') : require('./../imgs/common/more_icon.png')} />
    },
    tabBarLabel: '更多'
}

const tabBarOptions = Util.isIOS ? {
    activeTintColor: '#025fcb',            //Label and icon color of the active tab.
    activeBackgroundColor: '#f7f7f7',      //Background color of the active tab.
    inactiveTintColor: '#9b9b9b',          //Label and icon color of the inactive tab.
    inactiveBackgroundColor: '#f7f7f7',    //Background color of the inactive tab
    showLabel: true,                //Whether to show label for tab, default is true.
    style: {
        backgroundColor:"#f7f7f7",
        height: Util.pixel * 50,
        justifyContent:'center',
        paddingBottom:Util.isIOS ? Util.pixel*3 : 0
    },                      //Style object for the tab bar
    labelStyle: {},                 //Style object for the tab label
    tabStyle: {},                   //Style object for the tab
    allowFontScaling: false         //Whether label font should scale to respect Text Size accessibility settings, default is true
} : {
    activeTintColor: '#025fcb',            //Label and icon color of the active tab.
    inactiveTintColor: '#9b9b9b',          //Label and icon color of the inactive tab.
    showIcon: false,                //Whether to show icon for tab, default is false.
    showLabel: true,                //Whether to show label for tab, default is true.
    upperCaseLabel: true,           //Whether to make label uppercase, default is true.
    pressColor: null,                 //Color for material ripple (Android >= 5.0 only).
    pressOpacity: 1,               //Opacity for pressed tab (iOS and Android < 5.0 only).
    scrollEnabled: false,           //Whether to enable scrollable tabs.
    tabStyle: {},                   //Style object for the tab.
    indicatorStyle: {},             //Style object for the tab indicator (line at the bottom of the tab).
    labelStyle: {},                 //Style object for the tab label.
    iconStyle: {},                  //Style object for the tab icon.
    style: {
        backgroundColor:"#f7f7f7",
        height: Util.pixel * 50,
        justifyContent:'center',
        paddingBottom:Util.isIOS ? Util.pixel*3 : 0
    },                      //Style object for the tab bar.
    allowFontScaling: false,        //Whether label font should scale to respect Text Size accessibility settings, default is true.
}
const tabRouters = TabNavigator({
    home: {screen: Home, navigationOptions: homePage},
    products: {screen: Products, navigationOptions: productsPage},
    mine: {screen: Mine, navigationOptions: minePage},
    more: {screen: More, navigationOptions: morePage}
},{
    tabBarPosition: 'bottom',
    swiperEnabled: false,
    animationEnabled: false,
    lazy: true,
    initialRouteName: 'home',
    backBehavior: 'initialRoute',
    tabBarOptions: tabBarOptions
})

export default tabRouters