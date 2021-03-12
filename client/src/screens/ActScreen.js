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
    { key: 1, title: "Influence a Future Employer" },
    { key: 2, title: "Write a Letter to the Editor" },
    { key: 3, title: "Tell Your Story" },
    { key: 4, title: "Support Petitions" },
    { key: 5, title: "Train With Us" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> What Can I Do? </Text>
      <View style={{ alignItems: 'center' }}>
        {actions.map((action) => (
          <TouchableOpacity style={styles.act}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center'
              }}
            >
              <Text style={styles.body}> {action.title} </Text>
              <Entypo name="chevron-right" size={30} color="#00AA91" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

ActScreen.navigationOptions = ({ navigation }) => {
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
    marginHorizontal: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    paddingVertical: 20,
    color: "#00AA91"
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  act: {
    backgroundColor: "#DAF4FF",
    borderRadius: 10,
    width: 360,
    height: 50,
    shadowColor: 'rgba(0,0,0, .4)',
    //shadowOffset: { height: 4, width: 4 },
    //shadowOpacity: 1,
    //shadowRadius: 1,
    justifyContent: 'center',
    alignContent: 'center',
    //padding: 10,
    margin: 15,
  },
  body: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#00AA91",
    padding: 10
  },
  icon: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10
  },
  profile: {
    fontSize: 30,
    marginRight: 10
  }
});

export default ActScreen;
