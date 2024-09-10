import { cars } from "@/_data/db";
import Cars from "@/app/components/Cars";
import Gallery from "@/app/components/Gallery";
import GallerySlide from "@/app/components/gallery/Slider";
import Image from "next/image";
import React from "react";

const page = ({ params }) => {
  // console.log(params.carId);
  const carId = params.carId

  const carType = cars.find((car)=>car.make === carId)

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-center font-bold text-blue-700 uppercase">
        All about {carType.make}
      </h1>

      <div className="max-w-[90vw] mx-auto">
        <Image
          src={carType.image_link}
          width={900}
          height={900}
          alt={carType.make}
          priority
        />
        <p className="my-20 bg-blue-700 text-white p-5 border-l-8 border-slate-600">{carType.description}</p>
        <div className="flex items-end justify-between max-w-2xl">
          <div className="flex items-start justify-between flex-col">
            <h4 className="text-3xl font-bold text-blue-700 mb-2">Toyota Camry</h4>
            <span className="">Year: {carType.year}</span>
            <span className="">Transmission: {carType.transmission}</span>
            <span className="">Horse Power: {carType.horsepower}</span>
          </div>
          <div className="flex items-start justify-center flex-col ">
            <span className="">Tourque: {carType.torque}</span>
            <span className="">Fuel Economy: {carType.fuel_economy}</span>
            <span className="">Price: ${carType.price}</span>
          </div>
        </div>
      </div>
      <div className="">
        <GallerySlide paramsItem={params} />
      </div>
    </div>
  );
};

export default page;
