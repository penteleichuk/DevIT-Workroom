import React, { useCallback, useMemo } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Demensions } from "../../helpers";
import * as Icons from "./../../assets/icons";

type SecretTrailingType = {
  show: boolean;
  setShow: (value: boolean) => void;
};

export const SecretTrailing = (props: SecretTrailingType) => {
  const { show, setShow } = props;

  const paramsIcon = useMemo(
    () => ({
      width: Demensions.scale(17),
      height: Demensions.verticalScale(15),
    }),
    []
  );

  const onPressHandler = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <Pressable style={styles.wrapper} onPress={onPressHandler}>
      {show ? (
        <Icons.EyeOn {...paramsIcon} />
      ) : (
        <Icons.EyeOff {...paramsIcon} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#e9e9e9",
    padding: Demensions.scale(4),
    borderRadius: 50,
    marginRight: -15,
  },
});
