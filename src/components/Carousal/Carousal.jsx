import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import CarouselCard from  "../Carousal/Carousalcard"

const Carousal = () => {
  const slides = [
    { id: 1, image: "/assets/slider_01_home_02-1280x717.jpg", text: "Innovate with Technology" },
    { id: 2, image: "/assets/slider_02_home_02-1280x717.jpg", text: "Transform Your Ideas" },
    { id: 3, image: "/assets/slider_03_home_02-1280x717.jpg", text: "Delivering Excellence" },
    { id: 4, image: "/assets/slider_01_home_02-1280x717.jpg", text: "Innovate with Technology" },
    { id: 5, image: "/assets/slider_02_home_02-1280x717.jpg", text: "Transform Your Ideas" },
    { id: 6, image: "/assets/slider_03_home_02-1280x717.jpg", text: "Delivering Excellence" },
  ];

  const [navPrev, setNavPrev] = useState(null);
  const [navNext, setNavNext] = useState(null);

  return (
    <div
      className="w-full pb-[20vh]  relative bg-[#961073]"
    >
     <img src="/assets/background_02_home_02.jpg" alt=""  className=" absolute w-full h-full top-0 left-0 z-10 rounded-bl-[200px]"/> 
      <div className="w-full relative z-45 ">
        {/* Heading Section */}
        <div className="grid place-items-center w-full  space-y-3 text-center">
          <h2 className="text-secondary" style={{ fontSize: "clamp(1rem, 4vw, 2rem)" }}>
            Stunning websites that convert visitors
          </h2>
          <h1
            className="text-transparent leading-[1.2] bg-clip-text bg-gradient-to-r from-[#302276] via-[#D3D2DF] to-[#302276]"
            style={{ fontSize: "clamp(2rem, 6vw, 8rem)" }}
          >
            We Build Stunning Digital Experiences
          </h1>
        </div>

        {/* Swiper Carousel */}
        <div className="mt-20 relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: navPrev,
              nextEl: navNext,
            }}
            onSwiper={(swiper) => {
              setNavPrev(swiper.navigation.prevEl);
              setNavNext(swiper.navigation.nextEl);
            }}
            className="relative"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <CarouselCard image={slide.image} text={slide.text} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute mb-32 -bottom-[200px] cursor-pointer left-1/2 transform -translate-x-1/2 flex space-x-5 z-50">
            <button ref={setNavPrev} className="border-secondary border text-secondary p-5 rounded-full cursor-pointer shadow-md text-xl">
              <IoIosArrowBack />
            </button>
            <button ref={setNavNext} className="border-secondary text-secondary border p-5 cursor-pointer rounded-full shadow-md text-xl">
              <IoIosArrowForward />
            </button>
          </div>

          <h1 className="text-secondary mt-10 text-[clamnp(1rem, 5vw, 2rem)] text-center">
            From startups to the world’s largest companies
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
