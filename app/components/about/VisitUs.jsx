import Image from "next/image";
import React from "react";
import Visit from "@/app/images/visit.jpg";
import Button from "../Button";

const VisitUs = () => {
  return (
    <div className="bg-blue-700 mt-10">
        <div className="max-w-[70vw] mx-auto text-white">

      <h4 className="p-6 text-2xl font-bold">Visit Us Today</h4>
      <div className="flex items-center justify-between text-sm font-light leading-6 tracking-wide">
        <div className="max-w-lg flex flex-col gap-6">
          <span className="">
            We invite you to visit our dealership, located at [Your Address].
            Experience the difference at [Your Company Name] and discover a
            world of automotive excellence. We look forward to welcoming you and
            helping you find the vehicle of your dreams.
          </span>
          <span className="">
            For any inquiries or to schedule a test drive, please don't hesitate
            to contact us at [Your Contact Information].
          </span>
          <span className="">
            Thank you for considering [Your Company Name] as your automotive
            partner. We're here to serve you, and we can't wait to be a part of
            your car buying journey.
          </span>
          <Button title={"Send us a message"} textColor={"text-blue-700"} bgColor={"bg-white my-6"} link={"/contact"} />
        </div>
        <div className="">
          <Image src={Visit} width={500} height={500} alt="" quality={100} />
        </div>
      </div>
        </div>
    </div>
  );
};

export default VisitUs;
