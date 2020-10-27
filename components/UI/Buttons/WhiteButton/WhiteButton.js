import React from "react";
import styles from "./WhiteButton.module.css";
import { buttonFontStyle } from '../../../../constants';

const WhiteButton = ({name, border, handleClick}) => {
  return <button styles={buttonFontStyle} className={border ? styles.WhiteButton__withBorder: styles.WhiteButton} onClick={handleClick}>{name}</button>;
};

export default WhiteButton;
