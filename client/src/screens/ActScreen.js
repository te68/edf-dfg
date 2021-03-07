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
    <View style={styles.container}>
      <Text style={styles.title}> What Can I Do? </Text>
      <Text style={styles.heading}> How to: </Text>
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
                <Entypo name="chevron-right" size={30} color="black" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
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
        margin: 20
    },
    title: {
        justifyContent: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        paddingBottom: 20,
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
        shadowOffset: { height: 4, width: 4 },
        shadowOpacity: 1,
        shadowRadius: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10,
        margin: 15,
    },
    body: {
        fontSize: 22,
        fontWeight: 'bold',
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
