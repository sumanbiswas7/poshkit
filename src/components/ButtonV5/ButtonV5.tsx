import React, { ButtonHTMLAttributes } from "react";
import "./ButtonV5.css";
import {
  HexColorString,
  BtnSizeMap,
  Color,
  Size,
  colorMap,
} from "../../constants/buttonConstants";
import { btnSizeMap } from "./constants";

export function ButtonV5({
  size,
  color,
  label,
  radius,
  background,
  ...restProps
}: Props) {
  const btnTextColor = { color };
  const btnSize = getBtnSize(btnSizeMap, size || "");
  const btnBgColor = getBgColor(background || "#fff");
  const btnRadius = getBtnRadius(radius || null);

  const combinedStyles = {
    ...btnSize,
    ...btnTextColor,
    ...btnBgColor,
    ...btnRadius,
  };

  return (
    <button {...restProps} style={combinedStyles} className="buttonv5-btn">
      {label || "Button 5"}
    </button>
  );
}

function getBgColor(color: string) {
  if (color in colorMap) {
    return {
      "--buttonv5-background": colorMap[color as keyof typeof colorMap],
    };
  } else {
    return {
      "--buttonv5-background": color,
    };
  }
}

function getBtnSize(btnSizeMap: BtnSizeMap, size: string) {
  if (size in btnSizeMap) return btnSizeMap[size as keyof typeof btnSizeMap];
  else return btnSizeMap.md;
}

function getBtnRadius(radius: "sm" | "md" | "lg" | null) {
  if (radius == "sm") {
    return { "--buttonv5-radius": "10px" };
  }
  if (radius == "lg") {
    return { "--buttonv5-radius": "100px" };
  }
  if (radius == "md") {
    return { "--buttonv5-radius": "15px" };
  }
  return { "--buttonv5-radius": "2px" };
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: HexColorString;
  background?: Color | HexColorString;
  size?: Size;
  label?: string;
  radius?: "sm" | "md" | "lg";
}
