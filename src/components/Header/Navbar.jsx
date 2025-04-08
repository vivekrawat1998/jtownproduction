import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
        });
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const downloadBrochure = () => {
        const link = document.createElement("a");
        link.href = "https://drive.google.com/uc?export=download&id=16DB76Zk1otCewTQq4Alt40qc5bI-Cg0d";
        link.setAttribute("download", "Brochure.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            setIsOpen(false);
        }
    };


    return (
        <nav
            className="w-full fixed top-0 left-0 z-50 md:px-10 py-4 flex items-center justify-between 
                        bg-black/50 backdrop-blur-md shadow-lg border-2  "
            data-aos="fade-down"
        >
            {/* Logo */}
            <h1 className="text-[#c9f31d] text-2xl font-bold">Engoguru</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex text-[#c9f31d] text-lg items-center space-x-10">
                <li onClick={() => scrollToSection("home")} className="hover:text-white cursor-pointer">Home</li>
                <li onClick={() => scrollToSection("services")} className="hover:text-white cursor-pointer">Services</li>
                <li onClick={() => scrollToSection("pricing")} className="hover:text-white cursor-pointer">Pricing</li>
                <li onClick={() => scrollToSection("projects")} className="hover:text-white cursor-pointer">Project</li>
                <button
                    onClick={downloadBrochure}
                    className="flex items-center gap-2 bg-[#c9f31d] text-black px-4 py-2 rounded-lg font-bold hover:bg-[#b0d315] transition"
                >
                    <FaFileDownload /> Download Brochure
                </button>
            </ul>
            <button
                onClick={downloadBrochure}
                className="flex items-center md:hidden  gap-2 bg-[#c9f31d] text-black px-4 py-2 rounded-lg font-bold hover:bg-[#b0d315] transition"
            >
                <FaFileDownload /> Download Brochure
            </button>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#c9f31d] text-2xl" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-black/90 p-6 flex flex-col items-center space-y-6 md:hidden">
                    <ul className="text-[#c9f31d] text-xl space-y-4">
                        <li onClick={() => scrollToSection("home")} className="hover:text-white cursor-pointer">Home</li>
                        <li onClick={() => scrollToSection("services")} className="hover:text-white cursor-pointer">Services</li>
                        <li onClick={() => scrollToSection("pricing")} className="hover:text-white cursor-pointer">Pricing</li>
                        <li onClick={() => scrollToSection("projects")} className="hover:text-white cursor-pointer">Projects</li>

                    </ul>

                </div>
            )}

        </nav>
    );
};

export default Navbar;
