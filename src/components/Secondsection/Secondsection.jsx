import React from "react";
import Button from "../ui/Button";

const Secondsection = () => {
    const plans = [
        {
            id: 1,
            title: "Standard Plan",
            price: "₹20,000 + GST",
            features: [
                "✅ Standard Website",
                "✅ 1 Year Hosting",
                "✅ 6 Months Maintenance",
                "✅ Mobile Responsive Design",
                "✅ Basic SEO Optimization",
                "✅ Contact Form Integration",
                "✅ Especially For Professional NGOs website",
            ],
            gradient: "bg-gradient-to-r from-blue-500/30 to-blue-700/80",
            paymentLink: "https://pmny.in/PAYUMN/PInMseWf2dHR"
        },
        {
            id: 2,
            title: "Advanced Plan",
            price: "₹50,000 + GST",
            features: [
                "✅ Everything in Standard Plan",
                "✅ Custom Web Design",
                "✅ E-Commerce Functionality",
                "✅ Payment Gateway Integration",
                "✅ Blog & CMS System",
                "✅ Advanced SEO Optimization",
                "✅ Especially For School/colleges website",
            ],
            gradient: "bg-gradient-to-r from-purple-500/10 to-purple-700/80",
            paymentLink: "https://pmny.in/PAYUMN/fIYRGIm0QleO"
        },
        {
            id: 3,
            title: "Premium Plan",
            price: "₹4,00,000 + GST",
            features: [
                "✅ Everything in Advanced Plan",
                "✅ Fully Custom Web Application",
                "✅ AI Chatbot Integration",
                "✅ High-Speed Cloud Hosting",
                "✅ Advanced Security Features",
                "✅ 24/7 Priority Support",
                "✅ Especially For Temple, Hosptital Management website",
            ],
            gradient: "bg-gradient-to-r from-yellow-500/40 to-orange-600/80",
            paymentLink: "https://pmny.in/PAYUMN/QIoRDII0OOf6"
        },
    ];

    return (
        <div className="w-full relative px-5 py-20 font-space md:px-5 lg:px-10 md:py-32 bg-[#000000]">
            <img
                src="/assets/background_01_home_02.jpg"
                alt=""
                className="w-full h-full object-cover rounded-tr-[250px] rounded-bl-[250px] absolute z-10 top-0 left-0 pointer-events-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <h1 className="text-white font-space text-center md:text-left text-2xl md:text-4xl">
                        Choose the Perfect Plan for Your NGO Website
                    </h1>
                    <div className="grid md:place-items-end place-items-center w-full">
                        <Button width="clamp(270px, 40vw, 400px)" />
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-12">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`${plan.gradient} backdrop-blur-3xl  shadow-xl border border-gray-200 group cursor-pointer rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl p-8 text-center relative`}
                        >
                            <h3 className="text-3xl font-extrabold text-white relative z-10">
                                {plan.title}
                            </h3>
                            <p className="text-2xl font-bold text-white mt-2 relative z-10">
                                {plan.price}
                            </p>

                            <div className="mt-6 text-left space-y-2 relative z-10">
                                {plan.features.map((feature, index) => (
                                    <p key={index} className="text-lg text-white">
                                        {feature}
                                    </p>
                                ))}
                            </div>

                            <a
                                href={plan.paymentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 px-5 py-3 block w-full font-bold text-lg text-black bg-white bg-opacity-20 rounded-lg transition-all duration-500 hover:scale-105 hover:bg-opacity-30"
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Secondsection;