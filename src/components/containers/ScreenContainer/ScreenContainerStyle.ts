import { StyleSheet } from "react-native";
import { Demensions, Render } from "../../../helpers";

export const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: Render.COLOR_BACKGROUND,
    paddingHorizontal: Demensions.CONTENT_HORIZONTAL_PADDING,
    paddingTop: "5%",
  },
});
