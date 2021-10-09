import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
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
import tw from 'tailwind-react-native-classnames'

const Review = ({ date, header, text, name }) => {
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

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={tw`w-96 pl-16 pr-16 mx-auto`}>
        <View style={tw`flex-row items-center w-full justify-between`}>
          <Image
            source={{
              uri: 'https://www.londonfilmed.com/wp-content/uploads/2021/02/5c73e733fd0819a265904d0c_trustpilot-stars-2018.png',
            }}
            style={{
              width: 100,
              height: 30,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={[
              tw`text-white opacity-60`,
              { fontFamily: 'Poppins_500Medium', fontSize: 11 },
            ]}
          >
            {date}
          </Text>
        </View>
        <Text
          style={[
            tw`text-white text-xs mt-0.5`,
            { fontFamily: 'Poppins_600SemiBold' },
          ]}
        >
          {header}
        </Text>
        <Text
          style={[
            tw`text-white text-xs mt-1`,
            { fontFamily: 'Poppins_400Regular' },
          ]}
        >
          {text}
        </Text>
        <Text
          style={[
            tw`text-white text-xs mt-1 opacity-60`,
            { fontFamily: 'Poppins_400Regular' },
          ]}
        >
          {name}
        </Text>
      </View>
    )
  }
}

export default Review

const styles = StyleSheet.create({})
