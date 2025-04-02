import React from "react";
import { Lightbulb, Settings, CheckCircle } from "lucide-react";

const Cards = () => {
    const cardsitems = [
        {
            id: 1,
            icon: <Lightbulb size={100} className="text-black" />,
            title: "Expertise",
            desc: "Our team brings years of experience and deep knowledge to deliver high-quality solutions.",
        },
        {
            id: 2,
            icon: <Settings size={100} className="text-black" />,
            title: "Innovation",
            desc: "We focus on creative solutions that push the boundaries of technology and design.",
        },
        {
            id: 3,
            icon: <CheckCircle size={100} className="text-black" />,
            title: "Efficiency",
            desc: "Optimized workflows and streamlined processes ensure maximum productivity and results.",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
            {cardsitems.map((item) => (
                <div
                    key={item.id}
                    className="bg-secondary p-3 rounded-xl shadow-lg flex flex-col items-start text-start"
                >
                    {item.icon}
                    <div className="py-10 space-y-5">
                        <h1 className="text-xl text-gray-900 font-semibold mt-4">{item.title}</h1>
                        <p className="text-gray-600 mt-2">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
