import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import CarouselCard from "../Carousal/Carousalcard"

const Carousal = () => {
  const slides = [
    {
      id: 1,
      title: "Boost Your Reach & Raise More Funds",
      points: [
        "Grants & Funding Alerts – Get 24 classes FREE in the first year.",
        "Tender Document Downloads – Quick & easy access to project tenders.",
        "News Updates – Submit 12 updates annually, shared on 100+ platforms.",
        "Detailed NGO Profiles – Highlight mission, achievements & programs."
      ],
    },
    {
      id: 2,
      title: "Grants & Funding Alerts",
      points: [
        "Fortnightly updates on funding opportunities.",
        "Get 24 expert-led training classes FREE in the first year.",
      ],
    },
    {
      id: 3,
      title: "Tender Document Downloads",
      points: [
        "Instant access to active project tenders.",
        "Save time & bid smarter with verified listings.",
      ],
    },
    {
      id: 4,
      title: "News Updates That Reach 10,000+ People",
      points: [
        "Submit 12 updates annually.",
        "We'll publish across 100+ media and NGO platforms.",
      ],
    },
    {
      id: 5,
      image: "/assets/slider_02_home_02-1280x717.jpg",
      title: "Detailed NGO Profiles",
      points: [
        "Tell your story with professionalism.",
        "Highlight your mission, work, and impact.",
      ],
    },
  ];


  const [navPrev, setNavPrev] = useState(null);
  const [navNext, setNavNext] = useState(null);

  return (
    <div
      className="w-full  pb-[20vh] pt-10 relative bg-[#991c80f6]"
    >
      <img src="/assets/background_02_home_02.jpg" alt="" className=" absolute w-full h-full top-0 left-0 z-10 rounded-bl-[200px]" />
      <div className="w-full relative z-10 ">
        {/* Heading Section */}
        <div className="grid place-items-center w-full  space-y-3 text-center">
          <h2 className="text-secondary" style={{ fontSize: "clamp(1rem, 4vw, 2rem)" }}>
            Top-notch website services for NGOs
          </h2>
          <h1
            className="text-transparent leading-[1.2]  bg-clip-text bg-gradient-to-r from-[#302276] via-[#D3D2DF] to-[#302276]"
            style={{ fontSize: "clamp(2rem, 6vw, 8rem)" }}
          >
           
            Empowering NGOs with Engaging Websites
          </h1>
        </div>

        <div className="mt-20 px-3 relative">
          <Swiper
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            loop={true}
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                <CarouselCard  title={slide.title} points={slide.points} />
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
