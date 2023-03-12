import React, { ButtonHTMLAttributes } from "react";
import "./CardV1.css";
import {
  HexColorString,
  Size,
  btnRadiusMap,
  BtnRadiusMap,
  BtnSizeMap,
  colorMap,
} from "../../constants/buttonConstants";
import { btnSizeMap } from "./constants";

export function CardV1({
  color,
  radius,
  gradient,
  children,
  backgroundColor,
  shadowColor,
  ...restProps
}: Props) {
  const btnRadius = getRadius(radius);
  const bgGradient = getBgGradient(gradient || ["#00bd6c", "#314ab6"]);
  const bgColor = {
    "--cardv1-background-color":
      colorMap[backgroundColor as keyof typeof colorMap] || backgroundColor,
  };
  const shCol = {
    "--cardv1-shadow-color":
      colorMap[shadowColor as keyof typeof colorMap] || shadowColor,
  };

  const combinedStyles: any = {
    ...btnRadius,
    ...bgGradient,
    ...shCol,
    ...bgColor,
  };

  return (
    <div style={combinedStyles} className="cardv1-card">
      <div className="cardv1-card2">{children}</div>
    </div>
  );
}

function getBgGradient(gradient: [HexColorString, HexColorString]) {
  if (gradient.length == 2) {
    const [color1, color2] = gradient;
    return {
      "--cardv1-gradient-color1": color1,
      "--cardv1-gradient-color2": color2,
    };
  } else return {};
}

function getRadius(size: Size | undefined) {
  if (size == "sm") return { "--cardv1-radius": "8px" };
  if (size == "md") return { "--cardv1-radius": "13px" };
  if (size == "lg") return { "--cardv1-radius": "25px" };
  return {};
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  radius?: Size;
  children?: React.ReactNode;
  gradient?: [HexColorString, HexColorString];
  shadowColor?: HexColorString | HexColorString;
  backgroundColor?: HexColorString | HexColorString;
}
