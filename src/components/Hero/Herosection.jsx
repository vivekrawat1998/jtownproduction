import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cards from "../cards/Cards";

gsap.registerPlugin(ScrollTrigger);

const Herosection = () => {
    const imageRef = useRef(null);
    const image2Ref = useRef(null);
    const bgimgRef = useRef(null);

    useEffect(() => {
        if (imageRef.current) {
            gsap.fromTo(
                imageRef.current,
                { y: 0 },
                {
                    y: 60,
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top bottom",
                        scrub: 3,
                    },
                }
            );
        }

        if (image2Ref.current) {
            gsap.fromTo(
                image2Ref.current,
                { y: 0 },
                {
                    y: -60,
                    scrollTrigger: {
                        trigger: image2Ref.current,
                        start: "top bottom",
                        scrub: 3,
                    },
                }
            );
        }
    }, []);

    return (
        <div
            className="w-full relative p-24  text-white font-space flex flex-col justify-center items-center text-center"
            style={{
                backgroundImage: 'url("/assets/herobg.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute  w-full h-full bg-black/40 z-10">

            </div>
            <div className="space-y-12 relative z-45">
                <h1 className="text-secondary" style={{ fontSize: "clamp(1rem, 4vw, 2rem)" }}>
                    If You Can Imagine It, We Can Make It Happen
                </h1>
                <h2
                    className="text-transparent tracking-tight leading-20 bg-clip-text bg-gradient-to-r from-[#302276] via-[#D3D2DF] to-[#302276]"
                    style={{ fontSize: "clamp(2rem, 6vw, 10rem)" }}
                >
                    Digital Solutions That Make An Impact
                </h2>
                <button
                    className="bg-gradient-to-r from-[#2438F9] to-[#D734D6] py-5 rounded-full text-white"
                    style={{
                        width: "clamp(300px, 30vw, 400px)",
                        fontSize: "clamp(1rem, 1.5vw, 1.4rem)",
                    }}
                >
                    Schedule Free Consultation
                </button>
                <div className="lg:px-28 mt-20">
                    <Cards />
                </div>
            </div>
            <img
                ref={imageRef}
                src="/assets/icon.png"
                alt=""
                className="absolute z-10 top-[30vh] left-0 w-[20vw] md:block hidden object-cover"
            />

            <img
                ref={image2Ref}
                src="/assets/secondicon.png"
                alt=""
                className="absolute z-10 bottom-0 right-10 md:block hidden object-cover w-[20vw]"
            />
        </div>
    );
};

export default Herosection;
