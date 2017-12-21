/**
 * Created by glzc on 2017/12/21.
 */
"use strict"
import React from 'react';
import Dimensions from 'Dimensions';
import {
    PixelRatio,
    Platform,
    ToastAndroid,
    NativeModules
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Storage from './storage';
import  DeviceInfo from 'react-native-device-info';
var storageKey =require('./storageKeys') ;
import CryptoJS from "crypto-js";
var EventEmitter = require('RCTDeviceEventEmitter');
//ios设备为6p时乘以1.2.(仅用于ios)
module.exports = {
    /*最小线宽*/

    // pixel: PixelRatio.get() == 2 ? 1 : PixelRatio.get() == 3 ? 1.2 : 0.8,
    pixel: Platform.OS === 'ios' ? (DeviceInfo.getDeviceId().indexOf('iPhone10') !== -1 ? 1 : PixelRatio.get() > 2 ? 1.12 : 1) : (PixelRatio.get() > 2.5  || (DeviceInfo.getModel() == 'vivo Y53' && PixelRatio.get() == 1.5) || (Platform.OS === 'android' && (DeviceInfo.getModel() == 'SM-G7508Q' || DeviceInfo.getModel() == 'OPPO A59m' )&& PixelRatio.get() == 2) || Dimensions.get('window').width <= 390   ? 1 : 1.1),
    // // 建议替换pixel为:
    // pixelSize(size:Number){
    //   return Platform.OS === 'ios' ? (PixelRatio.get()>2 ? 1.2*size :size ):1.1*size;
    // },
    //text组件的lineHeight必须使用这个:
    lineHeight(height: Number) {
        return Platform.OS === 'ios' ? height : Math.round(height * 1.1 + 0.5);
    },
    naviBarHeight: Platform.OS === 'ios' ? (PixelRatio.get() > 2 ? 1.2 : 1) * 62 : 48,
    /*字体大小*/
    commonFontSize(size: Number) {
        return Platform.OS === 'ios' ? (DeviceInfo.getDeviceId().indexOf('iPhone10') !== -1 ? size : PixelRatio.get() > 2 ? size + 2 : DeviceInfo.getModel().split(" ")[1] == '5' || DeviceInfo.getModel().split(" ")[1] == '5s' ? size - 1 : size) : (PixelRatio.get() > 2.5 || ((Platform.OS === 'android' && (DeviceInfo.getModel() == 'SM-G7508Q' || DeviceInfo.getModel() == 'OPPO A59m') && PixelRatio.get() == 2) || (DeviceInfo.getModel() == 'vivo Y53' && PixelRatio.get() == 1.5) || Dimensions.get('window').width <= 390) ? size : size + 2);
    },
    /*屏幕尺寸*/
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    getModel: DeviceInfo.getModel(),
    deviceId: DeviceInfo.getDeviceId(),
    // deviceType: DeviceInfo.getModel().split(" ")[1],
    deviceType: DeviceInfo.getModel(),
    isPlus: DeviceInfo.getModel().indexOf('Plus') >= 0 ? true : false,
    isIOS: Platform.OS === 'ios',
    isEmulator: DeviceInfo.isEmulator(),
    isSMG7508Q:  Platform.OS === 'android' && (((DeviceInfo.getModel() == 'SM-G7508Q' || DeviceInfo.getModel() == 'OPPO A59m' ) && PixelRatio.get() == 2) || (DeviceInfo.getModel() == 'vivo Y53' && PixelRatio.get() == 1.5) || Dimensions.get('window').width <=390),
    // checkLogin(loginFn, notLoginFn) {
    //   Storage.getItem(storageKey.CL_USERINFO).then((data) => {
    //     if (data && data.isRegister) {
    //       loginFn && loginFn(data);
    //     } else {
    //       notLoginFn && notLoginFn(data);
    //     }
    //   }, (data) => {
    //     console.log('get data error');
    //     notLoginFn && notLoginFn();
    //   });
    // },
    getVerifyCode(module,method){
    // clearInterval(module.interValID)；
        module.setState({
            verifyCode: null
        });
        method.post('system/identify',{},(res) => {
            if(res && res.success){
                module.setState({
                    verifyCode: res.body.indentify,
                    uuid: res.body.uuid,
                    netFailed: false,
                    // getSmsCodeStatus: 1,
                    // getSmsCodeTitle: '重新获取',
                });
            }
        },(error) => {
            module.setState({
                netFailed: true,
                verifyCode: true
            });
        },20 * 1000,module)
    },
    timer(module,userTime){
        let time = userTime ? userTime : 60,interValID = null;
        module.setState({
            getSmsCodeStatus: 0
        });
        interValID = setInterval(() => {
            if(time > 0){
                module.setState({
                    getSmsCodeTitle: time + "s后重新发送"
                });
                time --;
            }else{
                module.setState({
                    getSmsCodeTitle: '重新发送',
                    getSmsCodeStatus: 1,
                });
                clearInterval(interValID);
            }
        },1000);
        return interValID;
    },
    setFormData(module,arg,val){
        let formData = module.state.formData || {};
        formData[arg] = val.replace(/\s+/,"");
        module.setState({
            formData: formData,
            showError: false
        });
    },
    thousandBitSeparator(num){
        num = num.toString();   //将输入的数字转换为字符串
        if (/^-?\d+\.?\d+$/.test(num)) {  //判断输入内容是否为整数或小数
            if (/^-?\d+$/.test(num)) {    //判断输入内容是否为整数
                num = num + ",00";   //将整数转为精度为2的小数，并将小数点换成逗号
            } else {
                num = num.replace(/\./, ',');    //将小数的小数点换成逗号
            }
            while (/\d{4}/.test(num)) { //
                /***
                 *判断是否有4个相连的数字，如果有则需要继续拆分，否则结束循环；
                 *将4个相连以上的数字分成两组，第一组$1是前面所有的数字（负数则有符号），
                 *第二组第一个逗号及其前面3个相连的数字；
                 * 将第二组内容替换为“,3个相连的数字，”
                 ***/
                num = num.replace(/(\d+)(\d{3}\,)/, '$1,$2');
            }
            return num.replace(/\,(\d*)$/, '.$1');   //将最后一个逗号换成小数点

        }
    },
    checkMobile(val) {
        return /^((1)+\d{10})$/.test(val);
    },
    getStateForAction(navigation){
        const defaultGetStateForAction = navigation.router.getStateForAction;
        navigation.router.getStateForAction = (action, state) => {
            if(action.type == 'Navigation/NAVIGATE'){
                if((global.__isLogin == undefined || global.__isLogin == null) && (action.routeName == "mine") ){
                    action.routeName = 'login';
                }else if(action.routeName == "tab"){
                    const routes = [state.routes[0]];
                    state = { index:0, routes:routes};
                }
            }else if(action.type == 'Navigation/BACK' && action.key != ''){
                EventEmitter.emit("checkLogin");
                if(state.routes[state.routes.length -1].routeName == 'tab' && Platform.OS === 'android'){
                    if(this.lastPress && this.lastPress + 2000 >= Date.now()){
                        return false
                    }else{
                        ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
                        this.lastPress = Date.now();
                        const State = {
                                ...state,
                            };
                        return {
                            ...State,
                            index: state.routes.length - 1,
                        };
                    }
                }
            }
            //console.log('action',action,'state',state);
            if((action.type == 'Navigation/NAVIGATE' && action.routeName == 'home') || (action.type == 'Navigation/BACK' && action.key != '' && state.routes[0].index == 0) || (action.type == 'Navigation/BACK' && (!action.key || action.key == '') && ((state.routes[0].index == 0 && state.routes[1] && state.routes[1].routeName !== 'tab') || (state.routes[1] && state.routes[1].routeName === 'tab' && state.routes[1].index == 0)) && ['messageCenter','projectInfo','webview','topUp','redPacket'].indexOf(state.routes[state.routes.length - 1].routeName) > -1 )){
                //console.log('action',action,'state',state);
                EventEmitter.emit('isHome');
            };
            if((action.type == 'Navigation/NAVIGATE' && action.routeName == 'more') || (action.type == 'Navigation/BACK' && action.key != '' && state.routes[0].index == 3) || (action.type == 'Navigation/BACK' && (!action.key || action.key == '') && ((state.routes[0].index == 3 && state.routes[1] && state.routes[1].routeName !== 'tab') || (state.routes[1] && state.routes[1].routeName === 'tab' && state.routes[1].index == 3)) && state.routes[state.routes.length - 1].routeName == 'messageCenter')){
                EventEmitter.emit('moreCheckLogin');
            };
            if((action.type == 'Navigation/NAVIGATE' && ((action.routeName == 'list' && action.params && action.params.toListDetail) || (action.routeName == 'tab' && action.params && action.params.toListDetail))) || (Platform.OS === 'android' && action.routeName == 'tab' && action.params && action.params.fromWebview)){
                EventEmitter.emit('isList');
            }
            if(action.type == 'Navigation/NAVIGATE' && (action.routeName == 'list' || action.routeName == 'mine')){
                EventEmitter.emit('changeStatusBar','light-content');
            }
            if(action.type == 'Navigation/NAVIGATE' && (action.routeName == 'home' || action.routeName == 'more')){
                EventEmitter.emit('changeStatusBar','dark-content');
            }
            return defaultGetStateForAction(action, state);
        };
    },
    getAESstr(plaintText) {
        var deviceId = DeviceInfo.getUniqueID();
        //AES/CBC/PKCS7Padding
        //key是设备ID MD5的中间16位
        var keyStr = CryptoJS.MD5(deviceId).toString().substring(8, 24);

        var key = CryptoJS.enc.Utf8.parse(keyStr); //秘钥
        var keyReverse = keyStr.split('').reverse().join(''); //将设备中间16位进行反序

        var iv = CryptoJS.enc.Utf8.parse(keyReverse);
        //加密
        var encryptedData = CryptoJS.AES.encrypt(plaintText, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        var encryptedBase64Str = encryptedData.toString();

        return encryptedBase64Str;
    },
    getDecodeAESStr(data) {
        var deviceId = DeviceInfo.getUniqueID();
        //AES/CBC/PKCS7Padding
        //key是设备ID MD5的中间16位
        var keyStr = CryptoJS.MD5(deviceId).toString().substring(8, 24);

        var key = CryptoJS.enc.Utf8.parse(keyStr); //秘钥

        var keyReverse = keyStr.split('').reverse().join(''); //将设备中间16位进行反序

        var iv = CryptoJS.enc.Utf8.parse(keyReverse);

        var decryptedData = CryptoJS.AES.decrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        var decryptedStr = decryptedData.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedStr);
    },
    getRsaStr() {
        var deviceId = DeviceInfo.getUniqueID();
        var keyStr = CryptoJS.MD5(deviceId).toString().substring(8, 24);
        var publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQChXXvZyg+mHeZCiCCcVHnNE5XOrcvnzt6QkYEN2vGjBqR/fxa6f8izsyssumiRJPUOo+Yi1xnp1vtknseeLGmXHNzmhjKnfHEaaa3hp5HiGfWJfIQfkAbza0YY7/b7lIeB7NQwjgjpOWDbdPjodlectul+RoHN1tWyCvqPtGxpywIDAQAB';
        var encrypt = new JSEncrypt.JSEncrypt();
        encrypt.setPublicKey(publicKey);
        var encrypted = encrypt.encrypt(keyStr).toString();

        return encrypted;
    },
    getDate(time,getDetail,type){
        let LocalDate = new Date(time);
        if(getDetail){
            if(type){
                return LocalDate.getFullYear() + "-" + ((parseInt(LocalDate.getMonth()) + 1 ) >= 10 ? (parseInt(LocalDate.getMonth()) + 1 ) : "0" + (parseInt(LocalDate.getMonth()) + 1 )) + "-" + (LocalDate.getDate() >= 10 ?  LocalDate.getDate() : '0' +  LocalDate.getDate())+ " "+ (LocalDate.getHours() >= 10 ? LocalDate.getHours() : "0" + LocalDate.getHours()) + ":" + (LocalDate.getMinutes() >= 10 ?LocalDate.getMinutes() : "0" + LocalDate.getMinutes()) + ":" + (LocalDate.getSeconds() >=10 ? LocalDate.getSeconds() : "0" + LocalDate.getSeconds());
            }else{
                return LocalDate.getFullYear() + "-" + ((parseInt(LocalDate.getMonth()) + 1 ) >= 10 ? (parseInt(LocalDate.getMonth()) + 1 ) : "0" + (parseInt(LocalDate.getMonth()) + 1 )) + "-" + (LocalDate.getDate() >= 10 ?  LocalDate.getDate() : '0' +  LocalDate.getDate())+ "\n" + (LocalDate.getHours() >= 10 ? LocalDate.getHours() : "0" + LocalDate.getHours()) + ":" + (LocalDate.getMinutes() >= 10 ?LocalDate.getMinutes() : "0" + LocalDate.getMinutes()) + ":" + (LocalDate.getSeconds() >=10 ? LocalDate.getSeconds() : "0" + LocalDate.getSeconds());

            }
        }else{
            return LocalDate.getFullYear() + "-" + ((parseInt(LocalDate.getMonth()) + 1 ) >= 10 ? (parseInt(LocalDate.getMonth()) + 1 ) : "0" + (parseInt(LocalDate.getMonth()) + 1 )) + "-" + (LocalDate.getDate() >= 10 ?  LocalDate.getDate() : '0' +  LocalDate.getDate());
        }
    },
    numberFormat(num){
        if(num<=0){
            return '0.00'
        };
        let n = (num - 0).toFixed(2).toString(),
            a = n.split('.'),
            str = '';
        let b = a[0].split('');
        for(let i=b.length - 1;i>=0;i-- ){
            if((b.length - 1 - i)%3 == 2 && i != 0){
                str = ','+b[i]+str;
            }else{
                str = b[i]+str;
            }
        }
        return a.length > 1 ? a[1].length > 1 ? str+'.'+a[1] : str+'.'+a[1]+'0' : str+'.00';
    },

    getInjectScript() {
        return `
          (function() {
              window.WebViewBridge={};
              window.WebViewBridge.sendMsgToNative=function(name,params,callback){
                  console.log(name+';;;'+JSON.stringify(params||{}));
                  window.postMessage(name+';;;'+JSON.stringify(params||{}),'*');
              };
              window.WebViewBridge.useId = ${global.__useId}

          }());
        `;
    },
    registerJPush(useId,method,module){
        let data = {
            useId:useId,
            registrationId:__registerId,
            sessionId: __sessionId
        };
        method.post(`push/devices`,data,res => {
            console.log('registrationId',res)
        },error => {

        })
    },
    settingNewLeading(){
        if(global.__fromLaunch){
            EventEmitter.emit('showLeading');
            global.__fromLaunch = false;
        }
    },
    get Grow(){ return{
        track: NativeModules.ETDGrowingIO.track,
        getDeviceId: NativeModules.ETDGrowingIO.getDeviceId,
        getSessionId: NativeModules.ETDGrowingIO.getSessionId
    }}
};
