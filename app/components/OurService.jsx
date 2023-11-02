import React from "react";
import { ourServices } from "@/_data/db";
const OurService = () => {
  return (
    <div className="my-52 max-w-[80vw] mx-auto">
      <h3 className="font-bold text-3xl text-blue-700 capitalize my-6">
        How we can serve you
      </h3>
      <div className="  max-w-[90vw] p-4 grid md:grid-cols-2 grid-cols-1
       lg:grid-cols-3 gap-6 items-start justify-between">
        {ourServices.map((serve) => (
          <div className="group duration-300 ease-in-out hover:bg-blue-700 p-10 min-h-[300px] bg-slate-300">
            <div className="">
              <h4 className="font-bold text-lg text-blue-700 group-hover:text-white">{serve.title}</h4>
              <p className="max-w-md group-hover:text-white">{serve.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
