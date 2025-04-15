import React from "react";
import styles from "./ContactNav.module.scss";
function ContactNav() {
  return (
    <div className={styles.ContactNav}>
      <div>
        <img src="./Assets/LandingPage/contactIcon.svg" /> +91 94140-09900{" "}
      </div>
      <div>
        <img src="./Assets/LandingPage/mailIcon.svg" className="px-1" />{" "}
        info@ktasolutions.in{" "}
      </div>
    </div>
  );
}

export default ContactNav;
