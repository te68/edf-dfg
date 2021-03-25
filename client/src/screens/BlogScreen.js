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
import { getData } from "../shared/asyncStorage";

const BlogScreen = ({ navigation }) => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [blogs, updateBlogs] = useState([]);
  const [displayedBlogs, updateDisplayedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBlogs = async (query = "") => {
    const token = await getData("@user_token");
    const res = await getContents.get("/", {
      params: { category: "blog", searchQuery: query },
      headers: { "x-auth-token": token },
    });

    if (res.status === 200) {
      updateBlogs(res.data.content);
      updateDisplayedBlogs(res.data.content);
    } else {
      //TODO: error handling
      alert("Error getting blogs");
      navigation.goBack();
    }
  };

  const onLoad = async () => {
    setIsLoading(true);
    await getBlogs();
    setIsLoading(false);
  };

  const onChangeSearch = async (text) => {
    getBlogs(text);
    updateSearchQuery(text.toLowerCase());
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <ScrollView>
      <View style={styles.title}>
        <Text style={styles.titleText}>Blogs</Text>
      </View>
      <SearchBar value={searchQuery} handleOnChange={onChangeSearch} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#00AA90" />
      ) : (
        <View>
          {blogs != null ? (
            blogs.map((event) => (
              <EventCard
                key={event._id}
                {...event}
                navigation={navigation}
                color={"#99D5F1"}
              />
            ))
          ) : (
            <Text>No Blogs Found</Text>
          )}
        </View>
      )}
    </ScrollView>
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
