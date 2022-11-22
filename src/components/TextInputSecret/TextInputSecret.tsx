import React, { useState } from "react";
import { InputStandardProps } from "react-native-input-outline/src/components/InputStandard";
import { TextInput } from "../TextInput/TextInput";
import { SecretTrailing } from "./SecretTrailing";

type TextInputSecretType = InputStandardProps & {};

export const TextInputSecret = React.memo((props: TextInputSecretType) => {
  const { secureTextEntry, trailingIcon, ...res } = props;
  const [show, setShow] = useState<boolean>(true);

  return (
    <TextInput
      secureTextEntry={show}
      trailingIcon={() => <SecretTrailing show={show} setShow={setShow} />}
      {...res}
    />
  );
});
