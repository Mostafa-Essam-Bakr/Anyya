import React from "react";
import Slider from "react-slick";
import c1 from "../Assets/certifcate 1.jpg";
import c2 from "../Assets/certifcate 2.png";
import c3 from "../Assets/certifcate 3.png";
import c4 from "../Assets/certifcate 4.png";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slidercontainer">
      <Slider {...settings}>
        <div>
          <img src={c1} alt="no" />{" "}
        </div>
        <div>
          <img src={c2} alt="no" />{" "}
        </div>
        <div>
          <img src={c3} alt="no" />{" "}
        </div>
        <div>
          <img src={c4} alt="no" />{" "}
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
