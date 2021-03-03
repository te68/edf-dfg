import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
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
    { key: 0, title: "Podcasts", notifications: 3, color: "#C5DB65" },
    { key: 1, title: "Blogs", notifications: 3 },
    { key: 2, title: "Careers", notifications: 3, color: "#6EC6B3" },
    { key: 3, title: "Events", notifications: 2, color: "#88C5E6" },
  ]

  //buttons.sort(function (a, b) { return a.notifications < b.notifications })

  return (
    <View style={{ marginTop: 30, paddingBottom: 20 }}>
      <Text style={styles.heading}> Feature Content </Text>
      <View style={{ alignItems: 'center', padding: 10 }} >
        <TouchableOpacity>
          <Image
            source={require("../../assets/host-meet-up.png")} style={{ width: "100%" }}
            style={{
              alignItems: 'center',
              width: 380,
              height: 135 * 380 / 298
            }}
          />
        </TouchableOpacity>

      </View>

      <Text style={styles.heading}> Categories </Text>
      <View style={styles.row}>
        {buttons.map((b) => (
          <Button
            title={b.title}
            notifications={b.notifications}
            color={b.color}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.savedStyle}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={styles.textStyle}>Search All </Text>
        <FontAwesome style={styles.arrowStyle} name="search" />
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState("");
  const [switchValue, setSwitchValue] = useState(true);

  const toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    setSwitchValue(value);
    //state changes according to switch
    //which will result in re-render the text
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          height: "5%",
        }}
      >
        <View
          style={{
            paddingLeft: "10%",
            paddingTop: 5,
            width: "90%",
            alignItems: "center",
          }}
        >
          <Switch
            value={switchValue}
            onValueChange={(val) => toggleSwitch(val)}
            disabled={false}
            activeText={"Categories"}
            inActiveText={"   Feed   "}
            backgroundActive={"#0A4D95"}
            backgroundInactive={"#0A4D95"}
            circleActiveColor={"white"}
            circleInActiveColor={"white"}
            changeValueImmediately={true}
            circleSize={30}
            switchWidthMultiplier={4}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Saved")}>
          <MaterialIcons name="bookmark-border" size={40} color="black" />
        </TouchableOpacity>
      </View>
      {switchValue ? (
        <Categories navigation={navigation} />
      ) : (
        <FeedScreen navigation={navigation} />
      )}
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
        <Text
          style={{
            fontSize: 10,
            textAlign: "center",
          }}
        >
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
    paddingVertical: 5,
  },
  button: {
    borderRadius: 15,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
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
