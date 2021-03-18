import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LearnScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}> Learn </Text>
      </View>

      <View style={{ margin: 20 }}>
        <Text style={styles.heading}> Guides and Learning Resources </Text>
        <Text style={styles.heading}> Corporate Climate Action Updates </Text>
        <Text style={styles.heading}> Career Resources </Text>
      </View>
    </View>
  );
};

LearnScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Image style={styles.icon} source={require("../../assets/edf.jpg")} />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Ionicons style={styles.profile} name="md-person" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    backgroundColor: "#00AA90",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    padding: 10,
  },

  heading: {
    backgroundColor: "#99D5F1",
    fontSize: 18,
    fontWeight: "bold",
    width: "100%",
    borderRadius: 15,
    padding: 5,
    //marginHorizontal: 15,
    marginVertical: 10,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
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

export default LearnScreen;
