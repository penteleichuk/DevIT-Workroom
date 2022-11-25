import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./ScreenContainerStyle";

type ScreenContainerType = {
  children: React.ReactNode;
};

export const ScreenContainer = React.memo(
  ({ children }: ScreenContainerType) => {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar style="auto" />
          <View style={styles.container}>{children}</View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
);
