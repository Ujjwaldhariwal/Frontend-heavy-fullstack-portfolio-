import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { config } from "../../constants/config";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="relative w-full xs:w-[340px]"
  >
    {/* Outer glow effect */}
    <div className="absolute -inset-[2px] bg-gradient-to-br from-[#d2ff00] via-[#ff0055] to-[#00f3ff] rounded-3xl opacity-60 group-hover:opacity-100 blur-md transition-all duration-500" />
    
    {/* Main card */}
    <div className="relative bg-[#0a0118] p-8 rounded-3xl border border-[#d2ff00]/20 hover:border-[#d2ff00]/60 transition-all duration-300 group overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#d2ff00] blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ff0055] blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#d2ff00]/20 group-hover:border-[#d2ff00]/50 transition-colors duration-300" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#ff0055]/20 group-hover:border-[#ff0055]/50 transition-colors duration-300" />

      {/* Giant animated quote mark */}
      <div className="relative">
        <p className="text-[#d2ff00] font-black text-[72px] leading-none drop-shadow-[0_0_20px_rgba(210,255,0,0.6)] group-hover:scale-110 transition-transform duration-500 select-none">
          "
        </p>
        <div className="absolute inset-0 text-[#d2ff00] text-[72px] blur-xl opacity-50 select-none pointer-events-none">"</div>
      </div>

      <div className="mt-1 relative z-10">
        {/* Testimonial text */}
        <p className="text-white tracking-wide text-[17px] leading-[32px] group-hover:text-gray-100 transition-colors duration-300">
          {testimonial}
        </p>

        {/* Author info section */}
        <div className="mt-8 flex items-center gap-4">
          {/* Profile image with effects */}
        

          {/* Author details */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              {/* Neon @ symbol */}
              <span className="text-[#00f3ff] text-xl font-bold drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]">
                @
              </span>
              <p className="text-white font-bold text-[18px] tracking-wide group-hover:text-[#d2ff00] transition-colors duration-300">
                {name}
              </p>
            </div>
            
            <p className="mt-1 text-gray-400 text-[14px] tracking-wide">
              {designation} 
              <span className="text-gray-500 mx-2">•</span>
              <span className="text-[#d2ff00] font-semibold">{company}</span>
            </p>
          </div>
        </div>

        {/* Rating stars */}
        <div className="mt-6 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 relative feedbacks-star-animation"
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#d2ff00"
                  className="drop-shadow-[0_0_4px_rgba(210,255,0,0.8)]"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d2ff00]/5 to-transparent feedbacks-scan-animation" />
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d2ff00] to-transparent opacity-50" />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 relative">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#d2ff00] rounded-full blur-[150px] opacity-5 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#ff0055] rounded-full blur-[150px] opacity-5 pointer-events-none" />

      {/* Header section with enhanced styling */}
      <div className={`${styles.padding} bg-gradient-to-br from-[#0a0118] to-[#1a0f2e] rounded-2xl min-h-[300px] relative overflow-hidden border border-[#d2ff00]/10`}>
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#d2ff00]/30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#ff0055]/30" />

        {/* Animated orbs */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#d2ff00] rounded-full blur-[120px] opacity-10 animate-pulse" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-[#ff0055] rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(210, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(210, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10">
          <Header useMotion={true} {...config.sections.feedbacks} />
        </div>
      </div>

      {/* Testimonials grid */}
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-8 max-sm:justify-center relative z-10`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;