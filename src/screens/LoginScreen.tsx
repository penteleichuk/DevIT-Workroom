import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import {
  AuthContainer,
  ScreenContainer,
  TextInput,
  TextInputSecret,
  Button,
} from "../components";
import { Demensions, Render } from "../helpers";

export const LoginScreen = React.memo(() => {
  return (
    <ScreenContainer>
      <AuthContainer title="Log In To Workroom">
        <View style={styles.form}>
          <TextInput placeholder="Your Email" />
          <TextInputSecret placeholder="Password" />
          <Pressable>
            <Text style={styles.forgot}>Forgot password ?</Text>
          </Pressable>
        </View>
        <View style={styles.action}>
          <Button title="Log In" />
          <View style={styles.pressable}>
            <Text style={styles.pressableInfo}>New User? </Text>
            <Pressable>
              <Text style={styles.pressableLink}>Create Account</Text>
            </Pressable>
          </View>
        </View>
      </AuthContainer>
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({
  forgot: {
    textAlign: "right",
    marginTop: Demensions.moderateScale(20),
    color: Render.COLOR_INPUT,
    fontSize: Demensions.PRIMARY_FONT_SIZE,
  },
  form: {},
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
