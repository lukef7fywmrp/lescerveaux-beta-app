import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const Category = ({ img, title, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`m-2`}
      onPress={() => navigation.navigate("CategoryScreen", { id })}
    >
      <Image
        source={{ uri: img }}
        style={{
          width: 100,
          height: 64,
          resizeMode: "cover",
          borderRadius: 24,
        }}
      />
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({});
