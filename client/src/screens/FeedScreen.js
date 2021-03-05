import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  Linking,
  Share,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
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
    previewText: "Lorem ipsum",
    previewImage: require("../../assets/articleImage.png"),
    likes: 20,
    celebrates: 2,
    dislikes: 4,
    angrys: 0,
    url: "https://www.edf.org/",
    saved: false,
  },
  {
    id: "2",
    title: "Questions to ask recruiters",
    author: "EDF",
    subjects: ["Resources", "Job Seeking"],
    previewText: "Lorem ipsum",
    previewImage: require("../../assets/articleImage.png"),
    likes: 20,
    celebrates: 2,
    dislikes: 4,
    angrys: 0,
    url: "https://www.edf.org/",
    saved: false,
  },
  {
    id: "3",
    title: "Questions to ask recruiters",
    author: "EDF",
    subjects: ["Resources", "Job Seeking"],
    previewText: "Lorem ipsum",
    previewImage: require("../../assets/articleImage.png"),
    likes: 20,
    celebrates: 2,
    dislikes: 4,
    angrys: 0,
    url: "https://www.edf.org/",
    saved: false,
  },
];

const ArticleCard = ({
  title,
  author,
  previewText,
  previewImage,
  subjects,
  likes,
  celebrates,
  dislikes,
  angrys,
  url,
}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  return (
    <View style={{ width: 380, alignItems: 'flex-start' }}>
      <TouchableOpacity style={styles.articleCard} onPress={handlePress}>
        <View style={{ paddingRight: 10, paddingLeft: 10 }}>
          <View>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>{title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 18 }}>By {author} </Text>
              {subjects.map((tag) => (
                <Text
                  key={tag}
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
            <Text style={{ fontSize: 16 }}>{previewText}</Text>
            <Image source={previewImage} style={{ width: "100%" }} />
          </View>
          <View style={{ flexDirection: "row", padding: 5 }}>
            <View
              style={{
                flexDirection: "row",
                paddingRight: 5,
                alignItems: "center",
              }}
            >
              <Text>{likes} </Text>
              <Feather name="thumbs-up" size={15} color="black" />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingRight: 5,
                alignItems: "center",
              }}
            >
              <Text>{celebrates} </Text>
              <SvgXml width="17" height="15" xml={CustomSvgs.clappingIcon} />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingRight: 5,
                alignItems: "center",
              }}
            >
              <Text>{dislikes} </Text>
              <Feather name="thumbs-down" size={15} color="black" />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingRight: 5,
                alignItems: "center",
              }}
            >
              <Text>{angrys} </Text>
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
    </View>
  );
};

const ArticleButtons = ({ id, updatePost }) => (
  // TODO: Button functionality

  <View
    style={{
      flexDirection: "row",
    }}
  >
    <TouchableOpacity
      style={{ flexDirection: "row", padding: 5, alignItems: "center" }}
      onPress={() => updatePost(id, "likes")}
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
const ArticlePost = ({ content, updatePost }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${content.title}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: "4%",
        marginBottom: 20,
      }}
    >
      <View style={{ width: "90%" }}>
        <ArticleCard {...content} />
        <ArticleButtons {...content} updatePost={updatePost} />
      </View>
      <View
        style={{
          alignItems: "center",
          width: "10%",
          margin: 5,
        }}
      >
        <TouchableOpacity style={{ marginBottom: 5 }}>
          <MaterialIcons name="bookmark-border" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 5 }} onPress={onShare}>
          <SvgXml width="22" height="22" xml={CustomSvgs.shareIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const FeedScreen = ({ navigation }) => {
  const [feed, updateFeed] = useState(generalFeed);
  const ArticleList = ({ feed, updatePost }) => {
    return feed.map((content) => {
      return (
        <ArticlePost
          key={content.id}
          content={content}
          updatePost={updatePost}
        />
      );
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
        <Text
          style={{
            color: "black",
            fontSize: 20,
            textAlign: "center",
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          {item.title}
        </Text>
      </View>
    );
  };
  const updatePost = (id, feedback) => {
    if (feedback === "likes") {
      let updatedFeed = feed.map((post) => {
        if (post.id === id) {
          post.likes += 1;
        }
        return post;
      });
      updateFeed(updatedFeed);
    }
  };
  return (
    <View style={styles.container}>
      { /*<FlatList
        style={{ marginRight: 40, marginLeft: 40 }}
        horizontal={true}
        data={pinnedContent}
        renderItem={renderContent}
        keyExtractor={(item) => item.id}
      />*/}
      <ArticleList feed={feed} updatePost={updatePost.bind(this)} />
      {/* <BottomButton navigation={navigation} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  articleCard: {
    backgroundColor: "#DAF4FF",
    borderRadius: 30,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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
