import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import LandingScreen from "./screens/LandingScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import CategoryScreen from "./screens/CategoryScreen";

const Stack = createStackNavigator();

export default function App() {
  const globalScreenOptions = {
    headerStyle: {},
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
