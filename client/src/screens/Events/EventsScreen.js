import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
// import { SearchBar } from "react-native-elements";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import moment from "moment";
const exampleEvents = [
  {
    id: 1,
    title: "Defend Our Chocolate",
    date: moment().format("LL"),
    location: "The Ohio State University, Columbus, OH, United States",
    description: `Join us for an event that will focus on the impact that climate change is already having on the chocolate industry and how these issues will develop in the future as the effects of climate change continue to worsen. The primary topics to be discussed will be 1) prolonged droughts further reducing/shifting cocoa yields 2) the numerous products that rely on the cocoa plant 3) how consumers will respond to higher prices 4) if higher prices will raise awareness about climate issues and encourage broader changes in consumption.
    Panelists and speakers include:\n
    Lauren Chenarides, Assistant Professor, Morrison School of Agribusiness, Arizona State University
    Jim Elitzak, Co-owner, Zak’s Chocolate
    Lauren Kuby, Tempe City Councilwoman`,
    address:
      "Changing Hands Bookstore, 6428 S. McClintock Dr. #C101, Tempe, Arizona 85283",
    time: "6:30 – 8:00 pm ET",
  },
  {
    id: 2,
    title: "Defend Our Chocolate",
    date: moment().add(1, "days").format("LL"),
    location: "The Ohio State University, Columbus, OH, United States",
    description: `Join us for an event that will focus on the impact that climate change is already having on the chocolate industry and how these issues will develop in the future as the effects of climate change continue to worsen. The primary topics to be discussed will be 1) prolonged droughts further reducing/shifting cocoa yields 2) the numerous products that rely on the cocoa plant 3) how consumers will respond to higher prices 4) if higher prices will raise awareness about climate issues and encourage broader changes in consumption.
    Panelists and speakers include:
    Lauren Chenarides, Assistant Professor, Morrison School of Agribusiness, Arizona State University
    Jim Elitzak, Co-owner, Zak’s Chocolate
    Lauren Kuby, Tempe City Councilwoman`,
    address:
      "Changing Hands Bookstore, 6428 S. McClintock Dr. #C101, Tempe, Arizona 85283",
    time: "6:30 – 8:00 pm ET",
  },
  {
    id: 3,
    title: "Defend Our Chocolate",
    date: moment().add(-3, "days").format("LL"),
    location: "The Ohio State University, Columbus, OH, United States",
    description: `Join us for an event that will focus on the impact that climate change is already having on the chocolate industry and how these issues will develop in the future as the effects of climate change continue to worsen. The primary topics to be discussed will be 1) prolonged droughts further reducing/shifting cocoa yields 2) the numerous products that rely on the cocoa plant 3) how consumers will respond to higher prices 4) if higher prices will raise awareness about climate issues and encourage broader changes in consumption.
    Panelists and speakers include:
    Lauren Chenarides, Assistant Professor, Morrison School of Agribusiness, Arizona State University
    Jim Elitzak, Co-owner, Zak’s Chocolate
    Lauren Kuby, Tempe City Councilwoman`,
    address:
      "Changing Hands Bookstore, 6428 S. McClintock Dr. #C101, Tempe, Arizona 85283",
    time: "6:30 – 8:00 pm ET",
  },
  {
    id: 4,
    title: "Defend Our Chocolate",
    date: moment().add(-1, "days").format("LL"),
    location: "The Ohio State University, Columbus, OH, United States",
    description: `Join us for an event that will focus on the impact that climate change is already having on the chocolate industry and how these issues will develop in the future as the effects of climate change continue to worsen. The primary topics to be discussed will be 1) prolonged droughts further reducing/shifting cocoa yields 2) the numerous products that rely on the cocoa plant 3) how consumers will respond to higher prices 4) if higher prices will raise awareness about climate issues and encourage broader changes in consumption.
    Panelists and speakers include:
    Lauren Chenarides, Assistant Professor, Morrison School of Agribusiness, Arizona State University
    Jim Elitzak, Co-owner, Zak’s Chocolate
    Lauren Kuby, Tempe City Councilwoman`,
    address:
      "Changing Hands Bookstore, 6428 S. McClintock Dr. #C101, Tempe, Arizona 85283",
    time: "6:30 – 8:00 pm ET",
  },
  ,
];
const EventCard = (props) => {
  const { navigation, ...eventInfo } = props;
  const { title, date, location, description } = eventInfo;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("EventPage", eventInfo)}
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: 10,
        margin: 20,
        justifyContent: "space-between",
        shadowColor: "rgba(0,0,0, .4)",
        shadowOffset: { height: 4, width: 4 },
        shadowOpacity: 1,
        shadowRadius: 1,
      }}
    >
      <View style={{ width: "90%" }}>
        <Text style={{ fontSize: 18, fontWeight: "400" }}>{title}</Text>
        <View flexDirection="row" alignItems="center">
          <AntDesign name="calendar" size={24} color="black" />
          <Text> {date}</Text>
        </View>
        <View flexDirection="row" alignItems="center">
          <EvilIcons name="location" size={24} color="black" />
          <Text> {location}</Text>
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail">
          {description}
        </Text>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const EventsScreen = ({ navigation }) => {
  const [search, updateSearch] = useState("");
  const [events, updateEvents] = useState(exampleEvents);
  const futureEvents = events
    .filter((event) => event.date >= moment().format("LL"))
    .sort((event1, event2) => moment(event1.date).diff(event2.date)); // Earliest date first
  const pastEvents = events
    .filter((event) => event.date < moment().format("LL"))
    .sort((event1, event2) => moment(event2.date).diff(event1.date)); // Latest date first
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <SearchBar
          placeholder="Search"
          onChangeText={(text) => updateSearch(text)}
          value={search}
        /> */}
        <View>
          <Text style={{ fontSize: 30, marginTop: 15, marginLeft: 15 }}>
            Events and Opportunities
          </Text>
          {futureEvents.length > 0 ? (
            // <FlatList
            //   data={[...futureEvents, navigation]}
            //   renderItem={EventCard}
            //   keyExtractor={(item) => item.id}
            // />
            futureEvents.map((event) => (
              <EventCard {...event} navigation={navigation} />
            ))
          ) : (
              <Text>No upcoming events found</Text>
            )}
        </View>
        <View>
          <Text style={{ fontSize: 30, marginTop: 15, marginLeft: 15 }}>
            Past Events
          </Text>
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => (
              <EventCard {...event} navigation={navigation} />
            ))
          ) : (
              <Text>No past events found</Text>
            )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default EventsScreen;
