import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Music production projects data - update image paths, titles, and links as needed
const musicProductions = [
    {
        id: 1,
        title: "Sunset Vibes Music Video",
        projectUrl: "https://youtube.com/watch?v=example1",
        previewImg: "/assets/music/sunset_vibes.jpg",
        description: "A visually stunning music video capturing the golden hour vibes with cinematic cinematography.",
    },
    {
        id: 2,
        title: "Rhythm of the City",
        projectUrl: "https://vimeo.com/example2",
        previewImg: "/assets/music/rhythm_city.jpg",
        description: "Urban beats combined with street visuals creating an immersive musical storytelling experience.",
    },
    {
        id: 3,
        title: "Acoustic Serenity",
        projectUrl: "https://youtube.com/watch?v=example3",
        previewImg: "/assets/music/acoustic_serenity.jpg",
        description: "A calm and soulful acoustic video showcasing intimate live performances and natural beauty.",
    },
    {
        id: 4,
        title: "Electro Pulse",
        projectUrl: "https://vimeo.com/example4",
        previewImg: "/assets/music/electro_pulse.jpg",
        description: "Futuristic electronic rhythms paired with energetic and edgy visual effects.",
    },
    // Add more projects here
];

const Fourthsection = () => {
    const swiperRef = useRef(null);

    return (
        <div className="w-full relative px-5 py-20 font-space md:px-5 lg:px-10 md:py-32 bg-[#000000]">
            <div className="bg-[#170842] w-full relative pb-14 md:pb-20 rounded-tr-[250px] rounded-bl-[250px] overflow-hidden">
                <img
                    src="/assets/background_02_home_02.jpg"
                    alt="Background"
                    className="absolute z-0 w-full h-full object-cover opacity-20"
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 text-center text-white font-space">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-yellow-400">
                        Our Music Production Work
                    </h1>
                    <p className="max-w-3xl mx-auto mb-12 text-gray-300 text-lg md:text-xl">
                        Explore our latest music video productions and creative projects.
                    </p>

                    <div className="flex justify-end gap-6 mb-8 px-2">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            aria-label="Previous Slide"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-[#170842] shadow-md hover:bg-yellow-300 transition"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            aria-label="Next Slide"
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-[#170842] shadow-md hover:bg-yellow-300 transition"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={36}
                        slidesPerView={1}
                        navigation={false}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="w-full"
                    >
                        {musicProductions.map((project) => (
                            <SwiperSlide key={project.id}>
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block bg-gradient-to-tr from-[#3b37a0] to-[#5e5cd8] rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
                                >
                                    <img
                                        src={project.previewImg}
                                        alt={project.title}
                                        className="w-full h-60 md:h-64 object-cover brightness-90 group-hover:brightness-100 transition"
                                    />
                                    <div className="p-6 text-left">
                                        <h3 className="text-xl font-semibold text-yellow-300 mb-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm md:text-base">{project.description}</p>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default Fourthsection;
