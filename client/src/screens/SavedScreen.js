import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { getData, setData } from "../shared/asyncStorage";
import { getContents } from "../api/requests";

const SavedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.center}>
        <Text style={styles.title}> Saved Content </Text>
        <Saved navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const Saved = ({ navigation }) => {
  // TODO: Make request and store IDS
  const SAVED_STORAGE_KEY = "@saved_articles";
  const [articles, setArticles] = useState([]);

  const handleChange = (id) => {
    const { articles } = this.state;
    const filtered = articles.filter((x) => x.id !== id);
    setData(SAVED_STORAGE_KEY, filtered);
    setArticles(filtered);
  };
  const onLoad = async () => {
    const savedIds = JSON.parse(await getData("@saved_article_ids"));
    const token = await getData("@user_token");
    const res = await getContents.get("/", {
      headers: { "x-auth-token": token },
    });

    if (res.status === 200) {
      let filtered = res.data.content.filter((article) =>
        savedIds.includes(article._id)
      );
      setArticles(filtered);
    } else {
      alert("Error getting saved content");
      navigation.goBack();
    }
  };
  useEffect(() => {
    onLoad();
  }, []);
  // render() {
  const articleItems = articles.length
    ? articles.map((article) => {
        return (
          <View style={styles.row}>
            <TouchableOpacity style={styles.article}>
              <Text
                style={{
                  fontSize: 20,
                  margin: 4,
                  fontWeight: "bold",
                }}
              >
                {article.title}
              </Text>
              <View style={styles.row}>
                <Text
                  style={{
                    fontSize: 14,
                    margin: 4,
                  }}
                >
                  By {article.author}
                </Text>
                {/* {article.subjects.map((tag) => (
                  <Text
                    style={{
                      fontSize: 12,
                      borderWidth: 1,
                      borderRadius: 8,
                      paddingLeft: 10,
                      paddingRight: 10,
                      margin: 2,
                    }}
                  >
                    {tag}
                  </Text>
                ))} */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // this.handleChange(article.id), this.setState({ color: "orange" });
                handleChange(article.id);
              }}
              style={{ justifyContent: "center" }}
            >
              <Ionicons name="md-close" size={25} color="#C70000" />
            </TouchableOpacity>
          </View>
        );
      })
    : [];
  return (
    <View style={styles.container}>
      {articleItems.length > 0 ? articleItems : <Text>No Saved Articles</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileLeft: {
    fontSize: 30,
    marginLeft: 10,
  },
  profileRight: {
    fontSize: 30,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    margin: 15,
  },
  center: {
    alignItems: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  article: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 330,
    height: 100,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 4, width: 4 },
    shadowOpacity: 1,
    shadowRadius: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    margin: 15,
  },
});

export default SavedScreen;
