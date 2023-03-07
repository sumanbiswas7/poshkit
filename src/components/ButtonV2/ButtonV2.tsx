import React, { ButtonHTMLAttributes, useState } from "react";
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
  shadowColor,
  ...restProps
}: Props) {
  const [hover, setHover] = useState(false);
  const bgColor = {
    backgroundColor: getBgColor(colorMap, background || ""),
  };
  const btnTextColor = { color };
  const btnSize = getBtnSize(btnSizeMap, size || "");
  const btnRadius = getBtnRadius(btnRadiusMap, radius || "");
  const shadowStyles: any = getShadowStyles(shadowColor || "", hover);

  const combinedStyles = {
    ...bgColor,
    ...btnSize,
    ...btnTextColor,
    ...btnRadius,
    ...shadowStyles,
  };

  const setHoverTrue = () => setHover(true);
  const setHoverFalse = () => setHover(false);

  return (
    <button
      onMouseEnter={setHoverTrue}
      onMouseLeave={setHoverFalse}
      {...restProps}
      style={combinedStyles}
      className="buttonv2-btn"
    >
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

function getShadowStyles(shadowColor: string, hoverState: boolean) {
  if (shadowColor) {
    return {
      borderColor: shadowColor,
      boxShadow: hoverState && `5px 5px 0 ${shadowColor}`,
    };
  } else return {};
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: Color | HexColorString;
  color?: HexColorString;
  shadowColor?: HexColorString;
  radius?: Size;
  size?: Size;
  label?: string;
}
