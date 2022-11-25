import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { AuthContainer, ScreenContainer } from "./../components";
import { RootStackParamList } from "../routes/Navigation";
import { Database } from "./../services/database";
import { Storage } from "./../services/storage";

type InitializationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Initialization"
>;

export const InitializationScreen = ({
  navigation,
}: InitializationScreenProps) => {
  useEffect(() => {
    Database.createTabel();
    Storage.getUser().then((res) => {
      navigation.push(res ? "Profile" : "Login");
    });
  }, []);

  return (
    <ScreenContainer>
      <AuthContainer title="Loading">
        <ActivityIndicator style={{ marginTop: "30%" }} size="large" />
      </AuthContainer>
    </ScreenContainer>
  );
};
