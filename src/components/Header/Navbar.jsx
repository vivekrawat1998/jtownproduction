import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out'
        });
    }, []);

    return (
        <div
            className='w-[80%] bg-black font-quicksand   px-28 mt-10 py-4 pt-5 rounded-r-full border-2 border-[#c9f31d] border-l-0 flex justify-between items-center bg-primary z-10 fixed top-0 left-0'
            data-aos='slide-right'
        >
            <div>
                <h1 className='text-[#c9f31d]'>Logo</h1>
            </div>
            <div>
                <ul className='flex text-[#c9f31d] text-[1.4rem] items-center space-x-20'>
                    <li className="hover:text-primary ">Home</li>
                    <li className="hover:text-primary">Services</li>
                    <li className="hover:text-primary">About</li>
                    <li className="hover:text-primary">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;