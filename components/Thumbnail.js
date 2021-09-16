import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const Thumbnail = ({
  resultId,
  resultTitle,
  categoryId,
  thumbnailImg,
  categoryTitle,
}) => {
  return (
    <TouchableOpacity style={tw`mx-1.5`}>
      <Image
        source={{ uri: thumbnailImg }}
        style={{
          width: 200,
          height: 100,
          resizeMode: "cover",
          borderRadius: 5,
        }}
      />
    </TouchableOpacity>
  );
};

export default Thumbnail;

const styles = StyleSheet.create({});
