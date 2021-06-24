import { create } from "@storybook/theming/create";
export default create({
  base: "light",
  // colorPrimary: "#274058",
  // colorSecondary: "#497fb3",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  // textColor: "black",
  // textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "#497fb3",
  // barBg: "#274058",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "组件库",
});
