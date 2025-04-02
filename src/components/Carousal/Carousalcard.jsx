import React from "react";

const CarouselCard = ({ image, text }) => {
  return (
    <div
      className="w-full h-[400px] flex items-center justify-center text-white text-2xl font-bold rounded-xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">{text}</div>
    </div>
  );
};

export default CarouselCard;
