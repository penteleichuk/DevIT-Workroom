import { StyleSheet } from "react-native";
import { Demensions, Render } from "../../helpers";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Render.COLOR_ACCENT,
    borderRadius: Demensions.BUTTON_RADIUS,
    paddingHorizontal: Demensions.scale(17),
    paddingVertical: Demensions.verticalScale(10),
  },
  text: {
    textAlign: "center",
    fontSize: Demensions.TERTIARY_FONT_SIZE,
    lineHeight: Demensions.scale(27),
    fontWeight: "500",
  },
});
