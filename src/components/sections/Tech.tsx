import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-12 relative">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 relative group cursor-pointer"
            key={technology.name}
          >
            {/* Outer Glows */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#d2ff00] via-[#ff0055] to-[#00f3ff] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#d2ff00]/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full" />
            
            {/* 3D Ball Canvas */}
            <div className="relative z-10 w-full h-full">
              <BallCanvas icon={technology.icon} />
            </div>

            {/* Tooltip */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
              <div className="bg-[#0a0118] border border-[#d2ff00] rounded-lg px-4 py-2 whitespace-nowrap shadow-[0_0_20px_rgba(210,255,0,0.3)]">
                <p className="text-[#d2ff00] text-[13px] font-bold tracking-widest uppercase">
                  {technology.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");