// import React from "react";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

// import SearchScreen from "./src/screens/SearchScreen";
// import LoginScreen from "./src/screens/LoginScreen";
// import SignupScreen from "./src/screens/SignupScreen";
// import FeedScreen from "./src/screens/FeedScreen";
// // import { SafeAreaProvider } from "react-native-safe-area-context";
// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Profile: ProfileScreen,
//     About: AboutScreen,
//     Connect: ConnectScreen,
//     Act: ActScreen,
//     Search: SearchScreen,
//     Login: LoginScreen,
//     Signup: SignupScreen,
//     Feed: FeedScreen,
//   },
//   {
//     initialRouteName: "Login",
//     defaultNavigationOptions: {
//       headerTitle: "Youth4Change",
//     },
//   }
// );

// const AppContainer = createAppContainer(navigator);

// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// // const Tab = createBottomTabNavigator();

// // function MyTabs() {
// //   return (
// //     <Tab.Navigator>
// //       <Tab.Screen name="Home" component={HomeScreen} />
// //       <Tab.Screen name="Settings" component={SettingsScreen} />
// //     </Tab.Navigator>
// //   );
// // }

// const App = () => {
//   return (
//     // <SafeAreaProvider>
//     <AppContainer />
//     // </SafeAreaProvider>
//   );
// };
// export default App;
// import React from "react";
// import { Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Act" component={ActScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;

import * as React from "react";
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
import { Ionicons } from "@expo/vector-icons";
import FeedScreen from "./src/screens/FeedScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AboutScreen from "./src/screens/AboutScreen";
import ConnectScreen from "./src/screens/ConnectScreen";
import ActScreen from "./src/screens/ActScreen";
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate("Details")}
//       />
//     </View>
//   );
//

const HomeStack = createStackNavigator();
function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("About")}>
              <Image style={styles.icon} source={require("./assets/edf.jpg")} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Ionicons style={styles.profile} name="md-person" />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen name="Feed" component={FeedScreen} />
      <HomeStack.Screen name="About" component={AboutScreen} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
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
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
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
