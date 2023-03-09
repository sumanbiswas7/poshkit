import React from "react";
import "./SwitchV1.css";
import "./SwitchV1sm.css";
import "./SwitchV1md.css";
import { Size } from "../../constants/buttonConstants";
import { Color, HexColorString } from "../../constants/buttonConstants";

export function SwitchV1({
  size,
  onChange,
  checkedBgColor,
  uncheckedBgColor,
}: Props) {
  function handleInputChange(e: any) {
    if (onChange) onChange(e.target.checked);
  }

  const uncheckedColorCss = {
    "--switchv1-uncheckedBgColor": uncheckedBgColor || "#83d8ff",
  };
  const checkedColorCss = {
    "--switchv1-checkedBgColor": checkedBgColor || "#749dd6",
  };

  const combinedStyles: any = {
    ...uncheckedColorCss,
    ...checkedColorCss,
  };

  if (size == "sm") {
    return (
      <div className="switchv1_sm-toggleWrapper" style={combinedStyles}>
        <input
          onClick={handleInputChange}
          type="checkbox"
          className="switchv1_sm-dn"
          id="switchv1_sm-dn"
        />
        <label htmlFor="switchv1_sm-dn" className="switchv1_sm-toggle">
          <span className="switchv1_sm-toggle__handler">
            <span className="switchv1_sm-crater switchv1_sm-crater--1"></span>
          </span>
          <span className="switchv1_sm-star switchv1_sm-star--1"></span>
          <span className="switchv1_sm-star switchv1_sm-star--2"></span>
          <span className="switchv1_sm-star switchv1_sm-star--4"></span>
        </label>
      </div>
    );
  } else if (size == "md") {
    return (
      <div className="switchv1_md-toggleWrapper" style={combinedStyles}>
        <input
          onClick={handleInputChange}
          type="checkbox"
          className="switchv1_md-dn"
          id="switchv1_md-dn"
        />
        <label htmlFor="switchv1_md-dn" className="switchv1_md-toggle">
          <span className="switchv1_md-toggle__handler">
            <span className="switchv1_md-crater switchv1_md-crater--1"></span>
          </span>
          <span className="switchv1_md-star switchv1_md-star--1"></span>
          <span className="switchv1_md-star switchv1_md-star--2"></span>
          <span className="switchv1_md-star switchv1_md-star--4"></span>
        </label>
      </div>
    );
  }

  return (
    <div className="switchv1-toggleWrapper" style={combinedStyles}>
      <input
        onClick={handleInputChange}
        type="checkbox"
        className="switchv1-dn"
        id="switchv1-dn"
      />
      <label htmlFor="switchv1-dn" className="switchv1-toggle">
        <span className="switchv1-toggle__handler">
          <span className="switchv1-crater switchv1-crater--1"></span>
        </span>
        <span className="switchv1-star switchv1-star--1"></span>
        <span className="switchv1-star switchv1-star--2"></span>
        <span className="switchv1-star switchv1-star--3"></span>
        <span className="switchv1-star switchv1-star--4"></span>
        <span className="switchv1-star switchv1-star--5"></span>
        <span className="switchv1-star switchv1-star--6"></span>
      </label>
    </div>
  );
}

interface Props {
  size?: Size;
  onChange?: (darkMode: boolean) => void;
  uncheckedBgColor?: Color | HexColorString;
  checkedBgColor?: Color | HexColorString;
}
