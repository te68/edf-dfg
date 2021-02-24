import React from "react";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import FeedScreen from "./src/screens/FeedScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ConnectScreen from "./src/screens/ConnectScreen";
import ActScreen from "./src/screens/ActScreen";
import SavedScreen from "./src/screens/SavedScreen";
import SearchScreen from "./src/screens/SearchScreen";
import { SvgXml } from "react-native-svg";
import { CustomSvgs } from "./constants";
import LearnScreen from "./src/screens/LearnScreen";

const HomeStack = createStackNavigator();
function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Youth4Change",
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#0A4D95",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("About")}>
              <Image style={styles.icon} source={require("./assets/edf.jpg")} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Ionicons style={styles.profile} name="md-person" color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen name="Feed" component={FeedScreen} />
      <HomeStack.Screen name="About" component={AboutScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
      <HomeStack.Screen name="Saved" component={SavedScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
    </HomeStack.Navigator>
  );
}
const LearnStack = createStackNavigator();
function LearnStackScreen() {
  return (
    <LearnStack.Navigator>
      <LearnStack.Screen name="Learn" component={LearnScreen} />
    </LearnStack.Navigator>
  );
}
const ActStack = createStackNavigator();
function ActStackScreen() {
  return (
    <ActStack.Navigator>
      <ActStack.Screen name="Act" component={ActScreen} />
    </ActStack.Navigator>
  );
}

const ConnectStack = createStackNavigator();
function ConnectStackScreen() {
  return (
    <ConnectStack.Navigator>
      <ConnectStack.Screen name="Connect" component={ConnectScreen} />
    </ConnectStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === "Home") {
              return <AntDesign name="home" size={25} color="white" />;
            } else if (route.name === "Learn") {
              return (
                <SvgXml width="25" height="25" xml={CustomSvgs.learnIcon} />
              );
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
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Learn" component={LearnStackScreen} />
        <Tab.Screen name="Act" component={ActStackScreen} />
        <Tab.Screen name="Connect" component={ConnectStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  icon: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginLeft: 10,
  },
  profile: {
    fontSize: 30,
    marginRight: 10,
  },
});
