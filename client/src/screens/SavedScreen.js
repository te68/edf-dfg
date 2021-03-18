import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { getData, setData } from "../asyncStorage";

const SavedScreen = ({ navigation }) => {
  let articles = [
    {
      id: 0,
      title: "Questions to Ask Recruiters",
      byline: "EDF",
      tags: ["Resource ", "Job Seeking"],
    },
    {
      id: 1,
      title: "A Feminist Climate Renaissance",
      byline: "Climate One",
      tags: ["Podcast"],
    },
    {
      id: 2,
      title: "Questions to Ask Recruiters",
      byline: "EDF",
      tags: ["Resource ", "Job Seeking"],
    },
    {
      id: 3,
      title: "A Feminist Climate Renaissance",
      byline: "Climate One",
      tags: ["Podcast"],
    },
    {
      id: 4,
      title: "Young People are Turning out for Tomorrow",
      byline: "Climate Reality Project",
      tags: ["Blog"],
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Saved Content </Text>
      <ScrollView contentContainerStyle={styles.center}>
        <Saved />
      </ScrollView>
    </View>
  );
};

// class Saved extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       articles: [
//         {
//           id: 0,
//           title: "0 Questions to Ask Recruiters",
//           byline: "EDF",
//           tags: ["Resource ", "Job Seeking"],
//         },
//         {
//           id: 1,
//           title: "1 A Feminist Climate Renaissance",
//           byline: "Climate One",
//           tags: ["Podcast"],
//         },
//         {
//           id: 2,
//           title: "2 Questions to Ask Recruiters",
//           byline: "EDF",
//           tags: ["Resource ", "Job Seeking"],
//         },
//         {
//           id: 3,
//           title: "3 A Feminist Climate Renaissance",
//           byline: "Climate One",
//           tags: ["Podcast"],
//         },
//         {
//           id: 4,
//           title: "4 Young People are Turning out for Tomorrow",
//           byline: "Climate Reality Project",
//           tags: ["Blog"],
//         },
//       ],
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
const Saved = () => {
  // TODO: Make request and store IDS
  const SAVED_STORAGE_KEY = "@saved_articles";
  const [articles, setArticles] = useState([]);

  const handleChange = (id) => {
    const { articles } = this.state;
    const filtered = articles.filter((x) => x.id !== id);
    setData(SAVED_STORAGE_KEY, filtered);
    setArticles(filtered);
  };

  useEffect(() => {
    setArticles(getData(SAVED_STORAGE_KEY));
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
                {article.subjects.map((tag) => (
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
                ))}
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
