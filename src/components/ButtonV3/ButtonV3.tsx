import React, { ButtonHTMLAttributes, useState } from "react";
import "./ButtonV3.css";
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

export function ButtonV3({
  background,
  size,
  color,
  radius,
  label,
  ...restProps
}: Props) {
  const [hover, setHover] = useState(false);
  const bgCol = getBgColor(colorMap, background || "");
  const bgColor = { backgroundColor: bgCol };
  const btnTextColor = { color };
  const btnSize = getBtnSize(btnSizeMap, size || "");
  const btnRadius = getBtnRadius(btnRadiusMap, radius || "");
  const hoverStyle = getHoverGlowStyle(hover, bgCol || "#00bd6c");

  const combinedStyles = {
    ...bgColor,
    ...btnSize,
    ...btnTextColor,
    ...btnRadius,
    ...hoverStyle,
  };

  const setHoverTrue = () => setHover(true);
  const setHoverFalse = () => setHover(false);

  return (
    <button
      onMouseEnter={setHoverTrue}
      onMouseLeave={setHoverFalse}
      {...restProps}
      style={combinedStyles}
      className="buttonv3-btn"
    >
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

function getHoverGlowStyle(hoverState: boolean, bgCol: string) {
  if (hoverState) {
    return {
      boxShadow: `0 0 4px ${bgCol}, 0 0 10px ${bgCol}, 0 0 20px ${bgCol}, 0 0 20px ${bgCol}`,
    };
  } else return {};
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: Color | HexColorString;
  color?: HexColorString;
  radius?: Size;
  size?: Size;
  label?: string;
}
