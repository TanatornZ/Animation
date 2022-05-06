import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleSection from "../TitleSection";
import ProductItem from "../ProductItem";
import { newArrivals } from "../../Json/newArrivals";
type Props = {};

function NewArrival({}: Props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    // arrows: false,

    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerMode: false,
          arrows: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
    <div className="pt-16 px-5 lg:px-0  lg:max-w-3xl mx-auto">
      <TitleSection title1="New Arrivals" />
      <Slider {...settings} className="py-12">
        {newArrivals.map((item) => (
          <ProductItem key={item.id} data={item} isArrival />
        ))}
      </Slider>
    </div>
  );
}

export default NewArrival;
