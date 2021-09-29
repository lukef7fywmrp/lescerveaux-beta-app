import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const Category = ({ img, title, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`m-2 border-2 border-white  border-opacity-50 rounded-3xl`}
      onPress={() => navigation.navigate("CategoryScreen", { id })}
    >
      <Image
        source={{ uri: img }}
        style={{
          width: 140,
          height: 75,
          resizeMode: "cover",
          borderRadius: 24,
        }}
      />
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({});
