import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiDatabase,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiLock,
  FiCloud,
  FiCheckCircle,
  FiArrowRight,
  FiLayers,
  FiCpu,
  FiBarChart2,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

const features = [
  {
    icon: FiDatabase,
    title: "Precision Data Carving",
    description:
      "Instead of copying entire SAP systems, SLaiCE allows organizations to carve out precise subsets of data using defined parameters, eliminating terabytes of legacy data.",
  },
  {
    icon: FiShield,
    title: "Seamless Compliance",
    description:
      "Meet Indian Companies Act mandates without full system replication. Host regulated data in a live, SAP-native environment within India.",
  },
  {
    icon: FiZap,
    title: "Real-Time Performance",
    description:
      "Built on SAP's native SLT framework, SLaiCE performs in near real-time while production environments remain fully available.",
  },
  {
    icon: FiTrendingUp,
    title: "Accelerated Migrations",
    description:
      "Ditch the 'copy-everything' approach to S/4HANA transitions. Selectively migrate only critical data subsets and minimize downtime.",
  },
  {
    icon: FiCloud,
    title: "Low-Cost Test Environments",
    description:
      "Extract exact production data 'slices' to build high-performance test environments that accelerate releases while slashing infrastructure costs.",
  },
  {
    icon: FiLock,
    title: "Native SAP Integration",
    description:
      "Runs entirely within the existing SAP landscape without storing or processing data outside it, leveraging SLT, SAP Data Services, and other SAP-native technologies.",
  },
];

const benefits = [
  {
    icon: FiCpu,
    title: "Targeted Extraction",
    desc: "Extract precisely what you need instead of reprocessing entire databases.",
  },
  {
    icon: FiShield,
    title: "Data Sovereignty",
    desc: "Stay compliant without full database replication across borders.",
  },
  {
    icon: FiTrendingUp,
    title: "Cost Efficiency",
    desc: "Reduce infrastructure costs and accelerate time to production.",
  },
  {
    icon: FiLock,
    title: "Data Masking",
    desc: "Supports data scrambling for sensitive information in non-prod environments.",
  },
  {
    icon: FiDatabase,
    title: "Broad Compatibility",
    desc: "Works on SAP ECC, SAP S/4HANA on-premise, and private cloud.",
  },
  {
    icon: FiLayers,
    title: "Add-on Support",
    desc: "Supports custom and partner add-on tables seamlessly.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect to SAP",
    desc: "Securely connect SLaiCE to your existing SAP landscape (ECC or S/4HANA) with minimal configuration.",
  },
  {
    number: "02",
    title: "Configure Parameters",
    desc: "Define your data extraction parameters—company codes, document types, date ranges, and more.",
  },
  {
    number: "03",
    title: "Carve & Comply",
    desc: "SLaiCE extracts a precise subset of data, ensuring compliance and ready for reporting or migration.",
  },
];

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-100/80 shadow-lg shadow-blue-200/40 hover:shadow-xl hover:shadow-blue-300/50 transition-all duration-300 text-center"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg shadow-blue-200/50 mb-4">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">
          {feature.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const BenefitCard = ({ benefit, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = benefit.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-start gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-100/50 shadow-sm"
    >
      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-slate-800">{benefit.title}</h4>
        <p className="text-xs text-slate-500">{benefit.desc}</p>
      </div>
    </motion.div>
  );
};

export default function ProductSlaice() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-blue-100/30 text-slate-800 overflow-x-hidden pt-6">
      
      {/* ========== HERO SECTION WITH SEAMLESS TOP INTEGRATION ========== */}
      <section
        ref={heroRef}
        className="relative mx-4 sm:mx-8 lg:mx-12 px-6 pt-16 pb-20 sm:pt-24 sm:pb-24 max-w-7xl xl:mx-auto min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-[#021024] via-[#052659] to-[#021024] text-white rounded-[2.5rem] shadow-2xl mb-16"
      >
        {/* Animated Background Glow Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
          <motion.div
            className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px]"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,151,208,0.15),transparent_70%)] pointer-events-none" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-md">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              SAP Integration Engine
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              SLaiCE <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-[#2997D0] bg-clip-text text-transparent">
                Integration
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Seamlessly connect your SAP landscape with real-time, parameter-driven
              data extraction—eliminating the need for full system replication while
              ensuring compliance and reducing infrastructure costs.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2997D0] hover:bg-[#2585b7] text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/30 hover:scale-105"
              >
                Explore Features
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.sap.com/products/erp/partners/vouch-application-private-limited-slaice-for-sap-hana.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all hover:scale-105"
              >
                <SiSap className="w-4 h-4 text-cyan-400" />
                View Partner Page
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                SAP Certified
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                Patent Pending
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                Native SLT Framework
              </span>
            </div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/80 border border-white/20 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="SAP Data Integration Dashboard"
                className="w-full h-auto object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
              
              {/* Floating Badges */}
              <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-xl px-3.5 py-2 border border-white/20 shadow-xl flex items-center gap-2.5">
                <SiSap className="w-5 h-5 text-cyan-400" />
                <span className="text-xs font-bold text-white">SAP Native</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md rounded-xl px-3.5 py-2 border border-white/20 shadow-xl flex items-center gap-2.5">
                <FiZap className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white">Real-Time</span>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 text-center border border-white/15 shadow-lg">
                <div className="text-xs text-slate-300">Users (7d)</div>
                <div className="text-lg font-bold text-white">1,284</div>
                <div className="text-xs text-emerald-400">↑ 12.5%</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 text-center border border-white/15 shadow-lg">
                <div className="text-xs text-slate-300">Median Usage</div>
                <div className="text-lg font-bold text-white">87%</div>
                <div className="text-xs text-emerald-400">↑ 4.2%</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 text-center border border-white/15 shadow-lg">
                <div className="text-xs text-slate-300">Active</div>
                <div className="text-lg font-bold text-white">98%</div>
                <div className="text-xs text-emerald-400">↑ 2.1%</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section id="features" className="px-6 py-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 bg-blue-500/10 rounded-full border border-blue-200/50">
            Key Capabilities
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Select. Filter. Save.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              It's That Simple.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            SLaiCE gives you the power to carve out exactly the data you need with
            full control and zero overhead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 bg-blue-500/10 rounded-full border border-blue-200/50">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            From Connection to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Compliance in 3 Steps
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-200/50 via-blue-300/50 to-blue-200/50 -translate-y-1/2" />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 shadow-lg shadow-blue-200/30 hover:shadow-xl hover:shadow-blue-300/40 transition-all duration-300"
            >
              <div className="text-5xl font-black text-blue-600/10 mb-2">{step.number}</div>
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-200/50 mb-4">
                {index === 0 && <FiDatabase className="w-5 h-5" />}
                {index === 1 && <FiLayers className="w-5 h-5" />}
                {index === 2 && <FiShield className="w-5 h-5" />}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== BENEFITS / WHY SLaiCE ========== */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 bg-blue-500/10 rounded-full border border-blue-200/50">
              Why SLaiCE
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Leaner, Smarter Alternative to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Traditional Replication
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              Where others copy everything, SLaiCE helps enterprises extract only
              what is needed and achieve more.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Data Extraction", value: "Precision", icon: FiDatabase },
              { label: "Compliance", value: "Native", icon: FiShield },
              { label: "Infrastructure", value: "Reduced", icon: FiTrendingUp },
              { label: "Integration", value: "Seamless", icon: FiCloud },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-100/80 shadow-lg shadow-blue-200/40 hover:shadow-xl hover:shadow-blue-300/50 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== TRUST & COMPLIANCE ========== */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 bg-blue-500/10 rounded-full border border-blue-200/50">
            Trust & Compliance
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Built for <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Enterprise Security</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100/50 shadow-sm min-w-[120px]">
              <SiSap className="w-8 h-8 text-blue-600" />
              <span className="text-xs font-semibold text-slate-700">SAP Partner</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100/50 shadow-sm min-w-[120px]">
              <FiShield className="w-8 h-8 text-emerald-600" />
              <span className="text-xs font-semibold text-slate-700">ISO 27001</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100/50 shadow-sm min-w-[120px]">
              <FiLock className="w-8 h-8 text-amber-600" />
              <span className="text-xs font-semibold text-slate-700">Patent Pending</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100/50 shadow-sm min-w-[120px]">
              <FiCloud className="w-8 h-8 text-purple-600" />
              <span className="text-xs font-semibold text-slate-700">SAP Certified</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#021024] to-[#052659] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(41,151,208,0.3),transparent_50%)] pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight relative z-10">
            Ready to Build the Enterprise of Tomorrow?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto relative z-10">
            From documents to data. From data to intelligence. Auggit is your digital foundation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#2997D0] hover:bg-[#2585b7] text-white font-semibold text-sm transition-all shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              <span>Talk to our team</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}