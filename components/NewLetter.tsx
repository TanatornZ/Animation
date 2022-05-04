import React from "react";
import Button from "./Button";
import TitleSection from "./TitleSection";

type Props = {};

function NewLetter({}: Props) {
  return (
    <div className='mt-10'>
      <TitleSection title1="Our Newsletter" />
      <p className='text-white text-center my-8 opacity-60'> Promotion new products and sales. Directly to your inbox</p>
        <div className="bg-gradient-to-b from-content-start to-content-end p-5 rounded-lg flex">
            <input type="email" placeholder="Enter your email" className='bg-transparent '/>
            <Button text="Subscribe"/>
        </div>
    </div>
  );
}

export default NewLetter;
