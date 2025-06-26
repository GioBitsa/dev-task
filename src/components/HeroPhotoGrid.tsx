import { photoGridImages } from "@/constants";
import React from "react";

const HeroPhotoGrid = () => {
  return (
    <div className="wrapper mb-2.5 grid grid-cols-4 grid-rows-2 gap-2 lg:grid-cols-6 lg:auto-rows-[100px]">
      {photoGridImages.map((item, index) => {
        const isFeatured = index < 2; // first two images

        return (
          <img
            key={item.id}
            src={item.src}
            alt={`photo-grid-${item.id}`}
            className={`
              w-full h-full object-cover rounded-sm cursor-pointer
              ${isFeatured ? "col-span-2" : "col-span-1"}
              ${isFeatured && index === 0 ? "row-start-1" : ""}
              ${isFeatured && index === 1 ? "row-start-1 col-start-3" : ""}
              lg:${
                isFeatured ? "col-span-4 row-span-2" : "col-span-2 row-span-1"
              }
            `}
          />
        );
      })}
    </div>
  );
};

export default HeroPhotoGrid;
