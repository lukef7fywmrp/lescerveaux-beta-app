import React from "react";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { db } from "../firebase";
import Thumbnail from "./Thumbnail";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

const Collection = ({ categoryId, categoryTitle, title }) => {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  const [resultsSnapshot] = useCollectionOnce(
    db
      .collection("categories")
      .doc(title)
      .collection("categoryPageData")
      .doc(categoryId)
      .collection("results")
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={tw`my-2.5`}>
        <Text
          style={[
            tw`text-white font-semibold text-sm mb-2`,
            { fontFamily: "Poppins_600SemiBold" },
          ]}
        >
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
                categoryTitle={title}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
};

export default Collection;

const styles = StyleSheet.create({});
