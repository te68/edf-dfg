import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { CustomSvgs } from "../../constants";
// import { CheckBox } from "react-native-elements";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const onSignUp = () => {
    if (!name || !email || !password) alert("Missing information");
    else navigation.navigate("Home");
  };
  const onGoogleSignUp = () => {};
  return (
    <View style={styles.container}>
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
      {/* <CheckBox
        title="I agree with Terms and Conditions"
        onPress={() => setToggleCheckBox(!toggleCheckBox)}
        containerStyle={{ backgroundColor: "white", borderColor: "white" }}
        checked={toggleCheckBox}
      /> */}
      <TouchableOpacity style={styles.signUpBtn} onPress={onSignUp}>
        <Text style={styles.signUpText}>Create Account</Text>
      </TouchableOpacity>
      <Text>Sign Up with</Text>
      <TouchableOpacity onPress={onGoogleSignUp}>
        <SvgXml width="50px" height="50px" xml={CustomSvgs.googleIcon} />
      </TouchableOpacity>
      <Text style={styles.details}>
        Already have an account?{" "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("Login")}
        >
          Sign In
        </Text>
      </Text>
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
