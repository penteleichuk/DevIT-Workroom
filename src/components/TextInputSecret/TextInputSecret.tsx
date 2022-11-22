import React, { useState } from "react";
import { TextInput, TextInputType } from "../TextInput/TextInput";
import { SecretTrailing } from "./SecretTrailing";

export const TextInputSecret = React.memo((props: TextInputType) => {
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
