import React from "react";
import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./ButtonStyle";

type ButtonType = PressableProps & {
  title: string;
};

export const Button = React.memo((props: ButtonType) => {
  const { title, ...res } = props;

  return (
    <Pressable {...res} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
});
