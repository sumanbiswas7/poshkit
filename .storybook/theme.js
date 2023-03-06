// .storybook/YourTheme.js

import { create } from "@storybook/theming";

export const dark = create({
  base: "dark",
  colorPrimary: "#603FEF",
  colorSecondary: "#603FEF",

  appBorderColor: "#323232",
  appContentBg: "#242424",
  barBg: "#242424",
  appBg: "#1E1E1E",
  barSelectedColor: "#7F62FD",

  brandUrl: "/",
  brandImage:
    "https://res.cloudinary.com/dg4rjg58p/image/upload/c_fill,q_100,w_100/v1670489648/slick/Group_1512_ie4czu.png",
  brandTarget: "_self",
});

export const light = create({
  base: "light",

  colorPrimary: "#603FEF",
  colorSecondary: "#603FEF",

  brandUrl: "/",
  brandImage:
    "https://res.cloudinary.com/dg4rjg58p/image/upload/c_fill,q_100,w_100/v1670489648/slick/Group_1512_ie4czu.png",
  brandTarget: "_self",
});
