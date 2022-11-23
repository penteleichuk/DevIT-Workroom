import { StyleSheet } from "react-native";
import { Demensions, Render } from "../../helpers";

export const styles = StyleSheet.create({
  codeFieldRoot: { flex: 0, justifyContent: "flex-start" },
  placeholder: {
    marginTop: Demensions.verticalScale(40),
    marginBottom: Demensions.verticalScale(15),
    color: Render.COLOR_INPUT,
  },
  cell: {
    marginRight: 25,
    width: 48,
    height: 48,
    lineHeight: 48,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Render.COLOR_BORDER,
    textAlign: "center",
    borderRadius: 15,
    fontWeight: "500",
  },
  cellError: {
    borderColor: "red",
  },
  focusCell: {
    borderColor: "#FFC612",
    color: "#1F1D1D",
  },
  error: {
    marginTop: 5,
    fontSize: 10,
  },
  errorColor: {
    color: "red",
  },
});
