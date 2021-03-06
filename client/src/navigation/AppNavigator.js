import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { headerStyle, styles } from "../shared/navHelpers";
import ProfileScreen from "../screens/ProfileScreen";
import AboutScreen from "../screens/AboutScreen";
import EventsScreen from "../screens/Events/EventsScreen";
import CareerScreen from "../screens/CareerScreen";
import BlogScreen from "../screens/BlogScreen";
import PodcastScreen from "../screens/PodcastScreen";
import TabNavigator from "./TabNavigator";
import EventPage from "../screens/Events/EventPage";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";

const AppStack = createStackNavigator();
const AppNavigator = ({ navigation }) => {
  return (
    <AppStack.Navigator screenOptions={headerStyle}>
      <AppStack.Screen
        name="Main"
        options={{ headerShown: false }}
        component={TabNavigator}
      />
      <AppStack.Screen
        name="Profile"
        options={{
          title: "",
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={ProfileScreen}
      />
      <AppStack.Screen
        name="About"
        options={{
          title: "",
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={AboutScreen}
      />
      <AppStack.Screen
        name="Events"
        options={{
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
          tabBarOptions: {
            showLabel: false,
          },
        }}
        component={EventsScreen}
      />
      <AppStack.Screen
        name="Podcast"
        options={{
          title: "Podcast",
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={PodcastScreen}
      />
      <AppStack.Screen
        name="Blog"
        options={{
          title: "Blog",
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={BlogScreen}
      />
      <AppStack.Screen
        name="Career"
        options={{
          title: "Career",
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={CareerScreen}
      />
      <AppStack.Screen
        name="EventPage"
        options={{
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={EventPage}
      />
      <AppStack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <AppStack.Screen
        name="Signup"
        options={{ headerShown: false }}
        component={SignupScreen}
      />
    </AppStack.Navigator>
  );
};
export default AppNavigator;
