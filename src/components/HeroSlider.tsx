"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { slideImagesArray } from "@/constants";

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="wrapper overflow-hidden mt-4">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="w-full h-[300px]"
      >
        {slideImagesArray.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!w-full lg:!w-[calc(50%-5px)] h-full flex justify-center items-center"
          >
            <img
              src={item.src}
              alt={`slide-${item.id}`}
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination */}
      <div className="my-2.5 flex items-center justify-center gap-1">
        {slideImagesArray.map((_, index) => (
          <button
            key={index}
            className={`w-[15px] h-[5px] rounded-sm transition-all border border-bright-blue ${
              activeIndex === index ? "bg-bright-blue" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
