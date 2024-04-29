import React, { useRef } from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import { home } from "../../Json/home";
import { Element } from "react-scroll";
type Props = {};
import { Fade } from "react-awesome-reveal";

function Home({}: Props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dotsClass: "button__bar",
    arrows: false,
  };

  return (
    <Fade>
      <Element name="home">
        <div className="px-5 head">
          <Slider {...settings}>
            {home.map((item) => (
              <Slide key={item.id} data={item} />
            ))}
          </Slider>
        </div>
      </Element>
    </Fade>
  );
}

export default Home;
