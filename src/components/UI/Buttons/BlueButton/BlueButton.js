import React from "react";
import "./BlueButton.css";

const BlueButton = (props) => {
  return <button className="BlueButton">{props.children}</button>;
};

export default BlueButton;
