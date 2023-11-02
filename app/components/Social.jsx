import React from "react";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Social = () => {
  return (
    <>
      <span className="cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-blue-700 p-2 rounded-full">
        <FaXTwitter />
      </span>
      <span className="cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-blue-700 p-2 rounded-full">
        <FaLinkedinIn />
      </span>
      <span className="cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-blue-700 p-2 rounded-full">
        <FaInstagram />
      </span>
    </>
  );
};

export default Social;
