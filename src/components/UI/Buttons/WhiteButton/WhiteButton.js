import React from "react";
import "./WhiteButton.css";
import { buttonFontStyle } from '../../../../constants';

const WhiteButton = (props) => {
  return <button style={buttonFontStyle} className="WhiteButton">{props.name}</button>;
};

export default WhiteButton;
