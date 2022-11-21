import { Dimensions } from "react-native";

import {
  scale as SCALE,
  verticalScale as VERTICAL_SCALE,
  moderateScale as MODERATE_SCALE,
} from "react-native-size-matters";

// Will return a linear scaled result of the provided size, based on your device's screen width. (width)
export const scale = SCALE;

// Will return a linear scaled result of the provided size, based on your device's screen height. (height)
export const verticalScale = VERTICAL_SCALE;

// Sometimes you don't want to scale everything in a linear manner, that's where moderateScale comes in.
// The cool thing about it is that you can control the resize factor (default is 0.5).
// If normal scale will increase your size by +2X, moderateScale will only increase it by +X, for example: (padding)
export const moderateScale = MODERATE_SCALE;

export const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

// SIZE
export const CONTENT_HORIZONTAL_PADDING = scale(32);

// TEXT
export const ACCENT_FONT_SIZE = scale(24);
export const PRIMARY_FONT_SIZE = scale(14);
export const SECONDARY_FONT_SIZE = scale(16);
export const TERTIARY_FONT_SIZE = scale(18);

// BORDER RADIUS
export const BUTTON_RADIUS = scale(20);