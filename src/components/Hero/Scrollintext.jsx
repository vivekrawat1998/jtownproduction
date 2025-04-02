import React, { useState, useEffect } from "react";

const ScrollingTextEffect = () => {
    const [activeLayer, setActiveLayer] = useState(0);

    const textLayers = [
        "Layer 1: Introduction",
        "Layer 2: Understanding the Concept",
        "Layer 3: Importance of UI/UX",
        "Layer 4: Design Principles",
        "Layer 5: Typography & Colors",
        "Layer 6: Responsive Design",
        "Layer 7: User Testing",
        "Layer 8: Optimization Techniques",
        "Layer 9: Deployment & Maintenance",
        "Layer 10: Future Trends",
    ];

    useEffect(() => {
        const handleScroll = () => {

            const scrollY = window.scrollY;
            const layerIndex = Math.min(
                Math.floor(scrollY / 200),
                textLayers.length - 1
            );
            setActiveLayer(layerIndex);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex w-full h-[200vh] px-10 py-20 bg-gray-100">

            <div className="w-1/2 pr-10 space-y-10">
                <p className="text-lg">
                    Scroll down to see the text layers change on the right.
                </p>
                {[...Array(30)].map((_, index) => (
                    <p key={index} className="bg-white p-4 rounded-md shadow">
                        This is some scrollable content {index + 1}.
                    </p>
                ))}
            </div>


            <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center bg-blue-900 shadow-lg p-10">
                <h2 className="text-3xl font-bold text-blue-600 text-center transition-opacity duration-500">
                    {textLayers[activeLayer]}
                </h2>
            </div>
        </div>
    );
};

export default ScrollingTextEffect;
