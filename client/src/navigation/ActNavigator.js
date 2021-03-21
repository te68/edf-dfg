import React from "react";
import { navToAbout, navToProfile, headerStyle } from "../shared/navHelpers";
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
    </ActStack.Navigator>
  );
};
export default ActNavigator;
