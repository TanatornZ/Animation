import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import {home} from '../../Json/home';
type Props = {};

function Home({}: Props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  console.log(home)
  return (
    <div >
      
      <Slider {...settings}>  
          {home.map((item) => (<Slide key={item.id} data={item}/>))}
      </Slider>
    </div>
  );
}

export default Home;
