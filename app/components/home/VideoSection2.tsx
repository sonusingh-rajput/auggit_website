import { useState } from "react";
import { motion } from "framer-motion";
import { HiPlay } from "react-icons/hi";
import { FiDatabase, FiShield, FiZap } from "react-icons/fi";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-28 px-6 lg:px-16 border-b border-slate-200">
      
      {/* Background Code Effects Layer (Reversed Blue Stripe Background) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-blue-200/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#2997D0] bg-blue-50 rounded-full border border-blue-200 shadow-sm">
            Product Walkthrough
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            SLaiCE in <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            See how SLaiCE helps you extract the right SAP data, ensure compliance, and accelerate system provisioning.
          </p>
        </div>

        {/* Video Player Mockup Card Box */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(41,151,208,0.18)] border border-blue-200"
        >
          {!isPlaying ? (
            <div 
              className="relative w-full aspect-video flex flex-col lg:flex-row items-center justify-between p-8 sm:p-14 group cursor-pointer overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-blue-100/40"
              onClick={() => setIsPlaying(true)}
            >
              {/* Left Content Area (Matching Reference Design) */}
              <div className="space-y-6 max-w-md text-left z-10">
                
                {/* Auggit Logo Badge */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold tracking-tight text-[#0f4eac]">auggit</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Smart Data Selection. <br />
                  <span className="bg-gradient-to-r from-[#2997D0] to-indigo-600 bg-clip-text text-transparent">Powerful Results.</span>
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Extract, filter and move only the data you need — securely, efficiently and compliantly.
                </p>

                {/* 3 Bottom Feature Cards */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="bg-white/90 p-3 rounded-2xl border border-blue-100 shadow-sm flex flex-col items-center text-center space-y-1">
                    <FiDatabase className="w-5 h-5 text-[#2997D0]" />
                    <span className="text-[11px] font-semibold text-slate-700 leading-tight">Smart Data Selection</span>
                  </div>
                  <div className="bg-white/90 p-3 rounded-2xl border border-blue-100 shadow-sm flex flex-col items-center text-center space-y-1">
                    <FiShield className="w-5 h-5 text-[#2997D0]" />
                    <span className="text-[11px] font-semibold text-slate-700 leading-tight">Ensure Compliance</span>
                  </div>
                  <div className="bg-white/90 p-3 rounded-2xl border border-blue-100 shadow-sm flex flex-col items-center text-center space-y-1">
                    <FiZap className="w-5 h-5 text-[#2997D0]" />
                    <span className="text-[11px] font-semibold text-slate-700 leading-tight">Faster Provisioning</span>
                  </div>
                </div>

              </div>

              {/* Right Side UI Mockup Preview with Play Button Overlay */}
              <div className="relative w-full lg:w-[55%] mt-8 lg:mt-0 rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg bg-white">
                <img 
                  src="/product1.webp" 
                  alt="SLaiCE Interface Preview" 
                  className="w-full h-auto object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] flex items-center justify-center group-hover:bg-slate-950/30 transition-all">
                  <div className="w-20 h-20 rounded-full bg-white text-[#2997D0] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform">
                    <HiPlay className="w-9 h-9 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9QXRfMYpTqg?autoplay=1"
                title="SLaiCE in Action Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Simulated Video Player Control Bar at the Bottom */}
          <div className="bg-[#021024] px-6 py-4 flex flex-col gap-2">
            {/* Progress Bar Line */}
            <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden relative cursor-pointer">
              <div className="absolute top-0 left-0 bottom-0 w-[18%] bg-[#2997D0]" />
            </div>
            {/* Controls Bar */}
            <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
              <div className="flex items-center gap-4">
                <span className="hover:text-white cursor-pointer">▶</span>
                <span className="hover:text-white cursor-pointer">⏭</span>
                <span className="hover:text-white cursor-pointer">🔊</span>
                <span>0:18 / 1:45</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hover:text-white cursor-pointer">CC</span>
                <span className="hover:text-white cursor-pointer">⚙️</span>
                <span className="hover:text-white cursor-pointer">⛶</span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}