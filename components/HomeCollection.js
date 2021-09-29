import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
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

const HomeCollection = ({ results, title }) => {
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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={tw`my-2.5`}>
        <Text
          style={[
            tw`text-white font-semibold text-xs mb-2`,
            { fontFamily: "Poppins_600SemiBold" },
          ]}
        >
          {title}
        </Text>
        <ScrollView horizontal={true} style={tw`-ml-2`}>
          {results?.map(
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
  }
};

export default HomeCollection;

const styles = StyleSheet.create({});
