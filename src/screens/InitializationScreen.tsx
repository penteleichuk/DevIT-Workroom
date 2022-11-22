import React, { useState } from "react";
import { View } from "react-native";
import {
  Button,
  ScreenContainer,
  TextInput,
  TextInputSecret,
} from "../components";
import { CodeInputConfirmation } from "../components/CodeInputConfirmation/CodeInputConfirmation";

export const InitializationScreen = React.memo(() => {
  const [value, setValue] = useState("");

  return (
    <ScreenContainer>
      <View>
        <TextInput placeholder="Your Email" />
        <TextInputSecret placeholder="Password" />
        <CodeInputConfirmation value={value} setValue={setValue} />
        <Button title="Log In" />
      </View>
    </ScreenContainer>
  );
});
