/**
 * Created by glzc on 2017/12/25.
 */
import {StyleSheet} from 'react-native';
import Util from './../../utils/utils';
import baseStyles from './../baseStyles'
const buyPageStyles = StyleSheet.create(Object.assign({}, baseStyles, {
    topSpace: {paddingTop: Util.pixel*20},
    content: {
        backgroundColor: '#ffffff',
        paddingTop: Util.pixel*15,
        paddingBottom: Util.pixel*15,
        borderRadius: Util.pixel*5,
    },
    item: {
        height: Util.pixel*45,
        borderBottomWidth: 1,
        borderBottomColor: '#d8d8d8',
        paddingLeft: Util.pixel*15,
        paddingRight: Util.pixel*15,
    },
    title: {
        fontSize: Util.commonFontSize(18),
        color: '#025fcc'
    },
    itemText: {
        fontSize: Util.commonFontSize(14),
        color: '#025fcc'
    },
    btn: {
        width: Util.pixel*50,
        height: Util.pixel*35,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        borderRadius: Util.pixel*5,
    },
    input: {
        width: Util.pixel*60,
        height: Util.pixel*35,
        marginLeft: Util.pixel*8,
        marginRight: Util.pixel*8,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        borderRadius: Util.pixel*5,
        textAlign: 'center',
    },
    submit: {
        paddingLeft: Util.pixel*15,
        paddingRight: Util.pixel*15,
        height: Util.pixel*50,
        marginTop: Util.pixel*20,
    },
    submitBtn: {
        flex: 1,
        height: Util.pixel*40,
        backgroundColor: '#025fcc',
        borderRadius: Util.pixel*5,
    }
}));

export default buyPageStyles