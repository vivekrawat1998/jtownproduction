import React from "react";
import { Lightbulb, Settings, CheckCircle } from "lucide-react";

const Cards = () => {
    const cardsitems = [
        {
            id: 1,
            icon: <Lightbulb size={100} className="text-black" />,
            title: "Virtual Consultant",
            desc: "Get instant assistance and answers to your queries through our chat support..",
        },
        {
            id: 2,
            icon: <Settings size={100} className="text-black" />,
            title: "Expertise",
            desc: "Professional experience in creating impactful websites for NGOs.",
        },
        {
            id: 3,
            icon: <CheckCircle size={100} className="text-black" />,
            title: "1 Year Free Maintenance",
            desc: "Enjoy a full year of free maintenance to keep your website running smoothly and efficiently..",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-32 gap-5 ">
            {cardsitems.map((item) => (
                <div
                    key={item.id}
                    className="bg-secondary p-3 rounded-xl shadow-lg flex flex-col items-start text-start"
                >
                    {item.icon}
                    <div className="py-10 space-y-5">
                        <h1 className="text-xl text-gray-900 font-semibold mt-4">{item.title}</h1>
                        <p className="text-black font-semibold mt-2">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
