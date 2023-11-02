import React from "react";
import Logo from "./Logo";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="min-h-[5vw] w-full bg-black flex items-center justify-between px-6">
      <div className="text-sm">
        <Logo textColor={"text-white"} />
      </div>
      <div className="">
        <span className="text-white font-light text-xs">Copyright reserved 2023</span>
      </div>
      <div className="flex items-center  text-white">
        <Social />
      </div>
    </div>
  );
};

export default Footer;
