import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./CodeInputStyle";
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import { Controller, Control, RegisterOptions } from "react-hook-form";

type CodeInputType = {
  placeholder: string;
  control: Control<any, any>;
  name: string;
  rules?: Pick<
    RegisterOptions,
    "maxLength" | "minLength" | "validate" | "required"
  >;
  cellCount?: number;
};

export const CodeInput = React.memo((props: CodeInputType) => {
  const { placeholder, control, rules, name, cellCount = 4 } = props;

  const [text, setText] = useState("");
  const [onPressOut, getCellOnLayoutHandler] = useClearByFocusCell({
    value: text,
    setValue: setText,
  });

  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <View>
          <Text style={[styles.placeholder, !!error && styles.errorColor]}>
            {placeholder}
          </Text>
          <CodeField
            {...onPressOut}
            value={text}
            onChangeText={(text: string) => {
              onChange(text);
              setText(text);
            }}
            cellCount={cellCount}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[
                  styles.cell,
                  error && styles.cellError,
                  isFocused && styles.focusCell,
                ]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          {error && (
            <Text style={[styles.error, styles.errorColor]}>
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
});
