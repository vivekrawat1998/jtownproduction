import React, { useRef } from "react";
import { Instagram, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const influencers = [
  {
    id: 1,
    name: "Yogita Rawat",
    username: "@yogita.rawat__",
    profilePic: "/assets/yogita.webp",
    followers: "96k",
    bio: "Beauty, lifestyle, vlogging, clothing, jewelry and wellness creator. Inspiring confidence every day.",
    socials: [
      { url: "https://www.instagram.com/yogita.rawat__/", icon: <Instagram className="w-7 h-7 text-pink-500" /> },
    ],
  },
  {
    id: 2,
    name: "Ishika Bisht",
    username: "@isshiikaaa",
    profilePic: "/assets/ishika.webp",
    followers: "121k",
    bio: "Music producer and performer. Sharing new sounds and behind-the-scenes fun.",
    socials: [
      { url: "https://www.instagram.com/isshiikaaa", icon: <Instagram className="w-7 h-7 text-pink-500" /> },
    ],
  },
  {
    id: 3,
    name: "Meera Joshi",
    username: "@meera.journeys",
    profilePic: "/assets/influencer_03.jpg",
    followers: 55000,
    bio: "Travel explorer & adventure vlogger. Let’s see the world together!",
    socials: [
      { url: "https://instagram.com/meera.journeys", icon: <Instagram className="w-7 h-7 text-pink-500" /> },
    ],
  },
  {
    id: 4,
    name: "Rahul Singh",
    username: "@rahul.lens",
    profilePic: "/assets/influencer_04.jpg",
    followers: 41000,
    bio: "Street photographer & storyteller sharing vibrant city moments.",
    socials: [
      { url: "https://instagram.com/rahul.lens", icon: <Instagram className="w-7 h-7 text-pink-500" /> },
    ],
  },
  // Add more influencers as needed
];

const Thirdsection = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-[#170842] w-full relative pb-14 md:pb-20">
      <img
        src="/assets/background_02_home_02.jpg"
        alt=""
        className="absolute z-10 w-full h-full object-cover rounded-tr-[250px] rounded-bl-[250px]"
      />
      <div className="w-full grid place-items-center relative z-10">
        <div className="w-full text-white pt-10 font-space max-w-5xl text-center place-items-center mx-auto">
          <h1 className="text-secondary" style={{ fontSize: "clamp(1.2rem, 5vw, 2rem)" }}>
            Meet Our Top Influencers
          </h1>
          <h2 className="leading-23 mb-10" style={{ fontSize: "clamp(1.2rem, 5vw, 3.5rem)" }}>
            Creativity · Inspiration · Community
          </h2>
        </div>
        <div className="flex justify-end gap-5 mb-6 w-full max-w-6xl px-5">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-custom-prev cursor-pointer bg-white/80 text-[#170842] p-2 rounded-full shadow-lg font-bold hover:bg-yellow-400 transition flex items-center justify-center"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="w-7 h-7" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-custom-next cursor-pointer bg-white/80 text-[#170842] p-2 rounded-full shadow-lg font-bold hover:bg-yellow-400 transition flex items-center justify-center"
            aria-label="Next Slide"
          >
            <ArrowRight className="w-7 h-7" />
          </button>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={false}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-6xl px-5"
        >
          {influencers.map((influencer) => (
            <SwiperSlide key={influencer.id}>
              <a
                href={influencer.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#261458]/80 rounded-xl cursor-pointer shadow-lg p-8 flex flex-col items-center backdrop-blur-xl text-center group hover:scale-105 transition-all duration-500 border border-gray-200 h-full no-underline"
              >
                <img
                  src={influencer.profilePic}
                  alt={influencer.name}
                  className="w-full h-56 object-cover mb-4 rounded-none"
                />
                <h3 className="font-bold text-xl text-yellow-400">{influencer.name}</h3>
                <p className="text-pink-200 mb-2">{influencer.username}</p>
                <div className="flex items-center gap-2 justify-center mb-3">
                  {influencer.socials.map((social, idx) => (
                    <span
                      key={idx}
                      className="hover:scale-110 transition"
                      aria-label={`Link to ${influencer.name}'s social profile`}
                    >
                      {social.icon}
                    </span>
                  ))}
                  <span className="font-bold text-green-400 ml-2">
                    {influencer.followers.toLocaleString()} followers
                  </span>
                </div>
                <p className="mt-3 text-xs text-white/70">{influencer.bio}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Thirdsection;
