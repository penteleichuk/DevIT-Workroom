import React from "react";
import { View, Text } from "react-native";
import { AuthContainer, ScreenContainer } from "../components";

export const LoginScreen = React.memo(() => {
  return (
    <ScreenContainer>
      <AuthContainer>
        <View>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      </AuthContainer>
    </ScreenContainer>
  );
});
