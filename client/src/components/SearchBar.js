import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const SearchBar = ({ value, handleOnChange }) => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <AntDesign name="search1" size={20} color="black" />
        <TextInput
          style={styles.searchBar}
          placholder="Search Event"
          value={value}
          onChangeText={(text) => handleOnChange(text)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchBarContainer: {
    alignItems: "center",
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  searchBar: {
    flex: 1,
    borderRadius: 15,
    height: 24,
    paddingLeft: 10,
    backgroundColor: "rgba(196, 196, 196, 0.3)",
  },
});
export default SearchBar;
