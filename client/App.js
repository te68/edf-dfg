import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ConnectScreen from "./src/screens/ConnectScreen";
import ActScreen from "./src/screens/ActScreen";
import SearchScreen from "./src/screens/SearchScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SavedScreen from "./src/screens/SavedScreen"; 

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    About: AboutScreen,
    Connect: ConnectScreen,
    Act: ActScreen,
    Search: SearchScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
    Saved: SavedScreen, 
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerTitle: "Youth4Change",
    },
  }
);

export default createAppContainer(navigator);
