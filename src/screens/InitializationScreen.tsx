import React from "react";
import { View } from "react-native";
import { Button, ScreenContainer, TextInput } from "../components";

export const InitializationScreen = React.memo(() => {
  return (
    <ScreenContainer>
      <View>
        <TextInput placeholder="Your Email" />
        <TextInput placeholder="Password" />
        <Button title="Log In" />
      </View>
    </ScreenContainer>
  );
});
