import React from "react";
import {
  navToAbout,
  navToProfile,
  headerStyle,
  styles,
} from "../shared/navHelpers";
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
    </ConnectStack.Navigator>
  );
};

export default ConnectNavgiator;
