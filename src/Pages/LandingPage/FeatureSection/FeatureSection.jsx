import GradientButton from "@/Components/GradientButton/GradientButton";
import HeadingComp from "@/Components/HeadingComp/HeadingComp";
import { featureData } from "@/Data/LandingPage";
import styles from "./FeatureSection.module.scss";
import React from "react";

const FeatureSection = () => {
  return (
    <div className={styles.FeatureSection}>
      <div className={styles.LeftSection}>
        <div className={styles.Headings}>
          <p className={styles.Heading}>Why Choose Us</p>
          <p className={styles.SubHeading}>Why KTA Solutions?</p>
        </div>
        <p className={styles.Text}>Here's why :) </p>
        <GradientButton text={"About Us"} />
      </div>
      <div className={styles.RightSection}>
        {featureData.map((feature, index) => {
          return (
            <div key={index} className={styles.FeatureCard}>
              <img src={feature.img} alt="" className="icon" />
              <div className={styles.Title}>{feature.title}</div>
              <div className={styles.Description}>{feature.description}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.LeftSectionRectangle}></div>
    </div>
  );
};

export default FeatureSection;
