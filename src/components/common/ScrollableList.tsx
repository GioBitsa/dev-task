"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

interface ScrollableListProps {
  title: string;
  icon: string;
  imagesList: string[];
}

const ScrollableList = ({ title, icon, imagesList }: ScrollableListProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="wrapper my-3">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2.5">
          <img src={icon} alt={title} className="w-6 h-6 object-contain" />
          <h6 className="text-md text-white font-medium capitalize">{title}</h6>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-1">
          <button
            ref={prevRef}
            className={`w-8 h-8 border border-steel-blue bg-[#141F2B] rounded-sm transition flex items-center justify-center cursor-pointer ${
              isBeginning ? "opacity-30 cursor-not-allowed" : ""
            }`}
            disabled={isBeginning}
          >
            <img
              src="/icons/arrow-right.svg"
              alt="arrow-left"
              className="w-5 h-5 object-contain rotate-180"
            />
          </button>
          <button
            ref={nextRef}
            className={`w-8 h-8 border border-steel-blue bg-[#141F2B] rounded-sm transition flex items-center justify-center cursor-pointer ${
              isEnd ? "opacity-30 cursor-not-allowed" : ""
            }`}
            disabled={isEnd}
          >
            <img
              src="/icons/arrow-right.svg"
              alt="arrow-right"
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={15}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={handleSlideChange}
        onSlideChange={handleSlideChange}
      >
        {imagesList.map((item, index) => (
          <SwiperSlide key={index} className="!w-[150px]">
            <div className="relative h-[200px] transition-all group cursor-pointer">
              <img
                src={item}
                alt={`slide-${index}`}
                className="w-full h-full object-contain"
              />

              <div className="absolute top-0 left-0 w-full h-full bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                <h6 className="text-center text-lg font-semibold">
                  Ways of The Gauls
                </h6>
                <p className="text-sm text-center">asdasd</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ScrollableList;
