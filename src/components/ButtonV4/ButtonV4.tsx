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
  label,
  ...restProps
}: Props) {
  const bgCol = getBgColor(colorMap, background || "");
  const bgColor = { backgroundColor: bgCol };
  const btnTextColor = { color };
  const btnSize = getBtnSize(btnSizeMap, size || "");

  const combinedStyles = {
    ...bgColor,
    ...btnSize,
    ...btnTextColor,
  };

  return (
    <button {...restProps} style={combinedStyles} className="buttonv4-btn">
      {label || "Button 4"}
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
  size?: Size;
  label?: string;
}
