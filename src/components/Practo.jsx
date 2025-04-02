import React from 'react'

const Practo = () => {
    const [isopen, setisopen] = React.useState(false)
    const handlonClick = () => {
        setisopen(!isopen)
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className={` ${isopen ? 'w-[60vw] duration-300 hover:scale-100' : 'w-[500px] hover:scale-105 duration-1000'}   transition-all  cursor-pointer rounded-md flex flex-col border-2 items-start justify-start`}>
                <img className='w-full  h-full object-cover' src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/01/glass-onion-daniel-craig-pale-blue-eye-christian-bale-the-good-nurse-jessica-chastain-do-revenge-camil-mendes-viola-davis-from-ma-rainey-s.jpg' alt='' />
                <div className='p-3 flex  justify-between  md:gap-28 item-center ' >
                    <div className=''>
                        <h1 className='text-primary text-[clamp(1.5rem, 5vw, 3rem)]'>The devil Hours</h1>
                        <p>Get the best service for your NGO</p>
                    </div>
                    <div>
                        <button onClick={handlonClick} className='border-2 md:text-[.7em] text-[1em] p-2 '> moredetails </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practo