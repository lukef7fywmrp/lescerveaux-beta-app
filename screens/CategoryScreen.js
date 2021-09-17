import React from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Collection from "../components/Collection";
import { db } from "../firebase";

const CategoryScreen = ({ route }) => {
  const [snapshot] = useCollection(
    db
      .collection("categories")
      .doc(route.params.id)
      .collection("categoryPageData")
      .orderBy("timestamp", "asc")
  );

  const [categoryPageData] = useDocument(
    db.collection("categories").doc(route.params.id)
  );

  return (
    <View style={{ backgroundColor: "#040714", flex: 1 }}>
      <ImageBackground
        source={{ uri: categoryPageData?.data().categoryPageImage }}
        style={{
          width: "100%",
          height: "100%",
        }}
      ></ImageBackground>
      <ScrollView style={tw`absolute h-full w-full`}>
        <View style={[tw`px-4`, { paddingTop: 400 }]}>
          {snapshot?.docs.map((doc) => {
            const id = doc.id;
            const { categoryId, categoryTitle } = doc.data();
            return (
              <Collection
                key={id}
                categoryId={categoryId}
                categoryTitle={categoryTitle}
                title={route.params.id}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
