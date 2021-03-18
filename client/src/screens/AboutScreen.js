import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Linking,
  Alert,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const AboutScreen = ({ navigation }) => {
  const redirectToContactLink = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL("https://www.edf.org/contact");

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL("https://www.edf.org/contact");
    } else {
      Alert.alert(
        `Don't know how to open this URL: https://www.edf.org/contact`
      );
    }
  }, ["https://www.edf.org/contact"]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>About</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Empowering generation climate</Text>
          <Text style={styles.details}>
            You have the power to accelerate climate action across corporate
            America and beyond.
          </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.details}>
            Emerging leaders,{"\n"}
            including students,{"\n"}
            and young professionals,{"\n"}
            are more concerned about{"\n"}
            climate change than any{"\n"}
            previous generation.{"\n"}
          </Text>
          <Image source={require("../../assets/about-us.png")} />
        </View>

        <View>
          <Text style={styles.details}>
            That’s why millennials and Gen Zers are increasingly seeking to work
            for organizations that aren’t just socially and environmentally
            responsible, but that also offer a sense of purpose and the ability
            to shape a better, cleaner and more equitable future.
          </Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Our Work</Text>
          <Text style={styles.details}>
            Empowering Generation Climate is an initiative by Environmental
            Defense Fund. We offer informational content, tools, resources,
            training programs and opportunities to engage for climate advocates
            and those interested in kick-starting a climate-driven career.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.contactUs}
          onPress={redirectToContactLink}
        >
          <Text style={styles.contactUsText}>Contact Us</Text>
          <Entypo name="chevron-right" size={30} color="#00AA90" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  title: {
    backgroundColor: "#00AA90",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    padding: 10,
  },
  subtitle: {
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
    color: "#00AA90",
  },
  details: {
    fontSize: 15,
    fontWeight: "400",
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    width: "50%",
    alignItems: "center",
  },
  imageTitle: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    color: "#323B3C",
  },
  contactUs: {
    flexDirection: "row",
    backgroundColor: "#DAF4FF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 20,
    padding: 10,
  },
  contactUsText: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: "#00AA90",
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

export default AboutScreen;
