import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-3xl font-bold">EREGO</h1>
      <ul className="hidden md:flex">
        <li className="p-4">About Us</li>
        <li className="p-4">Le mot de la direction</li>
        <li className="p-4">Blogs</li>
        <li className="p-4">Events</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "absolute left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 z-20"
            : "z-20 h-full ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">EREGO</h1>
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-600">About Us</li>
          <li className="p-4 border-b border-gray-600">
            Le mot de la direction
          </li>
          <li className="p-4 border-b border-gray-600">Blogs</li>
          <li className="p-4 border-b border-gray-600">Events</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
