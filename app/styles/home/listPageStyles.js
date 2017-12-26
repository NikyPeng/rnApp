/**
 * Created by glzc on 2017/12/22.
 */
import {StyleSheet} from 'react-native';
import Util from './../../utils/utils';
import baseStyles from './../baseStyles'
const wt = (Util.size.width - Util.pixel*35)/4;
const listPageStyles = StyleSheet.create(Object.assign({},baseStyles,{
    listStyle: {
        backgroundColor: '#fff',
        paddingTop: Util.pixel*20,
    },
    tabHeader: {
        height: Util.pixel*45,
        borderBottomWidth: Util.pixel*1,
        borderBottomColor: '#e8e8e8',
        borderTopWidth: Util.pixel*1,
        borderTopColor: '#e8e8e8',
        borderLeftWidth: Util.pixel*1,
        borderLeftColor: '#e8e8e8',
    },
    tabTr: {
        height: Util.pixel*45,
        borderBottomWidth: Util.pixel*1,
        borderBottomColor: '#e8e8e8',
        borderLeftWidth: Util.pixel*1,
        borderLeftColor: '#e8e8e8',
    },
    tabTd: {
        flex: 1,
        flexGrow: 1,
        height: Util.pixel*45,
        borderRightWidth: Util.pixel*1,
        borderRightColor: '#e8e8e8',
    },
    itemText: {
        fontSize: Util.commonFontSize(14),
        color: '#9b9b9b'
    },
    buyBtn: {
        width: wt - Util.pixel*10,
        height: Util.pixel*30,
        backgroundColor: '#f00',
        borderRadius: Util.pixel*5,
    },
    item: {
        borderLeftWidth: Util.pixel*3,
        borderLeftColor: '#025fcc',
        paddingLeft: Util.pixel*10,
        marginBottom: Util.pixel*15,
    },
    itemTitle: {
        fontSize: Util.commonFontSize(18),
        color: '#025fcc',
    },
    footer: {
        paddingTop: Util.pixel*20,
    }
}))

export default listPageStyles