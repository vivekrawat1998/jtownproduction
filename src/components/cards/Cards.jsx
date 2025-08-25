import React from "react";
import { ShoppingCart, Settings, BarChart3 } from "lucide-react";

const Cards = () => {
  const cardsitems = [
    {
      id: 1,
      icon: <ShoppingCart size={100} className="text-black" />,
      title: "Custom Online Store",
      desc: "Launch a secure and customizable store with product catalogs, shopping cart, and smooth checkout experience.",
    },
    {
      id: 2,
      icon: <Settings size={100} className="text-black" />,
      title: "Powerful Admin Panel",
      desc: "Manage inventory, process orders, and control users easily with a full-featured admin dashboard.",
    },
    {
      id: 3,
      icon: <BarChart3 size={100} className="text-black" />,
      title: "Analytics & Growth",
      desc: "Track sales, analyze customer behavior, and scale your business using in-depth insights and reporting.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-32 gap-5 ">
      {cardsitems.map((item) => (
        <div
          key={item.id}
          className="bg-secondary p-3 rounded-xl shadow-lg flex flex-col items-start text-start"
        >
          {item.icon}
          <div className="py-10 space-y-5">
            <h1 className="text-xl text-gray-900 font-semibold mt-4">{item.title}</h1>
            <p className="text-black font-semibold mt-2">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
