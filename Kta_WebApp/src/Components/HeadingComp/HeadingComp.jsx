import React from "react";
import styles from "./HeadingComp.module.scss";
const HeadingComp = ({ heading, subHeading }) => {
  return (
    <div className={styles.HeadingClass}>
      <p>{subHeading}</p>
      {heading}
    </div>
  );
};

export default HeadingComp;
