import React, { useState } from "react";
import { InputStandardProps } from "react-native-input-outline/src/components/InputStandard";
import { TextInput } from "../TextInput/TextInput";
import { SecretTrailing } from "./SecretTrailing";

type TextInputSecretType = InputStandardProps & {};

export const TextInputSecret = React.memo((props: TextInputSecretType) => {
  const { ...res } = props;
  const [show, setShow] = useState<boolean>(false);

  return (
    <TextInput
      {...res}
      secureTextEntry={show}
      trailingIcon={() => <SecretTrailing show={show} setShow={setShow} />}
    />
  );
});
