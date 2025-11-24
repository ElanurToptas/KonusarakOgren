import React from 'react'
import {View, Text, StyleSheet, Dimensions} from "react-native"
import Header from '../components/Header';

const { width, height } = Dimensions.get("window");

function ReportScreen() {
  return (
   <View style={style.container}>
    <Header header={"Report"}/>
   </View>
  )
}

export default ReportScreen

const style =  StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: height,
    padding: height * 0.04,
  },
})