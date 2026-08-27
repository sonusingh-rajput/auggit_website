import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { HiPlay, HiCheckCircle } from "react-icons/hi";

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
            Auggit Platform Walkthrough
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Auggit in <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            See how Auggit helps you extract the right SAP data, ensure compliance, and accelerate system provisioning.
          </p>
        </div>

        {/* Video Container Box */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#021024] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(41,151,208,0.2)] border border-blue-300/30"
        >
          {!isPlaying ? (
            <div className="relative w-full aspect-video flex items-center justify-center group cursor-pointer overflow-hidden" onClick={() => setIsPlaying(true)}>
              {/* Thumbnail / Mockup View */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#021024] via-[#0a2540] to-[#021024] opacity-90" />
              
              <div className="absolute inset-0 flex items-center justify-between px-8 sm:px-16 pointer-events-none z-10">
                <div className="space-y-4 max-w-md text-left">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Smart Data Selection. <br />
                    <span className="text-[#2997D0]">Powerful Results.</span>
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-center gap-2"><HiCheckCircle className="text-emerald-400 w-4 h-4 shrink-0" /> Extract Only What You Need</div>
                    <div className="flex items-center gap-2"><HiCheckCircle className="text-emerald-400 w-4 h-4 shrink-0" /> Ensure Residency & Compliance</div>
                    <div className="flex items-center gap-2"><HiCheckCircle className="text-emerald-400 w-4 h-4 shrink-0" /> Accelerate Test Provisioning</div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#2997D0] text-white flex items-center justify-center shadow-[0_0_30px_rgba(41,151,208,0.6)] group-hover:scale-110 transition-transform shrink-0">
                  <HiPlay className="w-10 h-10 fill-current translate-x-0.5" />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9QXRfMYpTqg?autoplay=1"
                title="Auggit Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </motion.div>

        {/* Action CTA Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://youtu.be/9QXRfMYpTqg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2997D0] hover:bg-[#2585b7] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(41,151,208,0.3)] group"
          >
            <span>Watch Full Demo on YouTube</span>
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}