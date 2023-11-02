import Cars from "@/app/components/Cars";
import Gallery from "@/app/components/Gallery";
import Image from "next/image";
import React from "react";

const page = ({ params }) => {
  console.log(params.carId);
  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-center font-bold text-blue-700 uppercase">
        All about {params.carId}
      </h1>

      <div className="max-w-[90vw] mx-auto">
        <Image
          src={`https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/camry/xse/2548/2pt/36/5.png?fm=png&w=930&q=90`}
          width={900}
          height={900}
          alt="image"
          priority
        />
        <p className="my-20 bg-blue-700 text-white p-5 border-l-8 border-slate-600">The 2023 Toyota Camry is a reliable midsize sedan known for its fuel efficiency, comfortable interior, and excellent resale value. It offers a smooth and composed ride, making it a popular choice among consumers.</p>
        <div className="flex items-end justify-between max-w-2xl">
          <div className="flex items-start justify-between flex-col">
            <h4 className="text-3xl font-bold text-blue-700 mb-2">Toyota Camry</h4>
            <span className="">Year: 2023</span>
            <span className="">Transmission: 8-speed automatic</span>
            <span className="">Horse Power: 203</span>
          </div>
          <div className="flex items-start justify-center flex-col ">
            <span className="">Tourque: 184 lb-ft</span>
            <span className="">Fuel Economy: 28 mpg city / 39 mpg highway</span>
            <span className="">Price: $25,000</span>
          </div>
        </div>
      </div>
      <div className="">
        {/* <Gallery /> */}
      </div>
    </div>
  );
};

export default page;
