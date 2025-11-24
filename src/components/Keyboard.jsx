import React from "react";
import { View} from "react-native";
import KeyboardItem from "./KeyboardItem";

function Keyboard() {
  const handleLetter = () => {};
  return (
    <View>
      <KeyboardItem letter={handleLetter} />
    </View>
  );
}

export default Keyboard;
