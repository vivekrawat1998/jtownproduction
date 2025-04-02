import React from "react";

const Secondsection = () => {
    const cards = [
        {
            id: 1,
            image: "/assets/card1.jpg",
            title: "Custom Web Development",
            desc: "We build responsive and fast-loading websites tailored to your business needs.",
        },
        {
            id: 2,
            image: "/assets/card2.jpg",
            title: "E-Commerce Solutions",
            desc: "Sell online effortlessly with our secure and scalable e-commerce platforms.",
        },
        {
            id: 3,
            image: "/assets/card3.jpg",
            title: "SEO & Performance",
            desc: "Enhance your website’s ranking and performance with our expert SEO strategies.",
        },
    ];

    return (
        <div
            className="w-full relative p-32 bg-[#000000]"
            // style={{
            //     backgroundImage: 'url("/assets/background_01_home_02.jpg")',
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //     // clipPath: "ellipse(80% 60% at 50% 100%)",
            // }}
        >
            <img src="/assets/background_01_home_02.jpg" alt="" className="w-full h-full object-cover rounded-tr-[250px] rounded-bl-[250px] absolute z-10 top-0 left-0" />
            {/* Content */}
            <div className="relative z-45">
                <div className="flex flex-col  md:flex-row justify-between items-center px-10 md:px-32 space-y-5 md:space-y-0">
                    <h1 className="text-white font-space text-center md:text-left"
                        style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}
                    >
                        Maximize Online Potential With Our Development Solutions
                    </h1>
                    <button
                        className="bg-gradient-to-r from-[#2438F9] to-[#D734D6] py-2 px-6 rounded-full text-white"
                        style={{
                            width: "clamp(250px, 30vw, 400px)",
                            fontSize: "clamp(1rem, 1.5vw, 1.4rem)",
                        }}
                    >
                        Schedule Free Consultation
                    </button>
                </div>

                {/* Cards Section */}
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-12 px-10 lg:px-10 md:px-32">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white shadow-lg group cursor-pointer rounded-xl overflow-hidden transform transition-all duration-1000 hover:-translate-y-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-third"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6 bg-secondary shadow-3xl group-hover:text-white text-black group-hover:bg-gradient-to-r group-hover:from-[#1F38F9] group-hover:to-[#C133D9]  cursor-pointer">
                                <h3 className="text-xl font-bold ">{card.title}</h3>
                                <p className=" mt-2">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Secondsection;
