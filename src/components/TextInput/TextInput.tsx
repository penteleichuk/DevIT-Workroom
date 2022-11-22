import React from "react";
import { InputStandard } from "react-native-input-outline";
import { InputStandardProps } from "react-native-input-outline/src/components/InputStandard";
import { Demensions } from "../../helpers";
import { styles } from "./TextInputStyle";
import {
  Controller,
  Control,
  RegisterOptions,
} from "react-hook-form";

export type TextInputType = InputStandardProps & {
  control: Control<any, any>;
  name: string;
  rules?: Pick<
    RegisterOptions,
    "maxLength" | "minLength" | "validate" | "required"
  >;
};

export const TextInput = React.memo((props: TextInputType) => {
  const { control, name, onBlur, onChangeText, rules, ...res } = props;

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: {error} }) => (
        <InputStandard
          paddingHorizontal={0}
          backgroundColor={"transparent"}
          inactiveColor={"#9795A4"}
          activeColor={"#9795A4"}
          fontColor={"#1F1D1D"}
          fontSize={Demensions.SECONDARY_FONT_SIZE}
          {...res}
          error={error?.message}
          value={value}
          onBlur={onBlur}
          onChangeText={onChange}
          style={styles.input}
        />
      )}
      name={name}
    />
  );
});
