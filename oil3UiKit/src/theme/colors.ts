import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ffcf00",
  primaryBright: "#ffcf00",
  primaryDark: "#ffcf00",
  secondary: "#ffcf00",
  success: "#FFFFFF",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#383838",
  textDisabled: "#BDC2C4",
  textSubtle: "#232323",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffcf00",
  background: "#353231",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#c1af60",
  primaryDark: "#0098A1",
  tertiary: "#424242",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#FFFFFF",
  card: "#232323",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
