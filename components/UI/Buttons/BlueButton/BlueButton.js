import React from "react";
import styles from "./BlueButton.module.css";

const BlueButton = ({ name }) => {
  return <button className={styles.BlueButton}>{name}</button>;
};

export default BlueButton;
