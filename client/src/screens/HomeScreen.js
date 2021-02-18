import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";

import FeedScreen from "./FeedScreen";
const Categories = ({ navigation }) => {
  return (
    <View>
      <View style={styles.row}>
        <Button title="Articles" notifications={2} />
        <Button title="Podcasts" notifications={3} color="#6EC6B3" />
        <Button title="Blogs" notifications={1} color="#C5DB65" />
        <Button title="Career Advice" notifications={2} color="#F7F6F1" />
        <Button title="Videos" notifications={1} />
        <Button title="Events" notifications={3} color="#6EC6B3" />
        <Button title="Authenticity Meter" notifications={3} color="#C5DB65" />
        <Button title="Guides" notifications={3} color="#F7F6F1" />
        <Button title="Resources" notifications={1} />
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
  const [switchValue, setSwitchValue] = useState(false);

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
          justifyContent: "space-between",
          flexDirection: "row",
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Switch
          style={{ justifyContent: "center" }}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Saved")}>
          <MaterialIcons name="bookmark-border" size={40} color="black" />
          {/* <Text style={styles.textStyle}>Saved </Text>
          <FontAwesome style={styles.arrowStyle} name="search" /> */}
        </TouchableOpacity>
      </View>
      {switchValue ? (
        <FeedScreen navigation={navigation} />
      ) : (
        <Categories navigation={navigation} />
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
            borderRadius: 25 + maxThreeNotifs * 20,
            width: 50 + maxThreeNotifs * 40,
            height: 50 + maxThreeNotifs * 40,
          },
        ]}
      >
        <Text
          style={{
            fontSize: Math.max(17, 10 * maxThreeNotifs),
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
  button: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 4, width: 4 },
    shadowOpacity: 1,
    shadowRadius: 1,
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
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 10,
  },
});

export default HomeScreen;
