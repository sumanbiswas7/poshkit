import React from "react";
import "./LoaderV3.css";
import {
  Color,
  colorMap,
  HexColorString,
  Size,
} from "../../constants/buttonConstants";

export function LoaderV3({
  size,
  eyeBackground,
  loading,
  eyeballColor,
}: Props) {
  const eyeBgColorStyles = {
    "--loaderv3-eye-background":
      colorMap[eyeBackground as keyof typeof colorMap] || eyeBackground,
  };
  const eyeballColorStyles = {
    "--loaderv3-eyeball":
      colorMap[eyeballColor as keyof typeof colorMap] || eyeballColor,
  };
  const sizeStyles = getSizeStyles(size || null);

  const combinedStyles: any = {
    ...eyeBgColorStyles,
    ...sizeStyles,
    ...eyeballColorStyles,
  };

  if (!loading) return null;

  return <div style={combinedStyles} className="loaderv3-eye"></div>;
}

interface Props {
  size?: Size;
  eyeBackground?: Color | HexColorString;
  eyeballColor?: Color | HexColorString;
  loading?: boolean;
}

function getSizeStyles(size: Size | null) {
  if (size == "sm") {
    return {
      "--loaderv3-eye-size": "20px",
      "--loaderv3-eyeball-size": "10px",
      "--loaderv3-eye-gap": "30px",
    };
  }
  if (size == "lg") {
    return {
      "--loaderv3-eye-size": "50px",
      "--loaderv3-eyeball-size": "25px",
      "--loaderv3-eye-gap": "60px",
    };
  }
  return {
    "--loaderv3-eye-size": "30px",
    "--loaderv3-eyeball-size": "15px",
    "--loaderv3-eye-gap": "40px",
  };
}
