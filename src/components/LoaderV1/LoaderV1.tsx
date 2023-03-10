import React from "react";
import "./LoaderV1.css";
import {
  Color,
  colorMap,
  HexColorString,
  Size,
} from "../../constants/buttonConstants";

export function LoaderV1({ size, color, loading }: Props) {
  const colorStyles = {
    "--loaderv1-color": colorMap[color as keyof typeof colorMap] || color,
  };
  const sizeStyles = getSizeStyles(size || null);

  const combinedStyles: any = {
    ...colorStyles,
    ...sizeStyles,
  };

  if (!loading) return null;

  return (
    <div style={combinedStyles} className="loaderv1-loader">
      <div className="loaderv1-circle"></div>
      <div className="loaderv1-circle"></div>
      <div className="loaderv1-circle"></div>
      <div className="loaderv1-circle"></div>
    </div>
  );
}

interface Props {
  size?: Size;
  color?: Color | HexColorString;
  loading?: boolean;
}

function getSizeStyles(size: Size | null) {
  if (size == "sm") {
    return { "--loaderv1-dim": "1.2rem", "--loaderv1-circle_dim": "0.5rem" };
  }
  if (size == "lg") {
    return { "--loaderv1-dim": "3rem", "--loaderv1-circle_dim": "1.25rem" };
  }
  return { "--loaderv1-dim": "2rem", "--loaderv1-circle_dim": "0.85rem" };
}
