"use client"
import React from "react";
import { useRouter } from "next/navigation";


const Button = ({link, title, textColor, bgColor}) => {
    const router = useRouter()
    const handleClick = (e) =>{
        router.push(`${link}`)
        e.preventDefault()
    }
  return (
    <button
      className={`px-6 py-2 cursor-pointer ease-in-out duration-500 ${bgColor} ${textColor}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
