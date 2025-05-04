import ContactNav from "@/Components/ContactNav/ContactNav";
import NavBar from "@/Components/NavBar/NavBar";
import SecondFadeSlider from "@/Components/Slider/SecondFadeSlider";
import FooterSection from "@/Pages/LandingPage/FooterSection/FooterSection";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const location = useLocation();
  const isAboutPage = location.pathname.includes("/app/about");
  return (
    <div>
      <ContactNav />
      <NavBar ChangeStyles={isAboutPage} />
      <Outlet />
      <SecondFadeSlider />
      <FooterSection />
    </div>
  );
};

export default AppLayout;
