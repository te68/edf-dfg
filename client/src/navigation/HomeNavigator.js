import React from "react";
import { navToAbout, navToProfile, headerStyle, styles } from "./helpers";
import HomeScreen from "../screens/HomeScreen";
import SavedScreen from "../screens/SavedScreen";
import SearchScreen from "../screens/SearchScreen";
import AboutScreen from "../screens/AboutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import PodcastScreen from "../screens/PodcastScreen";
import BlogScreen from "../screens/BlogScreen";
import CareerScreen from "../screens/CareerScreen";
const HomeStack = createStackNavigator();
const HomeNavigator = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={headerStyle}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "GenClimate",
          headerLeft: navToAbout(navigation),
          headerRight: navToProfile(navigation),
        }}
      />

      <HomeStack.Screen
        name="About"
        options={{
          title: "About",
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={AboutScreen}
      />

      <HomeStack.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={ProfileScreen}
      />

      <HomeStack.Screen
        name="Saved"
        options={{
          title: "Saved",
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={SavedScreen}
      />
      <HomeStack.Screen
        name="Search"
        options={{
          title: "Search",
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={SearchScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
