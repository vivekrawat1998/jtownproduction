import React from "react";
import {
  Rocket,
  FileText,
  Newspaper,
  Users,
  Globe,
  Megaphone,
  Star,
} from "lucide-react";

const getIcon = (point) => {
  if (point.toLowerCase().includes("grant")) return <Rocket className="w-5 h-5 text-purple-500" />;
  if (point.toLowerCase().includes("tender")) return <FileText className="w-5 h-5 text-yellow-400" />;
  if (point.toLowerCase().includes("news")) return <Newspaper className="w-5 h-5 text-red-400" />;
  if (point.toLowerCase().includes("profile")) return <Users className="w-5 h-5 text-emerald-400" />;
  if (point.toLowerCase().includes("reach") || point.toLowerCase().includes("visibility")) return <Globe className="w-5 h-5 text-cyan-400" />;
  if (point.toLowerCase().includes("stand out") || point.toLowerCase().includes("attract")) return <Star className="w-5 h-5 text-pink-400" />;
  return <Megaphone className="w-5 h-5 text-orange-400" />;
};

const CarouselCard = ({ image, title, points = [] }) => {
  return (
    <div className="relative w-full h-auto font-space sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-600 hover:scale-[1.03] transition-transform duration-300">
      <div
        className="absolute inset-0 z-0 bg-contain bg-center brightness-[0.3] blur-[1px]"
        style={{ backgroundImage: `url(/assets/engobackground.webp)` }}
      />

      <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/80 via-black/70 to-[#921072] z-0" />

      <div className="relative z-10 p-10 sm:p-8 h-full flex flex-col  text-white">
        <h3 className="text-3xl sm:text-4xl whitespace-break-spaces text-white text-center font-extrabold mb-5 drop-shadow-xl  tracking-wide">
          {title}
        </h3>

        {points.length > 0 && (
          <ul className="mt-5 space-y-4  font-medium leading-relaxed">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span>{getIcon(point)}</span>
                <span className="drop-shadow-sm">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CarouselCard;  
