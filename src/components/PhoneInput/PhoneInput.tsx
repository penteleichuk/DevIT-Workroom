import React, { useEffect, useRef, useState } from "react";
import { styles } from "./PhoneInputStyle";
import PhoneInputNumber from "react-native-phone-number-input";
import { Demensions } from "../../helpers";
import * as Icons from "./../../assets/icons";
import { useDebounce } from "../../hooks/useDebounce";
import { View, Text } from "react-native";

type PhoneInputType = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  setValidValue: (value: boolean) => void;
  setFormattedValue?: (value: string) => void;
};

export const PhoneInput = React.memo((props: PhoneInputType) => {
  const { value, placeholder, setValue, setValidValue, setFormattedValue } =
    props;
  const phoneInput = useRef<PhoneInputNumber>(null);

  const debouncedValidTerm = useDebounce(value, 250);

  useEffect(() => {
    if (debouncedValidTerm) {
      setValidValue(phoneInput.current?.isValidNumber(value) || false);
    }
  }, [debouncedValidTerm]);

  return (
    <View>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <PhoneInputNumber
        ref={phoneInput}
        placeholder={" "}
        defaultValue={value}
        defaultCode="US"
        layout="second"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue && setFormattedValue(text);
        }}
        containerStyle={styles.containerStyle}
        textInputStyle={styles.textInputStyle}
        codeTextStyle={styles.codeTextStyle}
        countryPickerButtonStyle={styles.countryPickerButtonStyle}
        textContainerStyle={styles.textContainerStyle}
        renderDropdownImage={
          <Icons.Arrow
            width={Demensions.scale(12)}
            height={Demensions.verticalScale(8)}
          />
        }
      />
    </View>
  );
});
