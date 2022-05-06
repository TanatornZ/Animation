import React from "react";
import Button from "./Button";
import TitleSection from "./TitleSection";

type Props = {};

function NewLetter({}: Props) {
  return (
    <div className='mt-10 px-3 max-w-sm mx-auto'>
      <TitleSection title1="Our Newsletter" />
      <p className='text-white text-center my-8 opacity-60 px-5'> Promotion new products and sales. Directly to your inbox</p>
        <div className="bg-gradient-to-b from-content-start to-content-end p-4 rounded-lg flex justify-center w-full">
            <input type="email" placeholder="Enter your email" className='bg-transparent text-white focus:border-0 focus:ring-0 w-full mx-2'/>
            <Button text="Subscribe"/>
        </div>
    </div>
  );
}

export default NewLetter;