import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiFileText,
  FiSearch,
  FiLink,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiLayers,
  FiCpu,
  FiBarChart2,
  FiLock,
  FiEye,
  FiBell,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

const targetAudiences = [
  {
    role: "ACCOUNTANTS",
    title: "Locate any record Instantly",
    features: [
      {
        icon: FiSearch,
        title: "Instant Document Retrieval",
        desc: "Stop the manual hunt. Every supporting record is indexed and searchable in one central hub.",
      },
      {
        icon: FiLink,
        title: "Automated Linking",
        desc: "Connect ERP transactions to physical docs automatically. No more broken trails.",
      },
    ],
  },
  {
    role: "IT & SYSTEMS",
    title: "The bridge between Data and Docs",
    features: [
      {
        icon: FiCpu,
        title: "Seamless ERP Integration",
        desc: "Link documents seamlessly with your ERP records. Maintain a single source of truth.",
      },
      {
        icon: FiLayers,
        title: "Zero Data Silos",
        desc: "Eliminate the gap between your transactional data and your documents.",
      },
    ],
  },
  {
    role: "AUDITORS",
    title: 'Turn Audit Season into "just another day"',
    features: [
      {
        icon: FiBarChart2,
        title: "Audit-Ready Dashboards",
        desc: "Shift from manual to instant exports. Provide auditors exactly what they need in a click.",
      },
      {
        icon: FiShield,
        title: "Continuous Compliance",
        desc: "Maintain strict version auditing and verifiable compliance trails year-round.",
      },
    ],
  },
  {
    role: "OPS MANAGERS",
    title: "Total visibility across the workflow",
    features: [
      {
        icon: FiEye,
        title: "Integrity Shield",
        desc: "Automatically flag missing or incomplete documents before they become a bottleneck.",
      },
      {
        icon: FiBell,
        title: "Proactive Alerts",
        desc: "Stay ahead of documentation lapses with automated status notifications.",
      },
    ],
  },
];

export default function ProductEdms() {
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
              Documents, Data and more …
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Automation <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-[#2997D0] bg-clip-text text-transparent">
                Platform
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A structured document management platform that connects documents to transactions, processes and accountability across the organization. Connect your documents to your data.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2997D0] hover:bg-[#2585b7] text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/30 hover:scale-105"
              >
                <span>Select your seat at the table</span>
                <FiArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                Instant Retrieval (300ms)
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-emerald-400" />
                Granular Access Controls
              </span>
            </div>
          </motion.div>

          {/* Right: Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl space-y-6 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#2997D0] text-white">
                    <FiFileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Centralized Document Vault</h4>
                    <p className="text-xs text-slate-300">Secure corporate filing system</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">Active</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Centralize your corporate filing systems with instant secure retrieval, strict access logs, and complete version auditing across departments.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-lg font-bold text-cyan-300">300ms</div>
                  <div className="text-[11px] text-slate-300">Retrieval Speed</div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-lg font-bold text-emerald-300">100%</div>
                  <div className="text-[11px] text-slate-300">Audit Trail Accuracy</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========== AUDIENCE BREAKDOWN SECTION ========== */}
      <section className="px-6 py-12 max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 bg-blue-500/10 rounded-full border border-blue-200/50">
            Role-Based Intelligence
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Tailored for Every{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Enterprise Stakeholder
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            See how manual work becomes effortless when documents meet operational data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {targetAudiences.map((group, groupIdx) => (
            <motion.div
              key={group.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
              className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 border border-blue-100 shadow-[0_15px_40px_rgba(41,151,208,0.08)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#2997D0] text-xs font-bold tracking-widest uppercase border border-blue-200">
                  {group.role}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">{group.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.features.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 space-y-2">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 w-fit">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-sm text-slate-800">{feat.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <div className="max-w-7xl mx-auto px-6 pb-16 pt-12">
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