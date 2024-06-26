import React from "react";

type Props = {
  title: string;
  description1: string;
  description2: string;
  description3: string;
};

function Element({ title, description1, description2, description3 }: Props) {
  return (
    <div className="text-white lg:mr-5 ">
      <div className="font-bold my-5 md:my-0">{title}</div>
      <p className="opacity-60 ">{description1}</p>
      <p className="opacity-40 py-2">{description2}</p>
      <p className="opacity-60">{description3}</p>
    </div>
  );
}

export default Element;
