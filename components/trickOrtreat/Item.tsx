import Image from "next/image";
import React from "react";
import Cart from "../Cart";

type item = {
  name: string;
  category: string;
  img: string;
  price: string;
};

type Props = {
  data: item;
};

function Item({ data }: Props) {
  return (
    <div className="flex flex-col p-4 bg-gradient-to-b from-content-start to-content-end items-center rounded-xl text-white relative overflow-hidden content">
      <div className="w-24 h-24 relative mb-3 img-content transition">
        <Image src={`/images/${data.img}`} layout="fill" alt={`${data.name}`} />
      </div>
      <p className="text-lg font-bold">{data.name}</p>
      <p className='text-sm opacity-60 mb-2'>{data.category}</p>
      <p className="text-lg font-bold">$ {data.price}</p>
        <Cart />
    </div>
  );
}

export default Item;
