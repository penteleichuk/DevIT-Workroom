import React from "react";
import { styles } from "./PhoneInputStyle";
import PhoneInputNumber from "react-native-phone-number-input";
import { Demensions } from "../../helpers";
import * as Icons from "./../../assets/icons";
import { View, Text } from "react-native";

import { Controller, Control, RegisterOptions } from "react-hook-form";

type PhoneInputType = {
  placeholder: string;
  control: Control<any, any>;
  name: string;
  rules?: Pick<
    RegisterOptions,
    "maxLength" | "minLength" | "validate" | "required"
  >;
};

export const PhoneInput = React.memo((props: PhoneInputType) => {
  const { control, rules, name, placeholder } = props;

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          <Text style={[styles.placeholder, error && styles.errorColor]}>
            {placeholder}
          </Text>
          <PhoneInputNumber
            placeholder={" "}
            defaultValue={value}
            defaultCode="US"
            layout="second"
            onChangeFormattedText={onChange}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
            codeTextStyle={[styles.codeTextStyle]}
            countryPickerButtonStyle={[
              styles.countryPickerButtonStyle,
              error && styles.errorBorder,
            ]}
            textContainerStyle={[
              styles.textContainerStyle,
              error && styles.errorBorder,
            ]}
            renderDropdownImage={
              <Icons.Arrow
                width={Demensions.scale(12)}
                height={Demensions.verticalScale(8)}
              />
            }
          />
          {error && (
            <Text style={[styles.error, styles.errorColor]}>
              {error.message}
            </Text>
          )}
        </View>
      )}
      name={name}
    />
  );
});
