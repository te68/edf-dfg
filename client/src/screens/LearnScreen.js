import React from "react";
import {
  View,
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomButton from "../components/BottomButton";
import axios from "axios";
//import { styles } from "../navigation/helpers";

const pinnedContent = [
  {
    id: "1",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "What a Changing Climate Means for Human Health",
  },
  {
    id: "2",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "What a Changing Climate Means for Human Health",
  },
];

const categories = [
  {
    id: "1",
    title: "Guides and Learning Resources"
  },
  {
    id: "2",
    title: "Corporate Climate Action Updates"
  },
  {
    id: "3",
    title: "Career Resources"
  },
];

const corporateClimate = [
  {
    id: "1",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "Blogs",
  },
  {
    id: "2",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "Podcasts",
  },
];


function Category(props) {
  const content = props.content;

  return (
    <View>
      <Text style={styles.heading}> {props.title} </Text>
      <View style={styles.row}>
        {content.map((content) => (
          <TouchableOpacity
            key={content.id}
            style={{
              flexDirection: "column",
              alignItems: "center",
              width: "50%",
              paddingBottom: 10,
            }}
          >
            <Image style={{ width: 168, height: 111 }} source={content.previewImage} />
            <Text
              style={{
                color: "black",
                fontSize: 14,
                textAlign: "left",
                fontWeight: 'bold',
                padding: 5
                //textShadowColor: "rgba(0, 0, 0, 0.75)",
                //textShadowOffset: { width: -1, height: 1 },
                //textShadowRadius: 10,
              }}
            >
              {content.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>

  );
}

const LearnScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> Learn </Text>
      <Category title="Guides and Learning Resources" content={pinnedContent} />
      <Category title="Corporate Climate Action Updates" content={corporateClimate} />
      <Category title="Career Resources" content={pinnedContent} />
    </ScrollView>
  );
};

LearnScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Image style={styles.icon} source={require("../../assets/edf.jpg")} />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Ionicons style={styles.profile} name="md-person" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  title: {
    textAlign: 'center',
    color: "#00AA91",
    fontSize: 48,
    fontWeight: 'bold',
    padding: 10

  },
  heading: {
    backgroundColor: "#99D5F1",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 10,
    overflow: 'hidden',
    shadowColor: "black",
  },
  row: {
    flexDirection: 'row',
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

export default LearnScreen;
