import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export const headerStyle = {
  headerTitleStyle: {
    color: "white",
    fontWeight: "bold",
  },
  headerStyle: {
    backgroundColor: "#0A4D95",
  },
};
export const navToAbout = (navigation) => {
  return () => (
    <TouchableOpacity onPress={() => navigation.navigate("About")}>
      <Image style={styles.icon} source={require("../../assets/edf.png")} />
    </TouchableOpacity>
  );
};
export const navToProfile = (navigation) => {
  return () => (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Ionicons style={styles.profile} name="md-person" color="white" />
    </TouchableOpacity>
  );
};
export const styles = StyleSheet.create({
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
