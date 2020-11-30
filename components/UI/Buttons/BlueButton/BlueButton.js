import React from "react";
import styles from "./BlueButton.module.css";

const BlueButton = ({ name, onSubmit }) => {
  return <button className={styles.BlueButton} onSubmit={onSubmit}>{name}</button>;
};

export default BlueButton;
