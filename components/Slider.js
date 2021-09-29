import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Slick from "react-native-slick";
import tw from "tailwind-react-native-classnames";

const Slider = () => {
  return (
    <Slick
      style={tw``}
      showsButtons={true}
      autoplay
      height={120}
      showsPagination={false}
      showsButtons={false}
    >
      <TouchableOpacity style={tw`mx-auto`}>
        <Image
          source={require("../assets/images/banner-1.jpg")}
          style={{
            width: 360,
            height: 120,
            resizeMode: "cover",
            overflow: "hidden",
            borderRadius: 24,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={tw`mx-auto`}>
        <Image
          source={require("../assets/images/banner-2.jpg")}
          style={{
            width: 360,
            height: 120,
            resizeMode: "cover",
            borderRadius: 24,
          }}
        />
      </TouchableOpacity>
    </Slick>
  );
};

export default Slider;

const styles = StyleSheet.create({
  wrapper: {},
});
