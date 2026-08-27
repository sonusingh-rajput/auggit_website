import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-16 pb-24 px-6 lg:px-16 min-h-[92vh] flex items-center">
      
      {/* Background Code Effects Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. Repeating Stripe Pattern with Vertical Shading Illusion */}
        <div 
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(90deg, 
              rgba(255, 255, 255, 0.8) 0px, 
              rgba(255, 255, 255, 0.8) 30px, 
              rgba(147, 197, 253, 0.4) 31px, 
              rgba(59, 130, 246, 0.7) 60px
            )`,
          }}
        />

        {/* 2. Top-to-Bottom Soft Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-blue-200/50 pointer-events-none" />

        {/* 3. Left White Fade for Smooth Transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content & Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50/90 text-[#2997D0] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200/80 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#2997D0] animate-pulse"></span>
            Smart Solutions for Modern Businesses
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Structure Information. <br />
            Power Performance. <br />
            <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Stay Compliant.
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            Auggit's automation and data compliance solutions connect your systems, streamline operations, and ensure your business stays efficient, transparent, and audit-ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/product/slaice"
              className="inline-flex items-center gap-2 bg-[#0f4eac] hover:bg-[#2354da] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(15,78,172,0.3)] group"
            >
              <span>Explore Solutions</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-slate-800 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm border border-slate-300 group backdrop-blur-md"
            >
              <span>Request a Demo</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-slate-600" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Optimized 3D Dashboard Image Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative flex justify-center items-center"
        >
          {/* Constrained sizing container wrapper for proper layout balancing */}
          <div className="relative w-full max-w-2xl lg:max-w-none">
            {/* Subtle backglow element */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-3xl blur-3xl pointer-events-none -z-10" />
            
            <img 
              src="/hero_image1.png" 
              alt="Auggit Platform Dashboard" 
              className="w-full h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(41,151,208,0.18)] transform hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}