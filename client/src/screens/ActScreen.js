import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

const ActScreen = ({ navigation }) => {
  const actions = [
    { key: 0, title: "Influence Your Employer" },
    { key: 1, title: "Write a Letter to the Editor" },
    { key: 2, title: "Tell Your Story" },
    { key: 3, title: "Train With Us" },
    { key: 4, title: "Join Our Team" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>What Can I Do?</Text>
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View>
          {actions.map((action) => (
            <TouchableOpacity style={styles.act}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.body}> {action.title} </Text>
                <Entypo name="chevron-right" size={30} color="#00AA91" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
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
    fontSize: 25,
    fontWeight: "bold",
  },
  act: {
    backgroundColor: "#DAF4FF",
    borderRadius: 10,
    width: 360,
    height: 50,
    shadowColor: "rgba(0,0,0, .4)",
    //shadowOffset: { height: 4, width: 4 },
    //shadowOpacity: 1,
    //shadowRadius: 1,
    justifyContent: "center",
    alignContent: "center",
    //padding: 10,
    margin: 15,
  },
  body: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00AA91",
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

export default ActScreen;
