import React from "react";

const OurStory = () => {
  return (
    <div className=" bg-blue-100 min-h-[40vh]">
      <div className="flex flex-col gap-x-10 lg:flex-row items-start justify-between pt-5 max-w-[80vw] mx-auto">
        <div className="">
          <h3 className="text-2xl text-blue-700 font-bold my-6">Our Story</h3>
          <p className="font-light leading-8 tracking-wide">
            Founded 2001, Dronicx Auto has a rich history of serving our
            community with top-notch automotive solutions. Our journey began
            with a passion for automobiles and a commitment to delivering
            outstanding customer service. Over the years, we've evolved into a
            prominent dealership that prides itself on integrity,
            professionalism, and a genuine love for cars.
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-blue-700 font-bold my-6">Our Mission</h3>
          <p className="font-light leading-8 tracking-wide">
            At Dronicx Auto, our mission is simple: to connect our customers
            with the perfect vehicle that suits their lifestyle and needs. We're
            not just in the business of selling cars; we're in the business of
            making dreams come true. Whether you're searching for a
            family-friendly SUV, a sleek sports car, or a reliable daily driver,
            we're here to guide you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
