import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiPlay } from "react-icons/hi";
import { IoClose } from "react-icons/io5"; // Import close icon
import { FiUsers, FiShield, FiTrendingUp } from "react-icons/fi";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto‑scroll to the video container when play is activated
  useEffect(() => {
    if (isPlaying && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isPlaying]);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-16 border-b border-slate-200">
      
      {/* Background Code Effects Layer */}
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

      <div className="max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-block px-3 sm:px-4 py-1 text-xs font-semibold tracking-[0.25em] uppercase text-[#2997D0] bg-blue-50 rounded-full border border-blue-200 shadow-sm">
            Inside Auggit
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Enterprise Compliance
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto px-2">
            Take a look inside Auggit's culture, vision, and the expert team empowering global digital workflows.
          </p>
        </div>

        {/* Video Player Box */}
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(41,151,208,0.18)] border border-blue-200"
        >
          {!isPlaying ? (
            // ---------- PREVIEW STATE ----------
            <div 
              className="relative w-full aspect-auto lg:aspect-video flex flex-col lg:flex-row items-start lg:items-center justify-between p-5 sm:p-8 lg:p-14 gap-6 sm:gap-8 lg:gap-0 group cursor-pointer overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-blue-100/40"
              onClick={handlePlayClick}
            >
              {/* Left Content */}
              <div className="space-y-4 sm:space-y-6 max-w-full lg:max-w-md text-left z-10">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0f4eac]">auggit</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Innovation at Work. <br />
                  <span className="bg-gradient-to-r from-[#2997D0] to-indigo-600 bg-clip-text text-transparent">
                    Empowering Teams.
                  </span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Discover how our engineers and leaders collaborate to build transparent, secure, and audit-ready enterprise tools.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white/90 p-3 rounded-2xl border border-blue-100 shadow-sm flex flex-col items-center text-center space-y-1">
                    <FiUsers className="w-5 h-5 text-[#2997D0]" />
                    <span className="text-[11px] font-semibold text-slate-700 leading-tight">Expert Culture</span>
                  </div>
                  <div className="bg-white/90 p-3 rounded-2xl border border-blue-100 shadow-sm flex flex-col items-center text-center space-y-1">
                    <FiShield className="w-5 h-5 text-[#2997D0]" />
                    <span className="text-[11px] font-semibold text-slate-700 leading-tight">Core Values</span>
                  </div>
                  <div className="bg-white/90 p-3 rounded-2xl border border-blue-100 shadow-sm flex flex-col items-center text-center space-y-1">
                    <FiTrendingUp className="w-5 h-5 text-[#2997D0]" />
                    <span className="text-[11px] font-semibold text-slate-700 leading-tight">Global Vision</span>
                  </div>
                </div>
              </div>

              {/* Video Preview */}
              <div className="relative w-full lg:w-[55%] rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg bg-slate-900 aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-indigo-950/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#2997D0] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform">
                    <HiPlay className="w-7 h-7 sm:w-9 sm:h-9 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // ---------- VIDEO PLAYING STATE ----------
            <div className="relative w-full aspect-video">
              {/* Close Button - visible on both mobile & desktop */}
              <button
                onClick={handleCloseVideo}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all hover:scale-105 border border-white/20 shadow-lg"
                aria-label="Close video and return to preview"
              >
                <IoClose className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9QXRfMYpTqg?autoplay=1"
                title="Auggit Company Official Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}