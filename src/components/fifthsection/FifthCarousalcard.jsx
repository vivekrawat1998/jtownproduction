import React from "react";

const FifthcarousalCards = ({ image, text, Date }) => {
    return (
        <div
            className="w-full h-[400px]  "
        >
            <div>
                <img className="rounded-md" src={image} alt="" />
            </div>
            <div className=" bg-opacity-50 text-white grid place-items-start p-6 rounded-lg">
                <h2 className=""> {text}</h2>
                <h1 className=" text-white ">{Date}</h1>
            </div>

        </div>
    );
};

export default FifthcarousalCards;
