import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/auth/LoginScreen";
import SignupScreen from "../../screens/auth/SignupScreen";
const AuthStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <AuthStack.Screen
        name="Signup"
        options={{ headerShown: false }}
        component={SignupScreen}
      />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
