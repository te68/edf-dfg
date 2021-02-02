import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      /> TODO: Checkbox for IOS & Android */}
      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.signUpText}>Create Account</Text>
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
