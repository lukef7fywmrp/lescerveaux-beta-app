import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import { Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Landing = () => {
  const navigation = useNavigation();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      navigation.navigate("HomeScreen");
    }
  }, []);

  return (
    <View style={{ backgroundColor: "#040714" }}>
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
          <Text style={tw`text-white italic text-center mb-2`}>
            <Text>
              "J’ai gagné plus d’argent en lisant 10 livres qu’en dépensant{" "}
            </Text>
            <Text style={tw`font-bold`}>10.000€</Text>
            <Text> de formations."</Text>
          </Text>

          <Text style={tw`text-white text-center `}>
            <Text style={tw`font-bold `}>- Nadir</Text>
            <Text style={tw`italic`}>,Fondateur des Cerveaux.​​</Text>
          </Text>
        </View>

        <View style={tw`px-8 py-4`}>
          <Text style={tw`text-white text-center font-semibold`}>
            Accède maintenant aux secrets de 375 livres en quelques minutes par
            jour
          </Text>
          <Button
            title="JE COMMENCE MON ESSAI GRATUIT"
            buttonStyle={{
              backgroundColor: "#00CC00",
              marginTop: 15,
            }}
            titleStyle={tw`font-semibold text-base`}
          />
          <Text style={tw`text-white text-center font-semibold mt-4`}>
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
          <Text style={tw`text-white text-center font-semibold`}>
            Trustscore 4.8 | 160 avis
          </Text>
        </View>
        <Button
          title="LOG IN"
          buttonStyle={tw`bg-black border-t-2 border-gray-700 rounded-none`}
          containerStyle={tw`rounded-none mt-auto`}
          titleStyle={tw`font-semibold text-base tracking-wider py-2`}
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </ImageBackground>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({});
