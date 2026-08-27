import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import {  HiShieldCheck, HiTrendingUp } from "react-icons/hi";
import { BsCpu} from "react-icons/bs";

export default function HeroSection() {
  // Generate vertical columns to recreate the exact striped background effect from the reference image
  const stripeColumns = Array.from({ length: 28 });

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-20 pb-28 px-6 lg:px-16 min-h-[90vh] flex flex-col justify-between">
      
      {/* Background Vertical Stripe Gradient Layer */}
      <div className="absolute inset-0 grid grid-cols-14 md:grid-cols-28 pointer-events-none z-0">
        {stripeColumns.map((_, i) => {
          // Progressively increase blue intensity towards the right side
          const factor = i / stripeColumns.length;
          return (
            <div
              key={i}
              className="h-full border-r border-blue-100/30"
              style={{
                background: `linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(191, 219, 254, ${factor * 0.4}) 60%, rgba(96, 165, 250, ${factor * 0.6}) 100%)`
              }}
            />
          );
        })}
      </div>

      <div className="max-w-7xl mx-w-full w-full mx-auto relative z-10 flex flex-col items-start">
        
        {/* Top Tagline Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-blue-50/90 text-[#2997D0] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-200 shadow-sm mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#2997D0] animate-pulse"></span>
          Smart Solutions for Modern Businesses
        </motion.div>

        {/* Main Heading & Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-left max-w-3xl space-y-6 mb-10"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08]">
            Structure Information. <br />
            Power Performance. <br />
            <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Stay Compliant.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Auggit's automation and data compliance solutions connect your systems, streamline operations, and ensure your business stays efficient, transparent, and audit-ready.
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mb-20"
        >
          <Link
            to="/product/slaice"
            className="inline-flex items-center gap-2 bg-[#1b4332] hover:bg-[#132e22] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(27,67,50,0.3)] border border-emerald-900/20 group"
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
        </motion.div>

        {/* Bottom Feature Highlights Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl pt-4"
        >
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-blue-100 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2997D0] shrink-0 border border-blue-100">
              <BsCpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Operational Efficiency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Automate workflows and improve productivity</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-blue-100 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2997D0] shrink-0 border border-blue-100">
              <HiShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Data Compliance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Ensure accuracy, security and regulatory compliance</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-blue-100 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#2997D0] shrink-0 border border-blue-100">
              <HiTrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Business Growth</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Get real-time insights and drive sustainable growth</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
