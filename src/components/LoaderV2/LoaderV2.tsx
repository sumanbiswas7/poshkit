import React from "react";
import "./LoaderV2.css";
import {
  Color,
  colorMap,
  HexColorString,
  Size,
} from "../../constants/buttonConstants";

export function LoaderV2({ size, color, loading }: Props) {
  const colorStyles = {
    "--loaderv2-color": colorMap[color as keyof typeof colorMap] || color,
  };
  const sizeStyles = getSizeStyles(size || null);

  const combinedStyles: any = {
    ...colorStyles,
    ...sizeStyles,
  };

  if (!loading) return null;

  return <div style={combinedStyles} className="loaderv2-loader"></div>;
}

interface Props {
  size?: Size;
  color?: Color | HexColorString;
  loading?: boolean;
}

function getSizeStyles(size: Size | null) {
  if (size == "sm") {
    return { "--loaderv2-size": "1rem", "--loaderv2-stroke": "3px" };
  }
  if (size == "lg") {
    return { "--loaderv2-size": "3rem", "--loaderv2-stroke": "4px" };
  }
  return { "--loaderv2-size": "2rem", "--loaderv2-stroke": "3px" };
}
