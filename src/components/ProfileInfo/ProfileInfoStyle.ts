import { StyleSheet } from "react-native";
import { Demensions, Render } from "../../helpers";

export const styles = StyleSheet.create({
  profile: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Demensions.verticalScale(30),
  },
  headerItem: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: Demensions.TERTIARY_FONT_SIZE,
    flex: 1,
  },
  headerLogout: {
    textAlign: "right",
    color: Render.COLOR_ACCENT,
    fontSize: Demensions.SECONDARY_FONT_SIZE,
  },
  avatar: {
    position: "relative",
  },
  avatarImage: {
    width: Demensions.moderateScale(70),
    height: Demensions.moderateScale(70),
    borderRadius: Demensions.moderateScale(70),
  },
  edit: {
    position: "absolute",
    bottom: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    width: Demensions.scale(23),
    height: Demensions.scale(23),
    borderRadius: 40,
    backgroundColor: "#F3F3F3",
  },
  name: {
    marginTop: Demensions.verticalScale(10),
    fontSize: Demensions.ACCENT_FONT_SIZE,
    fontWeight: "500",
    color: "#1F1D1D",
  },
  position: {
    marginTop: Demensions.verticalScale(5),
    color: Render.COLOR_INPUT,
    fontWeight: "500",
  },
});
