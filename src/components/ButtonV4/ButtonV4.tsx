import React, { ButtonHTMLAttributes } from "react";
import "./ButtonV4.css";
import {
  colorMap,
  Color,
  HexColorString,
  ColorMap,
  BtnSizeMap,
  Size,
  btnRadiusMap,
  BtnRadiusMap,
} from "../../constants/buttonConstants";
import { btnSizeMap } from "./constants";

export function ButtonV4({
  background,
  size,
  color,
  radius,
  label,
  ...restProps
}: Props) {
  const bgCol = getBgColor(colorMap, background || "");
  const bgColor = { backgroundColor: bgCol };
  const btnTextColor = { color };
  const btnSize = getBtnSize(btnSizeMap, size || "");
  const btnRadius = getBtnRadius(btnRadiusMap, radius || "");

  const combinedStyles = {
    ...bgColor,
    ...btnSize,
    ...btnTextColor,
    ...btnRadius,
  };

  return (
    <button {...restProps} style={combinedStyles} className="buttonv4-btn">
      {label || "Button 3"}
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
  background?: Color | HexColorString;
  color?: HexColorString;
  radius?: Size;
  size?: Size;
  label?: string;
}
