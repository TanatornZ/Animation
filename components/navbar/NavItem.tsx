import React, { useState } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll,
  scrollSpy,
  scroller,
} from "react-scroll";

type Props = {};

function NavItem({}: Props) {
  const items = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Candy", target: "trick" },
    { name: "New", target: "new" },
  ];

  return (
    <>
      {items.map((item, index) => (
        <li className={`md:mr-12 cursor-pointer`} key={index}>
          <Link
            to={item.target}
            activeClass="active-link"
            spy={true}
            smooth={true}
            duration={500}
            offset={-60}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}

export default NavItem;
