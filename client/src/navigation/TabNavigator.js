import React from "react";
import { Text } from "react-native";
import HomeNavigator from "./HomeNavigator";
import LearnNavigator from "./LearnNavigator";
import ConnectNavigator from "./ConnectNavigator";
import ActNavigator from "./ActNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { CustomSvgs } from "../../constants";

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let label;
          if (route.name === "Home") {
            return (
              <AntDesign
                name="home"
                size={(label = focused ? 26 : 25)}
                color="white"
              />
            );
          } else if (route.name === "Learn") {
            return (
              <SvgXml
                width={(label = focused ? "26" : "25")}
                height={(label = focused ? "26" : "25")}
                xml={CustomSvgs.learnIcon}
              />
            );
          } else if (route.name === "Connect") {
            return (
              <SvgXml
                width={(label = focused ? "26" : "25")}
                height={(label = focused ? "26" : "25")}
                xml={CustomSvgs.connectIcon}
              />
            );
          } else if (route.name === "Act") {
            return (
              <SvgXml
                width={(label = focused ? "26" : "25")}
                height={(label = focused ? "26" : "25")}
                xml={CustomSvgs.actIcon}
              />
            );
          }
        },
        tabBarLabel: ({ focused, color }) => {
          let label;
          switch (route.name) {
            case "Learn":
              return (
                <Text
                  style={{
                    color: color,
                    fontWeight: (label = focused ? "bold" : "normal"),
                    fontSize: (label = focused ? 15 : 14),
                  }}
                >
                  Learn
                </Text>
              );
            case "Act":
              return (
                <Text
                  style={{
                    color: color,
                    fontWeight: (label = focused ? "bold" : "normal"),
                    fontSize: (label = focused ? 15 : 14),
                  }}
                >
                  Act
                </Text>
              );
            case "Connect":
              return (
                <Text
                  style={{
                    color: color,
                    fontWeight: (label = focused ? "bold" : "normal"),
                    fontSize: (label = focused ? 15 : 14),
                  }}
                >
                  Connect
                </Text>
              );
            case "Home":
              return (
                <Text
                  style={{
                    color: color,
                    fontWeight: (label = focused ? "bold" : "normal"),
                    fontSize: (label = focused ? 15 : 14),
                  }}
                >
                  Home
                </Text>
              );
          }
          return label;
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "white",
        style: {
          backgroundColor: "#0A4D95",
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Learn" component={LearnNavigator} />
      <Tab.Screen name="Connect" component={ConnectNavigator} />
      <Tab.Screen name="Act" component={ActNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
