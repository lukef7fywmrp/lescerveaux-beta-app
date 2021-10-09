import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import tw from 'tailwind-react-native-classnames'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
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

const LoginScreen = () => {
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
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       navigation.navigate("Home");
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const Continue = () => {
    setStep(step + 1)
  }

  const Previous = () => {
    setPassword('')
    setStep(step - 1)
  }

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home')
      })
      .catch((error) => alert(error.message))
  }

  switch (step) {
    case 1:
      if (!fontsLoaded) {
        return <AppLoading />
      } else {
        return (
          <>
            <SafeAreaView style={[tw`flex-1`, { backgroundColor: '#1A1C29' }]}>
              <StatusBar style="light" />
              <Button
                icon={<ChevronLeftIcon color="black" size={20} />}
                buttonStyle={tw`rounded-full w-7 h-7 bg-white m-4`}
                onPress={navigation.goBack}
              />
              <KeyboardAvoidingView behavior="padding" style={[tw`px-2.5`]}>
                <Image
                  source={require('../assets/images/logo.png')}
                  style={{
                    width: 130,
                    height: 100,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                />

                <View>
                  <Input
                    keyboardAppearance="dark"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    label="Saisissez votre email"
                    labelStyle={[
                      tw`text-white text-2xl font-semibold`,
                      { fontFamily: 'Poppins_500Medium' },
                    ]}
                    inputContainerStyle={[
                      tw`px-2 py-1.5 rounded border-0 mt-4`,
                      { backgroundColor: '#30343E' },
                    ]}
                    inputStyle={[
                      tw`text-base font-medium text-white border-0`,
                      { fontFamily: 'Poppins_500Medium' },
                    ]}
                    type="email"
                    autoFocus
                    placeholder="Votre email"
                    placeholderTextColor="#A2A3A6"
                    secureTextEntry={false}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />

                  <Button
                    title="CONTINUER"
                    buttonStyle={tw`bg-blue-600 rounded`}
                    containerStyle={tw`rounded px-2`}
                    titleStyle={[
                      tw`font-semibold text-base tracking-wider py-0.5`,
                      { fontFamily: 'Poppins_600SemiBold' },
                    ]}
                    onPress={Continue}
                  />
                </View>
                <View style={tw`px-2 mt-4 flex-row items-center`}>
                  <Text
                    style={[
                      tw`text-white mr-1`,
                      { fontFamily: 'Poppins_400Regular' },
                    ]}
                  >
                    Nouveau parmi nous ?
                  </Text>
                  <Button
                    onPress={() => navigation.navigate('SignupScreen')}
                    title="REJOINDRE"
                    titleStyle={[
                      tw`text-sm font-semibold`,
                      { fontFamily: 'Poppins_500Medium' },
                    ]}
                    buttonStyle={tw`p-0 bg-transparent`}
                  />
                </View>
              </KeyboardAvoidingView>
            </SafeAreaView>
          </>
        )
      }
    case 2:
      if (!fontsLoaded) {
        return <AppLoading />
      } else {
        return (
          <SafeAreaView style={[tw`flex-1`, { backgroundColor: '#1A1C29' }]}>
            <Button
              icon={<ChevronLeftIcon color="black" size={20} />}
              buttonStyle={tw`rounded-full w-7 h-7 bg-white m-4`}
              onPress={Previous}
            />
            <KeyboardAvoidingView behavior="padding" style={[tw`px-2.5`]}>
              <Image
                source={require('../assets/images/logo.png')}
                style={{
                  width: 130,
                  height: 100,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
              />

              <View>
                <Input
                  keyboardAppearance="dark"
                  label="Entrez votre mot de passe"
                  labelStyle={[
                    tw`text-white text-2xl font-semibold`,
                    { fontFamily: 'Poppins_500Medium' },
                  ]}
                  inputContainerStyle={[
                    tw`px-2 py-1.5 rounded border-0 mt-4`,
                    { backgroundColor: '#30343E' },
                  ]}
                  inputStyle={[
                    tw`text-base font-medium text-white`,
                    { fontFamily: 'Poppins_500Medium' },
                  ]}
                  secureTextEntry
                  type="password"
                  placeholder="Votre mot de passe"
                  placeholderTextColor="#A2A3A6"
                  value={password}
                  onSubmitEditing={login}
                  onChangeText={(text) => setPassword(text)}
                />

                <View>
                  <Button
                    title="ME CONNECTER"
                    onPress={login}
                    buttonStyle={tw`bg-blue-600 rounded`}
                    containerStyle={tw`rounded px-2`}
                    titleStyle={[
                      tw`font-semibold text-base tracking-wider py-0.5`,
                      { fontFamily: 'Poppins_600SemiBold' },
                    ]}
                  />
                </View>
              </View>
            </KeyboardAvoidingView>
          </SafeAreaView>
        )
      }
    default:
    // do nothing
  }
}

export default LoginScreen

const styles = StyleSheet.create({})
