import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
// import { getData } from "./src/shared/asyncStorage";
// import AuthNavigator from "./src/navigation/auth/AuthNavigator";
import MainNavigator from "./src/navigation/MainNavigator";
// import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
      {/* <AppNavigator /> */}
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
  profileLeft: {
    fontSize: 30,
    marginLeft: 10,
  },
});
