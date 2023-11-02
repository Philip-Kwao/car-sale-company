import React from "react";
import OurService from "../components/OurService";
import ChooseUs from "../components/about/ChooseUs";
import GetInTouch from "../components/GetInTouch";

const page = () => {
  return (
    <div className="min-h-scree">
      <OurService />
      <ChooseUs />
      <GetInTouch />
    </div>
  );
};

export default page;
