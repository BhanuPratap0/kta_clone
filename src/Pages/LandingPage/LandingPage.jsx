import React from "react";
import ContactNav from "../../Components/ContactNav/ContactNav";
import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "./HeroSection/HeroSection";
import Container from "react-bootstrap/esm/Container";
import Testimonials from "./Testimonials/Testimonials";
import ShowCaseSection from "./ShowCaseSection/ShowCaseSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import FadeSlider from "@/Components/Slider/FadeSlider";
import SecondFadeSlider from "@/Components/Slider/SecondFadeSlider";
import styles from "./LandingPage.module.scss";
import FooterSection from "./FooterSection/FooterSection";
function LandingPage() {
  return (
    <Container className={styles.Container}>
      <ContactNav />
      <NavBar />
      <HeroSection />
      <ShowCaseSection />
      <FadeSlider />
      <FeatureSection />
      <Testimonials />
      <SecondFadeSlider />
      <FooterSection />
    </Container>
  );
}

export default LandingPage;
