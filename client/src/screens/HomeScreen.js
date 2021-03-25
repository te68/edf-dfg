import React, { useState, useEffect } from "react";
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
import axios from "axios";

import FeedScreen from "./FeedScreen";
import FlatListSlider from "../components/FlatListSlider/FlatListSlider";
import Card from "../components/FlatListSlider/Card";
import { getData } from "../shared/asyncStorage";
import { getContents } from "../api/requests";
const Categories = ({ navigation }) => {
  const [featuredContent, setFeaturedContent] = useState([]);
  const getFeaturedContent = async () => {
    const token = await getData("@user_token");
    const res = await getContents.get("/", {
      headers: { "x-auth-token": token },
    });
    if (res.status === 200) {
      let featured = res.data.content
        .filter((cont) => cont.featured)
        .map((cont) => ({
          image: "../../assets/host-meet-up.png",
          desc: cont.preview,
        }));

      console.log(featured);
      setFeaturedContent(featured);
    } else {
      alert("Error getting featured content");
      navigation.goBack();
    }
  };
  useEffect(() => {
    getFeaturedContent();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView style={{ marginHorizontal: 15 }}>
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <Text style={styles.heading}> Featured Content </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Saved")}>
            <MaterialIcons name="bookmark" size={40} color="#F9C147" />
          </TouchableOpacity>
        </View>
        {featuredContent.length ? (
          <FlatListSlider
            data={featuredContent}
            width={275}
            timer={4000}
            component={<Card />}
            onPress={(item) => alert(JSON.stringify(item))}
            indicatorActiveWidth={40}
            contentContainerStyle={styles.contentStyle}
          />
        ) : null}
        {/* <View style={{ alignItems: "center", padding: 10 }}>
          <TouchableOpacity>
            <Image
              source={require("../../assets/host-meet-up.png")}
              style={{ width: "100%" }}
              style={{
                alignItems: "center",
                width: 298 * 1.2,
                height: 135 * 1.2,
              }}
            />
          </TouchableOpacity>
        </View> */}

        <Text style={styles.heading}> Categories </Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: "#C5DB65",
              },
            ]}
            onPress={() => navigation.navigate("Podcast")}
          >
            <MaterialIcons name="mic" size={40}></MaterialIcons>
            <Text style={styles.buttonText}>Podcast</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#00AAEB" }]}
            onPress={() => navigation.navigate("Blog")}
          >
            <MaterialIcons name="book" size={40}></MaterialIcons>
            <Text style={styles.buttonText}>Blogs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#6EC6B3" }]}
            onPress={() => navigation.navigate("Career")}
          >
            <MaterialIcons name="assignment" size={40}></MaterialIcons>
            <Text style={styles.buttonText}>Careers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#88C5E6" }]}
            onPress={() => navigation.navigate("Events")}
          >
            <MaterialIcons name="event" size={40}></MaterialIcons>
            <Text style={styles.buttonText}>Events</Text>
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
    </SafeAreaView>
  );
};

const HomeScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState("");
  //const [switchValue, setSwitchValue] = useState(true);
  const [content, updateContent] = useState([]);
  const [displayedContent, updateDisplayedContent] = useState([]);
  const [savedContentIds, updateSavedContentIds] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getContent = async () => {
    const res = await axios.get(
      "https://youth-activism-app-server.herokuapp.com/api/content",
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA1YTY3NzNlMjhkMjQ1MTZjNmM1NWY3In0sImlhdCI6MTYxNjUzNzQ1OSwiZXhwIjoxNjE2ODk3NDU5fQ.D5jsx1pUdGXT5oq4c3njTyfifuxwQOpg0 - f2dBA0v_8",
        },
      }
    );
    if (res.status === 200) {
      updateContent(res.data.content);
      updateDisplayedContent(res.data.content);
    } else {
      alert("Error getting content");
      navigation.goBack();
    }
  };

  const getSavedContentIds = async () => {
    const ids = await getData("@my_events");
    updateSavedContentIds(ids || []);
  };

  const onLoad = async () => {
    setIsLoading(true);
    // await getEvents();
    // await getMyEventIds();
    setIsLoading(false);
  };

  useEffect(() => {
    onLoad();
  }, []);

  const mySavedContents = displayedContent.filter(
    (content) => content.id in myEventIds
  );

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
      ></View>

      <Categories navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00AA91",
    marginLeft: "3%",
    paddingTop: 15,
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
  contentStyle: {
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
