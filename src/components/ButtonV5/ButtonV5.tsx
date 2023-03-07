import React, { ButtonHTMLAttributes } from "react";
import "./ButtonV5.css";
import {
  HexColorString,
  ColorMap,
  BtnSizeMap,
  Size,
  BtnRadiusMap,
} from "../../constants/buttonConstants";
import { btnSizeMap } from "./constants";

export function ButtonV5({ size, color, label, ...restProps }: Props) {
  const btnTextColor = { color };
  const btnSize = getBtnSize(btnSizeMap, size || "");

  const combinedStyles = {
    ...btnSize,
    ...btnTextColor,
  };

  return (
    <button {...restProps} style={combinedStyles} className="buttonv5-btn">
      {label || "Button 5"}
    </button>
  );
}

function getBgColor(colorMap: ColorMap, color: string) {
  if (color in colorMap) return colorMap[color as keyof typeof colorMap];
  else return color;
}

function getBtnSize(btnSizeMap: BtnSizeMap, size: string) {
  if (size in btnSizeMap) return btnSizeMap[size as keyof typeof btnSizeMap];
  else return btnSizeMap.md;
}

function getBtnRadius(btnRadiusMap: BtnRadiusMap, size: string) {
  if (size in btnRadiusMap)
    return btnRadiusMap[size as keyof typeof btnRadiusMap];
  else return {};
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: HexColorString;
  size?: Size;
  label?: string;
}
