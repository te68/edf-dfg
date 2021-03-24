import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import BottomButton from "../components/BottomButton";
import { setData } from "../shared/asyncStorage";

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const handleSignOut = async () => {
    setData("@user_token", "");
    navigation.navigate("Login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flex: 2 }}>
          <Text style={styles.title}> Profile </Text>
          <View style={styles.profileSettings}>
            <Text> Name: </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Name"
              placeholderTextColor="rgba(60, 60, 67, 0.3)"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.profileSettings}>
            <Text> Email: </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
              placeholderTextColor="rgba(60, 60, 67, 0.3)"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.profileSettings}>
            <Text> Location: </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Location"
              placeholderTextColor="rgba(60, 60, 67, 0.3)"
              value={location}
              onChangeText={(text) => setLocation(text)}
            />
          </View>
          <Profile></Profile>
        </View>
        <Interests style={{ flex: 1 }}></Interests>
        <Notifications style={{ flex: 1 }}></Notifications>
        <Text style={styles.title}> Saved Content </Text>
      </ScrollView>
      <View style={{ alignItems: "center", padding: 5 }}>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOut}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

ProfileScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <AntDesign style={styles.profile} name="back" />
      </TouchableOpacity>
    ),
  };
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employment: "",
      education: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowSettings}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  this.state.employment == "Seeking Employment"
                    ? "#0A4D95"
                    : "#ffffff",
              },
            ]}
            onPress={() =>
              this.setState({
                employment: "Seeking Employment",
              })
            }
          >
            <Text
              style={{
                textAlign: "center",
                color:
                  this.state.employment == "Seeking Employment"
                    ? "#ffffff"
                    : "#000000",
              }}
            >
              {" "}
              Seeking Employment{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  this.state.employment == "Employed Full Time"
                    ? "#0A4D95"
                    : "#ffffff",
              },
            ]}
            onPress={() =>
              this.setState({
                employment: "Employed Full Time",
              })
            }
          >
            <Text
              style={{
                textAlign: "center",
                color:
                  this.state.employment == "Employed Full Time"
                    ? "#ffffff"
                    : "#000000",
              }}
            >
              {" "}
              Employed Full Time{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowSettings}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  this.state.education == "Student" ? "#0A4D95" : "#ffffff",
              },
            ]}
            onPress={() =>
              this.setState({
                education: "Student",
              })
            }
          >
            <Text
              style={{
                textAlign: "center",
                color:
                  this.state.education == "Student" ? "#ffffff" : "#000000",
              }}
            >
              {" "}
              Student{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor:
                  this.state.education == "Graduate" ? "#0A4D95" : "#ffffff",
              },
            ]}
            onPress={() =>
              this.setState({
                education: "Graduate",
              })
            }
          >
            <Text
              style={{
                textAlign: "center",
                color:
                  this.state.education == "Graduate" ? "#ffffff" : "#000000",
              }}
            >
              {" "}
              Graduate{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Interests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      climateNews: "",
      corporateInsights: "",
      climateAdvocacy: "",
      sustainabilityResearch: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Interests </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.container, { left: "3%" }]}>
            <Text style={styles.body}> Climate News: </Text>
            <Text style={styles.body}> Corporate Insights: </Text>
            <Text style={styles.body}> Climate Advocacy: </Text>
            <Text style={styles.body}> Sustainability Research: </Text>
          </View>
          <View style={{ flex: 1.3 }}>
            <DegreeInterest></DegreeInterest>
            <DegreeInterest></DegreeInterest>
            <DegreeInterest></DegreeInterest>
            <DegreeInterest></DegreeInterest>
          </View>
        </View>
      </View>
    );
  }
}

class DegreeInterest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: "",
    };
  }
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={[
            styles.smallButton,
            {
              backgroundColor:
                this.state.degree == "A Little" ? "#0A4D95" : "#ffffff",
            },
          ]}
          onPress={() =>
            this.setState({
              degree: "A Little",
            })
          }
        >
          <Text
            style={[
              styles.body,
              {
                color: this.state.degree == "A Little" ? "#ffffff" : "#000000",
              },
            ]}
          >
            {" "}
            A Little{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.smallButton,
            {
              backgroundColor:
                this.state.degree == "Average" ? "#0A4D95" : "#ffffff",
            },
          ]}
          onPress={() =>
            this.setState({
              degree: "Average",
            })
          }
        >
          <Text
            style={[
              styles.body,
              {
                color: this.state.degree == "Average" ? "#ffffff" : "#000000",
              },
            ]}
          >
            {" "}
            Average{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.smallButton,
            {
              backgroundColor:
                this.state.degree == "A Lot" ? "#0A4D95" : "#ffffff",
            },
          ]}
          onPress={() =>
            this.setState({
              degree: "A Lot",
            })
          }
        >
          <Text
            style={[
              styles.body,
              {
                color: this.state.degree == "A Lot" ? "#ffffff" : "#000000",
              },
            ]}
          >
            {" "}
            A Lot{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notify: "On",
    };
  }
  render() {
    return (
      <View>
        <Text style={styles.title}> Notifications</Text>
        <View style={{ flexDirection: "row", marginRight: "30%" }}>
          <TouchableOpacity
            style={[
              styles.smallButton,
              {
                backgroundColor:
                  this.state.notify == "On" ? "#0A4D95" : "#ffffff",
              },
            ]}
            onPress={() =>
              this.setState({
                notify: "On",
              })
            }
          >
            <Text
              style={{
                flex: 1,
                justifyContent: "center",
                textAlign: "center",
                color: this.state.notify == "On" ? "#ffffff" : "#000000",
              }}
            >
              {" "}
              On{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.smallButton,
              {
                backgroundColor:
                  this.state.notify == "Events Only" ? "#0A4D95" : "#ffffff",
              },
            ]}
            onPress={() =>
              this.setState({
                notify: "Events Only",
              })
            }
          >
            <Text
              style={{
                flex: 1,
                justifyContent: "center",
                textAlign: "center",
                color:
                  this.state.notify == "Events Only" ? "#ffffff" : "#000000",
              }}
            >
              {" "}
              Events Only{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.smallButton,
              {
                backgroundColor:
                  this.state.notify == "Off" ? "#0A4D95" : "#ffffff",
              },
            ]}
            onPress={() =>
              this.setState({
                notify: "Off",
              })
            }
          >
            <Text
              style={{
                textAlign: "center",
                color: this.state.notify == "Off" ? "#ffffff" : "#000000",
              }}
            >
              {" "}
              Off{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    fontSize: 30,
    marginLeft: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
  },
  body: {
    fontSize: 14,
    top: "5%",
    flex: 1,
  },
  profileSettings: {
    flexDirection: "row",
    padding: 3,
    left: "5%",
  },
  button: {
    width: "35%",
    height: 20,
    borderRadius: 25,
    borderColor: "black",
    borderWidth: 1,
  },
  rowSettings: {
    flexDirection: "row",
    width: "110%",
    padding: 4,
    flex: 1,
    margin: 3,
    padding: 2,
  },
  smallButton: {
    width: "30%",
    left: "10%",
    borderRadius: 25,
    height: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
  },
  signOut: {
    fontWeight: "bold",
    fontSize: 18,
  },
  signOutButton: {
    position: "absolute",
    flex: 1,
    bottom: 50,
    width: "40%",
    backgroundColor: "#007AFF",
    borderRadius: 25,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
