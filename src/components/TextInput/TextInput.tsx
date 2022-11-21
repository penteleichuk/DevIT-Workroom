import React from "react";
import { InputStandard } from "react-native-input-outline";
import { InputStandardProps } from "react-native-input-outline/src/components/InputStandard";
import { Demensions } from "../../helpers";
import { styles } from "./TextInputStyle";

type TextInputType = InputStandardProps & {};

export const TextInput = React.memo((props: TextInputType) => {
  const { ...res } = props;

  return (
    <InputStandard
      backgroundColor={"transparent"}
      inactiveColor={"#9795A4"}
      activeColor={"#9795A4"}
      fontColor={"#1F1D1D"}
      fontSize={Demensions.SECONDARY_FONT_SIZE}
      {...res}
      style={styles.input}
    />
  );
});
