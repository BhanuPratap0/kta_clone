import React from "react";
import styles from "./GradientButton.module.scss";
const GradientButton = ({ text, customStyles }) => {
  return (
    <div className={`${styles.GradientButton} ${customStyles}`}>
      {text}
    </div>
  );
};

export default GradientButton;
