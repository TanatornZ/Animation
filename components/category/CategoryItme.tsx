import Image from "next/image";
import React from "react";

type Props = {
    title : string ,
    description : string , 
    img : string
};

function CategoryItme({title , description , img}: Props) {
  return (
    <div className="text-center text-white">
      <div className="relative w-32 h-32 mx-auto transition-all hover:-translate-y-2">
        <Image src={`/images/${img}`} layout="fill" alt="category1" />
      </div>
      <p className="text-xl">{title}</p>
      <p className="opacity-70">
        {description}
      </p>
    </div>
  );
}

export default CategoryItme;
