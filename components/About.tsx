import Image from "next/image";
import React from "react";
import TitleSection from "./TitleSection";

type Props = {};

function About({}: Props) {
  return (
    <div>
      <TitleSection title1="About Halloween" title2='Night' />
      <div className="flex flex-col justify-center items-center">
          <div className='w-2/3 text-center text-white'>
            <p className='my-12 opacity-60'>
              Night of all the saints, or all the dead, is celebrated on October 31
              and it is a very fun international celebration, this celebration comes
              from ancient origins, and is already celebrated by everyone.
            </p>
            <button className="py-4 px-6 bg-orange-600 rounded-lg drop-shadow-lg ">Know more</button>
          </div>
          <div className='w-48 h-64 relative my-12' >
              <Image src='/images/about-img.png' layout="fill" alt='about' />
          </div>
      </div>
    </div>
  );
}

export default About;
