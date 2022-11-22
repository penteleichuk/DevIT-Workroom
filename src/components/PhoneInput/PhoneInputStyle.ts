import { StyleSheet } from "react-native";
import { Demensions, Render } from "../../helpers";

export const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: Render.COLOR_BACKGROUND,
    height: Demensions.verticalScale(40),
  },
  placeholder: {
    marginTop: Demensions.verticalScale(40),
    marginBottom: Demensions.verticalScale(15),
    color: Render.COLOR_INPUT,
  },
  textInputStyle: {
    color: Render.COLOR_INPUT,
    fontWeight: "500",
    fontSize: Demensions.SECONDARY_FONT_SIZE,
  },
  codeTextStyle: {
    color: Render.COLOR_INPUT,
  },
  countryPickerButtonStyle: {
    backgroundColor: Render.COLOR_BACKGROUND,
    borderColor: Render.COLOR_BORDER,
    borderWidth: 1,
    borderRadius: 15,
    width: Demensions.scale(70),
  },
  textContainerStyle: {
    backgroundColor: Render.COLOR_BACKGROUND,
    borderColor: Render.COLOR_BORDER,
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: Demensions.scale(25),
  },
});
