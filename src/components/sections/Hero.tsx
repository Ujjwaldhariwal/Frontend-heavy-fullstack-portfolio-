import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#d2ff00] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#ff0055] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#00f3ff] rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          {/* Animated Neon Orb with rings */}
          <div className="relative">
            <div className="h-5 w-5 rounded-full bg-[#d2ff00] shadow-[0_0_30px_#d2ff00] animate-pulse z-10 relative"></div>
            <div className="absolute inset-0 h-5 w-5 rounded-full bg-[#d2ff00] animate-ping opacity-75"></div>
            <div className="absolute inset-[-4px] rounded-full border-2 border-[#d2ff00]/30 animate-spin" style={{ animationDuration: '3s' }}></div>
          </div>
          
          {/* Enhanced Gradient Line with glow */}
          <div className="relative h-40 sm:h-80 w-1 mt-2">
            <div className="absolute inset-0 bg-gradient-to-b from-[#d2ff00] via-[#ff0055] to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#d2ff00] via-[#ff0055] to-transparent blur-sm"></div>
          </div>
        </div>

        <div className="relative z-10">
          <motion.h1 
            className={`${styles.heroHeadText} text-white relative`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="text-[#d2ff00] drop-shadow-[0_0_20px_rgba(210,255,0,0.8)] font-black tracking-wider relative z-10">
                {config.hero.name}
              </span>
              <span className="absolute inset-0 text-[#d2ff00] blur-md opacity-50 select-none" aria-hidden="true">
                {config.hero.name}
              </span>
            </span>
          </motion.h1>
          
          <motion.p 
            className={`${styles.heroSubText} text-gray-100 mt-4 font-medium drop-shadow-md relative max-w-3xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="relative inline-block">
              {config.hero.p[0]}
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent"></span>
            </span>
            {" "}
            <br className="hidden sm:block" />
            <span className="text-[#00f3ff] font-semibold">
              {config.hero.p[1]}
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-10 flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#contact"
              className="group relative px-8 py-3 bg-[#d2ff00] text-black font-bold rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 uppercase tracking-wider text-sm">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#d2ff00] to-[#00ff9d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 shadow-[0_0_20px_rgba(210,255,0,0.5)] group-hover:shadow-[0_0_30px_rgba(210,255,0,0.8)] transition-shadow duration-300"></div>
            </a>
            
            <a 
              href="#work"
              className="group relative px-8 py-3 border-2 border-[#ff0055] text-[#ff0055] font-bold rounded-lg overflow-hidden hover:text-white hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 uppercase tracking-wider text-sm">View Work</span>
              <div className="absolute inset-0 bg-[#ff0055] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute inset-0 shadow-[0_0_20px_rgba(255,0,85,0)] group-hover:shadow-[0_0_30px_rgba(255,0,85,0.5)] transition-shadow duration-300"></div>
            </a>
          </motion.div>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#d2ff00]/50 flex justify-center items-start p-2 hover:border-[#d2ff00] transition-colors duration-300 group">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#d2ff00] mb-1 shadow-[0_0_10px_rgba(210,255,0,0.8)] group-hover:shadow-[0_0_20px_rgba(210,255,0,1)]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;