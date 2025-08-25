import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/vermacarajesh",
    label: "Instagram",
  },
  {
    icon: <FaXTwitter />,
    url: "https://twitter.com/ngoguru",
    label: "Twitter",
  },
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@ngoguruprivatelimited",
    label: "YouTube",
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/ngoguru",
    label: "Facebook",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#110416] w-full py-12 shadow-inner relative">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center space-y-8 text-white">
        <h2 className="text-xl font-semibold">
          Connect with us on Social Media
        </h2>
        <ul className="flex space-x-6">
          {socialLinks.map(({ icon, url, label }, idx) => (
            <li key={idx}>
              <a
                href={url}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-yellow-400 transition"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400 select-none">
          © 2025 J Town Production. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
