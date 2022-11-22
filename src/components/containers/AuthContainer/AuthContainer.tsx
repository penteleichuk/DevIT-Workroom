import React from "react";
import { View, Text } from "react-native";
import { styles } from "./AuthContainerStyle";
import * as Icons from "./../../../assets/icons";
import { Demensions } from "../../../helpers";

type AuthContainerType = {
  children: React.ReactNode;
  title: string;
};

export const AuthContainer = React.memo((props: AuthContainerType) => {
  const { children, title, ...res } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icons.Logo
          widt={Demensions.scale(67)}
          height={Demensions.verticalScale(90)}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.container}>{children}</View>
    </View>
  );
});
