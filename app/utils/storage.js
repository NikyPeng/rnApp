/**
 * Created by glzc on 2017/12/21.
 */
import {
    AsyncStorage
} from 'react-native';

module.exports = {
    getItem: function(key) {
        return AsyncStorage.getItem(key).then(value => {
                return JSON.parse(value);
    });
},
// to do check the vaule is exist then call setItem method will
//   update old value or add new value to old value
setItem: function(key, value) {
    return AsyncStorage.setItem(key, value == undefined ? '' : JSON.stringify(value));
},

removeItem: function(key) {
    return AsyncStorage.removeItem(key);
}
}