import GradientButton from "@/Components/GradientButton/GradientButton";
import React from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.LandingPage}>
      <div className={styles.LandingLines}>
        <p className={styles.LandingLineHeadding}>
          Innovative Solutions in
          <p>Ceramics, Stone & Surface Care</p>
        </p>
        <p className={styles.LandingLineSubHeadding}>
          High-quality materials and expert solutions for durability,
          aesthetics, and protection.
          <br />
          Trusted by professionals worldwide.
        </p>
      </div>
      <GradientButton text={"Explore Our Products"} />
      <div className={styles.LandingEnding}>
        <div className="redGradient"></div>
        <img
          src="./Assets/LandingPage/KTABanner.png"
          className={styles.LandingBanner}
          width={"45%"}
          alt=""
        />
        <div className={styles.BannerPodium}></div>
      </div>
    </div>
  );
};

export default HeroSection;
