import React, { useRef } from "react";
import {
    Users,
    Image,
    HeartHandshake,
    Code,
    Settings,
    LockKeyhole
} from "lucide-react";
import useGsapParallax from "../ui/GsapParallax";

const Thirdsection = () => {
    const cardsitems = [
        {
            id: 1,
            title: "DETAILED NGO PROFILES",
            icon: <Users className="w-10 h-10 text-blue-500" />,
            desc: "Showcase your mission, vision, and impact. Highlight success stories, achievements, and the difference you make in the community."
        },
        {
            id: 2,
            title: "VIBRANT PHOTOS & GALLERIES",
            icon: <Image className="w-10 h-10 text-purple-500" />,
            desc: "Engage your audience with high-quality visuals that tell your NGO's story, inspire action, and create a lasting impact."
        },
        {
            id: 3,
            title: "EASY CONTACT & DONATION",
            icon: <HeartHandshake className="w-10 h-10 text-green-500" />,
            desc: "Seamlessly connect with supporters and donors. Make donations effortless with an integrated and secure payment system."
        },
        {
            id: 4,
            title: "CUSTOM CODING",
            icon: <Code className="w-10 h-10 text-yellow-500" />,
            desc: "Unique design elements that reflect your NGO’s identity. Get a tailored website with advanced features for maximum engagement."
        },
        {
            id: 5,
            title: "ADMIN PANEL ACCESS",
            icon: <Settings className="w-10 h-10 text-red-500 animate-spin" />,
            desc: "Take full control of your website with a user-friendly dashboard. Easily update content, manage projects, and track donations."
        },
        {
            id: 6,
            title: "EXCLUSIVE ACCESS",
            icon: <LockKeyhole className="w-10 h-10 text-teal-500" />,
            desc: "Gain secure access to premium funding insights and grant opportunities. Stay ahead with timely updates and valuable resources."
        },
    ];


    return (
        <div className='bg-[#170842] w-full relative'
        >
            <img src='/assets/background_02_home_02.jpg' alt='' className='absolute z-10 w-full h-full object-cover rounded-tr-[250px] rounded-bl-[250px] ' />
            <div className='w-full grid place-items-center relative z-45' >
                <div className='w-full grid text-white pt-10 font-space max-w-5xl text-center place-items-center'>
                    <h1 className=' text-secondary '
                        style={{ fontSize: "clamp(1rem , 5vw, 2rem)" }}
                    >Complex web & mobile development</h1>
                    <h2
                        className='leading-23 mb-10'
                        style={{ fontSize: "clamp(1rem, 5vw, 10rem)" }}
                    >Transform Your Online Presence With Us</h2>
                    {useGsapParallax({
                        src: "/assets/floating_image_03-600x609.png",
                        alt: "Floating Image",
                        className: "absolute z-10 top-[14vh] left-0 md:block hidden w-[673px] h-[500px]",
                    })}
                    {useGsapParallax({
                        src: "/assets/floating_image_04-320x384.png",
                        alt: "Floating Image",
                        className: "absolute z-10 -bottom-[36vh] right-10 md:block hidden w-[20VW]",
                    })}
                </div>
                <div className='grid md:grid-cols-2  grid-cols-1 px-5 md:p-10 gap-10 text-white '>
                    <div className="w-full h-full">
                        <img
                            src="/assets/serviceimg.webp"
                            alt="Curved"
                            className="w-full h-full object-cover "
                        />
                    </div>
                    <div className=''>
                        <h1
                            className='font-bold'
                            style={{ fontSize: "clamp(1rem, 5vw, 1.6rem)" }}
                        >
                            We specialize in enhancing NGOs' online presence with creative
                            and impactful websites, ensuring they effectively communicate
                            their missions and reach their goals.

                        </h1>
                        <br />
                        <h2
                            style={{ fontSize: "clamp(1rem, 5vw, 1.4rem)" }}
                        >Ongoing support and guidance for
                            maximizing online presence.
                            Offer easy-to-use tools and resources to
                            connect with audiences and achieve
                            goals..</h2>
                        <div className='grid md:grid-cols-2 font-space  grid-cols-1'>
                            {
                                cardsitems.map((item) => (
                                    <div key={item.id} className='mt-10 space-y-3'>
                                        <div className="animate-bounce w-12 h-12 flex items-center justify-center">{item.icon}</div>
                                        <h1 className="mt-4 text-yellow-400">{item.title}</h1>
                                        <h2>{item.desc}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thirdsection