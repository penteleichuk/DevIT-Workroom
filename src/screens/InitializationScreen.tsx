import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ScreenContainer } from "../components";
import { RootStackParamList } from "../routes/Navigation";
import { Database } from "../services/database";

type InitializationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Initialization"
>;

export const InitializationScreen = ({
  navigation,
}: InitializationScreenProps) => {
  useEffect(() => {
    try {
      Database.createTabel().then(() => {
        navigation.replace("Login");
      });

      Database.registration({
        name: "vasile",
        position: "front",
        email: "vasyok@mail.ru",
        password: "380958301730",
        phone: "380958301730",
        skype: "vasyok28",
      });
    } catch (error) {}
  }, []);

  return (
    <ScreenContainer>
      <View></View>
    </ScreenContainer>
  );
};
