import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../shared/asyncStorage";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./auth/AuthNavigator";

const MainNavigator = () => {
  const [userToken, setUserToken] = useState("");
  const USER_TOKEN_KEY = "@user_token";
  useEffect(() => {
    const findToken = async () => {
      const token = await getData(USER_TOKEN_KEY || "");
      console.log(USER_TOKEN_KEY, token);
      setUserToken(token);
    };
    findToken();
  }, [userToken]);
  return userToken ? <AppNavigator /> : <AuthNavigator />;
};
export default MainNavigator;
