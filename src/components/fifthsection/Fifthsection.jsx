import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import CarouselCard from "../Carousal/Carousalcard"
import FifthcarousalCards from "./FifthCarousalcard";
import GsapParallax from "../ui/GsapParallax";

const FifthSection = () => {
    const slides = [
        {
            id: 1,
            image: "/assets/caffe.png",
            title: "Caffe Aroma - Premium Coffee Shop Experience",
            description: "Empowering minds with knowledge and learning."
        },
        {
            id: 2,
            image: "/assets/clothinng.jpg",
            title: "Clothing Ecommerce Store - Trendy & Sustainable Clothing",
            description: "Bringing innovative learning methods to students."
        },
        {
            id: 3,
            image: "/assets/jwellery.avif",
            title: "Elegant Jewelry store with Admin panel access",
            description: "jewelery Management store  with Payment Gateway and Admin Panel."
        },
        {
            id: 4,
            image: "/assets/travel-website-templates-1000x750.jpg",
            title: "Travel Booking Platform`",
            description: " Travel Booking Platform with Seamless Reservations."
        },
        {
            id: 5,
            image: "/assets/hotelbooking.png",
            title: "Hotel Booking Website",
            description: "Find and book the perfect stay for your next trip."
        },
        {
            id: 7,
            image: "/assets/agriculature.webp",
            title: "Agriculture Innovation",
            description: "Boosting farming efficiency with modern technology."
        },
    ];


    const [navPrev, setNavPrev] = useState(null);
    const [navNext, setNavNext] = useState(null);

    return (
        <div
            className="w-full bg-[#991c80] relative "
        // style={{
        //     backgroundImage: 'url("/assets/background_02_home_02.jpg")',
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        // }}
        >

            <img src="/assets/background_02_home_02.jpg" alt="" className="absolute w-full h-full z-10 object-cover rounded-tr-[250px] rounded-bl-[250px]" />
            <div className="w-full relative z-45 md:px-30 px-5 p-10">
                <div className="grid place-items-center w-full mt-10 space-y-3 text-center">
                    <h2 className="text-secondary" style={{ fontSize: "clamp(1rem, 4vw, 2rem)" }}>
                        Websites that attract and convert visitors
                    </h2>
                    <h1
                        className="text-transparent leading-[1.2] bg-clip-text bg-gradient-to-r from-[#302276] via-[#D3D2DF] to-[#302276]"
                        style={{ fontSize: "clamp(2rem, 6vw, 7rem)" }}
                    >
                        We Create Engaging Digital Experiences
                    </h1>
                    {GsapParallax({
                        src: "/assets/floating_image_05.png",
                        alt: "/assets/floating_image_05.png",
                        className: "absolute z-10 -top-1 -left-10 w-[25vw] md:block hidden object-cover",
                    })}
                </div>
                <div className="mt-20 relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            768: { slidesPerView: 2, spaceBetween: 15 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                        }}
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
                                <FifthcarousalCards image={slide.image} text={slide.title} Date={slide.description} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="absolute bottom-[0px] cursor-pointer left-1/2 transform -translate-x-1/2 flex space-x-5 z-50">
                        <button ref={setNavPrev} className="border-secondary border text-secondary p-5 rounded-full cursor-pointer shadow-md text-xl">
                            <IoIosArrowBack />
                        </button>
                        <button ref={setNavNext} className="border-secondary text-secondary border p-5 cursor-pointer rounded-full shadow-md text-xl">
                            <IoIosArrowForward />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FifthSection;
