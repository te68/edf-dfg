import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

const OpenURLButton = ({ navigation, action }) => {
  const url = action.destination;

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
    key={action.key}
    style={styles.act}
    onPress={url != null && url.includes("https") ? handleURL : handleNav}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={styles.body}> {action.title} </Text>
      <Entypo name="chevron-right" size={30} color="#00AA91" />
    </View>
  </TouchableOpacity>

};

const ActScreen = ({ navigation }) => {
  const actions = [
    {
      key: 0,
      title: "Influence Your Employer",
      destination: "https://www.edf.org/sites/default/files/documents/GuideToEmployeeActionForClimate-EDF.pdf"
    },
    {
      key: 1,
      title: "Corporate Climate Action",
      destination: "https://www.edf.org/sites/default/files/documents/PersonalGuidetoCORPORATEclimateAction-EDF.pdf"
    },
    {
      key: 2,
      title: "Write a Letter to the Editor",
      destination: "http://defendourfuture.org/write-letter-editor/"
    },
    {
      key: 3,
      title: "Support Petitions",
      destination: "https://defendourfuture.org/category/the-petitions/"
    },
  ];
  const [showDesc, updateShowDesc] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 10, justifyContent: 'center' }}>
      <View style={styles.title}>
        <Text style={styles.titleText}>What Can I Do?</Text>
      </View>
      <View>
        {actions.map((action) => (
          <OpenURLButton navigation={navigation} action={action} />
        ))}
        <TouchableOpacity
          style={styles.act}
          onPress={() => updateShowDesc(!showDesc)}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.body}> Train With Us </Text>
            <Entypo name={showDesc ? "chevron-down" : "chevron-right"} size={30} color="#00AA91" />
          </View>
        </TouchableOpacity>
        {showDesc ? (
          <View
            style={{
              marginHorizontal: 22
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Events")} >
              <Text>
                If you want to engage with our experts and learn more about the
                guides and resources to wield your influence for corporate
                climate action, connect with us. Look out for the upcoming
                opportunities here:
                </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
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
  },
  titleText: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    padding: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  act: {
    backgroundColor: "#DAF4FF",
    borderRadius: 10,

    height: 50,
    shadowColor: "rgba(0,0,0, .4)",
    //shadowOffset: { height: 4, width: 4 },
    //shadowOpacity: 1,
    //shadowRadius: 1,
    justifyContent: "center",
    alignContent: "center",
    //padding: 10,
    margin: 15,
    padding: 5,
  },
  body: {
    margin: 5,
    fontSize: 22,
    fontWeight: "bold",
    color: "#00AA91",
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

export default ActScreen;
