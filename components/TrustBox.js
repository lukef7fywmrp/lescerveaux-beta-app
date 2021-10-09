import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
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
import Review from './Review'

const TrustBox = () => {
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
      <View style={tw`pb-12`}>
        <View style={tw`items-center`}>
          <Text style={[tw`text-white`, { fontFamily: 'Poppins_500Medium' }]}>
            Excellent
          </Text>
          <Image
            source={{
              uri: 'https://www.londonfilmed.com/wp-content/uploads/2021/02/5c73e733fd0819a265904d0c_trustpilot-stars-2018.png',
            }}
            style={{
              width: 100,
              height: 30,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
          <Text
            style={[
              tw`text-white`,
              { fontFamily: 'Poppins_500Medium', fontSize: 11 },
            ]}
          >
            Sur la base de 160 avis
          </Text>
          <Image
            source={require('../assets/images/trustpilot.png')}
            style={{
              width: 90,
              height: 30,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        </View>

        <ScrollView style={tw`mt-4 mx-auto`} horizontal>
          <Review
            date="30 août"
            header="Une très belle formation de plus nous…"
            text="Une très belle formation de plus nous avons accès à un serveur discord vraiment..."
            name="Kabala Noa Junior"
          />

          <Review
            date="25 août"
            header="Merci pour l'application 🧠"
            text="Merci pour l'application 🧠"
            name="ILW Yennefer"
          />

          <Review
            date="25 août"
            header="Instructif"
            text="Le concept est incroyable.
Le rapport qualité-prix est excellent pour un travail..."
            name="Nathan T"
          />
        </ScrollView>
      </View>
    )
  }
}

export default TrustBox

const styles = StyleSheet.create({})
