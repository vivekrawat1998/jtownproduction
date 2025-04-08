import React, { useEffect, useRef } from "react";
import GsapParallax from "../ui/GsapParallax";
import Cards from "../cards/Cards";
import Button from "../ui/Button";



const Herosection = () => {


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
            <div className="md:space-y-12 space-y-8 relative z-45">
                <h1 className="text-secondary" style={{ fontSize: "clamp(.5rem, 4vw, 1.7rem)" }}>
                    If You Can Imagine It We Can Make It Happen
                </h1>
                <h2
                    className="text-transparent tracking-tight md:leading-25 bg-clip-text bg-gradient-to-r from-[#302276] via-[#D3D2DF] to-[#302276]"
                    style={{ fontSize: "clamp(1.9rem, 6vw,7rem)" }}
                >
                    Transform Your NGO with a Dynamic Virtual Consultant!
                </h2>
                <div className="w-full grid place-items-center">
                    <Button width="clamp(280px, 40vw, 500px)" />
                </div>
                <div className="lg:px-28 mt-20">
                    <Cards />
                </div>
            </div>
            <div>
                {GsapParallax({
                    src: "/assets/icon.png",
                    alt: "Floating Image",
                    className: "absolute z-45 top-[48vh] -left-10 w-[18vw] md:block hidden object-cover",
                })}
            </div>
            <div>
                {GsapParallax({
                    src: "/assets/secondicon.png",
                    alt: "Floating Image",
                    className: "absolute z-10 bottom-0 right-10 md:block hidden object-cover w-[20vw]",
                })}
            </div>
        </div>
    );
};

export default Herosection;