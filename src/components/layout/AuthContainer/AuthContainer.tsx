import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./AuthContainerStyle";

type AuthContainerType = {
  children: React.ReactNode;
};

export const AuthContainer = React.memo((props: AuthContainerType) => {
  const { children, ...res } = props;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          {children}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
});
