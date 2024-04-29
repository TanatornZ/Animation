import Image from "next/image";
import React from "react";
import Button from "./Button";
import TitleSection from "./TitleSection";
import { Fade } from "react-awesome-reveal";

type Props = {};

function Discount({}: Props) {
  return (
    <Fade>
      <div className="bg-gradient-to-b from-content-start mt-24 md:mt-32 py-12 to-content-end  rounded-3xl flex flex-col md:flex-row-reverse justify-around items-center w-[90%] max-w-4xl mx-auto overflow-hidden">
        <div className="text-center">
          <TitleSection title1="50% Discount" title2="On New Products" />
          <div className="my-5"></div>
          <Button text="Go to new" />
        </div>
        <div className="w-48 h-36 md:w-[350px] md:h-[250px] relative my-3">
          <Image src="/images/discount-img.png" layout="fill" alt="Discount" />
        </div>
      </div>
    </Fade>
  );
}

export default Discount;
