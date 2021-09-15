import React from "react";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { db } from "../firebase";
import Thumbnail from "./Thumbnail";

const Collection = ({ categoryId, categoryTitle, title }) => {
  const [resultsSnapshot] = useCollectionOnce(
    db
      .collection("categories")
      .doc(title)
      .collection("categoryPageData")
      .doc(categoryId)
      .collection("results")
  );

  return (
    <View style={tw`my-2.5`}>
      <Text style={tw`text-white font-semibold text-xs mb-2`}>
        {categoryTitle}
      </Text>
      <ScrollView horizontal={true} style={tw`-ml-2`}>
        {resultsSnapshot?.docs.map((doc) => {
          const id = doc.id;
          const {
            resultTitle,
            resultId,
            thumbnailImg,
            resultDescription,
            resultPageImage,
          } = doc.data();
          return (
            <Thumbnail
              categoryId={categoryId}
              thumbnailImg={thumbnailImg}
              resultId={resultId}
              key={id}
              resultTitle={resultTitle}
              resultDescription={resultDescription}
              resultPageImage={resultPageImage}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Collection;

const styles = StyleSheet.create({});
