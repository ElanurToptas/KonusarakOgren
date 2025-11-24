import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveEntries = async (entries) => {
  await AsyncStorage.setItem("entries", JSON.stringify(entries));
};

export const loadEntries = async () => {
  const data = await AsyncStorage.getItem("entries");
  return data ? JSON.parse(data) : [];
};
