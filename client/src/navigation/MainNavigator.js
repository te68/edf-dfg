import React from "react";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { getData } from "../shared/asyncStorage";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./auth/AuthNavigator";

const MainNavigator = () => {
  const [userToken, setUserToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const USER_TOKEN_KEY = "@user_token";
  useEffect(() => {
    const findToken = async () => {
      const token = await getData(USER_TOKEN_KEY || "");
      console.log(USER_TOKEN_KEY, token);
      setUserToken(token);
    };
    setIsLoading(true);
    findToken();
    setIsLoading(false);
  }, [userToken]);
  // TODO Fix login bug where it briefly shows login screen
  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : userToken != '' ? (
        <AppNavigator />
      ) : (
        <AuthNavigator />
      )}
    </>
  );
};
export default MainNavigator;
