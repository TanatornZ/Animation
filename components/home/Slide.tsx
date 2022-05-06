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
    <div className="flex flex-col text-white ml-2 py-3 ">
      <div className="relative ">
        <div className="home__indicator"></div>
        <div className="w-60 h-64 relative my-5 mx-auto">
          <Image src={`/images/${data.img}`} layout="fill" alt="home1" />
        </div>
        <div className="absolute top-0 right-5 text-right">
          <p className="text-md">{data.detailTitle}</p>
          <p className="text-xs">{data.detailSubTitle}</p>
        </div>
      </div>
      <div>
        <p className="text-md font-bold">{data.homeSubTitle}</p>
        <p className="text-3xl font-bold py-3">
          {data.homeTitle1} <br /> {data.homeTitle2} <br />
          {data.homeTitle3}
        </p>
        <p className="opacity-70">
          {data.homeDescription}
        </p>
      </div>
      <SlideFooter />
    </div>
  );
}

export default Slide;
