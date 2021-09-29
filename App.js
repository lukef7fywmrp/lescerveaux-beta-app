import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LandingScreen from "./screens/LandingScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import CategoryScreen from "./screens/CategoryScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import tw from "tailwind-react-native-classnames";
import { Avatar } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AccountScreen from "./screens/AccountScreen";
import WatchlistScreen from "./screens/WatchlistScreen";
import ResultScreen from "./screens/ResultScreen";
import DiscordScreen from "./screens/DiscordScreen";
import { HomeIcon, UserCircleIcon } from "react-native-heroicons/solid";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
  const [user] = useAuthState(auth);

  return (
    <Tab.Navigator
      barStyle={tw`bg-black bg-opacity-70 filter blur-lg`}
      activeColor="#fff"
      labeled={false}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="DiscordScreen"
        component={DiscordScreen}
        options={{
          tabBarLabel: "Discord",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="discord" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <UserCircleIcon color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}

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
            <Stack.Screen name="LandingScreen" component={LandingScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
            <Stack.Screen name="ResultScreen" component={ResultScreen} />
            <Stack.Screen name="AccountScreen" component={AccountScreen} />
            <Stack.Screen name="WatchlistScreen" component={WatchlistScreen} />
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
