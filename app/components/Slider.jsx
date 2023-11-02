"use client";
import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Slide Data
import { sliderData } from "@/_data/db";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Button from "./Button";

const Slider = () => {
  const router = useRouter();
  return (
    <div className=" max-w-[70vw] mx-auto mt-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
        className=""
      >
        {sliderData.map((slide) => (
          <SwiperSlide>
            <div className="flex items-center justify-between">
              {/* Words */}
              <motion.div
                className="max-w-lg "
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
              >
                <h1 className="font-extrabold text-5xl uppercase text-blue-700">
                  {slide.title}
                </h1>
                <h4 className="my-4 font-bold text-md">{slide.subtitle}</h4>
                <p className="font-extralight mb-4">{slide.paragraph}</p>
                <Button title={slide.button} bgColor={"bg-blue-700"} textColor={"text-white"} link={slide.link} />
              </motion.div>
              {/* Image */}
              <motion.div
                className="hidden lg:flex"
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
              >
                <Image
                  src={slide.image}
                  quality={100}
                  height={500}
                  width={500}
                  alt="car"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
