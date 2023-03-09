import React, { useEffect, useRef } from "react";
import "./SwitchV2.css";
import "./SwitchV2sm.css";
import "./SwitchV2md.css";
import { Color, HexColorString, Size } from "../../constants/buttonConstants";

export function SwitchV2({
  size,
  onChange,
  handlerColor,
  checkedBgColor,
  uncheckedBgColor,
  checked,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checked) {
      (inputRef.current as HTMLInputElement).checked = true;
    }
  }, []);

  function handleInputChange(e: any) {
    if (onChange) onChange(e.target.checked);
  }

  const handlerColorCss = {
    "--switchv2-handlerColor": handlerColor || "#1d1d1d",
  };
  const uncheckedColorCss = {
    "--switchv2-uncheckedBgColor": uncheckedBgColor || "#00bd6c",
  };
  const checkedColorCss = {
    "--switchv2-checkedBgColor": checkedBgColor || "#008f51",
  };

  const combinedStyles: any = {
    ...handlerColorCss,
    ...uncheckedColorCss,
    ...checkedColorCss,
  };

  if (size == "sm") {
    return (
      <div className="switchv2-sm-toggleWrapper" style={combinedStyles}>
        <input
          ref={inputRef}
          onClick={handleInputChange}
          type="checkbox"
          className="switchv2-sm-dn"
          id="switchv2-sm-dn"
        />
        <label htmlFor="switchv2-sm-dn" className="switchv2-sm-toggle">
          <span className="switchv2-sm-toggle__handler"></span>
        </label>
      </div>
    );
  } else if (size == "md") {
    return (
      <div className="switchv2-md-toggleWrapper" style={combinedStyles}>
        <input
          ref={inputRef}
          onClick={handleInputChange}
          type="checkbox"
          className="switchv2-md-dn"
          id="switchv2-md-dn"
        />
        <label htmlFor="switchv2-md-dn" className="switchv2-md-toggle">
          <span className="switchv2-md-toggle__handler"></span>
        </label>
      </div>
    );
  }

  return (
    <div className="switchv2-toggleWrapper" style={combinedStyles}>
      <input
        ref={inputRef}
        onClick={handleInputChange}
        type="checkbox"
        className="switchv2-dn"
        id="switchv2-dn"
      />
      <label htmlFor="switchv2-dn" className="switchv2-toggle">
        <span className="switchv2-toggle__handler"></span>
      </label>
    </div>
  );
}

interface Props {
  size?: Size;
  onChange?: (darkMode: boolean) => void;
  handlerColor?: Color | HexColorString;
  uncheckedBgColor?: Color | HexColorString;
  checkedBgColor?: Color | HexColorString;
  checked?: boolean;
}
