import React from "react";
import Social from "../components/Social";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";

const page = () => {
  return (
    <div className="min-h-screen max-w-[80vw] mx-auto">
      <div className="flex lg:flex-row flex-col items-center justify-between">
        <div className="flex lg:basis-1/2 flex-col gap-6 items-start justify-center">
          <h1 className="text-3xl font-extrabold text-blue-700">
            We want to here from you
          </h1>
          <p className="font-light text-sm text-slate-600 tracking-wide leading-7">
            Have a question, need assistance, or looking to connect with our
            team? We're here to help. Feel free to reach out to us through the
            following channels:
          </p>
          <div className="flex">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <span className="flex flex-col items-start justify-center">
                  <h4 className="text-lg font-bold text-blue-700 my-2">General Inquiries</h4>
                  <span className="">Phone: [Your Phone Number]</span>
                  <span className="">Email: [Your Email Address]</span>
                  <span className="">Address: [Your Physical Address]</span>
                </span>
                <span className="flex flex-col items-start justify-center">
                  <h4 className="text-lg font-bold text-blue-700 my-2">Sales Department</h4>
                  <span className="">Phone: [Sales Number]</span>
                  <span className="">Email: [Sales Email Address]</span>
                  <span className="">Address: [Your Physical Address]</span>
                </span>
                <span className="flex flex-col items-start justify-center">
                  <h4 className="text-lg font-bold text-blue-700 my-2">Finance & Leasing</h4>
                  <span className="">Phone: [Your Finance Number]</span>
                  <span className="">Email: [Your Finance Address]</span>
                </span>
              </div>
              <div className="">
                {" "}
                <span className="">
                  <h4 className="text-lg font-bold text-blue-700 my-2">Business Hours</h4>
                  <div className="flex flex-col items-start justify-center">
                    <span className="">Monday - Friday: [Opening Hours]</span>
                    <span className="">Saturday: [Opening Hours]</span>
                    <span className="">Sunday: [Opening Hours]</span>
                  </div>
                </span>
                <span className="">
                  <h4 className=""></h4>
                </span>
                <span className="flex items-center justify-start">
                  <Social />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
      <div className="">
        {/* <ContactMap /> */}
      </div>
    </div>
  );
};

export default page;
