import Image from "next/image";
import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Element from "./Element";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="text-white mt-24 relative overflow-hidden px-5 ">
      <div className="max-w-4xl  md:flex justify-around mx-auto ">
        <div className="flex flex-col mr-5">
          <div className="flex ">
            <div className="w-5 h-5 relative">
              <Image src="/images/logo.png" layout="fill" alt="logo" />
            </div>
            <p className="ml-3">Halloween</p>
          </div>
          <p className="mt-3 opacity-60">
            Enjoy the scariest night <br /> of your life.
          </p>
          <div className="flex mt-7">
            <div className="bg-gradient-to-b from-content-start to-content-end p-2 rounded-lg">
              <FaFacebookF />
            </div>
            <div className="bg-gradient-to-b from-content-start to-content-end p-2 rounded-lg mx-3">
              <AiOutlineInstagram />
            </div>
            <div className="bg-gradient-to-b from-content-start to-content-end p-2 rounded-lg">
              <AiOutlineTwitter />
            </div>
          </div>
        </div>
        <Element
          title="About"
          description1="About Us"
          description2="Features"
          description3="News"
        />
        <Element
          title="Our Services"
          description1="Pricing"
          description2="Discounts"
          description3="Shipping mode"
        />
        <Element
          title="Our Company"
          description1="Blog"
          description2="About us"
          description3="Our mision"
        />
      </div>
      <p className="text-center py-8 opacity-60">&#169; Timoleon</p>
      <div className="absolute top-3 -right-8 w-24 h-48 transition-all duration-300 hover:top-0">
        <Image src="/images/footer1-img.png" layout="fill" alt="footer1" />
      </div>
      <div className="absolute w-36 h-48 bottom-10 right-12 transition-all duration-300 hover:bottom-16 lg:-left-12 md:left-40">
        <Image src="/images/footer2-img.png" layout="fill" alt="footer2" />
      </div>
    </div>
  );
}

export default Footer;
