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

const BlogScreen = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [blogs, updateBlogs] = useState([]);
  const [displayedBlogs, updateDisplayedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBlogs = async (searchQuery) => {
    const res = await axios.get(
      `http://localhost:3000/api/content?searchQuery=${searchQuery}category=blog`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA0OTJjZTY5MjQwMDg5N2M1MTlhY2FmIn0sImlhdCI6MTYxNTk1NzkwMiwiZXhwIjoxNjE2Mzg5OTAyfQ.YeJ7nsJG1uMy0chROpY4AolePegJYiGQrWk8AAiVPpY",
        },
      }
    );
    if (res.status === 200) {
      updateBlogs(res.data.events);
      updateDisplayedBlogs(res.data.events);
    } else {
      //TODO: error handling
      alert("Error getting events");
      navigation.goBack();
    }
  };

  const onLoad = async () => {
    setIsLoading(true);
    await getBlogs();
    setIsLoading(false);
  };

  const onChangeSearch = async (text) => {
    if (searchQuery !== "") {
      let newEvents = events.filter((event) =>
        event.title.toLowerCase().includes(text.toLowerCase())
      );
      updateDisplayedEvents(newEvents);
    } else {
      updateDisplayedEvents(events);
    }
    updateSearchQuery(text.toLowerCase());
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.title}>
          <Text style={styles.titleText}>Blogs</Text>
        </View>
        <SearchBar value={searchQuery} handleOnChange={onChangeSearch} />
        {isLoading ? (
          <ActivityIndicator size="large" color="#00AA90" />
        ) : (
          <View>
            {blogs.length
              ? blogs.map((event) => (
                  <EventCard
                    key={event._id}
                    {...event}
                    navigation={navigation}
                    color={"#99D5F1"}
                  />
                ))
              : null}
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
export default BlogScreen;
