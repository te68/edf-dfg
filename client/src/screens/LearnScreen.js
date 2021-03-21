import React, { useCallback } from "react";
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { Link } from "@react-navigation/native";
import { stubFalse } from "lodash";
//import { styles } from "../navigation/helpers";

const categories = [
  {
    id: "1",
    title: "Guides and Learning Resources",
  },
  {
    id: "2",
    title: "Corporate Climate Action Updates",
  },
  {
    id: "3",
    title: "Career Resources",
  },
];


const guides = [
  {
    id: "1",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "A Personal Guide to Corporate Climate Action",
    destination: "https://www.edf.org/sites/default/files/documents/PersonalGuidetoCORPORATEclimateAction-EDF.pdf"
  },
  {
    id: "2",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "How to Activate Your Employer on Climate Change",
    destination: "https://www.edf.org/sites/default/files/documents/GuideToEmployeeActionForClimate-EDF.pdf"
  },
];

const corporateClimate = [
  {
    id: "1",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "Authenticity Meter Posts",
    destination: "https://business.edf.org/climate-authenticity-meter/"
  },
  {
    id: "2",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "Degree Episodes",
    destination: "Podcast"
  },
  {
    id: "3",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "Blog",
    destination: "Blog"
  }
];

const careerResources = [
  {
    id: "1",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "The Climate-Driven Career",
    destination: "https://www.edf.org/how-get-started-climate-driven-career"
  },
  {
    id: "2",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "Net Impact",
    destination: "https://www.netimpact.org/careers/job-search-tools-and-tips"
  },
  {
    id: "3",
    previewImage: require("../../assets/pinnedImage.png"),
    title: "Sustainable Career Pathways",
    destination: "https://sustainablecareerpathways.com/"
  }
];

const OpenURLButton = ({ navigation, key, url, image, children }) => {
  const handleURL = useCallback(async () => {
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

  const handleNav = () => navigation.navigate(url);

  return <TouchableOpacity
    key={key}
    style={styles.url}
    onPress={url != null && url.includes("https") ? handleURL : handleNav}>
    <Image
      style={{ width: 168, height: 111 }}
      source={image}
    />
    <Text
      style={{
        color: "black",
        fontSize: 14,
        textAlign: "left",
        fontWeight: "bold",
        padding: 5,
        //textShadowColor: "rgba(0, 0, 0, 0.75)",
        //textShadowOffset: { width: -1, height: 1 },
        //textShadowRadius: 10,
      }}
    >
      {children}
    </Text>
  </TouchableOpacity>;
};

function Category(props) {
  const content = props.content;
  return (
    <View>
      <Text style={styles.heading}> {props.title} </Text>
      <ScrollView style={styles.row} horizontal={true}>
        {content.map((content) => (
          <OpenURLButton
            navigation={props.navigation}
            key={content.id}
            url={content.destination}
            image={content.previewImage}
            children={content.title} />
        ))}
      </ScrollView>
    </View >
  );
}

const LearnScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}> Learn </Text>
      </View>
      <Category
        title="Guides and Learning Resources"
        content={guides}
        navigation={navigation} />
      <Category
        title="Corporate Climate Action Updates"
        content={corporateClimate}
        navigation={navigation}
      />
      <Category
        title="Career Resources"
        content={careerResources}
        navigation={navigation}
      />
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
  url: {
    flexDirection: "column",
    alignItems: "center",
    width: 200,
    paddingBottom: 10,
  },
  heading: {
    color: "#00AA91",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
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
