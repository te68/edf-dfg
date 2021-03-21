import AsyncStorage from "@react-native-async-storage/async-storage";
export const setData = async (STORAGE_KEY, payload) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, payload);
    alert("Data successfully saved");
  } catch (e) {
    alert("Failed to save the data to the storage");
  }
};
export const getData = async (STORAGE_KEY) => {
  try {
    const storage = await AsyncStorage.getItem(STORAGE_KEY);
    if (storage !== null) {
      return storage;
    }
  } catch (e) {
    alert("Failed to fetch the data from storage");
  }
};
