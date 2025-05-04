import React from "react";
import styles from "./ContactNav.module.scss";
import contactIcon from "@/Assets/LandingPage/contactIcon.svg";
import mailIcon from "@/Assets/LandingPage/mailIcon.svg";
function ContactNav() {
  return (
    <div className={styles.ContactNav}>
      <div>
        <img src={contactIcon} /> +91 94140-09900{" "}
      </div>
      <div>
        <img src={mailIcon} className="px-1" /> info@ktasolutions.in
      </div>
    </div>
  );
}

export default ContactNav;
