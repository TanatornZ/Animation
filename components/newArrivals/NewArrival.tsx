import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleSection from "../TitleSection";
import ProductItem from "../ProductItem";
import { newArrivals } from "../../Json/newArrivals";
import { Element } from "react-scroll";
type Props = {};
import { Fade } from "react-awesome-reveal";

function NewArrival({}: Props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          arrows: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Fade>
      <Element name="new">
        <div className="pt-24 md:pt-32 lg:pt-24 px-5 lg:px-0  max-w-4xl mx-auto ">
          <TitleSection title1="New Arrivals" />
          <Slider {...settings} className="py-12">
            {newArrivals.map((item) => (
              <ProductItem key={item.id} data={item} isArrival />
            ))}
          </Slider>
        </div>
      </Element>
    </Fade>
  );
}

export default NewArrival;
