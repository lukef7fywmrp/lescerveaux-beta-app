import { StatusBar } from "expo-status-bar";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import ProfileLink from "../components/ProfileLink";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { ChevronRightIcon } from "react-native-heroicons/outline";
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

const ProfileScreen = () => {
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
  const [user] = useAuthState(auth);
  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ backgroundColor: "#040714", flex: 1 }}>
        <StatusBar style="light" />

        <ScrollView style={tw`absolute h-full w-full`}>
          <View style={tw`my-10 mx-auto`}>
            <Avatar
              containerStyle={tw`border-2 border-white bg-blue-600`}
              size={70}
              rounded
              title={user?.displayName?.charAt(0).toUpperCase()}
              titleStyle={{ fontFamily: "Poppins_500Medium" }}
              activeOpacity={0.7}
            />
            <Text
              style={[
                tw`text-center mt-2 text-white font-semibold capitalize`,
                { fontFamily: "Poppins_600SemiBold" },
              ]}
            >
              {user?.displayName?.split(" ")[0]}
            </Text>
          </View>

          <View>
            <ProfileLink text="Watchlist" screen="WatchlistScreen" />
            <ProfileLink text="Account" screen="AccountScreen" />
            <TouchableOpacity
              style={tw`ml-3 pr-3 py-3 border-b border-gray-600 flex-row justify-between`}
              onPress={() => {
                auth.signOut();
                navigation.navigate("LandingScreen");
              }}
            >
              <Text style={tw`text-white font-semibold text-base`}>
                Log out
              </Text>
              <ChevronRightIcon color="gray" size={22} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
};

export default ProfileScreen;

const styles = StyleSheet.create({});
