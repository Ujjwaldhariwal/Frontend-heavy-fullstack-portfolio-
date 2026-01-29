import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareColor="#d2ff00"
        glarePosition="all"
        glareMaxOpacity={0.5}
        className="w-full sm:w-[360px]"
      >
        {/* Card Container with animated border */}
        <div className="relative w-full h-full group cursor-pointer">
          {/* Animated gradient border */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-[#d2ff00] via-[#ff0055] to-[#00f3ff] rounded-2xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500" />
          
          {/* Main card */}
          <div className="relative bg-[#0a0118] rounded-2xl p-5 w-full h-full overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#d2ff00] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#ff0055] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />

            {/* Decorative corner elements */}
            <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-[#d2ff00]/20 group-hover:border-[#d2ff00]/60 transition-colors duration-300" />
            <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-[#ff0055]/20 group-hover:border-[#ff0055]/60 transition-colors duration-300" />

            {/* Image Container */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#d2ff00]/10 group-hover:border-[#d2ff00]/30 transition-colors duration-300">
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-10" />
              
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />

              {/* GitHub link button */}
                <div className="absolute top-3 right-3 z-20">
                 
                    <img
                      src={github}
                      alt="github"
                      className="w-5 h-5 object-contain opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-[#d2ff00] opacity-0 group-hover/btn:opacity-20 blur-lg transition-opacity duration-300" />
                </div>

              {/* Scan line effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d2ff00]/10 to-transparent works-scan-animation" />
              </div>
            </div>

            <div className="mt-5 relative z-10">
              {/* Title with glitch effect */}
              <h3 className="text-white font-bold text-[24px] tracking-wide relative group/title">
                <span className="relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#d2ff00] group-hover:to-[#00ff9d] group-hover:bg-clip-text transition-all duration-300">
                  {name}
                </span>
                <span className="absolute inset-0 text-[#d2ff00] opacity-0 group-hover/title:opacity-20 blur-sm transition-opacity duration-300 select-none" aria-hidden="true">
                  {name}
                </span>
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d2ff00] to-[#ff0055] group-hover/title:w-full transition-all duration-500" />
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-400 text-[14px] leading-relaxed line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">
                {description}
              </p>
            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag, tagIndex) => (
                <span
                  key={tag.name}
                  className={`text-[13px] ${tag.color} font-medium tracking-wide px-3 py-1 rounded-full border border-current/20 hover:border-current/60 hover:shadow-[0_0_10px_currentColor] transition-all duration-300 cursor-default works-tag-fade`}
                  style={{
                    animationDelay: `${tagIndex * 0.1}s`
                  }}
                >
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d2ff00] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="w-full flex relative">
        {/* Decorative quote mark */}
        <div className="absolute -left-4 -top-4 text-[#d2ff00]/10 text-[120px] font-bold leading-none select-none pointer-events-none">"</div>
        
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px] relative z-10"
        >
          {config.sections.works.content}
          <span className="inline-block w-2 h-5 bg-[#d2ff00] ml-1 animate-pulse" />
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="mt-20 flex flex-wrap gap-8 justify-center sm:justify-start relative">
        {/* Background decorative grid */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d2ff00] rounded-full blur-[150px] opacity-5" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#ff0055] rounded-full blur-[150px] opacity-5" />
        </div>

        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");