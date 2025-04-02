import React from 'react'

const Thirdsection = () => {

    const cardsitems = [
        {
            id: 1,
            title: "Improved Functionality",
            icons: "",
            desc: "Maintain financial stability and avoid unexpected expenses, which can disrupt operations and impact profitability."
        },
        {
            id: 2,
            title: "Competitive Advantage",
            desc: "Increase revenue, attract top talent, and expand into new markets, leading to sustainable growth and profitability.",
            icons: ""
        },
        {
            id: 3,
            title: "Increased Reliability",
            desc: "Reducing costs by optimizing resource utilization, ultimately leading to increased revenue and long-term success.",
            icons: ""
        },
        {
            id: 4,
            title: "Predictable Spending",
            desc: "Offer innovative services, improve operational efficiency and gain a competitive edge in the industry.",
            icons: ""
        }
    ]



    return (
        <div className='bg-[#130342] w-full relative'
        // style={{
        //     backgroundImage: 'url("/assets/background_02_home_02.jpg")',
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        // }}
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
                </div>
                <div className='grid md:grid-cols-2  grid-cols-1 px-5 md:p-20 gap-20 text-white '>
                    <img
                        src="/assets/curvedimage.jpg"
                        alt="Curved"
                        className="w-full h-full object-contain rounded-full"
                        style={{
                            clipPath: "polygon(10% 0%, 90% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"

                        }}
                    />
                    <div className=''>
                        <h1
                            style={{ fontSize: "clamp(1rem, 5vw, 2rem)" }}
                        >
                            We specialize in a wide range of digital services, including web development, app development, e-commerce solutions, and digital marketing.
                        </h1>
                        <h2
                            style={{ fontSize: "clamp(1rem, 5vw, 1.4rem)" }}
                        >As businesses continue to operate in an increasingly digital landscape, the importance of IT services in driving growth and success cannot be overstated. By leveraging the latest technologies and best practices in IT, businesses can gain a significant competitive edge.</h2>
                        <div className='grid md:grid-cols-2  grid-cols-1'>
                            {
                                cardsitems.map((item) => (
                                    <div key={item.id} className='mt-10'>
                                        <img src={item.icons} alt='' className='w-30 h-30 object-cover' />
                                        <h1>{item.title}</h1>
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