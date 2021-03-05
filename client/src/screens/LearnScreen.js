import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomButton from "../components/BottomButton";

const LearnScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Learn </Text>
      <Text style={styles.heading}> Guides and Learning Resources </Text>
      <Text style={styles.heading}> Corporate Climate Action Updates </Text>
      <Text style={styles.heading}> Career Resources </Text>
      {/* <BottomButton navigation={navigation} /> */}
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
    margin: 20,
  },
  title: {
    color: "#00AA91",
    fontSize: 48,

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
    overflow: 'hidden'
  },
  row: {
    flexDirection: 'row',
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
