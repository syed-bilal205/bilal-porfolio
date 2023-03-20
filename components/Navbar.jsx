import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <div className="bg-[#2d2e2e] fixed left-0 right-0 z-40 shadow-xl text-white px-8 py-4 font-semibold text-2xl flex items-center justify-between  md:justify-around ">
        <Link href={"/"} className="z-40">
          <h1 className="cursor-pointer text-3xl">SB</h1>
        </Link>
        <ul className="hidden items-center  cursor-pointer gap-8 md:flex">
          <li className="border-b-2 border-[white] text-[#20c863]">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:border-b-2 hover:border=[#20c863] hover:text-[#20c863] ease-in duration-200">
            <a href="#about">About</a>
          </li>
          <li className="hover:border-b-2 hover:border=[#20c863] hover:text-[#20c863] ease-in duration-200">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:border-b-2 hover:border=[#20c863] hover:text-[#20c863] ease-in duration-200">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:border-b-2 hover:border=[#20c863] hover:text-[#20c863] ease-in duration-200">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div onClick={handleClick} className="block md:hidden text-white z-50">
          {navbar ? (
            <AiOutlineClose size={30} className="z-40 cursor-pointer" />
          ) : (
            <GiHamburgerMenu size={30} className="z-40 cursor-pointer" />
          )}
        </div>
        <div
          className={
            navbar
              ? "fixed top-0 right-0 ease-in-out duration-700 w-[100%] h-[100%] bg-[#000] flex justify-center items-center text-4xl"
              : "fixed top-[-100%]"
          }
        >
          <ul className="flex flex-col cursor-pointer">
            <li className="hover:text-[#20c863] ease-out duration-300 pb-3">
              Home
            </li>
            <li className="hover:text-[#20c863] ease-out duration-300 pb-3">
              About
            </li>
            <li className="hover:text-[#20c863] ease-out duration-300 pb-3">
              Skills
            </li>
            <li className="hover:text-[#20c863] ease-out duration-300 pb-3">
              Projects
            </li>
            <li className="hover:text-[#20c863] ease-out duration-300">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
