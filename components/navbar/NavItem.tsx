import React, { useState } from "react";

type Props = {};

function NavItem({}: Props) {
  const items = [
    { name: "Home", target: "#" },
    { name: "About", target: "#about" },
    { name: "Candy", target: "#trick" },
    { name: "New", target: "#new" },
  ];
  const [active, setActive] = useState<boolean>(false);

  function scrollActive() {
    const sections = document.querySelectorAll("section[id]");

    const scrollY = window.pageYOffset;

    console.log(sections);
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  if (typeof window === undefined) {
    window.addEventListener("scroll", scrollActive);
  }
  return (
    <>
      {items.map((item, index) => (
        <li className={`mr-12 ${active && "active-link" }`} key={index}>
          <a href={item.target}>{item.name}</a>
        </li>
      ))}
    </>
  );
}

export default NavItem;
