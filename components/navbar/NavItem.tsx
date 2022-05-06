import React from "react";

type Props = {};

function NavItem({}: Props) {
  const items = [
    { name: "Home", target: "#" },
    { name: "About", target: "#about" },
    { name: "Candy", target: "#trick" },
    { name: "New", target: "#new" },
  ];
  return (
    <>
      {items.map((item, index) => (
        <li className="mr-12" key={index}>
          <a href={item.target}>{item.name}</a>
        </li>
      ))}
    </>
  );
}

export default NavItem;
