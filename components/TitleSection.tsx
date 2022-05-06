import React from "react";

type Props = {
    title1 : string ,
    title2? : string ,
    about? :boolean
};

function TitleSection({title1 , title2 ,about}: Props) {
  return (
    <div>
      <p className={`${about ? 'text-center md:text-left ' :'text-center'}  text-white font-bold text-2xl lg:text-4xl`}>
        {title1} <br /> {title2}
      </p>
    </div>
  );
}

export default TitleSection;
