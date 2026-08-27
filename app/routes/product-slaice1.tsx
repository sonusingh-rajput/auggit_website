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
      className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-[#E0F0FF] shadow-sm hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 text-center"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#0077CC] to-[#00B4D8] text-white shadow-lg shadow-blue-200/50 mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#0A1628] mb-2">
          {feature.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">
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
      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E8F4FF] shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-2 rounded-lg bg-[#E8F4FF] text-[#0077CC] shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#0A1628]">{benefit.title}</h4>
        <p className="text-xs text-slate-400">{benefit.desc}</p>
      </div>
    </motion.div>
  );
};

export default function ProductSlaice() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-[#F8FBFF] text-slate-800 overflow-x-hidden">

      {/* ========== HERO SECTION ========== */}
      <section
        ref={heroRef}
        className="relative px-6 pt-20 pb-20 sm:pt-28 sm:pb-24 max-w-7xl mx-auto"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-b-[2.5rem]">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#E0F0FF] rounded-full blur-[100px] opacity-60"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#D4EBFF] rounded-full blur-[80px] opacity-40"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#EBF5FF] rounded-full blur-[60px] opacity-50"
            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F4FF] border border-[#B8DFFF] text-[#0077CC] text-xs font-bold uppercase tracking-[0.15em]">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A3FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A3FF]" />
              </span>
              SAP Integration Engine
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A1628] leading-[1.1]">
              SLaiCE <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-[#0077CC] via-[#0099FF] to-[#00B4D8] bg-clip-text text-transparent">
                Integration
              </span>
            </h1>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Seamlessly connect your SAP landscape with real-time, parameter-driven
              data extraction—eliminating the need for full system replication while
              ensuring compliance and reducing infrastructure costs.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0077CC] hover:bg-[#005FA3] text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105"
              >
                Explore Features
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.sap.com/products/erp/partners/vouch-application-private-limited-slaice-for-sap-hana.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-[#F0F7FF] text-[#0077CC] font-semibold text-sm border border-[#CCE5FF] transition-all hover:scale-105 shadow-sm"
              >
                <SiSap className="w-4 h-4" />
                View Partner Page
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-500" />
                SAP Certified
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-500" />
                Patent Pending
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-500" />
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-[#D4EBFF] bg-white">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="SAP Data Integration Dashboard"
                className="w-full h-auto object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F0F7FF]/80 via-transparent to-transparent" />

              {/* Floating Badges */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 border border-[#E0F0FF] shadow-lg flex items-center gap-2.5">
                <SiSap className="w-5 h-5 text-[#0077CC]" />
                <span className="text-xs font-bold text-[#0A1628]">SAP Native</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 border border-[#E0F0FF] shadow-lg flex items-center gap-2.5">
                <FiZap className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-[#0A1628]">Real-Time</span>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl px-4 py-3 text-center border border-[#E0F0FF] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs text-slate-400">Users (7d)</div>
                <div className="text-lg font-bold text-[#0A1628]">1,284</div>
                <div className="text-xs text-emerald-500 font-medium">↑ 12.5%</div>
              </div>
              <div className="bg-white rounded-xl px-4 py-3 text-center border border-[#E0F0FF] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs text-slate-400">Median Usage</div>
                <div className="text-lg font-bold text-[#0A1628]">87%</div>
                <div className="text-xs text-emerald-500 font-medium">↑ 4.2%</div>
              </div>
              <div className="bg-white rounded-xl px-4 py-3 text-center border border-[#E0F0FF] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs text-slate-400">Active</div>
                <div className="text-lg font-bold text-[#0A1628]">98%</div>
                <div className="text-xs text-emerald-500 font-medium">↑ 2.1%</div>
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
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#0077CC] bg-[#E8F4FF] rounded-full border border-[#CCE5FF]">
            Key Capabilities
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0A1628]">
            Select. Filter. Save.{" "}
            <span className="bg-gradient-to-r from-[#0077CC] to-[#00B4D8] bg-clip-text text-transparent">
              It's That Simple.
            </span>
          </h2>
          <p className="mt-3 text-slate-500 text-base">
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
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#0077CC] bg-[#E8F4FF] rounded-full border border-[#CCE5FF]">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0A1628]">
            From Connection to{" "}
            <span className="bg-gradient-to-r from-[#0077CC] to-[#00B4D8] bg-clip-text text-transparent">
              Compliance in 3 Steps
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#E0F0FF] via-[#B8DFFF] to-[#E0F0FF] -translate-y-1/2" />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative text-center bg-white rounded-2xl p-8 border border-[#E0F0FF] shadow-sm hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300"
            >
              <div className="text-5xl font-black text-[#E8F4FF] mb-2">{step.number}</div>
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#0077CC] to-[#00B4D8] text-white shadow-lg shadow-blue-200/50 mb-4">
                {index === 0 && <FiDatabase className="w-5 h-5" />}
                {index === 1 && <FiLayers className="w-5 h-5" />}
                {index === 2 && <FiShield className="w-5 h-5" />}
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm">{step.desc}</p>
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
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#0077CC] bg-[#E8F4FF] rounded-full border border-[#CCE5FF]">
              Why SLaiCE
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0A1628]">
              Leaner, Smarter Alternative to{" "}
              <span className="bg-gradient-to-r from-[#0077CC] to-[#00B4D8] bg-clip-text text-transparent">
                Traditional Replication
              </span>
            </h2>
            <p className="mt-3 text-slate-500 text-base leading-relaxed">
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
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 text-center border border-[#E0F0FF] shadow-sm hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-[#0077CC] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#0A1628]">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
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
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#0077CC] bg-[#E8F4FF] rounded-full border border-[#CCE5FF]">
            Trust & Compliance
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0A1628]">
            Built for <span className="bg-gradient-to-r from-[#0077CC] to-[#00B4D8] bg-clip-text text-transparent">Enterprise Security</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[#E0F0FF] shadow-sm min-w-[120px] hover:shadow-md transition-shadow cursor-default">
              <SiSap className="w-8 h-8 text-[#0077CC]" />
              <span className="text-xs font-semibold text-[#0A1628]">SAP Partner</span>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[#E0F0FF] shadow-sm min-w-[120px] hover:shadow-md transition-shadow cursor-default">
              <FiShield className="w-8 h-8 text-emerald-500" />
              <span className="text-xs font-semibold text-[#0A1628]">ISO 27001</span>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[#E0F0FF] shadow-sm min-w-[120px] hover:shadow-md transition-shadow cursor-default">
              <FiLock className="w-8 h-8 text-amber-500" />
              <span className="text-xs font-semibold text-[#0A1628]">Patent Pending</span>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[#E0F0FF] shadow-sm min-w-[120px] hover:shadow-md transition-shadow cursor-default">
              <FiCloud className="w-8 h-8 text-purple-500" />
              <span className="text-xs font-semibold text-[#0A1628]">SAP Certified</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0077CC] to-[#00A3FF] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl shadow-blue-500/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
          <motion.div
            className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight relative z-10">
            Ready to Build the Enterprise of Tomorrow?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto relative z-10">
            From documents to data. From data to intelligence. Auggit is your digital foundation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-blue-50 text-[#0077CC] font-semibold text-sm transition-all shadow-lg flex items-center gap-2 group cursor-pointer hover:scale-105"
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