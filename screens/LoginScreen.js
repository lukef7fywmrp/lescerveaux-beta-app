import { StatusBar } from "expo-status-bar";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import tw from "tailwind-react-native-classnames";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const LoginScreen = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.navigate("HomeScreen");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const Continue = () => {
    setStep(step + 1);
  };

  const Previous = () => {
    setPassword("");
    setStep(step - 1);
  };

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("HomeScreen");
      })
      .catch((error) => alert(error.message));
  };

  switch (step) {
    case 1:
      return (
        <>
          <SafeAreaView style={[tw`flex-1`, { backgroundColor: "#1A1C29" }]}>
            <StatusBar style="light" />
            <Button
              icon={<ChevronLeftIcon color="black" size={20} />}
              buttonStyle={tw`rounded-full w-7 h-7 bg-white m-4`}
              onPress={navigation.goBack}
            />
            <KeyboardAvoidingView behavior="padding" style={[tw`px-2.5`]}>
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

              <View>
                <Input
                  keyboardAppearance="dark"
                  label="Log in with your email"
                  labelStyle={tw`text-white text-2xl font-semibold`}
                  inputContainerStyle={[
                    tw`px-2 py-1.5 rounded border-0 mt-4`,
                    { backgroundColor: "#30343E" },
                  ]}
                  inputStyle={tw`text-base font-medium text-white pb-1 border-0`}
                  type="email"
                  autoFocus
                  placeholder="Email"
                  placeholderTextColor="#A2A3A6"
                  secureTextEntry={false}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />

                <Button
                  title="CONTINUE"
                  buttonStyle={tw`bg-blue-600 rounded`}
                  containerStyle={tw`rounded px-2`}
                  titleStyle={tw`font-semibold text-base tracking-wider py-0.5`}
                  onPress={Continue}
                />
              </View>
              <View style={tw`px-2 mt-4 flex-row items-center`}>
                <Text style={tw`text-white mr-1`}>New to Lescerveaux?</Text>
                <Button
                  onPress={() => navigation.navigate("SignupScreen")}
                  title="SIGN UP"
                  titleStyle={tw`text-sm font-semibold`}
                  buttonStyle={tw`p-0 bg-transparent`}
                />
              </View>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </>
      );
    case 2:
      return (
        <SafeAreaView style={[tw`flex-1`, { backgroundColor: "#1A1C29" }]}>
          <Button
            icon={<ChevronLeftIcon color="black" size={20} />}
            buttonStyle={tw`rounded-full w-7 h-7 bg-white m-4`}
            onPress={Previous}
          />
          <KeyboardAvoidingView behavior="padding" style={[tw`px-2.5`]}>
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

            <View>
              <Input
                keyboardAppearance="dark"
                label="Enter your password"
                labelStyle={tw`text-white text-2xl font-semibold`}
                inputContainerStyle={[
                  tw`px-2 py-1.5 rounded border-0 mt-4`,
                  { backgroundColor: "#30343E" },
                ]}
                inputStyle={tw`text-base font-medium text-white pb-1`}
                secureTextEntry
                type="password"
                placeholder="Password"
                placeholderTextColor="#A2A3A6"
                value={password}
                onSubmitEditing={login}
                onChangeText={(text) => setPassword(text)}
              />
              <Text style={tw`text-white px-2 -mt-4 text-xs mb-6`}>
                (case sensitive)
              </Text>

              <View>
                <Button
                  title="LOG IN"
                  onPress={login}
                  buttonStyle={tw`bg-blue-600 rounded`}
                  containerStyle={tw`rounded px-2`}
                  titleStyle={tw`font-semibold text-base tracking-wider py-0.5`}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      );
    default:
    // do nothing
  }
};

export default LoginScreen;

const styles = StyleSheet.create({});
