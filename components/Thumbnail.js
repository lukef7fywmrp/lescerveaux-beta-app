import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
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

const Thumbnail = ({
  resultId,
  resultTitle,
  categoryId,
  thumbnailImg,
  categoryTitle,
  resultPage,
}) => {
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
  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity
        style={tw`mx-1.5 ${resultPage && "mb-8"}`}
        onPress={() =>
          navigation.navigate("ResultScreen", {
            categoryTitle,
            categoryId,
            resultId,
          })
        }
      >
        <Image
          source={{ uri: thumbnailImg }}
          style={{
            width: !resultPage ? 200 : "100%",
            height: !resultPage ? 100 : 200,
            resizeMode: "cover",
            borderRadius: 5,
          }}
        />
        <Text
          style={[
            tw`text-white capitalize ${
              resultPage ? "text-sm" : "text-xs"
            } mt-2`,
            { fontFamily: "Poppins_600SemiBold" },
          ]}
        >
          {resultTitle}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default Thumbnail;

const styles = StyleSheet.create({});
