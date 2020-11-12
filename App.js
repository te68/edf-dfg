import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AboutScreen from './src/screens/AboutScreen';
import ConnectScreen from './src/screens/ConnectScreen';
import ActScreen from './src/screens/ActScreen';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
  About: AboutScreen,
  Connect: ConnectScreen,
  Act: ActScreen,
  Search: SearchScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Youth4Change'
  }
})

export default createAppContainer(navigator);
