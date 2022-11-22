import React, { useState } from "react";
import { View } from "react-native";
import {
  Button,
  CodeInput,
  PhoneInput,
  ScreenContainer,
  TextInput,
  TextInputSecret,
} from "../components";

export const InitializationScreen = React.memo(() => {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState("");
  const [validValue, setValidValue] = useState(false);

  return (
    <ScreenContainer>
      <View>
        <TextInput placeholder="Your Email" />
        <TextInputSecret placeholder="Password" />
        <CodeInput value={value} setValue={setValue} />
        <PhoneInput
          value={number}
          setValue={setNumber}
          setValidValue={setValidValue}
        />
        <Button title="Log In" />
      </View>
    </ScreenContainer>
  );
});
