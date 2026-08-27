import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiCheckCircle, FiLayers, FiFileText, FiTrendingUp } from "react-icons/fi";

export default function AutomationProductSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-28 px-6 lg:px-16 border-b border-slate-200">
      
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Description & 4-5 Features */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2997D0] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#2997D0] animate-pulse"></span>
            Featured Product • Automation Suite
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Streamline Workflows & <br />
            <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Accelerate Document Management
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminate manual bottlenecks across departments with our end-to-end enterprise automation engine, built to secure documents and track compliance effortlessly.
          </p>

          {/* 4-5 Key Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-2xl border border-blue-100 shadow-sm">
              <FiLayers className="w-5 h-5 text-[#2997D0] shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-slate-700">Automated vendor onboarding and verification workflows</span>
            </div>
            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-2xl border border-blue-100 shadow-sm">
              <FiFileText className="w-5 h-5 text-[#2997D0] shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-slate-700">Secure electronic document management (eDMS)</span>
            </div>
            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-2xl border border-blue-100 shadow-sm">
              <FiTrendingUp className="w-5 h-5 text-[#2997D0] shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-slate-700">Real-time performance metrics and audit trails</span>
            </div>
            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-2xl border border-blue-100 shadow-sm">
              <FiCheckCircle className="w-5 h-5 text-[#2997D0] shrink-0 mt-0.5" />
              <span className="text-xs font-medium text-slate-700">Instant gate pass tracking and invoice validation</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Link
              to="/product/automation-suite"
              className="inline-flex items-center gap-2 bg-[#2997D0] hover:bg-[#2585b7] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(41,151,208,0.3)] group"
            >
              <span>Explore Automation Suite</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Product Screenshot / Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 relative flex justify-center"
        >
          <div className="relative w-full max-w-xl bg-white/90 backdrop-blur-2xl rounded-3xl p-3 border border-blue-200/80 shadow-[0_20px_50px_rgba(41,151,208,0.15)] overflow-hidden">
            <img 
              src="/product2.png" 
              alt="Automation Suite Repository Scan Report Interface" 
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}