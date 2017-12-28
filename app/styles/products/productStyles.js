/**
 * Created by glzc on 2017/12/27.
 */
import {StyleSheet} from 'react-native';
import Util from './../../utils/utils';
import baseStyles from './../baseStyles'
const productStyles = StyleSheet.create(Object.assign({}, baseStyles, {
    item: {
        height: Util.pixel*50
    }
}));

export default productStyles