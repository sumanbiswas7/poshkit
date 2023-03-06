// .storybook/YourTheme.js

import { create } from "@storybook/theming";

export const dark = create({
  base: "dark",
  colorPrimary: "#314ab6",
  colorSecondary: "#00bd6c",

  appBorderColor: "#323232",
  appContentBg: "#242424",
  barBg: "#242424",
  appBg: "#1E1E1E",
  barSelectedColor: "#00bd6c",

  brandUrl: "/",
  brandImage:
    "https://res.cloudinary.com/dg4rjg58p/image/upload/v1678094199/poshkit/full-logo-light_rugofs.png",
  brandTarget: "_self",
});

export const light = create({
  base: "light",

  colorPrimary: "#314ab6",
  colorSecondary: "#00bd6c",

  brandUrl: "/",
  brandImage:
    "https://res.cloudinary.com/dg4rjg58p/image/upload/v1678093895/poshkit/full-logo-dark_lvjt5i.png",
  brandTarget: "_self",
});
