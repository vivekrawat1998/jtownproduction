import React,{ useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapParallax = ({ src, alt, className, yValue = 60, scrubSpeed = 3, style }) => {
    const imageRef = useRef(null);

    useEffect(() => {
        if (!imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            { y: yValue },
            {
                y: -yValue,
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: scrubSpeed,
                },
            }
        );
    }, [yValue, scrubSpeed]);

    return (
        <img
            ref={imageRef}
            src={src}
            alt={alt}
            className={className}
            style={style}
        />
    );
};

export default GsapParallax;
