import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import Modal from "./Modal";

const Button = ({ width, text }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <button
                className="bg-gradient-to-r group  flex gap-3 justify-center items-center cursor-pointer whitespace-nowrap from-[#2438F9] to-[#D734D6] md:py-5 py-3 rounded-full text-white"
                style={{ width, fontSize: "clamp(1rem, 1.5vw, 1.4rem)" }}
                onClick={() => setModalOpen(true)}
            >
                {text || "Get a Free Quote"}
                <MdMessage className="group-hover:-translate-y-1" />
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};

export default Button;
