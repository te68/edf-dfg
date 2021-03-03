import React from "react";
import { Text } from "react-native";
import HomeNavigator from "./HomeNavigator";
import LearnNavigator from "./LearnNavigator";
import ConnectNavigator from "./ConnectNavigator";
import ActNavigator from "./ActNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { CustomSvgs } from "../../constants";
const Tab = createBottomTabNavigator();
const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === "Home") {
            return <AntDesign name="home" size={25} color="white" />;
          } else if (route.name === "Learn") {
            return <SvgXml width="25" height="25" xml={CustomSvgs.learnIcon} />;
          } else if (route.name === "Act") {
            return <SvgXml width="25" height="25" xml={CustomSvgs.actIcon} />;
          } else if (route.name === "Connect") {
            return (
              <SvgXml width="25" height="25" xml={CustomSvgs.connectIcon} />
            );
          }
        },
        tabBarLabel: ({ focused, color }) => {
          let label;
          switch (route.name) {
            case "Learn":
              return (label = focused ? (
                <Text style={{ color }}>Learn</Text>
              ) : null);
            case "Act":
              return (label = focused ? (
                <Text style={{ color }}>Act</Text>
              ) : null);
            case "Connect":
              return (label = focused ? (
                <Text style={{ color }}>Connect</Text>
              ) : null);
            case "Home":
              return (label = focused ? (
                <Text style={{ color }}>Home</Text>
              ) : null);
          }
          return label;
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        style: {
          backgroundColor: "#0A4D95",
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Learn" component={LearnNavigator} />
      <Tab.Screen name="Act" component={ActNavigator} />
      <Tab.Screen name="Connect" component={ConnectNavigator} />
    </Tab.Navigator>
  );
};
export default MainNavigator;
