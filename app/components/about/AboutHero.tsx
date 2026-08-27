import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

export default function AboutHero() {
  return (
    <div className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Backsite Background Glow Effects & Grid Pattern */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Soft radial blue and indigo glow spots */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-400/20 via-[#2997D0]/20 to-indigo-500/20 blur-[100px] rounded-full" />
        
        {/* Subtle geometric dot grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(#2997D0 1px, transparent 1px)`,
            backgroundSize: `24px 24px`
          }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto space-y-8 relative z-10"
      >
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase text-[#2997D0] bg-white/80 backdrop-blur-md rounded-full border border-blue-200 shadow-[0_8px_30px_rgba(41,151,208,0.12)]">
          <HiSparkles className="w-4 h-4 text-[#2997D0] animate-pulse" /> 
          <span>Where innovation meets Enterprise needs</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.15]">
          Building a Smarter, More Compliant <br className="hidden sm:inline" />
          <span className="relative inline-block mt-1">
            <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Enterprise
            </span>
            {/* Underline accent glow */}
            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2997D0]/60 via-blue-500/60 to-transparent rounded-full blur-[1px]" />
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
          Auggit helps organizations manage documents, enterprise data, and compliance with greater clarity, control, and efficiency.
        </p>

        {/* Quick Tech Pill Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {["Enterprise Document Management", "SAP Data Slicing", "Digital Audits", "Section 128 Compliance"].map((tag, idx) => (
            <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-100 text-slate-600 text-xs font-semibold shadow-sm">
              ✓ {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}