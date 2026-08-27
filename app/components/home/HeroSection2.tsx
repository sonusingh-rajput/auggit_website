import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiShield, FiCheckCircle, FiTrendingUp, FiLayers, FiDatabase, FiUsers, FiCpu, FiFileText } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-16 pb-32 px-6 lg:px-12 border-b border-slate-200">
      
      {/* Background Mesh Gradient & Modern Architectural Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-center vibrant blue fading mesh orb */}
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-400/20 via-sky-200/30 to-transparent rounded-full blur-[120px]" />
        
        {/* Secondary accent lighting */}
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-indigo-300/15 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-blue-300/15 rounded-full blur-[100px]" />

        {/* Subtle Engineering Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Top Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-slate-50 text-[#2997D0] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest border border-blue-200/80 shadow-sm mb-6 backdrop-blur-md"
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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Structure Information. <br />
            Power Performance. <br />
            <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Stay Compliant.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
            className="inline-flex items-center gap-2 bg-[#2997D0] hover:bg-[#2585b7] text-white px-8 py-4 rounded-full font-semibold text-base transition-all shadow-[0_4px_20px_rgba(41,151,208,0.35)] border border-blue-300 group"
          >
            <span>Request a Demo</span>
            <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-white" />
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
            <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/90 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#2997D0]/10 flex items-center justify-center text-[#2997D0]">
                  <FiLayers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Automation Suite</h4>
                  <p className="text-[11px] text-slate-500">Operational Efficiency</p>
                </div>
              </div>
              
              <p className="text-xs text-slate-600 leading-relaxed">
                Automate workflows, connect departments, and manage documents in one place.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-700">
                <div className="flex items-center justify-between bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-100">
                  <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-500 w-3.5 h-3.5" /> Vendor Onboarding</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-100">
                  <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-500 w-3.5 h-3.5" /> Invoice Verification</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-100">
                  <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-500 w-3.5 h-3.5" /> Gate Pass Tracking</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 px-3 py-2.5 rounded-xl border border-slate-100">
                  <span className="flex items-center gap-2"><FiCheckCircle className="text-emerald-500 w-3.5 h-3.5" /> Document Management</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center Main Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-6 bg-white backdrop-blur-2xl rounded-3xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            {/* Dashboard Header Bar */}
            <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2997D0] flex items-center justify-center font-bold text-white text-sm shadow-md">a</div>
                <span className="font-bold text-white text-sm tracking-wide">Automation Suite</span>
              </div>
              <div className="text-xs text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                May 12 – May 18 ▾
              </div>
            </div>

            {/* Dashboard Metrics Grid */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <p className="text-[10px] text-slate-500">Invoices Verified</p>
                  <h3 className="text-lg font-bold text-slate-900">1,250</h3>
                  <span className="text-[10px] text-emerald-600 font-medium">↑ 18%</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <p className="text-[10px] text-slate-500">Vendors Onboarded</p>
                  <h3 className="text-lg font-bold text-slate-900">320</h3>
                  <span className="text-[10px] text-emerald-600 font-medium">↑ 12%</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <p className="text-[10px] text-slate-500">Gate Pass Active</p>
                  <h3 className="text-lg font-bold text-slate-900">560</h3>
                  <span className="text-[10px] text-emerald-600 font-medium">↑ 8%</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <p className="text-[10px] text-slate-500">Documents Stored</p>
                  <h3 className="text-lg font-bold text-slate-900">12,850</h3>
                  <span className="text-[10px] text-emerald-600 font-medium">↑ 20%</span>
                </div>
              </div>

              {/* Lower Section: Workflow Status & Activity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Workflow Status Box */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">Workflow Status</h4>
                  <div className="flex items-center justify-center py-2">
                    <div className="relative w-24 h-24 rounded-full border-4 border-[#2997D0] flex items-center justify-center shadow-sm">
                      <div className="text-center">
                        <span className="text-xl font-bold text-slate-900">78%</span>
                        <p className="text-[9px] text-slate-500">Completed</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around text-[10px] text-slate-600 pt-2 border-t border-slate-200">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#2997D0]"></span>Completed</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-300"></span>In Progress</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-300"></span>Pending</span>
                  </div>
                </div>

                {/* Recent Activity Box */}
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-slate-800 uppercase tracking-wider">Recent Activity</h4>
                    <span className="text-[10px] text-[#2997D0] font-medium cursor-pointer">View All</span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span className="text-slate-900 font-medium text-[11px]">Invoice #INV-1023</span>
                      <span className="text-emerald-600 text-[10px]">Verified 2m ago</span>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span className="text-slate-900 font-medium text-[11px]">Vendor ABC Corp</span>
                      <span className="text-emerald-600 text-[10px]">Onboarded 15m ago</span>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <span className="text-slate-900 font-medium text-[11px]">Gate Pass #GP-221</span>
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
            <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Operational Efficiency</p>
                <h4 className="text-xl font-bold text-slate-900">92%</h4>
              </div>
              <span className="text-xs text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg font-medium border border-emerald-100">↑ 92%</span>
            </div>

            {/* SLaiCE Compliance Widget */}
            <div className="bg-white/90 backdrop-blur-xl p-5 rounded-3xl border border-slate-200 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2997D0] to-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                  <FiDatabase className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">SLaiCE</h4>
                  <p className="text-[11px] text-slate-500">Data Compliance</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Slice, transform, and localize only the financial data you need from SAP systems.
              </p>
              <Link to="/product/slaice" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2997D0] hover:text-blue-700 transition-colors pt-1">
                Learn More <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* India Compliant Badge Widget */}
            <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                  <FiShield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">India Compliant</h4>
                  <p className="text-[10px] text-emerald-600 font-medium">100% Data Compliance</p>
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
          className="flex flex-wrap items-center justify-center gap-6 mt-16 pt-8 border-t border-slate-200 w-full max-w-4xl"
        >
          <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-slate-200 text-xs font-medium text-slate-700 shadow-sm">
            <FiUsers className="w-4 h-4 text-[#2997D0]" /> People
          </div>
          <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-slate-200 text-xs font-medium text-slate-700 shadow-sm">
            <FiCpu className="w-4 h-4 text-[#2997D0]" /> Process
          </div>
          <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-slate-200 text-xs font-medium text-slate-700 shadow-sm">
            <FiFileText className="w-4 h-4 text-[#2997D0]" /> Documents
          </div>
          <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-slate-200 text-xs font-medium text-slate-700 shadow-sm">
            <FiTrendingUp className="w-4 h-4 text-[#2997D0]" /> Performance
          </div>
        </motion.div>

      </div>
    </section>
  );
}