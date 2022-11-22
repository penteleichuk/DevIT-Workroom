import React from "react";
import { PressableProps, Text } from "react-native";
import { styles } from "./ButtonStyle";
import { PressableFade } from "../PressableFade/PressableFade";

type ButtonType = PressableProps & {
  title: string;
};

export const Button = React.memo((props: ButtonType) => {
  const { title, ...res } = props;

  return (
    <PressableFade {...res} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </PressableFade>
  );
});
