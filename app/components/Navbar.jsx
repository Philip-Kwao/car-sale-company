"use client";

import React, { useState } from "react";
import { navbar } from "@/_data/db";
import { useRouter } from "next/navigation";
import Logo from "./Logo";

import { BsFillCarFrontFill } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // alert(nav);
  };

  const router = useRouter();
  return (
    <div className="flex lg:items-center items-start justify-between p-4">
      <Logo />
      <ul className="hidden lg:flex items-center justify-around gap-x-4">
        {navbar.map((nav) => (
          <li
            className="uppercase cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
            onClick={() => router.push(`/${nav.title}`)}
          >
            {nav.title}
          </li>
        ))}
      </ul>
      {nav === true ? (
        <div className="">
          <ul className="flex flex-col lg:hidden items-start justify-between gap-y-4">
            {navbar.map((nav) => (
              <li
                className="uppercase cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
                onClick={() => router.push(`/${nav.title}`)}
              >
                {nav.title}
              </li>
            ))}
          <span className="text-xl lg:hidden hover:text-red-700 duration-300 ease-in-out flex items-end justify-end cursor-pointer" onClick={handleNav}>
            <FaXmark />
          </span>
          </ul>
        </div>
      ) : (
        <>
          <span className="lg:hidden text-xl hover:text-blue-700 duration-300 ease-in-out cursor-pointer" onClick={handleNav}>
            <BsFillCarFrontFill />
          </span>
        </>
      )}
    </div>
  );
};

export default Navbar;
