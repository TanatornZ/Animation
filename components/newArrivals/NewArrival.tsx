import React from "react";
import Slider from "react-slick";
import TitleSection from "../TitleSection";
import ProductItem from "../ProductItem";
import { newArrivals } from "../../Json/newArrivals";
type Props = {};

function NewArrival({}: Props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 2,
    centerMode: true,
    arrows: false,
  };
  return (
    <div className="pt-16 px-5">
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
