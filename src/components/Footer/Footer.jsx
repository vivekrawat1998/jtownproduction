import React from "react";
import {
    FaInstagram,
    FaYoutube,
    FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <div className="bg-[#110416] shadow-2xl w-full py-20 relative">
            <div
                className="absolute inset-0 bg-cover bg-center rounded-tr-[150px] sm:rounded-tr-[250px]"
                style={{ backgroundImage: "url('/assets/background_footer_02.jpg')" }}
            />

            <div className="relative z-10 px-4 md:px-20 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white">
                    {/* Logo Section */}
                    <div>c
                        {/* <img className="w-16 h-16 object-cover" src="/assets/logo.png" alt="Logo" /> */}
                        Engoguru
                        <p className="mt-4 text-sm sm:text-base">
                            Empowering Businesses to Thrive in the Digital Age with Innovative Solutions.
                        </p>
                    </div>
                    {/* Office Section */}
                    <div>
                        <h1 className="font-bold text-lg">Office</h1>
                        <p className="mt-2 text-sm sm:text-base">
                            D-68, Second Floor,
                            Near Metro Pillar No- 50,
                            Shakarpur, Delhi-110092
                        </p>
                        <p className="text-sm sm:text-base">Phone: +91-9315400872
                        </p>
                        <br />
                        <p className="text-gray-300 text-sm underline sm:text-base">ngoguru@carkverma.com</p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h1 className="font-bold text-lg">Company</h1>
                        <ul className="mt-2 space-y-2 text-sm sm:text-base">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Pricing</li>
                            <li>Contact us</li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div>
                        <h1 className="font-bold text-lg">Get in Touch</h1>
                        <ul className="mt-2 flex flex-wrap sm:justify-start justify-center gap-3">
                            {[
                                { icon: <FaInstagram />, link: "https://www.instagram.com/vermacarajesh?igsh=MWh0anB5dDlzcGEwaQ==" },
                                { icon: <FaXTwitter />, link: "https://ngoguru.in/home" },
                                { icon: <FaYoutube />, link: "https://www.youtube.com/@ngoguruprivatelimited" },
                                { icon: <FaFacebook />, link: "https://www.facebook.com/ngoguru" },
                            ].map((item, index) => (
                                <li key={index} className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white w-full px-4 md:px-10 my-5"></div>

                {/* Footer Bottom Section */}
                <div className="flex flex-col sm:flex-row items-center whitespace-nowrap justify-between text-white text-sm sm:text-base px-4 md:px-10 py-5">
                    <p>© 2025 Engoguru. All rights reserved.</p>
                    <div className="flex space-x-5 mt-3 sm:mt-0">
                        <p className="cursor-pointer hover:underline">Privacy Policy</p>
                        <p className="cursor-pointer hover:underline">Terms of Service</p>
                        <p className="cursor-pointer hover:underline">Cookies & Settings</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
