"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Range from "@/app/images/range1.png";

const CallToAction = () => {
  return (
    <div className="relative bg-blue-700 w-full min-h-[300px] my-10">
      <div className="text-white flex flex-col items-center justify-center pt-20 lg:ml-[32rem]">
        <h2 className="font-bold text-4xl max-w-xl text-center">
          Which car are you interesed in?
        </h2>
        <motion.div
          className="flex items-center justify-around gap-10 my-4"
          variants={fadeIn("right", 2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Button
            title={"Glance Through Out Collections"}
            bgColor={"bg-white"}
            textColor={"text-blue-700"}
            link={"/cars"}
          />
          {/* <Button
            title={"UK Used"}
            bgColor={"bg-white"}
            textColor={"text-blue-700"}
            link={"/cars/uk-used"}
          /> */}
        </motion.div>
      </div>
      <motion.div
        className="absolute top-20 left-20 hidden lg:flex"
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Image
          src={Range}
          alt="Call To Action Image"
          width={700}
          height={500}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default CallToAction;
