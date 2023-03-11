import React, { InputHTMLAttributes } from "react";
import "./InputV2.css";
import {
  Color,
  colorMap,
  HexColorString,
  Size,
} from "../../constants/buttonConstants";

export function InputV2({
  size,
  accentColor,
  color,
  borderColor,
  ...restProps
}: Props) {
  const inputTextcolor = {
    "--inputv2-color": colorMap[color as keyof typeof colorMap] || color,
  };
  const inputAccentcolor = {
    "--inputv2-accent":
      colorMap[accentColor as keyof typeof colorMap] || accentColor,
  };
  const inputBordercolor = {
    "--inputv2-border-accent":
      colorMap[borderColor as keyof typeof colorMap] || borderColor,
  };

  const inputSize = getSizeStyles(size || null);

  const combinedStyles: any = {
    ...inputTextcolor,
    ...inputAccentcolor,
    ...inputBordercolor,
    ...inputSize,
  };

  return (
    <div style={combinedStyles} className="inputv2-input-container">
      <input
        {...restProps}
        placeholder="Name"
        className="inputv2-input"
        type="text"
        id="input"
      />
      <label htmlFor="input" className="inputv2-label">
        Name
      </label>
    </div>
  );
}

function getSizeStyles(size: Size | null) {
  if (size == "sm") {
    return {
      "--inputv2-font-size": "12px",
      "--inputv2-label-font-size": "10px",
      "--inputv2-padding": "9px",
    };
  }
  if (size == "lg") {
    return {
      "--inputv2-font-size": "25px",
      "--inputv2-label-font-size": "15px",
      "--inputv2-padding": "15px",
    };
  }
  return {};
}

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: Size;
  color?: Color | HexColorString;
  accentColor?: Color | HexColorString;
  borderColor?: Color | HexColorString;
}
