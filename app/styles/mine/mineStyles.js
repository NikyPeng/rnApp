/**
 * Created by glzc on 2017/12/28.
 */
import {StyleSheet} from 'react-native';
import Util from './../../utils/utils';
import baseStyles from './../baseStyles'
const mineStyles = StyleSheet.create(Object.assign({}, baseStyles, {
    item: {
        height: Util.pixel*50
    },
    listHeader: {
        paddingTop: Util.pixel*20
    }
}));

export default mineStyles