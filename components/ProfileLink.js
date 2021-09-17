import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const ProfileLink = ({ text, screen, logout }) => {
  const navigation = useNavigation();

  const signOut = () => {
    auth.signOut();
    navigation.navigate(screen);
  };
  return (
    <TouchableOpacity
      style={tw`ml-3 pr-3 py-3 border-b border-gray-600 flex-row justify-between`}
      onPress={() => (logout ? signOut() : navigation.navigate(screen))}
    >
      <Text style={tw`text-white font-semibold text-base`}>{text}</Text>
      <ChevronRightIcon color="gray" size={22} />
    </TouchableOpacity>
  );
};

export default ProfileLink;

const styles = StyleSheet.create({});
