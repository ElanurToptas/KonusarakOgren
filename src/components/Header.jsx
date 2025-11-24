import React from 'react'
import {View, Text, StyleSheet} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons";

function Header({header}) {
  return (
   <View style={style.container}>
    <Ionicons name='arrow-back' size={20} color="gray" />
    <Text style={style.header}>{header}</Text>
   </View>
  )
}

export default Header

const style = StyleSheet.create({
    container: {
    height: 60,
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
  },

})