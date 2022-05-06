import Image from "next/image";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import NavbarToggle from "./NavbarToggle";
import NavItem from "./NavItem";
type Props = {};

function Navbar({}: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  const scrolled = () => {
    if (window.scrollY >= 30) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrolled);
  }

  return (
    <div className={`block sticky top-0 z-10`}>
      <NavbarToggle setShowMenu={setShowMenu} showMenu={showMenu} />
      <div
        className={`p-3 px-7 absolute w-full top-0  border-0 ${
          scroll && "bg-gradient-to-r from-content-start to-content-end "
        }`}
      >
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/logo.png" width="20" height="20" alt="logo" />
            <p className="ml-2 text-lg font-medium text-white">Halloween</p>
          </div>
          <ul className="md:flex justify-center items-center text-white leading-[3rem] text-md hidden ">
            <NavItem />
            <li className="rounded-full border-2 px-5">Support</li>
          </ul>
          <div className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
            <TiThMenu className="fill-white " size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
