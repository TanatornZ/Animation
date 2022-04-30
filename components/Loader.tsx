import React from "react";
type Props = {};

function Loader({}: Props) {
  return (
    <div className="lds-roller " >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
