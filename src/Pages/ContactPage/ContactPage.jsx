import TopBanner from "@/Components/TopBanner/TopBanner";
import React from "react";
import bannerImg from "@/Assets/ContactPage/Get_in_touch.svg";
import styles from "./ContactPage.module.scss";
const ContactPage = () => {
  return (
    <div className={styles.container}>
      <TopBanner
        head={bannerImg}
        details="Have questions? Need expert advice? Reach out to us!"
        detailsHeading="We’re Here to Help!"
      />
    </div>
  );
};

export default ContactPage;
