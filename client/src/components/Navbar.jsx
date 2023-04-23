import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-40 m-8 cursor-pointer lg:w-60 lg:h-45"
          />
        </Link>
      </div>

      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li className="mx-4 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4 cursor-pointer">
          <>
            <Link to="/market">Market</Link>
          </>
        </li>
        <li className="mx-4 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* Toggle */}
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[40vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            <li className="my-2 mx-2 text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="my-2 mx-2 text-lg">
              <Link to="/market">Market</Link>
            </li>
            <li className="my-2 mx-2 text-lg">
              <Link to="/about">About</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
