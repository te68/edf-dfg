import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  Fontisto,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import BottomButton from "../components/BottomButton";
import { SvgXml } from "react-native-svg";
import { ScrollView } from "react-native-gesture-handler";
import { CustomSvgs } from "../../constants";
// import SaveIcon from "../../assets/save-icon.svg";
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
const generalFeed = [
  {
    id: "1",
    title: "Questions to ask recruiters",
    author: "EDF",
    subjects: ["Resources", "Job Seeking"],
    previewText: "previewtextpreviewtextpreviewtext",
    previewImage: require("../../assets/articleImage.png"),
  },
  {
    id: "2",
    title: "Questions to ask recruiters",
    author: "EDF",
    subjects: ["Resources", "Job Seeking"],
    previewText: "previewtextpreviewtextpreviewtext",
    previewImage: require("../../assets/articleImage.png"),
  },
  {
    id: "3",
    title: "Questions to ask recruiters",
    author: "EDF",
    subjects: ["Resources", "Job Seeking"],
    previewText: "previewtextpreviewtextpreviewtext",
    previewImage: require("../../assets/articleImage.png"),
  },
];
const ArticleCard = ({ title, author, previewText, previewImage }) => {
  return (
    <TouchableOpacity style={styles.articleCard}>
      <View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>{title}</Text>
          <Text style={{ fontSize: 14 }}>By {author}</Text>
          <Text style={{ fontSize: 12 }}>{previewText}</Text>
          <Image source={previewImage} width="100" height="100" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>20</Text>
            <Feather name="thumbs-up" size={15} color="black" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>2</Text>
            <SvgXml width="17" height="15" xml={CustomSvgs.clappingIcon} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>4</Text>
            <Feather name="thumbs-down" size={15} color="black" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>0</Text>
            <Fontisto name="mad" size={15} color="black" />
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const ArticleButtons = () => (
  <View
    style={{
      flexDirection: "row",
    }}
  >
    <TouchableOpacity
      style={{ flexDirection: "row", padding: 5, alignItems: "center" }}
    >
      <Feather name="thumbs-up" size={15} color="black" />
      <Text style={{ paddingLeft: 2 }}>Like</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ flexDirection: "row", padding: 5, alignItems: "center" }}
    >
      <SvgXml width="20" height="20" xml={CustomSvgs.clappingIcon} />
      <Text style={{ paddingLeft: 2 }}>Celebrate</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ flexDirection: "row", padding: 5, alignItems: "center" }}
    >
      <Feather name="thumbs-down" size={15} color="black" />
      <Text style={{ paddingLeft: 2 }}>Dislike</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ flexDirection: "row", padding: 5, alignItems: "center" }}
    >
      <Fontisto name="mad" size={15} color="black" />
      <Text style={{ paddingLeft: 2 }}>Angry</Text>
    </TouchableOpacity>
  </View>
);
const ArticlePost = (content) => {
  return (
    <View
      style={{
        margin: 5,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <View>
        <ArticleCard {...content} />
        <ArticleButtons />
      </View>
      <View style={{ padding: 10 }}>
        <TouchableOpacity style={{ marginBottom: 5 }}>
          <SvgXml width="20" height="20" xml={CustomSvgs.saveIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 5 }}>
          <SvgXml width="20" height="20" xml={CustomSvgs.shareIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 5 }}>
          <SvgXml width="20" height="20" xml={CustomSvgs.coloredPinIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FeedScreen = ({ navigation }) => {
  const ArticleList = ({ feed }) => {
    return feed.map((content) => {
      return <ArticlePost key={content.id} {...content} />;
    });
  };
  const renderContent = ({ item }) => {
    return (
      <View
        key={item.id}
        style={{
          flexDirection: "column",
          alignItems: "center",
          width: "60%",
          paddingBottom: 10,
        }}
      >
        <Image source={item.previewImage} />
        <Text style={{ color: "black", fontSize: 18, textAlign: "center" }}>
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>
          Pinned Content
        </Text>
        <FlatList
          style={{ marginRight: 40, marginLeft: 40 }}
          horizontal={true}
          data={pinnedContent}
          renderItem={renderContent}
          keyExtractor={(item) => item.id}
        />
        <ArticleList feed={generalFeed} />
      </ScrollView>
      {/* <BottomButton navigation={navigation} /> */}
    </SafeAreaView>
  );
};

FeedScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <AntDesign style={styles.profileLeft} name="back" />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Ionicons style={styles.profileRight} name="md-person" />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  articleCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    // box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  },
  item: {
    margin: 20,
    padding: 10,
  },
  profileLeft: {
    fontSize: 30,
    marginLeft: 10,
  },
  profileRight: {
    fontSize: 30,
    marginRight: 10,
  },
});

export default FeedScreen;
