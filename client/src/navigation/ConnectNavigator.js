import React from "react";
import { navToAbout, navToProfile, headerStyle, styles } from "./helpers";
import { AntDesign } from "@expo/vector-icons";
import AboutScreen from "../screens/AboutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ConnectScreen from "../screens/ConnectScreen";
import { createStackNavigator } from "@react-navigation/stack";
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
    </ConnectStack.Navigator>
  );
};

export default ConnectNavgiator;
