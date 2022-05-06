import Image from "next/image";
import React from "react";
import SlideFooter from "./SlideFooter";

type slideItem = {
  img : string ,
  homeTitle1 : string ,
  homeTitle2 : string ,
  homeTitle3 : string ,
  homeSubTitle : string ,
  detailSubTitle : string ,
  detailTitle : string ,
  homeDescription : string ,
}

type Props = {
  data: slideItem;
  new?: boolean;
};

function Slide({ data}: Props) {

  return (
    <div className="flex flex-col md:flex-row text-white justify-center items-center max-w-4xl mx-auto md:py-12 ">
      <div className="relative md:mr-12 md:w-1/2">
        <div className="home__indicator top-1/3 right-8 lg:bottom-0"></div>
        <div className="w-60 h-64 md:w-[18rem] md:h-[20rem] relative my-5 mx-auto">
          <Image src={`/images/${data.img}`} layout="fill" alt="home1" />
        </div>
        <div className="absolute top-0 right-0 text-right">
          <p className="text-md">{data.detailTitle}</p>
          <p className="text-xs">{data.detailSubTitle}</p>
        </div>
      </div>
      <div className="md:w-1/2 ">
        <div>
          <p className="text-md font-bold">{data.homeSubTitle}</p>
          <p className="text-4xl font-black py-3">
            {data.homeTitle1} <br /> {data.homeTitle2} <br />
            {data.homeTitle3}
          </p>
          <p className="opacity-70">
            {data.homeDescription}
          </p>
        </div>
        <SlideFooter />
      </div>
    </div>
  );
}

export default Slide;
