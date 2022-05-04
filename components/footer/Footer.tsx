import Image from "next/image";
import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Element from "./element";
type Props = {};

function Footer({}: Props) {
  return (
    <div className="text-white mt-24">
      <div className="flex">
        <div className="w-5 h-5 relative">
          <Image src="/images/logo.png" layout="fill" alt="logo" />
        </div>
        <p className="ml-3">Halloween</p>
      </div>
      <p className="mt-3 opacity-60">
        Enjoy the scariest night <br /> of your life.
      </p>

      <div className="flex my-8">
        <div className="bg-gradient-to-b from-content-start to-content-end p-3 rounded-lg">
          <FaFacebookF />
        </div>
        <div className="bg-gradient-to-b from-content-start to-content-end p-3 rounded-lg mx-3">
          <AiOutlineInstagram />
        </div>
        <div className="bg-gradient-to-b from-content-start to-content-end p-3 rounded-lg">
          <AiOutlineTwitter />
        </div>
      </div>

      <Element title='About' description1='About Us' description2='Features' description3='News' />
      <Element title='About' description1='About Us' description2='Features' description3='News' />
      <Element title='About' description1='About Us' description2='Features' description3='News' />
    </div>
  );
}

export default Footer;
