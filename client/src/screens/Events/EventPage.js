import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import moment from "moment";
import axios from "axios";
const EventPage = ({ route }) => {
  const _id = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [eventInfo, updateEventInfo] = useState({});
  const getEvent = async () => {
    const res = await axios.get(`http://localhost:3000/api/event/${_id}`, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA0OTJjZTY5MjQwMDg5N2M1MTlhY2FmIn0sImlhdCI6MTYxNTk1NzkwMiwiZXhwIjoxNjE2Mzg5OTAyfQ.YeJ7nsJG1uMy0chROpY4AolePegJYiGQrWk8AAiVPpY",
      },
    });
    if (res.status === 200) {
      updateEventInfo(res.data);
    } else {
      //TODO: error handling
      alert("Error getting event");
      navigation.goBack();
    }
  };
  const onLoad = async () => {
    setIsLoading(true);
    await getEvent();
    setIsLoading(false);
  };
  useEffect(() => {
    onLoad();
  }, []);
  const { title, description, address, time, date } = eventInfo;
  return isLoading ? (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator size="large" color="#00AA90" />
    </View>
  ) : (
    <ScrollView>
      <View style={styles.title}>
        <Text style={styles.titleText}>Event</Text>
      </View>
      <View style={styles.eventCard}>
        <Text style={styles.eventTitle}>{title}</Text>
        <View flexDirection="row" alignItems="center">
          <AntDesign name="calendar" size={30} color="black" />
          <Text style={{ fontSize: 18 }}> {moment(date).format("LL")}</Text>
        </View>
        <View flexDirection="row" alignItems="center">
          <EvilIcons name="location" size={30} color="black" />
          <Text style={{ fontSize: 18 }}> {address}</Text>
        </View>
        <Text style={styles.label}>{"\n"}Information</Text>
        <Text>{description}</Text>
        <Text style={styles.label}>{"\n"}Address</Text>
        <Text>{address}</Text>
        <Text style={styles.label}>{"\n"}Time</Text>
        <Text>{time}</Text>
      </View>
      <View>
        <View>
          <View flexDirection="row" justifyContent="space-around" margin={10}>
            {moment(date).isAfter(moment()) ? (
              <TouchableOpacity style={styles.button}>
                <Text>Sign Up</Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity style={styles.button}>
              <Text>Contact Organizer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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
  button: {
    backgroundColor: "#F9C147",
    color: "black",
    borderRadius: 25,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 4, width: 4 },
    shadowOpacity: 1,
    shadowRadius: 1,
    width: "40%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  eventCard: {
    borderRadius: 30,
    backgroundColor: "#DAF4FF",
    padding: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 4, width: 4 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  eventTitle: { fontSize: 25, fontWeight: "700", color: "#0A4D95" },
  label: { fontSize: 16, fontWeight: "700", color: "#0A4D95" },
});
export default EventPage;
