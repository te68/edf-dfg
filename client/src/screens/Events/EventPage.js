import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import moment from "moment";
const EventPage = ({ route }) => {
  const {
    id,
    title,
    date,
    location,
    description,
    address,
    time,
  } = route.params;
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 35, fontWeight: "700" }}>{title}</Text>
        <View style={{ margin: 10, padding: 20 }}>
          <View flexDirection="row" alignItems="center">
            <AntDesign name="calendar" size={30} color="black" />
            <Text style={{ fontSize: 18 }}> {date}</Text>
          </View>
          <View flexDirection="row" alignItems="center">
            <EvilIcons name="location" size={30} color="black" />
            <Text style={{ fontSize: 18 }}> {location}</Text>
          </View>
          <Text>{"\n"}</Text>
          <Text>{description}</Text>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Address</Text>
            <Text>{address}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Time</Text>
            <Text>{time}</Text>
          </View>
          <View flexDirection="row" justifyContent="space-around" margin={10}>
            {date >= moment().format("LL") ? (
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "25px",
                  shadowColor: "rgba(0,0,0, .4)",
                  shadowOffset: { height: 4, width: 4 },
                  shadowOpacity: 1,
                  shadowRadius: 1,
                  width: "40%",
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text>Sign Up</Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "25px",
                shadowColor: "rgba(0,0,0, .4)",
                shadowOffset: { height: 4, width: 4 },
                shadowOpacity: 1,
                shadowRadius: 1,
                width: "40%",
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Contact Organizer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default EventPage;
