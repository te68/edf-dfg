import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
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
import { SvgXml } from "react-native-svg";
import { CustomSvgs } from "../../constants";
import { getData, setData } from "../shared/asyncStorage";
import axios from "axios";
import moment from "moment";
import { handleUrl } from "../shared/screenHelpers";
import { postContent } from "../api/requests";

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
  url,
}) => {
  return (
    <View style={{ width: 380, alignItems: "flex-start" }}>
      <TouchableOpacity style={styles.articleCard} onPress={handleUrl(url)}>
        <View style={{ paddingRight: 10, paddingLeft: 10 }}>
          <View>
            <Text style={{ fontSize: 22, fontWeight: "500" }}>{title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 18 }}>By {author} </Text>
              {/*subjects != null ? subjects.map((tag) => (
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
                )) : null*/}
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
            {/*<View
              style={{
                flexDirection: "row",
                paddingRight: 5,
                alignItems: "center",
              }}
            >
              <Text>{angrys} </Text>
              <Fontisto name="mad" size={15} color="black" />
            </View>*/}
          </View>
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <TouchableOpacity>
            <AntDesign name="arrowright" size={20} color="black" />
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
      onPress={() => updatePost(id, "celebrates")}
    >
      <SvgXml width="20" height="20" xml={CustomSvgs.clappingIcon} />
      <Text style={{ paddingLeft: 2 }}>Celebrate</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ flexDirection: "row", padding: 5, alignItems: "center" }}
      onPress={() => updatePost(id, "dislikes")}
    >
      <Feather name="thumbs-down" size={15} color="black" />
      <Text style={{ paddingLeft: 2 }}>Dislike</Text>
    </TouchableOpacity>
    {/*<TouchableOpacity
      style={{ flexDirection: "row", padding: 5, alignItems: "center" }}
    >
      <Fontisto name="mad" size={15} color="black" />
      <Text style={{ paddingLeft: 2 }}>Angry</Text>
    </TouchableOpacity>*/}
  </View>
);

const ArticlePost = ({ content, updatePost, savePost }) => {
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

  const [isSaved, setIsSaved] = useState(false);
  const [savedIds, setSavedIds] = useState([]);
  const SAVED_ARTICLES_STORAGE_KEY = "@saved_article_ids";
  const getSavedArticleIds = async () => {
    setSavedIds(getData(SAVED_ARTICLES_STORAGE_KEY) || []);
  };
  const setSavedArticleIds = async () => {
    setData(SAVED_ARTICLES_STORAGE_KEY, savedIds);
  };
  useEffect(() => {
    getSavedArticleIds(SAVED_ARTICLES_STORAGE_KEY);
    setIsSaved(savedIds.includes(content._id));
    //setSavedArticleIds(newSavedIds);
    //setSavedIds(newSavedIds);
  }, []);

  const onChangeSaved = () => {
    // TODO: Get saved to work
    let newSavedIds = savedIds;
    if (!isSaved) {
      newSavedIds = savedIds.filter((id) => id !== content.id);
    } else {
      newSavedIds.push(content._id);
    }
    setSavedIds(ids);
    setIsSaved(!isSaved);
  }

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
        <ArticleButtons id={content} updatePost={updatePost} />
      </View>
      <View
        style={{
          alignItems: "center",
          width: "10%",
          margin: 5,
        }}
      >
        <TouchableOpacity
          style={{ marginBottom: 5 }}
          onPress={onChangeSaved}>
          {isSaved ? (
            <MaterialIcons name="bookmark" size={25} color="black" />
          ) : (
            <MaterialIcons name="bookmark-border" size={25} color="black" />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={{ marginBottom: 5 }} onPress={onShare}>
          <SvgXml width="22" height="22" xml={CustomSvgs.shareIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const FeedScreen = ({ navigation }) => {
  // TODO: SAVE IDS
  const [feed, updateFeed] = useState(generalFeed);
  const [savedArticles, setSavedArticles] = useState([]);
  const SAVED_STORAGE_KEY = "@saved_articles";
  useEffect(() => {
    async function fetchData() {
      const res = (await getData(SAVED_STORAGE_KEY)) || [];
      setSavedArticles(res);
    }
    fetchData();
  }, []);

  const [content, updateContent] = useState([]);
  const [displayedContent, updateDisplayedContent] = useState([]);
  const [savedContentIds, updateSavedContentIds] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  // TODO: Loading Indicator
  const getContent = async () => {
    const res = await axios.get(
      "https://youth-activism-app-server.herokuapp.com/api/content",
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA1YTY3NzNlMjhkMjQ1MTZjNmM1NWY3In0sImlhdCI6MTYxNjUzNzQ1OSwiZXhwIjoxNjE2ODk3NDU5fQ.D5jsx1pUdGXT5oq4c3njTyfifuxwQOpg0-f2dBA0v_8",
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

  const getMyFeed = async () => {
    const ids = await getData("@my_content");
    updateSavedContentIds(ids || []);
  };

  const onLoad = async () => {
    setIsLoading(true);
    await getContent();
    await getMyFeed();
    setIsLoading(false);
  };

  useEffect(() => {
    onLoad();
  }, []);

  const myFeed = content.sort((a, b) =>
    moment(a.createdAt).isBefore(moment(b.createdAt))
  );

  const featuredContent = content.filter((a) => a.featured);

  const ArticleList = ({ feed, updatePost, savePost }) => {
    return myFeed.length
      ? myFeed.map((content) => {
        return (
          <ArticlePost
            key={content._id}
            content={content}
            updatePost={updatePost}
            savePost={savePost}
            savedIds={savedContentIds}
          />
        );
      })
      : null;
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


  const updatePost = (post, feedback) => {
    if (feedback === "likes") {
      console.log(post._id, 'liked');
      postContent.put(
        `/${post._id}`,
        {
          title: post.title,
          url: post.url,
          preview: post.preview,
          author: post.author,
          interest: post.interest,
          category: post.category,
          featured: post.featured,
          likes: post.likes + 1,
          dislikes: post.dislikes,
          celebrates: post.celebrates
        }
      );
    }
    if (feedback === "celebrates") {
      console.log(post._id, 'celebrated');
      postContent.put(
        `/${post._id}`,
        {
          title: post.title,
          url: post.url,
          preview: post.preview,
          author: post.author,
          interest: post.interest,
          category: post.category,
          featured: post.featured,
          likes: post.likes,
          dislikes: post.dislikes,
          celebrates: post.celebrates + 1
        }
      );
    }
    if (feedback === "dislikes") {
      console.log(post._id, 'disliked');
      postContent.put(
        `/${post._id}`,
        {
          title: post.title,
          url: post.url,
          preview: post.preview,
          author: post.author,
          interest: post.interest,
          category: post.category,
          featured: post.featured,
          likes: post.likes,
          dislikes: post.dislikes + 1,
          celebrates: post.celebrates
        }
      );
    }
  };
  const savePost = (articleInfo) => {
    const { author, title, subjects, id } = articleInfo;
  };
  return (
    <View style={styles.container}>
      {/*<FlatList
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
    marginRight: 19,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    flexWrap: 'wrap'
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
