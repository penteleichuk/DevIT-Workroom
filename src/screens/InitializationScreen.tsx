import React, { useState } from "react";
import { View } from "react-native";
import {
  Button,
  CodeInput,
  ScreenContainer,
  TextInput,
  TextInputSecret,
} from "../components";

export const InitializationScreen = React.memo(() => {
  const [value, setValue] = useState("");

  return (
    <ScreenContainer>
      <View>
        <TextInput placeholder="Your Email" />
        <TextInputSecret placeholder="Password" />
        <CodeInput value={value} setValue={setValue} />
        <Button title="Log In" />
      </View>
    </ScreenContainer>
  );
});
