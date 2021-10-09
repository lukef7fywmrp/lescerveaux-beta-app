import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
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
} from '@expo-google-fonts/poppins'

const Thumbnail = ({
  resultId,
  resultTitle,
  categoryId,
  thumbnailImg,
  categoryTitle,
  resultPage,
  maxWidth,
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
  })
  const navigation = useNavigation()

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <TouchableOpacity
        style={tw`mx-1 ${resultPage && 'mb-8'}`}
        onPress={() =>
          navigation.navigate('ResultScreen', {
            categoryTitle,
            categoryId,
            resultId,
          })
        }
        activeOpacity={1}
      >
        <Image
          // source={{ uri: thumbnailImg }}
          source={{
            uri: 'https://res.cloudinary.com/lescerveaux-com/image/private/s--GuVjDjd4--/v1633267379/e%CC%81nergie_sans_fin_t1fxti.png',
          }}
          style={{
            width: !resultPage ? 100 : '100%',
            height: !resultPage ? 140 : 200,
            resizeMode: 'cover',
            borderRadius: 4,
          }}
        />
      </TouchableOpacity>
    )
  }
}

export default Thumbnail

const styles = StyleSheet.create({})
