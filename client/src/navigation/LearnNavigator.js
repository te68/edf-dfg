import React from "react";
import {
  navToAbout,
  navToProfile,
  navToHome,
  headerStyle,
  styles,
} from "./helpers";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import AboutScreen from "../screens/AboutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LearnScreen from "../screens/LearnScreen";
import { createStackNavigator } from "@react-navigation/stack";
const LearnStack = createStackNavigator();
const LearnNavigator = ({ navigation }) => {
  return (
    <LearnStack.Navigator screenOptions={headerStyle}>
      <LearnStack.Screen
        options={{
          title: "Learn",
          headerLeft: navToAbout(navigation),
          headerRight: navToProfile(navigation),
        }}
        name="Learn"
        component={LearnScreen}
      />
      {/* <LearnStack.Screen
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
      /> */}

      {/* <LearnStack.Screen
        name="About"
        options={{
          title: "About",
          headerBackImage: () => (
            <AntDesign style={styles.profileLeft} name="back" color="white" />
          ),
          headerBackTitleVisible: false,
        }}
        component={AboutScreen}
      /> */}
    </LearnStack.Navigator>
  );
};
export default LearnNavigator;
