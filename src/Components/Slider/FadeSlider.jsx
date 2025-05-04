import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { firstSliderData } from "@/Data/LandingPage";
import "./FadeSlider.scss"
function FadeSlider() {
  const settings = {
    fade:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          firstSliderData.map((data,index)=>(
            <div className="firstSliderImg">
              <img src={data} key={index} />
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default FadeSlider;
