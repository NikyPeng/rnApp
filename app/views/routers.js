/**
 * Created by glzc on 2017/12/21.
 */

import { StackNavigator } from 'react-navigation';
import tabRouters from './tabRouters'

const AppRouters = StackNavigator({
    tab: {screen: tabRouters}
})

export default AppRouters