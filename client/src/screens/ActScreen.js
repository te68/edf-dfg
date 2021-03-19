import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
// TODO: links for
const ActScreen = ({ navigation }) => {
  const actions = [
    { key: 0, title: "Influence Your Employer" },
    { key: 1, title: "Influence a Future Employer" },
    { key: 2, title: "Write a Letter to the Editor" },
    { key: 3, title: "Tell Your Story" },
    { key: 4, title: "Support Petitions" },
  ];
  const [showDesc, updateShowDesc] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>What Can I Do?</Text>
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View>
          {actions.map((action) => (
            <TouchableOpacity key={action.key} style={styles.act}>
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
          <TouchableOpacity
            style={styles.act}
            onPress={() => updateShowDesc(!showDesc)}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.body}> Train With Us </Text>
              <Entypo name="chevron-right" size={30} color="#00AA91" />
            </View>
          </TouchableOpacity>

          {showDesc ? (
            <View
              style={{
                paddingTop: 5,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <Text>
                If you want to engage with our experts and learn more about the
                guides and resources to wield your influence for corporate
                climate action, connect with us. Look out for the upcoming
                opportunities here:
              </Text>
            </View>
          ) : null}
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
