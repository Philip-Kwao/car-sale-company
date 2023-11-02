import React from "react";
import { chooseUs } from "@/_data/db";
import ChooseUsCard from "./ChooseUsCard";

const ChooseUs = () => {
  return (
    <div className="max-w-[80vw] mx-auto">
      <h3 className="text-3xl text-blue-700 font-bold text-center my-10">
        Why Choose Us ?
      </h3>
      <div className="flex flex-wrap justify-evenly items-center">
        {chooseUs.map((choose) => (
          <ChooseUsCard title={choose.title} detail={choose.detail} />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
