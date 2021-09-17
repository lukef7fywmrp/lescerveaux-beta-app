import { StatusBar } from "expo-status-bar";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import tw from "tailwind-react-native-classnames";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import Plans from "../components/Plans";

const SignupScreen = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const Continue = () => {
    setStep(step + 1);
  };

  const Previous = () => {
    setPassword("");
    setStep(step - 1);
  };

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          // Access the first name of the user
          displayName: username.split(" ")[0],
        });
        setStep(step + 1);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  switch (step) {
    case 1:
      return (
        <>
          <SafeAreaView style={[tw`flex-1`, { backgroundColor: "#1A1C29" }]}>
            <StatusBar style="light" />
            <Button
              icon={<ChevronLeftIcon color="black" size={20} />}
              containerStyle={tw`absolute my-8 mx-4`}
              buttonStyle={[tw`rounded-full w-7 h-7 bg-white`]}
              onPress={navigation.goBack}
            />
            <Text
              style={[
                tw`text-white uppercase text-center my-5`,
                { color: "gray", fontSize: 11, letterSpacing: 1 },
              ]}
            >
              Step {step} of 4
            </Text>

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
                  autoCompleteType="username"
                  label="Enter your username"
                  labelStyle={tw`text-white text-2xl font-semibold`}
                  inputContainerStyle={[
                    tw`px-2 py-1.5 rounded border-0 mt-4`,
                    { backgroundColor: "#30343E" },
                  ]}
                  inputStyle={tw`text-base font-medium text-white pb-1 border-0`}
                  autoFocus
                  placeholder="Username"
                  placeholderTextColor="#A2A3A6"
                  secureTextEntry={false}
                  value={username}
                  onChangeText={(text) => setUsername(text)}
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
                <Text style={tw`text-white mr-1`}>Already a member?</Text>
                <Button
                  onPress={() => navigation.navigate("LoginScreen")}
                  title="Log In"
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
          <StatusBar style="light" />
          <Button
            icon={<ChevronLeftIcon color="black" size={20} />}
            containerStyle={tw`absolute my-8 mx-4`}
            buttonStyle={[tw`rounded-full w-7 h-7 bg-white`]}
            onPress={Previous}
          />
          <Text
            style={[
              tw`text-white uppercase text-center my-5`,
              { color: "gray", fontSize: 11, letterSpacing: 1 },
            ]}
          >
            Step {step} of 4
          </Text>

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
                keyboardType="email-address"
                autoCompleteType="email"
                label="Enter your email address"
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
          </KeyboardAvoidingView>
        </SafeAreaView>
      );
    case 3:
      return (
        <SafeAreaView style={[tw`flex-1`, { backgroundColor: "#1A1C29" }]}>
          <Button
            icon={<ChevronLeftIcon color="black" size={20} />}
            containerStyle={tw`absolute my-8 mx-4`}
            buttonStyle={[tw`rounded-full w-7 h-7 bg-white`]}
            onPress={Previous}
          />
          <Text
            style={[
              tw`text-white uppercase text-center my-5`,
              { color: "gray", fontSize: 11, letterSpacing: 1 },
            ]}
          >
            Step {step} of 4
          </Text>
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
                autoCompleteType="password"
                label="Create a password"
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
                onChangeText={(text) => setPassword(text)}
              />
              <Text
                style={[
                  tw`text-white px-2 pl-3.5 -mt-5 mb-6 text-gray-400 leading-4`,
                  { fontSize: 11 },
                ]}
              >
                Use a minimum of 6 characters (case sensitive) with at least one
                number or special character.
              </Text>

              <View style={tw`pl-3 border-l-2 ml-3 border-gray-600 my-4 mb-8`}>
                <Text style={[tw`text-gray-400 font-medium`]}>
                  You'll be using this email address to log in:
                </Text>
                <Text style={tw`text-white font-medium mt-1.5 text-base`}>
                  {email}
                </Text>
              </View>

              <View>
                <Button
                  title="SIGN UP"
                  onPress={register}
                  buttonStyle={tw`bg-blue-600 rounded`}
                  containerStyle={tw`rounded px-2`}
                  titleStyle={tw`font-semibold text-base tracking-wider py-0.5`}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      );
    // case 4:
    //   return (
    //     <SafeAreaView style={[tw`flex-1`, { backgroundColor: "#1A1C29" }]}>
    //       <Text
    //         style={[
    //           tw`text-white uppercase text-center my-5`,
    //           { color: "gray", fontSize: 11, letterSpacing: 1 },
    //         ]}
    //       >
    //         Step {step} of 4
    //       </Text>

    //       <Button
    //         title="Cancel"
    //         titleStyle={tw`text-sm`}
    //         containerStyle={tw`absolute top-9 right-4`}
    //         buttonStyle={[tw` bg-transparent p-0`]}
    //         onPress={Previous}
    //       />
    //       <View style={tw`border-t border-gray-600 -mt-1`} />
    //       <Plans />
    //     </SafeAreaView>
    //   );
    default:
    // do nothing
  }
};

export default SignupScreen;

const styles = StyleSheet.create({});
