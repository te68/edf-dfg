import React from "react";
import { navToAbout, navToProfile, headerStyle, styles } from "./helpers";
import { AntDesign } from "@expo/vector-icons";
import AboutScreen from "../screens/AboutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ActScreen from "../screens/ActScreen";
import { createStackNavigator } from "@react-navigation/stack";
const ActStack = createStackNavigator();
const ActNavigator = ({ navigation }) => {
  return (
    <ActStack.Navigator screenOptions={headerStyle}>
      <ActStack.Screen
        options={{
          title: "Act",
          headerLeft: navToAbout(navigation),
          headerRight: navToProfile(navigation),
        }}
        name="Act"
        component={ActScreen}
      />
      {/* <ActStack.Screen
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
      <ActStack.Screen
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
    </ActStack.Navigator>
  );
};
export default ActNavigator;
