/**
 * Created by glzc on 2017/12/21.
 */

import { StackNavigator } from 'react-navigation';
import tabRouters from './tabRouters'
import homeRouters from './home/homeRouters'
const AppRouters = StackNavigator(Object.assign({},{
    tab: {screen: tabRouters}
}, homeRouters))

export default AppRouters