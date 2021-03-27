import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { NavigationActions } from "react-navigation";
import { CustomSvgs } from "../../../constants";
import { login } from "../../api/requests";
import { setData } from "../../shared/asyncStorage";

// import axios from "axios";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onLogin = async () => {
    // if (!email || !password) alert("Enter email or password");
    setIsLoading(true);
    await login
      .post("/", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data.token);
        setData("@user_token", res.data.token);
        console.log("data set");
        navigation.navigate("Main", { screen: "Home" });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Incorrect email or password");
        setIsLoading(false);
      });
    // else navigation.navigate("Home");
  };
  const onGoogleLogin = () => {};
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome to Youth4Change</Text>
            <Text style={styles.subText}>Welcome Back!</Text>
            <Text style={styles.subText}>Sign In to Continue</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email..."
              placeholderTextColor="rgba(60, 60, 67, 0.3)"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.passwordView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password..."
              placeholderTextColor="rgba(60, 60, 67, 0.3)"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Text
              style={styles.passwordLink}
              onPress={() => console.log("TODO: Password Page")}
            >
              Forgot Password?
            </Text>
          </View>
          <TouchableOpacity style={styles.signInBtn} onPress={onLogin}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
          {/* <Text>Login with</Text>

      <TouchableOpacity onPress={onGoogleLogin}>
        <SvgXml width="50px" height="50px" xml={CustomSvgs.googleIcon} />
      </TouchableOpacity> */}
          <Text style={styles.details}>
            Don't have an account?{" "}
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("Signup")}
            >
              Create Account
            </Text>
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: 100,
  },
  linkText: {
    color: "#007AFF",
  },
  title: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 40,
    marginBottom: 10,
  },
  subText: {
    textAlign: "center",
    fontSize: 14,
    color: "rgba(60, 60, 67, 0.6)",
  },
  details: {
    fontSize: 20,
    color: "rgba(60, 60, 67, 0.6)",
  },
  inputView: {
    width: "90%",
    borderBottomColor: "rgba(60, 60, 67, 0.3)",
    borderBottomWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
  },
  inputText: {
    fontSize: 17,
    color: "#3C3C43",
  },
  passwordView: {
    width: "90%",
    borderBottomColor: "rgba(60, 60, 67, 0.3)",
    borderBottomWidth: 1,
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  passwordLink: {
    textAlign: "right",
    color: "#007AFF",
  },
  forgot: {
    color: "black",
    fontSize: 11,
  },
  signInBtn: {
    width: "80%",
    backgroundColor: "#007AFF",
    borderRadius: 14,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  signInText: {
    color: "white",
    fontWeight: "400",
    fontSize: 17,
  },
});

export default LoginScreen;
