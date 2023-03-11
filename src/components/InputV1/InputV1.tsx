import React, { InputHTMLAttributes } from "react";
import "./InputV1.css";
import {
  Color,
  colorMap,
  HexColorString,
  Size,
} from "../../constants/buttonConstants";

export function InputV1({
  size,
  accentColor,
  background,
  color,
  radius,
  borderColor,
  ...restProps
}: Props) {
  const inputBgcolor = {
    "--inputv1-background":
      colorMap[background as keyof typeof colorMap] || background,
  };
  const inputTextcolor = {
    "--inputv1-color": colorMap[color as keyof typeof colorMap] || color,
  };
  const inputAccentcolor = {
    "--inputv1-accent":
      colorMap[accentColor as keyof typeof colorMap] || accentColor,
  };
  const inputBordercolor = {
    "--inputv1-border-accent":
      colorMap[borderColor as keyof typeof colorMap] || borderColor,
  };

  const inputRadius = getRadiusStyles(radius || null);
  const inputSize = getSizeStyles(size || null);

  const combinedStyles: any = {
    ...inputBgcolor,
    ...inputTextcolor,
    ...inputAccentcolor,
    ...inputBordercolor,
    ...inputRadius,
    ...inputSize,
  };

  return (
    <div style={combinedStyles} className="inputv1-input-container">
      <input
        {...restProps}
        placeholder="Name"
        className="inputv1-input"
        type="text"
        id="input"
      />
      <label htmlFor="input" className="inputv1-label">
        Name
      </label>
    </div>
  );
}

function getSizeStyles(size: Size | null) {
  if (size == "sm") {
    return {
      "--inputv1-font-size": "12px",
      "--inputv1-label-font-size": "10px",
      "--inputv1-padding": "9px",
    };
  }
  if (size == "lg") {
    return {
      "--inputv1-font-size": "25px",
      "--inputv1-label-font-size": "15px",
      "--inputv1-padding": "15px",
    };
  }
  return {};
}

function getRadiusStyles(radius: Size | null) {
  if (radius == "sm") {
    return {
      "--inputv1-radius": "7px",
    };
  }
  if (radius == "md") {
    return {
      "--inputv1-radius": "12px",
    };
  }
  if (radius == "lg") {
    return {
      "--inputv1-radius": "20px",
    };
  }
  return {};
}

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Size;
  radius?: Size;
  background?: Color | HexColorString;
  color?: Color | HexColorString;
  accentColor?: Color | HexColorString;
  borderColor?: Color | HexColorString;
}
