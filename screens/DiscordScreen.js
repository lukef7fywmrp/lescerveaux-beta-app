import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const DiscordScreen = () => {
  return (
    <View style={{ backgroundColor: "#040714", flex: 1 }}>
      <StatusBar style="light" />

      <View style={tw``}></View>
    </View>
  );
};

export default DiscordScreen;

const styles = StyleSheet.create({});
