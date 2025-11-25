import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

function MessageBubble() {
  const input = useSelector((state) => state.input.input);
  const entries = useSelector((state) => state.input.entries);

  const lastEntry = entries.length > 0 ? entries[entries.length - 1] : null;
  return (
    <View>
      <View style={styles.container}>
        {input ? (
          <View style={styles.inputConatiner}>
            <Text style={styles.text}>{input}</Text>
          </View>
        ) : null}
       {lastEntry && (
          <View style={styles.inputConatiner}>
            <Text>{lastEntry.suggestion}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default MessageBubble;

const styles = StyleSheet.create({
  container: {
    height: height * 0.52,
  },
  inputConatiner: {
    backgroundColor: "#309dff",
    height: height * 0.045,
    alignSelf: "flex-end",
    maxWidth: width * 0.8,
    borderRadius: 14,
    justifyContent: "center",
    paddingHorizontal: 18,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
