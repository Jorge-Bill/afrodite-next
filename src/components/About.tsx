import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import catPlay from "../utils/JSON/cat_play.json";
import config from '../config/index.json';

import { 
  FaInstagram, 
  FaWhatsapp,
  FaTiktok,
  FaYoutube 
} from 'react-icons/fa';

const About = () => {
  const { about } = config;
  const { instagram, whattsapp, tiktok, youtube } = about.socialMedia;
  // const { logo, name: companyName } = company;
  // const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        {/* <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div> */}
        {/* <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div> */}
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="Instagram"
            href={instagram}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            aria-label="WhatsApp"
            href={whattsapp}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            aria-label="TikTok"
            href={tiktok}
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            aria-label="YouTube"
            href={youtube}
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
        <div className="flex items-center mt-12">
          <Player src={catPlay} className="h-48" loop autoplay />
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} - {' '}
            <a 
              aria-label="Mendes Tecnologia"
              href="https://www.jorgemendes.com.br"
              target="_blank"  
              rel="noreferrer">
              Mendes Tecnologia
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
