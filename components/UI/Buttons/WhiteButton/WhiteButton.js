import React from "react";
import styles from "./WhiteButton.module.css";
import {buttonFontStyle} from '../../../../constants';

const WhiteButton = ({name, border, handleClick}) => {
 
  return <button styles={buttonFontStyle} className={name === "LOG OUT" ? styles.logout : border ? styles.WhiteButton__withBorder: styles.WhiteButton} onClick={handleClick}>{name}</button>;
  
};

export default WhiteButton;
