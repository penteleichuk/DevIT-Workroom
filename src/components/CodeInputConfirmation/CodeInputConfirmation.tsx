import React from "react";
import { Text } from "react-native";
import { styles } from "./CodeInputConfirmationStyle";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

type CodeInputType = {
  value: string;
  setValue: (value: string) => void;
  cellCount?: number;
};

export const CodeInputConfirmation = React.memo((props: CodeInputType) => {
  const { value, setValue, cellCount = 4 } = props;
  const ref = useBlurOnFulfill({ value, cellCount: cellCount });

  const [onPressOut, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...onPressOut}
      value={value}
      onChangeText={setValue}
      cellCount={cellCount}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
});
