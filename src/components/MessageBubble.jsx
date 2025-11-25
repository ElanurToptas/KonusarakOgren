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
          <View>
            <View style={[styles.inputConatiner, {
              backgroundColor: lastEntry.aiResult.label === "POSITIVE" ?  "#309dff":"black",
            }]}>
              <Text style={styles.text}>{input}</Text>
            </View>
            <View
              style={[
                styles.inputConatiner,
                {
                  backgroundColor:
                    lastEntry.aiResult.label === "POSITIVE" ? "orange" : "red",
                  alignSelf: "flex-start",
                },
              ]}
            >
              <Text style={styles.text}>{lastEntry.summary}</Text>
            </View>
            <View
              style={[
                styles.inputConatiner,
                {
                  backgroundColor:
                    lastEntry.aiResult.label === "POSITIVE" ? "green": "gray",
                  alignSelf: "flex-start",
                },
              ]}
            >
              <Text style={styles.text}>{lastEntry.suggestion}</Text>
            </View>
          </View>
        ) : null}
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
    height: height * 0.052,
    alignSelf: "flex-end",
    maxWidth: width * 0.8,
    borderRadius: 14,
    justifyContent: "center",
    paddingHorizontal: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
