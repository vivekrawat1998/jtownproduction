import React from 'react';
import { IoMdArrowForward } from "react-icons/io";

const Fourthsection = () => {
    const projects = ["Web Apps", "Mobile Apps", "UI/UX Design"];

    return (
        <div className='bg-[#000000] w-full relative'
        >
              <img src='/assets/fourthsectionnbg.jpg' alt='' className=' absolute z-10 w-full h-full rounded-tr-[250px] rounded-bl-[250px] object-cover' />
            <div className='text-white grid place-items-start  relative  z-45 p-10 pt-20  space-y-5'>
           
                <div className='space-y-10 transform translate-x-1/2'>
                <h1
                className=' text-secondary'
                style={{
                    fontSize: "clamp(1rem, 5vw, 2rem)"
                }}ss
                >Explore Projects</h1>
                    {projects.map((project, index) => (
                        <div key={index} className='flex items-center   overflow-hidden justify-start gap-5 text-4xl group relative'>
                            <IoMdArrowForward className='text-[5rem] transform transition-transform duration-400 group-hover:-translate-x-1000 ' />
                            <h1 className='text-[5rem] font-space text-secondary group-hover:-translate-x-20 transform transition-transform duration-400'
                            style={{
                                fontSize: "clamp(1rem, 5vw, 5rem)"
                            }}
                            
                            >
                                {project}
                            </h1>
                            <IoMdArrowForward className='text-[5rem] transform transition-transform duration-400 group-hover:-translate-x-20 opacity-0 group-hover:opacity-100 ' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fourthsection;