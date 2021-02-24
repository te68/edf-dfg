import React from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ConnectScreen from "./src/screens/ConnectScreen";
import ActScreen from "./src/screens/ActScreen";
import SavedScreen from "./src/screens/SavedScreen";
import LearnScreen from "./src/screens/LearnScreen";
import SearchScreen from "./src/screens/SearchScreen";
import MainNavigator from "./src/navigation/MainNavigator";
// TODO: Fix stacks for About & Profile on each page

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  icon: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 10,
  },
  profile: {
    fontSize: 30,
    marginRight: 10,
  },
  profileLeft: {
    fontSize: 30,
    marginLeft: 10,
  },
});
