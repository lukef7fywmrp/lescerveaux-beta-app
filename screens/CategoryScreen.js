import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
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
import { Button } from "react-native-elements";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import tw from "tailwind-react-native-classnames";
import Collection from "../components/Collection";
import { db } from "../firebase";

const CategoryScreen = ({ route }) => {
  const navigation = useNavigation();
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
      <StatusBar style="light" />

      <ImageBackground
        source={{ uri: categoryPageData?.data().categoryPageImgPhone }}
        style={{
          width: "100%",
          height: "85%",
        }}
      ></ImageBackground>
      <Button
        icon={<ChevronLeftIcon color="white" size={24} />}
        containerStyle={tw`absolute top-6 z-50`}
        buttonStyle={[tw`rounded-full w-6 h-6 m-4 bg-black opacity-70`]}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={tw`absolute h-full w-full`}>
        <View
          style={tw`absolute top-44 w-full flex items-center justify-center`}
        >
          <Image
            source={{ uri: categoryPageData?.data().categoryPageTitleImg }}
            style={{
              width: 500,
              height: 200,
              resizeMode: "contain",
            }}
          />
        </View>

        <View style={[tw`px-4 pt-80`]}>
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
