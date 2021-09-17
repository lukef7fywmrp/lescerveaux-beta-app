import { StatusBar } from "expo-status-bar";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Avatar } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import ProfileLink from "../components/ProfileLink";
import { auth } from "../firebase";

const ProfileScreen = () => {
  const [user] = useAuthState(auth);

  return (
    <View style={{ backgroundColor: "#040714" }}>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={{ width: "100%", height: "100%" }}
      ></ImageBackground>
      <ScrollView style={tw`absolute h-full w-full`}>
        <View style={tw`my-10 mx-auto`}>
          <Avatar
            containerStyle={tw`border-2 border-white bg-blue-600`}
            size={70}
            rounded
            title={user?.displayName}
            activeOpacity={0.7}
          />
          <Text
            style={tw`text-center mt-2 text-white font-semibold capitalize`}
          >
            {user?.displayName}
          </Text>
        </View>

        <View>
          <ProfileLink text="Watchlist" screen="WatchlistScreen" />
          <ProfileLink text="Account" screen="AccountScreen" />
          <ProfileLink text="Log Out" screen="LandingScreen" logout />
          <Text style={[tw`text-white pl-3 mt-4`, { color: "gray" }]}>
            In Beta 🚀
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
