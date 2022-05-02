import Image from "next/image";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import NavbarToggle from "./NavbarToggle";
type Props = {};

function Navbar({}: Props) {

    const [showMenu ,setShowMenu] = useState<boolean>(false)

    console.log(showMenu)
  return (
    <div className='block'>
        <NavbarToggle setShowMenu={setShowMenu} showMenu={showMenu}/>
        <div className="flex items-center justify-between border p-4 absolute w-full top-0">
          <div className="flex items-center">
            <Image src="/images/logo.png" width="20" height="20" alt="logo" />
            <p className="ml-2 text-xl font-medium text-white">Halloween</p>
          </div>
          <div onClick={() => setShowMenu(!showMenu)}>
            <TiThMenu className="fill-white " size={20} />
          </div>
        </div>
    </div>
  );
}

export default Navbar;
