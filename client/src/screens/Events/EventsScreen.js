import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import moment from "moment";
import axios from "axios";
import { getData } from "../../shared/asyncStorage";
import SearchBar from "../../components/SearchBar";
import { getEvents } from "../../api/requests";
import { handleUrl } from "../../shared/screenHelpers";
export const EventCard = (props) => {
  const { navigation, color, ...eventInfo } = props;
  const { _id, title, date, address, description, category, url } = eventInfo;
  const cardStyle = { ...styles.eventCard };
  cardStyle.backgroundColor = color;
  return (
    <TouchableOpacity
      onPress={
        category ? handleUrl(url) : () => navigation.navigate("EventPage", _id)
      }
      style={cardStyle}
    >
      <View style={{ width: "90%" }}>
        <Text style={{ fontSize: 18, fontWeight: "400" }}>{title}</Text>
        {date ? (
          <View flexDirection="row" alignItems="center">
            <AntDesign name="calendar" size={24} color="black" />
            <Text> {moment(date).format("LL")}</Text>
          </View>
        ) : null}
        {address ? (
          <View flexDirection="row" alignItems="center">
            <EvilIcons name="location" size={24} color="black" />
            <Text> {address}</Text>
          </View>
        ) : null}
        {description ? (
          <Text numberOfLines={3} ellipsizeMode="tail">
            {description}
          </Text>
        ) : null}
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const EventsScreen = ({ navigation }) => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [events, updateEvents] = useState([]);
  const [displayedEvents, updateDisplayedEvents] = useState([]);
  const [myEventIds, updateMyEventIds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const getAllEvents = async () => {
    const token = await getData("@user_token");
    const res = await getEvents.get("/", {
      headers: { "x-auth-token": token },
    });

    if (res.status === 200) {
      updateEvents(res.data.events);
      updateDisplayedEvents(res.data.events);
    } else {
      //TODO: error handling
      alert("Error getting events");
      navigation.goBack();
    }
  };
  const getMyEventIds = async () => {
    const ids = await getData("@my_events");
    updateMyEventIds(ids || []);
  };
  const onLoad = async () => {
    setIsLoading(true);
    await getAllEvents();
    await getMyEventIds();
    setIsLoading(false);
  };

  const onChangeSearch = async (text) => {
    if (searchQuery !== "") {
      let newEvents = events.filter((event) =>
        event.title.toLowerCase().includes(text.toLowerCase())
      );
      updateDisplayedEvents(newEvents);
    } else {
      updateDisplayedEvents(events);
    }
    updateSearchQuery(text.toLowerCase());
  };
  useEffect(() => {
    onLoad();
  }, []);
  const myEvents = displayedEvents.filter((event) => event.id in myEventIds);
  const futureEvents = displayedEvents.filter((event) =>
    moment(event.date).isSameOrAfter(moment())
  );
  const pastEvents = displayedEvents.filter((event) =>
    moment(event.date).isBefore(moment())
  );

  return (
    <ScrollView>
      <View style={styles.title}>
        <Text style={styles.titleText}>Events & Opportunities</Text>
      </View>
      <SearchBar value={searchQuery} handleOnChange={onChangeSearch} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#00AA90" />
      ) : (
        <View>
          {myEvents.length ? (
            <View>
              <Text style={styles.sectionTitleText}>My Events</Text>
              {myEvents.map((event) => (
                <EventCard
                  key={event._id}
                  {...event}
                  navigation={navigation}
                  color={"#99D5F1"}
                />
              ))}
            </View>
          ) : null}
          {futureEvents.length ? (
            <View>
              <Text style={styles.sectionTitleText}>Upcoming Events</Text>
              {futureEvents
                .sort((event1, event2) =>
                  moment(event2.date).diff(moment(event1.date))
                ) // Latest date first
                .map((event) => (
                  <EventCard
                    key={event._id}
                    {...event}
                    navigation={navigation}
                    color={"#A4EEC1"}
                  />
                ))}
            </View>
          ) : null}
          {pastEvents.length ? (
            <View>
              <Text style={styles.sectionTitleText}>Past Events</Text>
              {pastEvents

                .sort((event1, event2) =>
                  moment(event2.date).diff(moment(event1.date))
                ) // Latest date first
                .map((event) => (
                  <EventCard
                    key={event._id}
                    {...event}
                    navigation={navigation}
                    color={"#EF8787"}
                  />
                ))}
            </View>
          ) : null}
        </View>
      )}
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
  sectionTitleText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#00AA90",
    marginTop: 15,
    marginLeft: 30,
    marginRight: 50,
  },
  eventCard: {
    flexDirection: "row",
    borderRadius: 30,
    padding: 20,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 50,
    justifyContent: "space-between",
  },
});
export default EventsScreen;
