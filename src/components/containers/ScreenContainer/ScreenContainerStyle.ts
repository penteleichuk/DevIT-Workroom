import { StyleSheet } from "react-native";
import { Demensions, Render } from "../../../helpers";

export const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    backgroundColor: Render.COLOR_BACKGROUND,
    paddingHorizontal: Demensions.CONTENT_HORIZONTAL_PADDING,
  },
});
