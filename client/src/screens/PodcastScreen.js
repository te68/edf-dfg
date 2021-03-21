import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { EventCard } from "./Events/EventsScreen";
import { getContents } from "../api/requests";

const PodcastScreen = ({ navigation }) => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [podcasts, updatePodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPodcasts = async (query = "") => {
    const res = await getContents.get("/", {
      params: { category: "podcast", searchQuery: query },
    });
    // const res = await axios.get(
    //   `https://youth-activism-app-server.herokuapp.com/api/content?searchQuery=${query}&category=podcast`,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "x-auth-token":
    //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA0OTJjZTY5MjQwMDg5N2M1MTlhY2FmIn0sImlhdCI6MTYxNTk1NzkwMiwiZXhwIjoxNjE2Mzg5OTAyfQ.YeJ7nsJG1uMy0chROpY4AolePegJYiGQrWk8AAiVPpY",
    //     },
    //   }
    // );
    if (res.status === 200) {
      updatePodcasts(res.data.content);
    } else {
      //TODO: error handling
      alert("Error getting podcasts");
      navigation.goBack();
    }
  };

  const onLoad = async () => {
    setIsLoading(true);
    await getPodcasts();
    setIsLoading(false);
  };

  const onChangeSearch = async (text) => {
    getPodcasts(text);
    updateSearchQuery(text.toLowerCase());
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.titleText}>Podcast</Text>
        </View>
        <SearchBar value={searchQuery} handleOnChange={onChangeSearch} />
        {isLoading ? (
          <ActivityIndicator size="large" color="#00AA90" />
        ) : (
          <View>
            {podcasts.length ? (
              podcasts.map((event) => (
                <EventCard
                  key={event._id}
                  {...event}
                  navigation={navigation}
                  color={"#99D5F1"}
                />
              ))
            ) : (
              <Text>No Podcasts Found</Text>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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
});
export default PodcastScreen;
