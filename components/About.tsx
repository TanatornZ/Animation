import Image from "next/image";
import React from "react";
import Button from "./Button";
import TitleSection from "./TitleSection";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";

type Props = {};

function About({}: Props) {
  return (
    <Fade>
      <Element name="about">
        <div className="md:flex justify-around max-w-4xl mx-auto pt-16 px-5 items-center overflow-hidden">
          <div className="ml-5">
            <TitleSection title1="About Halloween" title2="Night" about />
            <div className="flex flex-col justify-center w-full items-center md:items-start">
              <div className="text-center md:text-left text-white w-1/2">
                <p className="my-12 opacity-60 w-full">
                  Night of all the saints, or all the dead, is celebrated on
                  October 31 and it is a very fun international celebration,
                  this celebration comes from ancient origins, and is already
                  celebrated by everyone.
                </p>
                <Button text="Know more" />
              </div>
            </div>
          </div>
          <div className="w-48 h-64 md:w-[600px] md:h-[350px] relative my-12 mx-auto">
            <Image src="/images/about-img.png" layout="fill" alt="about" />
          </div>
        </div>
      </Element>
    </Fade>
  );
}

export default About;
