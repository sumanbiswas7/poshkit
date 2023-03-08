import React, { AnchorHTMLAttributes, useState } from "react";
import "./SMButtonV1.css";
import {
  colorMap,
  Color,
  HexColorString,
  ColorMap,
  Size,
  BtnRadiusMap,
} from "../../constants/buttonConstants";
import { btnSizeMap, BtnSizeMap } from "./constants";

export function SMButtonV1({
  background,
  size,
  color,
  children,
  title,
  href,
  ...restProps
}: Props) {
  const [hover, setHover] = useState(false);
  const bgCol = getBgColor(colorMap, background || "");
  const bgColor = { "--bgCol": bgCol || "#00bd6c" };
  const btnTextColor = { color };
  const btnSize = getBtnSize(btnSizeMap, size || "");

  const combinedStyles = {
    ...bgColor,
    ...btnSize,
    ...btnTextColor,
  };

  return (
    <a
      {...restProps}
      style={combinedStyles}
      className="smbuttonv1-anchor"
      href={href || "https://poshkit.netlify.app/"}
    >
      <span className="smbuttonv1-span">{title || "poshkit"}</span>
      {children}
    </a>
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

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
  background?: Color | HexColorString;
  color?: HexColorString;
  size?: Size;
  children?: React.ReactNode;
}
