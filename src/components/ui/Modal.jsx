import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        ngoName: "",
        address: "",
    });

    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        AOS.init({ duration: 300 });
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isOpen]);

    if (!isOpen) return null;

    const validateField = (name, value) => {
        let error = "";
        switch (name) {
            case "fullName":
                if (!value.trim()) error = "Full Name is required.";
                break;
            case "phone":
                if (!value.trim()) error = "Phone number is required.";
                else if (!/^\d{10}$/.test(value)) error = "Phone must be 10 digits.";
                break;
            case "email":
                if (!value.trim()) error = "Email is required.";
                else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format.";
                break;
            case "ngoName":
                if (!value.trim()) error = "NGO Name is required.";
                break;
            case "address":
                if (!value.trim()) error = "Address is required.";
                break;
            default:
                break;
        }
        setFormErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const isFormValid = () => {
        const newErrors = {};
        Object.entries(formData).forEach(([key, value]) => {
            validateField(key, value);
            if (!value.trim()) {
                newErrors[key] = `${key} is required.`;
            }
        });
        return Object.values(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid()) return;

        const { fullName, phone, email, ngoName, address } = formData;
        const message = `NGO Registration Details:\nFull Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nNGO Name: ${ngoName}\nAddress: ${address}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/919910401351?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="fixed mt-10 inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-[9999]">
            <div
                className="relative bg-gradient-to-r from-[#2438F9]/60 to-[#D734D6]/60 backdrop-blur-2xl border border-white/20 shadow-xl p-6 rounded-lg w-[90%] max-w-md text-white"
                data-aos="zoom-in"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 grid place-items-center text-white w-6 h-6 rounded-full border-2 cursor-pointer"
                >
                    <IoIosClose className="text-xl" />
                </button>
                <h2 className="text-center text-2xl font-bold mb-4">Enquire Form</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {["fullName", "phone", "email", "ngoName", "address"].map((field) => (
                        <div key={field}>
                            {field !== "address" ? (
                                <input
                                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                                    name={field}
                                    placeholder={
                                        field === "fullName"
                                            ? "Full Name"
                                            : field === "ngoName"
                                            ? "NGO Name"
                                            : field.charAt(0).toUpperCase() + field.slice(1)
                                    }
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className={`w-full p-3 rounded-md border ${
                                        formErrors[field] ? "border-red-400" : "border-white/10"
                                    } text-white outline-none bg-transparent`}
                                />
                            ) : (
                                <textarea
                                    name={field}
                                    placeholder="Address"
                                    value={formData[field]}
                                    onChange={handleChange}
                                    rows="3"
                                    className={`w-full p-3 rounded-md border ${
                                        formErrors[field] ? "border-red-400" : "border-white/10"
                                    } text-white outline-none bg-transparent`}
                                />
                            )}
                            {formErrors[field] && (
                                <p className="text-red-300 text-sm mt-1">{formErrors[field]}</p>
                            )}
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="bg-white text-[#2438F9] cursor-pointer w-full py-3 rounded-md border border-white/30 font-bold hover:bg-gray-200 transition-all duration-300"
                    >
                        Submit via WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
