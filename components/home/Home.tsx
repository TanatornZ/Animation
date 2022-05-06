import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import { home } from "../../Json/home";
type Props = {};

function Home({}: Props) {
  var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  //add class to dots
  dotsClass: "button__bar",
  arrows: false,
  };

  return (
    <section id="home">
      <div className='px-5'>
        <Slider {...settings}>
          {home.map((item) => (
            <Slide key={item.id} data={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Home;
