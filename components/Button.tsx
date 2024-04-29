import React from "react";

type Props = {
  text: string;
};

function Button({ text }: Props) {
  return (
    <button className="py-3 px-6 bg-orange-500 hover:bg-orange-600  rounded-lg drop-shadow-lg font-bold text-white">
      {text}
    </button>
  );
}

export default Button;
