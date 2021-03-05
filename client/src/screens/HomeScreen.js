import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  // Switch,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
// import SwitchSelector from "react-native-switch-selector";
import { Switch } from "react-native-switch";

import FeedScreen from "./FeedScreen";
const Categories = ({ navigation }) => {
  let buttons = [
    { key: 0, title: "Podcasts", notifications: 3, color: "#C5DB65", icon: 'mic' },
    { key: 1, title: "Blogs", notifications: 3 },
    { key: 2, title: "Careers", notifications: 3, color: "#6EC6B3" },
    { key: 3, title: "Events", notifications: 2, color: "#88C5E6" },
  ]

  //buttons.sort(function (a, b) { return a.notifications < b.notifications })

  return (
    <SafeAreaView>
      <ScrollView style={{ marginHorizontal: 15, paddingTop: 0 }}>
        <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => navigation.navigate("Saved")}>
          <MaterialIcons name="bookmark-border" size={40} color="black" />
        </TouchableOpacity>
        <Text style={[styles.heading, { marginTop: 0 }]}> Featured Content </Text>
        <View style={{ alignItems: 'center', padding: 10 }} >
          <TouchableOpacity>
            <Image
              source={require("../../assets/host-meet-up.png")} style={{ width: "100%" }}
              style={{
                alignItems: 'center',
                width: 298 * 1.2,
                height: 135 * 1.2
              }}
            />
          </TouchableOpacity>

        </View>

        <Text style={styles.heading}> Categories </Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: "#C5DB65",
              },
            ]}
          >
            <MaterialIcons name='mic' size={40}></MaterialIcons>
            <Text style={styles.buttonText}>
              Podcast
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#00AAEB", }]}
          >
            <MaterialIcons name='book' size={40}></MaterialIcons>
            <Text style={styles.buttonText}>
              Blogs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#6EC6B3", }]}
          >
            <MaterialIcons name='assignment' size={40}></MaterialIcons>
            <Text style={styles.buttonText}>
              Careers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#88C5E6", }]}
          >
            <MaterialIcons name='event' size={40}></MaterialIcons>
            <Text style={styles.buttonText}>
              Events
            </Text>
          </TouchableOpacity>
          {/*{buttons.map((b) => (
            <Button
              title={b.title}
              notifications={b.notifications}
              color={b.color}
            />
          ))}*/}
        </View>
        <Text style={styles.heading}> Your Feed </Text>
        <FeedScreen navigation={navigation} />
      </ScrollView>
    </SafeAreaView >
  );
};

const HomeScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState("");
  const [switchValue, setSwitchValue] = useState(true);

  //const toggleSwitch = (value) => {
  //onValueChange of the switch this function will be called
  //setSwitchValue(value);
  //state changes according to switch
  //which will result in re-render the text
  //};
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingLeft: "10%",
          width: "90%",
          alignItems: "center",
        }}
      >
      </View>

      <Categories navigation={navigation} />

    </View>
  );
};

function Button(props) {
  const maxThreeNotifs = Math.min(props.notifications, 3);

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: props.color == null ? "#1B8AE6" : props.color,
          },
        ]}
      >
        <MaterialIcons name={props.icon}></MaterialIcons>
        <Text style={styles.buttonText}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#00AA91",
    marginLeft: "3%",
    paddingTop: 8,
    paddingBottom: 2,
  },
  button: {
    borderRadius: 15,
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    fontSize: 12,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
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
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  arrowStyle: {
    fontSize: 18,
  },
  searchStyle: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 75,
    right: 10,
  },
  savedStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 10,
  },
});

export default HomeScreen;
