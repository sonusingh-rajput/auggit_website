import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiShield, FiCheckCircle, FiLayers, FiDatabase, FiUsers, FiCpu, FiFileText, FiTrendingUp } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#021024] via-[#052659]/80 to-[#1b4372] text-[#C1E8FF] pt-16 pb-32 px-6 lg:px-12">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2997D0]/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#5483B3]/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Top Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#021024]/80 text-[#C1E8FF] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest border border-[#5483B3]/50 shadow-xl mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#2997D0] animate-pulse"></span>
          Smart Solutions for Modern Businesses
        </motion.div>

        {/* Main Heading & Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl space-y-4 mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Structure Information. <br />
            Power Performance. <br />
            <span className="bg-gradient-to-r from-[#C1E8FF] via-[#7DA0CA] to-[#2997D0] bg-clip-text text-transparent">
              Stay Compliant.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#C1E8FF]/80 max-w-2xl mx-auto leading-relaxed">
            Auggit's automation and data compliance solutions connect your systems, streamline operations, and ensure your business stays efficient, transparent, and audit-ready.
          </p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2997D0] to-[#5483B3] hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold text-base transition-all shadow-[0_6px_30px_rgba(41,151,208,0.6)] border border-[#C1E8FF]/30 group"
          >
            <span>Request a Demo</span>
            <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-[#C1E8FF]" />
          </Link>
        </motion.div>

        {/* Interactive Hero Dashboard & Floating Cards Grid */}
        <div className="w-full relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Left Floating Card: Automation Suite Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 space-y-6 hidden lg:block"
          >
            <div className="bg-[#021024]/80 backdrop-blur-xl p-6 rounded-3xl border border-[#5483B3]/40 shadow-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#2997D0]/20 flex items-center justify-center text-[#2997D0]">
                  <FiLayers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Automation Suite</h4>
                  <p className="text-[11px] text-[#7DA0CA]">Operational Efficiency</p>
                </div>
              </div>
              
              <p className="text-xs text-[#7DA0CA] leading-relaxed">
                Automate workflows, connect departments, and manage documents in one place.
              </p>

              <div className="space-y-2 pt-2 text-xs text-[#C1E8FF]">
                <div className="flex items-center justify-between bg-[#052659]/60 px-3 py-2.5 rounded-xl border border-[#5483B3]/20">
                  <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-400 w-3.5 h-3.5" /> Vendor Onboarding</span>
                </div>
                <div className="flex items-center justify-between bg-[#052659]/60 px-3 py-2.5 rounded-xl border border-[#5483B3]/20">
                  <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-400 w-3.5 h-3.5" /> Invoice Verification</span>
                </div>
                <div className="flex items-center justify-between bg-[#052659]/60 px-3 py-2.5 rounded-xl border border-[#5483B3]/20">
                  <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-400 w-3.5 h-3.5" /> Gate Pass Tracking</span>
                </div>
                <div className="flex items-center justify-between bg-[#052659]/60 px-3 py-2.5 rounded-xl border border-[#5483B3]/20">
                  <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-400 w-3.5 h-3.5" /> Document Management</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Main Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-6 bg-[#021024]/90 backdrop-blur-2xl rounded-3xl border border-[#5483B3]/50 shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            {/* Dashboard Header Bar */}
            <div className="bg-[#021024] px-6 py-4 border-b border-[#5483B3]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2997D0] flex items-center justify-center font-bold text-white text-sm shadow-md">a</div>
                <span className="font-bold text-white text-sm tracking-wide">Automation Suite</span>
              </div>
              <div className="text-xs text-[#7DA0CA] bg-[#052659] px-3 py-1 rounded-full border border-[#5483B3]/30">
                May 12 – May 18 ▾
              </div>
            </div>

            {/* Dashboard Metrics Grid */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-[#052659]/60 p-4 rounded-2xl border border-[#5483B3]/30 space-y-1">
                  <p className="text-[10px] text-[#7DA0CA]">Invoices Verified</p>
                  <h3 className="text-lg font-bold text-white">1,250</h3>
                  <span className="text-[10px] text-emerald-400 font-medium">↑ 18%</span>
                </div>
                <div className="bg-[#052659]/60 p-4 rounded-2xl border border-[#5483B3]/30 space-y-1">
                  <p className="text-[10px] text-[#7DA0CA]">Vendors Onboarded</p>
                  <h3 className="text-lg font-bold text-white">320</h3>
                  <span className="text-[10px] text-emerald-400 font-medium">↑ 12%</span>
                </div>
                <div className="bg-[#052659]/60 p-4 rounded-2xl border border-[#5483B3]/30 space-y-1">
                  <p className="text-[10px] text-[#7DA0CA]">Gate Pass Active</p>
                  <h3 className="text-lg font-bold text-white">560</h3>
                  <span className="text-[10px] text-emerald-400 font-medium">↑ 8%</span>
                </div>
                <div className="bg-[#052659]/60 p-4 rounded-2xl border border-[#5483B3]/30 space-y-1">
                  <p className="text-[10px] text-[#7DA0CA]">Documents Stored</p>
                  <h3 className="text-lg font-bold text-white">12,850</h3>
                  <span className="text-[10px] text-emerald-400 font-medium">↑ 20%</span>
                </div>
              </div>

              {/* Lower Section: Workflow Status & Activity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Workflow Status Box */}
                <div className="bg-[#052659]/60 p-5 rounded-2xl border border-[#5483B3]/30 flex flex-col justify-between">
                  <h4 className="text-xs font-semibold text-[#C1E8FF] uppercase tracking-wider mb-2">Workflow Status</h4>
                  <div className="flex items-center justify-center py-2">
                    <div className="relative w-24 h-24 rounded-full border-4 border-[#2997D0] flex items-center justify-center shadow-[0_0_15px_rgba(41,151,208,0.4)]">
                      <div className="text-center">
                        <span className="text-xl font-bold text-white">78%</span>
                        <p className="text-[9px] text-[#7DA0CA]">Completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around text-[10px] text-[#7DA0CA] pt-2 border-t border-[#5483B3]/20">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#2997D0]"></span>Completed</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#5483B3]"></span>In Progress</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-500"></span>Pending</span>
                  </div>
                </div>

                {/* Recent Activity Box */}
                <div className="bg-[#052659]/60 p-5 rounded-2xl border border-[#5483B3]/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-[#C1E8FF] uppercase tracking-wider">Recent Activity</h4>
                    <span className="text-[10px] text-[#2997D0] cursor-pointer">View All</span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between pb-1.5 border-b border-[#5483B3]/10">
                      <span className="text-white font-medium text-[11px]">Invoice #INV-1023</span>
                      <span className="text-emerald-400 text-[10px]">Verified 2m ago</span>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-[#5483B3]/10">
                      <span className="text-white font-medium text-[11px]">Vendor ABC Corp</span>
                      <span className="text-emerald-400 text-[10px]">Onboarded 15m ago</span>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-[#5483B3]/10">
                      <span className="text-white font-medium text-[11px]">Gate Pass #GP-221</span>
                      <span className="text-[#2997D0] text-[10px]">Approved 1h ago</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Floating Card: SLaiCE Compliance & Data Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 space-y-6 hidden lg:block"
          >
            {/* Efficiency Metric Pill */}
            <div className="bg-[#021024]/80 backdrop-blur-xl p-4 rounded-2xl border border-[#5483B3]/40 shadow-xl flex items-center justify-between">
              <div>
                <p className="text-[10px] text-[#7DA0CA] uppercase tracking-wider font-semibold">Operational Efficiency</p>
                <h4 className="text-xl font-bold text-white">92%</h4>
              </div>
              <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg font-medium">↑ 92%</span>
            </div>

            {/* SLaiCE Compliance Widget */}
            <div className="bg-[#021024]/80 backdrop-blur-xl p-5 rounded-3xl border border-[#5483B3]/40 shadow-2xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2997D0] to-[#5483B3] flex items-center justify-center text-white font-bold shadow-md">
                  <FiDatabase className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">SLaiCE</h4>
                  <p className="text-[11px] text-[#7DA0CA]">Data Compliance</p>
                </div>
              </div>
              <p className="text-xs text-[#7DA0CA] leading-relaxed">
                Slice, transform, and localize only the financial data you need from SAP systems.
              </p>
              <Link to="/product/slaice" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2997D0] hover:text-white transition-colors pt-1">
                Learn More <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* India Compliant Badge Widget */}
            <div className="bg-[#021024]/80 backdrop-blur-xl p-4 rounded-2xl border border-[#5483B3]/40 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FiShield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">India Compliant</h4>
                  <p className="text-[10px] text-emerald-400">100% Data Compliance</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Feature Navigation Pills Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-16 pt-8 border-t border-[#5483B3]/30 w-full max-w-4xl"
        >
          <div className="flex items-center gap-2 bg-[#021024]/70 px-5 py-2.5 rounded-full border border-[#5483B3]/30 text-xs font-medium text-[#C1E8FF] shadow-md">
            <FiUsers className="w-4 h-4 text-[#2997D0]" /> People
          </div>
          <div className="flex items-center gap-2 bg-[#021024]/70 px-5 py-2.5 rounded-full border border-[#5483B3]/30 text-xs font-medium text-[#C1E8FF] shadow-md">
            <FiCpu className="w-4 h-4 text-[#2997D0]" /> Process
          </div>
          <div className="flex items-center gap-2 bg-[#021024]/70 px-5 py-2.5 rounded-full border border-[#5483B3]/30 text-xs font-medium text-[#C1E8FF] shadow-md">
            <FiFileText className="w-4 h-4 text-[#2997D0]" /> Documents
          </div>
          <div className="flex items-center gap-2 bg-[#021024]/70 px-5 py-2.5 rounded-full border border-[#5483B3]/30 text-xs font-medium text-[#C1E8FF] shadow-md">
            <FiTrendingUp className="w-4 h-4 text-[#2997D0]" /> Performance
          </div>
        </motion.div>

      </div>
    </section>
  );
}