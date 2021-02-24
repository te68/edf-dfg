import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import BottomButton from "../components/BottomButton";

const AboutScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>About Youth4Change</Text>
          <Text style={styles.subtitle}>Empowering generation climate</Text>
        </View>
        <Text style={styles.details}>
          You have the power to accelerate climate action across corporate
          America and beyond.
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            source={require("../../assets/youth-image-1.png")}
            style={{
              borderWidth: 3,
              borderColor: "#0A4D95",
            }}
          />
        </View>
        <Text style={styles.details}>
          Emerging leaders, including students and young professionals, are more
          concerned about climate change than any previous generation. That’s
          why millennials and Gen Zers are increasingly seeking to work for
          organizations that aren’t just socially and environmentally
          responsible, but that also offer a sense of purpose and the ability to
          shape a better, cleaner and more equitable future.
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <View style={styles.imageContainer}>
            <Image source={require("../../assets/youth-image-2.png")} />
            <Text style={styles.imageTitle}>Climate Corps</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require("../../assets/youth-image-3.png")} />
            <Text style={styles.imageTitle}>Degree Podcast</Text>
          </View>

          <View style={styles.imageContainer}>
            <Image source={require("../../assets/youth-image-4.png")} />
            <Text style={styles.imageTitle}>Climate-driven Career</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={require("../../assets/youth-image-5.png")} />
            <Text style={styles.imageTitle}>Defend Our Future</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// AboutScreen.navigationOptions = ({ navigation }) => {
//   return {
//     title: "About",
//     headerTitleStyle: {
//       color: "white",
//       fontWeight: "bold",
//     },
//     headerStyle: {
//       backgroundColor: "#0A4D95",
//     },
//     headerLeft: () => (
//       <TouchableOpacity onPress={() => navigation.navigate("Home")}>
//         <AntDesign style={styles.profileLeft} name="back" />
//       </TouchableOpacity>
//     ),
//     headerRight: () => (
//       <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
//         <Ionicons style={styles.profileRight} name="md-person" />
//       </TouchableOpacity>
//     ),
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    paddingBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
  },
  details: {
    color: "#555555",
    fontSize: 15,
    fontWeight: "400",
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "center",
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
