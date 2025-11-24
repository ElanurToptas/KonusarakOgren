import React, { useState } from "react";
import { View } from "react-native";
import KeyboardItem from "./KeyboardItem";
import InputItem from "./InputItem";
import { saveEntries } from "../storage/storage";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { input, addEntry } from "../redux/store/textSlice";

function Keyboard() {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.input.entries);
  const [text, setText] = useState("");
  const [isUpper, setIsUpper] = useState(false);

  const handleLetter = async (item) => {
    switch (item) {
      case "up":
        setIsUpper(!isUpper);
        break;
      case "del":
        setText(text.slice(0, -1));
        break;
      case "Analiz Et":
        if (text.trim() != "") {
          const newEntry = {
            id: Date.now(),
            text: text,
            date: new Date().toISOString(),
          };

          dispatch(addEntry(newEntry));
          saveEntries([...entries, newEntry]);

          setText("");
          dispatch(input(text));
        }
        break;
      case " ":
        setText(text + " ");
        break;
      default:
        const letterToAdd =
          isUpper && typeof item === "string"
            ? item.toUpperCase()
            : item.toLowerCase();
        setText(text + letterToAdd);
    }
  };
  return (
    <View>
      <InputItem message={text} onChange={setText} />
      <KeyboardItem letter={handleLetter} isUpper={isUpper} />
    </View>
  );
}

export default Keyboard;
