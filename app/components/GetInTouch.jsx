import Image from "next/image";
import React from "react";
import Guy from "@/app/images/guy_on_car.jpg";
import Button from "./Button";
import Social from "./Social";

const GetInTouch = () => {
  return (
    <div className="min-h-[30vh] md:max-h-[30vh] w-full bg-blue-700 ">
      <div className="max-w-[70vw] flex items-center justify-around mx-auto">
        <Image
          src={Guy}
          width={300}
          height={300}
          alt=""
          loading="lazy"
          className="hidden md:flex object-cover w-[400px]  h-[300px] -mt-2 shadow-blue-700 shadow-inner left-32 rounded-2xl"
          quality={100}
        />
        <div className="max-w-[90vw] mt-20 lg:mt-0   mx-auto">
          <span className="">
            <Button
              title={"Get in touch with us now"}
              textColor={"text-blue-700"}
              bgColor={"bg-white hover:bg-slate-100"}
            />
          </span>
          <span className="flex my-5 text-lg font-bold text-white items-center justify-around">
            <Social />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
