import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  InitializationScreen,
  LoginScreen,
  ProfileScreen,
  RegistrationScreen,
} from "../screens";

const screenOptions = {
  headerShown: false,
};

const stackOptions = {
  headerBackButtonMenuEnabled: false,
};

const Stack = createNativeStackNavigator();

export const Navigation = React.memo(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Registration"
        screenOptions={{ ...screenOptions }}
      >
        <Stack.Screen
          name="Initialization"
          component={InitializationScreen}
          options={{ ...stackOptions }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ ...stackOptions }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ ...stackOptions }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ ...stackOptions }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
