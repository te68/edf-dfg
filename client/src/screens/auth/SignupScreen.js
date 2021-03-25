import axios from "axios";
import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { CustomSvgs } from "../../../constants";
import { setData } from "../../shared/asyncStorage";
import { signUp } from "../../api/requests";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSignUp = async () => {
    setIsLoading(true);
    console.log(name, email, password)
    try {
      {/*const res = await signUp.post("/", {
        "name": name,
        "email": email,
        "password": password,
      });*/}

      const body = {
        name: name,
        email: email,
        password: password
      };

      const headers = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axios.post('https://youth-activism-app-server.herokuapp.com/api/users', body, headers)
        .then((res) => { setData("@user_token", res.data.token); })
        .catch((err) => { console.log(err); });

      // const data = res.data;
      // console.log(data);

      //setData("@user_token", res.data.token);
      navigation.navigate("Main", { screen: "Home" });
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  const onGoogleSignUp = () => { };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <>
          <Text style={styles.title}>Create Account</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Name"
              placeholderTextColor="rgba(60, 60, 67, 0.3)"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              placeholderTextColor="rgba(60, 60, 67, 0.3)"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              placeholderTextColor="rgba(60, 60, 67, 0.3)"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity style={styles.signUpBtn} onPress={onSignUp}>
            <Text style={styles.signUpText}>Create Account</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={onGoogleSignUp}>
        <SvgXml width="50px" height="50px" xml={CustomSvgs.googleIcon} />
      </TouchableOpacity> */}
          <Text style={styles.details}>
            Already have an account?{" "}
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("Login")}
            >
              Sign In
            </Text>
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 40,
    marginBottom: 100,
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
  forgot: {
    color: "#3C3C43",
    fontSize: 11,
  },
  signUpBtn: {
    width: "80%",
    backgroundColor: "#007AFF",
    borderRadius: 14,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  signUpText: {
    color: "white",
    fontWeight: "400",
    fontSize: 17,
  },
  linkText: {
    color: "#007AFF",
  },
});

export default SignupScreen;
