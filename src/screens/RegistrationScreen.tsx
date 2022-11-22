import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  ScreenContainer,
  AuthContainer,
  TextInput,
  TextInputSecret,
  PressableFade,
  Button,
  PhoneInput,
  CodeInput,
} from "../components";
import { Demensions, Render } from "../helpers";

export const RegistrationScreen = React.memo(
  ({ navigation }: NativeStackHeaderProps) => {
    const [number, setNumber] = useState("");
    const [validValue, setValidValue] = useState(false);
    const [value, setValue] = useState("");

    const onPressRegistration = useCallback(() => {
      navigation.replace("Login");
    }, [navigation]);

    return (
      <ScreenContainer>
        <AuthContainer title={"Sing Up To Workroom"}>
          <View style={styles.forms}>
            <PhoneInput
              placeholder="Phone Number"
              value={number}
              setValue={setNumber}
              setValidValue={setValidValue}
            />
            <CodeInput placeholder={"Code"} value={value} setValue={setValue} />
            <TextInput placeholder="Your Name" />
            <TextInput placeholder="Your Email" />
            <TextInputSecret placeholder="Password" />
            <TextInputSecret placeholder="Confirm Password" />
          </View>
          <View style={styles.action}>
            <Button title="Next" />
            <View style={styles.pressable}>
              <Text style={styles.pressableInfo}>Have Account? </Text>
              <PressableFade onPress={onPressRegistration}>
                <Text style={styles.pressableLink}>Log In</Text>
              </PressableFade>
            </View>
          </View>
        </AuthContainer>
      </ScreenContainer>
    );
  }
);

const styles = StyleSheet.create({
  forgot: {
    textAlign: "right",
    marginTop: Demensions.moderateScale(20),
    color: Render.COLOR_INPUT,
    fontSize: Demensions.PRIMARY_FONT_SIZE,
  },
  forms: {},
  action: {
    marginTop: Demensions.moderateScale(50),
  },
  pressable: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Demensions.moderateScale(35),
  },
  pressableInfo: {
    color: Render.COLOR_INPUT,
  },
  pressableLink: {
    color: Render.COLOR_ACCENT,
  },
});
