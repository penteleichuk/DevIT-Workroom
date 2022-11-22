import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./AuthContainerStyle";
import * as Icons from "./../../../assets/icons";
import { Demensions } from "../../../helpers";

type AuthContainerType = {
  children: React.ReactNode;
  title: string;
};

export const AuthContainer = React.memo((props: AuthContainerType) => {
  const { children, title } = props;

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <View style={styles.header}>
        <Icons.Logo
          widt={Demensions.scale(67)}
          height={Demensions.verticalScale(90)}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
});
