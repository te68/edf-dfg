import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import BottomButton from "../components/BottomButton";
import { getData } from "../asyncStorage";
import axios from "axios";
import { EventCard } from "./Events/EventsScreen";
import moment from "moment";
const ConnectScreen = ({ navigation }) => {
  const [events, updateEvents] = useState([]);
  const [myEventIds, updateMyEventIds] = useState([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState(false);
  const getEvents = async () => {
    const res = await axios.get("http://localhost:3000/api/event", {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA0OTJjZTY5MjQwMDg5N2M1MTlhY2FmIn0sImlhdCI6MTYxNTk1NzkwMiwiZXhwIjoxNjE2Mzg5OTAyfQ.YeJ7nsJG1uMy0chROpY4AolePegJYiGQrWk8AAiVPpY",
      },
    });
    if (res.status === 200) {
      updateEvents(res.data.events);
    } else {
      //TODO: error handling
      alert("Error getting events");
      navigation.goBack();
    }
  };
  const getMyEventIds = async () => {
    const ids = await getData("@my_events");
    updateMyEventIds(ids || []);
  };
  const onLoad = async () => {
    setIsLoadingEvents(true);
    await getEvents();
    await getMyEventIds();
    setIsLoadingEvents(false);
  };
  useEffect(() => {
    onLoad();
  }, []);

  const displayedEvents = events
    .filter((event) => event.id in myEventIds)
    .concat(
      events
        .filter((event) =>
          moment(event.date).isSameOrAfter(moment() && !event.id in myEventIds)
        )
        .sort((event1, event2) => moment(event2.date).diff(moment(event1.date)))
    ); // Latest date first;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.titleText}>Connect</Text>
        </View>
        <View style={styles.scroll}>
          <Text style={styles.sectionTitle}>Climate Corps ®</Text>
          <View
            style={[
              styles.row,
              {
                borderBottomColor: "black",
                borderBottomWidth: 1,
              },
            ]}
          >
            <Image
              source={require("../../assets/climate-corps.png")}
              style={styles.photo}
            />
            <View style={styles.container}>
              <Text style={styles.details}>
                Join an innovative fellowship program that trains and pairs
                graduate students with companies, public institutions and cities
                determined to meet their climate and energy goals.
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ margin: 5, fontSize: 12, fontWeight: "bold" }}>
                    {" "}
                    Learn More{" "}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ margin: 5, fontSize: 12, fontWeight: "bold" }}>
                    {" "}
                    Apply{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Defend Our Future</Text>
          <View
            style={[
              styles.row,
              {
                borderBottomColor: "black",
                borderBottomWidth: 1,
              },
            ]}
          >
            <Image
              source={require("../../assets/DOF.png")}
              style={styles.photo}
            />
            <View style={styles.container}>
              <Text style={styles.details}>
                Defend Our Future is dedicated to empowering young people of all
                political persuasions who are interested in advancing climate
                change solutions that grow our economy and protect the world for
                future generations.
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ margin: 5, fontSize: 12, fontWeight: "bold" }}>
                    {" "}
                    Learn More{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Degrees Podcast</Text>
          <View
            style={[
              styles.row,
              {
                borderBottomColor: "black",
                borderBottomWidth: 1,
              },
            ]}
          >
            <Image
              source={require("../../assets/degrees-podcast.png")}
              style={styles.photo}
            />
            <View style={styles.container}>
              <Text style={styles.details}>
                Host Yesh Pavlik Slenk talks with everyone from storytellers to
                songwriters, city leaders to sustainability gurus about their
                paths to solving the world’s biggest problems. Our guests share
                how they got where they are, so others (like you) can follow in
                their footsteps and join their changemaker ranks.
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ margin: 5, fontSize: 12, fontWeight: "bold" }}>
                    {" "}
                    Learn More{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          {isLoadingEvents ? (
            <ActivityIndicator />
          ) : (
            <View>
              {events.length ? (
                events.map((event) => (
                  <EventCard
                    key={event._id}
                    {...event}
                    navigation={navigation}
                    color={event.id in myEventIds ? "#99D5F1" : "#A4EEC1"}
                  />
                ))
              ) : (
                <Text>No Upcoming Events</Text>
              )}
            </View>
          )}
          <View style={styles.search}>
            <TouchableOpacity style={styles.search}>
              <FontAwesome
                style={{ marginHorizontal: 5, fontSize: 18 }}
                name="search"
              />
              <Text
                style={{
                  textDecorationLine: "underline",
                  fontSize: 18,
                }}
                onPress={() => navigation.navigate("Events")}
              >
                Events{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    marginVertical: 30,
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
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
  sectionTitle: {
    fontSize: 30,
    fontWeight: "700",
    paddingHorizontal: 20,
    paddingBottom: 20,
    color: "#00AA91",
  },
  details: {
    fontSize: 13,
    fontWeight: "400",
    marginLeft: 15,
    flexShrink: 1,
  },
  photo: {
    borderRadius: 5,
    width: 130,
    height: 130,
    marginBottom: 30,
  },
  button: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "white",
    margin: 5,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 4, width: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 20,
    fontSize: 18,
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

export default ConnectScreen;
