import React, { ButtonHTMLAttributes } from "react";
import "./ButtonV2.css";
import {
  btnSizeMap,
  colorMap,
  Color,
  HexColorString,
  ColorMap,
  BtnSizeMap,
  Size,
  btnRadiusMap,
  BtnRadiusMap,
} from "../../constants/buttonConstants";

export function ButtonV2({
  background,
  size,
  color,
  radius,
  label,
  ...restProps
}: Props) {
  const bgColor = {
    backgroundColor: getBgColor(colorMap, background || ""),
  };
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
    <button {...restProps} style={combinedStyles} className="buttonv2-btn">
      {label || "Button 2"}
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
