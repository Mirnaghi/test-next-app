import React from "react";
import "./WhiteButton.css";

const WhiteButton = (props) => {
  return <button className="WhiteButton">{props.children}</button>;
};

export default WhiteButton;
