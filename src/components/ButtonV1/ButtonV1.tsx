import React, { ButtonHTMLAttributes } from "react";
import "./ButtonV1.css";
import {
  HexColorString,
  Size,
  btnRadiusMap,
  BtnRadiusMap,
  BtnSizeMap,
} from "../../constants/buttonConstants";
import { btnSizeMap } from "./constants";

export function ButtonV1({
  size,
  color,
  radius,
  label,
  gradient,
  ...restProps
}: Props) {
  const btnTextColor = { color };
  const btnSize = getBtnSize(btnSizeMap, size || "");
  const btnRadius = getBtnRadius(btnRadiusMap, radius || "");
  const bgGradient = getBgGradient(gradient || ["#314ab6", "#00bd6c"]);

  const combinedStyles = {
    ...btnSize,
    ...btnTextColor,
    ...btnRadius,
    ...bgGradient,
  };

  return (
    <button {...restProps} style={combinedStyles} className="buttonv1-btn">
      {label || "Button 1"}
    </button>
  );
}

function getBgGradient(gradient: [HexColorString, HexColorString]) {
  console.log(gradient);
  if (gradient.length == 2) {
    const [color1, color2] = gradient;
    return {
      backgroundImage: `linear-gradient(100deg, ${color1} 0%, ${color2} 100%)`,
    };
  } else return {};
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
  radius?: Size;
  size?: Size;
  label?: string;
  gradient?: [HexColorString, HexColorString];
}
