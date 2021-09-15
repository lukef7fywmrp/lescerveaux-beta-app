import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Thumbnail from "./Thumbnail";

const HomeCollection = ({ results, title }) => {
  return (
    <View style={tw`my-2.5`}>
      <Text style={tw`text-white font-semibold text-xs mb-2`}>{title}</Text>
      <ScrollView horizontal={true} style={tw`-ml-2`}>
        {results.map(
          ({
            resultId,
            resultDescription,
            resultPageImage,
            resultTitle,
            thumbnailImg,
            categoryId,
            categoryTitle,
          }) => (
            <Thumbnail
              key={thumbnailImg}
              categoryTitle={categoryTitle}
              resultId={resultId}
              categoryId={categoryId}
              thumbnailImg={thumbnailImg}
              resultTitle={resultTitle}
            />
          )
        )}
      </ScrollView>
    </View>
  );
};

export default HomeCollection;

const styles = StyleSheet.create({});
