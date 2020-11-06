import React from "react";
import styles from "./SideBarButton.module.css";

const SideBarButton = ({name, handleClick}) => {
 
  return <button className={styles.SideBarButton} onClick={handleClick}>{name}</button>;
  
};

export default SideBarButton;