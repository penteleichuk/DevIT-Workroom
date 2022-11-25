import { StyleSheet } from "react-native";
import { Demensions } from "../../helpers";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    height: Demensions.moderateScale(230),
  },
  title: {
    fontSize: Demensions.ACCENT_FONT_SIZE,
    fontWeight: "500",
  },
});
