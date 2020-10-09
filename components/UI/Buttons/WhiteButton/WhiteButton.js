import React from "react";
import styles from "./WhiteButton.module.css";
import { buttonFontStyle } from '../../../../constants';

const WhiteButton = (props) => {
  return <button styles={buttonFontStyle} className={props.border ? styles.WhiteButton__withBorder: styles.WhiteButton}>{props.name}</button>;
};

export default WhiteButton;
