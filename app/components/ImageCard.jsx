import Image from "next/image";
import React from "react";
import Button from "./Button";

const ImageCard = ({img, year, title_1, title_2, price, engine,id}) => {
  return (
    <div className="cursor-pointer hover:rounded-xl hover:bg-blue-700 ease-in-out duration-500 group max-w-lg mx-auto my-10 text-center flex flex-col items-center justify-center min-h-[500px] hover:shadow-xl gap-1">
      <Image
        src={img}
        width={400}
        height={700}
        className="group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:scale-125 ease-in-out duration-1000"
        alt={`${title_1} ${title_2}`}
        loading="lazy"
      />
      <span className="mx-6 ease-in-out duration-300 group-hover:text-white flex items-start justify-between lg:w-[500px]">
        <span className="flex flex-col items-start justify-center">
          <h4 className="font-bold text-2xl text-blue-700 group-hover:text-white flex items-center gap-x-2">
            <span className="">{title_1}</span>
            <span className="">{title_2}</span>
          </h4>
          <span className=" duration-300 ease-in-out">{year}</span>
        </span>
        <span className="flex flex-col items-end justify-center">
          <span className=" duration-300 ease-in-out">{price}</span>
          <span className=" duration-300 ease-in-out">
            {engine}
          </span>
          <Button
            title={"More Details"}
            textColor={"text-white group-hover:text-blue-700 group-hover:translate-y-5 duration-500"}
            bgColor={"bg-blue-700 group-hover:bg-white"}
            link={`cars/${title_1}`}
          />
        </span>
      </span>
    </div>
  );
};

export default ImageCard;
