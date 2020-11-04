/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

//import page
import Home from './App/Home'
import Login from './App/Containers/Login'
import Essay from './App/Containers/Essay'

const AppNavigator = createStackNavigator({
  Home : { screen: Home, navigationOptions: { header: null } },
  Login : { screen: Login, navigationOptions: { header: null } },
  Essay : { screen: Essay, navigationOptions: { title: 'Essay' } }
}, {
  initialRouteName: 'Home',
}
)

export default createAppContainer(AppNavigator);
