import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import {
  AuthContainer,
  ScreenContainer,
  TextInput,
  TextInputSecret,
  Button,
  PressableFade,
} from "../components";
import { useForm } from "react-hook-form";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { yupResolver } from "@hookform/resolvers/yup";
import { Demensions, Render } from "../helpers";
import { RootStackParamList } from "../routes/Navigation";
import { authSchema } from "../validations/auth.validate";
import { Database, LoginRequestType, UserType } from "../services/database";
import { Storage } from "../services/storage";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // HOOK form
  const { control, handleSubmit, resetField } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(authSchema),
  });

  // Nav to reg
  const onPressRegistration = useCallback(() => {
    navigation.replace("Registration");
  }, [navigation]);

  // Log in
  const onPressSubmit = (res: LoginRequestType) => {
    setIsLoading(true);
    setError("");
    Database.login({ ...res })
      .then((res) => {
        Storage.setUser(res as UserType).then(() => {
          navigation.replace("Profile");
        });
      })
      .catch((err) => {
        setError(err);
        resetField("password");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ScreenContainer>
      <AuthContainer title="Log In To Workroom">
        <View style={styles.forms}>
          <TextInput
            editable={!isLoading}
            control={control}
            name={"email"}
            placeholder="Your Email"
          />
          <TextInputSecret
            editable={!isLoading}
            control={control}
            name={"password"}
            placeholder="Password"
          />
          <PressableFade onPress={() => {}}>
            <Text style={styles.forgot}>Forgot password ?</Text>
          </PressableFade>
        </View>
        {isLoading && <ActivityIndicator size="small" />}
        <View style={styles.action}>
          {error && <Text>{error}</Text>}
          <Button
            title="Log In"
            disabled={isLoading}
            onPress={handleSubmit(onPressSubmit)}
          />
          <View style={styles.pressable}>
            <Text style={styles.pressableInfo}>New User? </Text>
            <PressableFade onPress={onPressRegistration}>
              <Text style={styles.pressableLink}>Create Account</Text>
            </PressableFade>
          </View>
        </View>
      </AuthContainer>
    </ScreenContainer>
  );
};

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
