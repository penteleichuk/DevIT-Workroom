import { Animated, Pressable, PressableProps } from "react-native";

type PressableFadeType = PressableProps & {
  children: React.ReactNode;
};

export const PressableFade = (props: PressableFadeType) => {
  const { children, onPressIn, onPressOut, ...res } = props;

  const animated = new Animated.Value(1);

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable {...res} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View style={{ opacity: animated }}>{children}</Animated.View>
    </Pressable>
  );
};
