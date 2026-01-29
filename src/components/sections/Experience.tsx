import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #0a0118 0%, #1a0f2e 100%)",
        color: "#fff",
        borderBottom: "4px solid #d2ff00",
        borderLeft: "2px solid rgba(210, 255, 0, 0.2)",
        boxShadow: "0px 15px 40px -15px rgba(210, 255, 0, 0.3), inset 0 0 50px rgba(210, 255, 0, 0.02)",
        borderRadius: "16px",
        position: "relative",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid #0a0118",
        filter: "drop-shadow(0 0 10px rgba(210, 255, 0, 0.3))"
      }}
      date={experience.date}
      dateClassName="text-[#d2ff00] font-bold opacity-100 drop-shadow-[0_0_10px_rgba(210,255,0,0.5)]"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 30px #d2ff00, 0 0 60px rgba(210, 255, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.1)",
        border: "3px solid #d2ff00",
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center group">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      }
    >
      <div className="relative">
        {/* Corner accents */}
        <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#d2ff00]/20"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[#ff0055]/20"></div>

        {/* Job title with glitch effect */}
        <h3 className="text-[28px] font-black text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] tracking-wide relative group cursor-default">
          <span className="relative z-10">{experience.title}</span>
          <span className="absolute inset-0 text-[#d2ff00] opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" aria-hidden="true">
            {experience.title}
          </span>
        </h3>

        {/* Company name with neon effect */}
        <div className="relative inline-block mt-2">
          <p className="text-[#d2ff00] text-[18px] font-bold tracking-widest uppercase relative z-10">
            {experience.companyName}
          </p>
          <div className="absolute inset-0 bg-[#d2ff00] blur-md opacity-30"></div>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#d2ff00] via-[#ff0055] to-[#00f3ff]"></div>
        </div>
      </div>

      <ul className="ml-5 mt-6 list-none space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="relative pl-6 text-gray-200 text-[15px] leading-relaxed tracking-wide transition-all duration-300 hover:text-white hover:translate-x-1 cursor-default group"
          >
            {/* Custom bullet point */}
            <span className="absolute left-0 top-[0.6em] w-2 h-2 bg-gradient-to-br from-[#d2ff00] to-[#ff0055] rounded-full group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(210,255,0,0.8)] transition-all duration-300"></span>
            <span className="absolute left-[1px] top-[0.6em] w-1.5 h-1.5 bg-[#d2ff00] rounded-full animate-pulse"></span>
            
            {point}
            
            {/* Hover underline effect */}
            <span className="absolute bottom-0 left-6 w-0 h-px bg-gradient-to-r from-[#d2ff00] to-transparent group-hover:w-full transition-all duration-500"></span>
          </li>
        ))}
      </ul>

      {/* Decorative glow at bottom */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-[#d2ff00] blur-2xl opacity-10"></div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-[#d2ff00] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-[#ff0055] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

        <VerticalTimeline lineColor="rgba(210, 255, 0, 0.2)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");