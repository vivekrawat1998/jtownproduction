import React from 'react';
import Herosection from '../Hero/Herosection';
import Carousal from '../Carousal/Carousal';
import Secondsection from '../Secondsection/Secondsection';
import Thirdsection from '../Thirdsection/Thirdsection';
import Fourthsection from '../fourthsection/Fourthsection';
import FifthSection from '../fifthsection/Fifthsection';

import { FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = "+91 7302284131";

const Hompage = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <div>
      <div id="home"><Herosection /></div>
      <div id="pricing"><Secondsection /></div>
      <div id="services"><Thirdsection /></div>
      <div id='projects'><FifthSection /></div>
      <div><Fourthsection /></div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center cursor-pointer animate-bounce"
        aria-label="Chat on WhatsAppp"
        style={{ zIndex: 1000, width: '56px', height: '56px' }}
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default Hompage;
