import React from "react";
import "./CardV2.css";
import {
  HexColorString,
  Size,
  colorMap,
} from "../../constants/buttonConstants";

export function CardV2({
  radius,
  height,
  width,
  backBgColor,
  frontBgColor,
  backContent,
  frontContent,
}: Props) {
  const btnRadius = getRadius(radius);
  const frontBg = {
    "--cardv2-frontbg":
      colorMap[frontBgColor as keyof typeof colorMap] || frontBgColor,
  };
  const backBg = {
    "--cardv2-backbg":
      colorMap[backBgColor as keyof typeof colorMap] || backBgColor,
  };
  const size = { width, height };

  const combinedStyles: any = {
    ...btnRadius,
    ...frontBg,
    ...backBg,
    ...size,
  };

  return (
    <div style={combinedStyles} className="cardv2-card">
      <div className="cardv2-content">
        <div className="cardv2-front">{frontContent}</div>
        <div className="cardv2-back">{backContent}</div>
      </div>
    </div>
  );
}

function getRadius(size: Size | undefined) {
  if (size == "sm") return { "--cardv2-radius": "12px" };
  if (size == "md") return { "--cardv2-radius": "20px" };
  if (size == "lg") return { "--cardv2-radius": "35px" };
  return {};
}

interface Props {
  width?: number | string;
  height?: number | string;
  radius?: Size;
  frontContent?: React.ReactNode;
  backContent?: React.ReactNode;
  frontBgColor?: HexColorString | HexColorString;
  backBgColor?: HexColorString | HexColorString;
}
