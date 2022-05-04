import React from "react";

type Props = {
    title1 : string ,
    title2? : string ,
};

function TitleSection({title1 , title2}: Props) {
  return (
    <div>
      <p className="text-center text-white font-bold text-3xl">
        {title1} <br /> {title2}
      </p>
    </div>
  );
}

export default TitleSection;
