import { StyleSheet } from "react-native";
import { Demensions, Render } from "../../helpers";

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: Render.COLOR_ACCENT,
    textAlign: "center",
    fontSize: Demensions.TERTIARY_FONT_SIZE,
    borderRadius: Demensions.BUTTON_RADIUS,
    lineHeight: Demensions.scale(27),
    paddingHorizontal: Demensions.scale(17),
    paddingVertical: Demensions.verticalScale(10),
    fontWeight: "500",
  },
});
