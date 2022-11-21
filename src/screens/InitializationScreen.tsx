import React from "react";
import { View, Text } from "react-native";
import { ScreenContainer } from "../components";

export const InitializationScreen = React.memo(() => {
  return (
    <ScreenContainer>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </ScreenContainer>
  );
});
