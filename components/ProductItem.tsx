import Image from "next/image";
import React from "react";
import Button from "./Button";
import Cart from "./Cart";

type item = {
  name: string;
  category: string;
  img: string;
  price: number;
  discount?: number;
};

type Props = {
  data: item;
  isArrival?: boolean;
};

function Item({ data, isArrival }: Props) {
  return (
    <div
      className={`flex flex-col p-4 bg-gradient-to-b from-content-start to-content-end items-center rounded-3xl text-white relative overflow-hidden content ${
        isArrival ? "mx-2" : ""
      } `}
    >
      {isArrival ? (
        <div className="bg-orange-600 p-2 rounded absolute left-3 top-3 text-sm">
          New
        </div>
      ) : (
        ""
      )}
      <div className="w-24 h-24 md:w-28 md:h-28  relative mb-3 img-content transition ">
        <Image src={`/images/${data.img}`} layout="fill" alt={`${data.name}`} />
      </div>
      <p className="text-xl font-bold">{data.name}</p>
      <p className="text-sm opacity-60 mb-2">{data.category}</p>
      <div className="flex">
        <p className="text-lg font-bold">$ {data.price}</p>
        {isArrival && (
          <p className="text-orange-600 ml-2 line-through">${data.discount}</p>
        )}
      </div>
      <Cart />
    </div>
  );
}

export default Item;
