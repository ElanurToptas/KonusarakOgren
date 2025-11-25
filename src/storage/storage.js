import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveEntries = async (entries) => {
  try {
    await AsyncStorage.setItem("entries", JSON.stringify(entries));
  } catch (e) {
    console.error("AsyncStorage saveEntries hatası:", e);
  }
};

export const loadEntries = async () => {
  try {
    const data = await AsyncStorage.getItem("entries");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("AsyncStorage loadEntries hatası:", e);
    return [];
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log("Tüm AsyncStorage temizlendi ");
  } catch (e) {
    console.error("AsyncStorage temizleme hatası:", e);
  }
};

