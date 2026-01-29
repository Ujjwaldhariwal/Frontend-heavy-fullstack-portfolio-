import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#d2ff00"
    glareMaxOpacity={0.6}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[2px] rounded-[20px] relative group cursor-pointer"
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#d2ff00] via-[#ff0055] to-[#00f3ff] opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-[#d2ff00] via-[#ff0055] to-[#00f3ff] blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      
      {/* Card content */}
      <div className="relative bg-[#0a0118] rounded-[20px] py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[#d2ff00] blur-[80px] opacity-30"></div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#d2ff00]/30 group-hover:border-[#d2ff00] transition-colors duration-300"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#ff0055]/30 group-hover:border-[#ff0055] transition-colors duration-300"></div>

        {/* Icon with multiple effects */}
        <div className="relative z-10">
          <div className="absolute inset-0 bg-[#d2ff00] rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          <img
            src={icon}
            alt="service"
            className="w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(210,255,0,0.8)] transition-all duration-500 group-hover:scale-110 relative z-10"
          />
        </div>

        {/* Title with gradient text */}
        <h3 className="relative z-10 text-white text-[20px] font-bold text-center mt-4 tracking-wide transition-all duration-300 group-hover:scale-105">
          <span className="group-hover:bg-gradient-to-r group-hover:from-[#d2ff00] group-hover:to-[#00ff9d] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {title}
          </span>
        </h3>

        {/* Animated scanline effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d2ff00]/5 to-transparent animate-scan"></div>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[32px] relative"
      >
        <span className="absolute left-0 top-0 text-[#d2ff00]/20 text-6xl font-bold -z-10">"</span>
        {config.sections.about.content}
        <span className="inline-block w-2 h-5 bg-[#d2ff00] ml-1 animate-pulse"></span>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};



export default SectionWrapper(About, "about");