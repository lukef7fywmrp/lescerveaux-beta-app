import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { StatusBar } from "expo-status-bar";
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

const LandingScreen = () => {
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
  const [user] = useAuthState(auth);

  // const [snapshot] = useDocument(
  //   db.collection("customers").where("email", "==", user?.email)
  // );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.navigate("Home");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ backgroundColor: "#040714", flex: 1 }}>
        <StatusBar style="light" />

        <ScrollView style={tw`absolute h-full w-full`}>
          <ImageBackground
            source={require("../assets/images/landing-bg.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <View style={tw`bg-black bg-opacity-70 rounded-lg mx-5 mt-28 p-5`}>
              <Image
                source={require("../assets/images/logo.png")}
                style={{
                  width: 130,
                  height: 100,
                  resizeMode: "contain",
                  alignSelf: "center",
                  marginLeft: 25,
                }}
              />
              <Text
                style={[
                  tw`text-white italic text-center mb-2`,
                  { fontFamily: "Poppins_600SemiBold_Italic" },
                ]}
              >
                <Text>
                  "J’ai gagné plus d’argent en lisant 10 livres qu’en dépensant{" "}
                </Text>
                <Text style={tw`font-bold`}>10.000€</Text>
                <Text> de formations."</Text>
              </Text>

              <Text style={[tw`text-white text-center `]}>
                <Text
                  style={[tw`font-bold `, { fontFamily: "Poppins_700Bold" }]}
                >
                  - Nadir
                </Text>
                <Text
                  style={[
                    tw`italic`,
                    { fontFamily: "Poppins_600SemiBold_Italic" },
                  ]}
                >
                  , Fondateur des Cerveaux.​​
                </Text>
              </Text>
            </View>

            <View style={tw`px-8 py-4 pb-24`}>
              <Text
                style={[
                  tw`text-white text-center font-semibold`,
                  { fontFamily: "Poppins_600SemiBold" },
                ]}
              >
                Accède maintenant aux secrets de 375 livres en quelques minutes
                par jour
              </Text>
              <Button
                title="JE COMMENCE MON ESSAI GRATUIT"
                buttonStyle={{
                  backgroundColor: "#00CC00",
                  marginTop: 15,
                }}
                titleStyle={[
                  tw`font-semibold text-base`,
                  { fontFamily: "Poppins_600SemiBold" },
                ]}
                onPress={() => navigation.navigate("SignupScreen")}
              />
              <Text
                style={[
                  tw`text-white text-center font-semibold mt-4`,
                  { fontFamily: "Poppins_600SemiBold" },
                ]}
              >
                Suivi par IbraTV, Greg Toussaint et MOTIVACTION{" "}
              </Text>
              <Image
                source={require("../assets/images/trustpilot.png")}
                style={{
                  width: 130,
                  height: 100,
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
              />
              <Text
                style={[
                  tw`text-white text-center font-semibold`,
                  { fontFamily: "Poppins_600SemiBold" },
                ]}
              >
                Trustscore 4.8 | 160 avis
              </Text>
            </View>
          </ImageBackground>
        </ScrollView>
        <Button
          title="LOG IN"
          buttonStyle={tw`bg-black border-t-2 border-gray-700 rounded-none`}
          containerStyle={tw`rounded-none mt-auto`}
          titleStyle={[
            tw`font-semibold text-base tracking-wider py-2`,
            { fontFamily: "Poppins_600SemiBold" },
          ]}
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
    );
  }
};

export default LandingScreen;

const styles = StyleSheet.create({});
