import React from "react";
import { navToAbout, navToProfile, headerStyle, styles } from "./helpers";
import { AntDesign } from "@expo/vector-icons";
import AboutScreen from "../screens/AboutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConnectScreen from "../screens/ConnectScreen";
import EventsScreen from "../screens/Events/EventsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import EventPage from "../screens/Events/EventPage";
const ConnectStack = createStackNavigator();
const ConnectNavgiator = ({ navigation }) => {
  return (
    <ConnectStack.Navigator screenOptions={headerStyle}>
      <ConnectStack.Screen
        name="Connect"
        options={{
          title: "Connect",
          headerLeft: navToAbout(navigation),
          headerRight: navToProfile(navigation),
        }}
        component={ConnectScreen}
      />
      <ConnectStack.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
          tabBarOptions: {
            showLabel: false,
          },
        }}
        component={ProfileScreen}
      />
      <ConnectStack.Screen
        name="Events"
        options={{
          title: "Events",
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
      <ConnectStack.Screen
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
      <ConnectStack.Screen
        name="EventPage"
        options={{
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={EventPage}
      />
    </ConnectStack.Navigator>
  );
};

export default ConnectNavgiator;
