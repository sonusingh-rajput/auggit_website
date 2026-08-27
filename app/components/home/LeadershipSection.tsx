import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiLinkedin } from "react-icons/fi";

export default function LeadershipSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-28 px-6 lg:px-16 border-b border-slate-200">
      
      {/* Background Code Effects Layer */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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
      </div> */}

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#2997D0] bg-blue-50 rounded-full border border-blue-200 shadow-sm">
            Leadership Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Visionary Leadership at the <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">Auggit</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Driven by decades of enterprise software mastery and global technical innovation.
          </p>
        </motion.div>

        {/* Leadership Cards Container */}
        <div className="space-y-10">
          
          {/* CEO Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-blue-100 shadow-[0_10px_30px_rgba(41,151,208,0.08)] hover:shadow-[0_15px_40px_rgba(41,151,208,0.15)] transition-all flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shrink-0 border border-blue-100 bg-white shadow-sm flex items-center justify-center">
              <img 
                src="/ceo_founder.png" 
                alt="Sudeesh Kuttykrishnan - CEO" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-4 text-left flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Sudeesh Kuttykrishnan</h3>
                  <p className="text-[#2997D0] font-semibold text-sm">Chief Executive Officer (CEO)</p>
                </div>
                <a 
                  href="https://www.linkedin.com/in/sudeeshk/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-blue-50 text-[#2997D0] hover:bg-[#2997D0] hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border border-blue-200"
                >
                  <FiLinkedin className="w-4 h-4" /> Connect
                </a>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Sudeesh is a seasoned Technology Business Leader with 30 years of experience in software product management and enterprise leadership. Over 23 years at SAP, he led development teams, managed products across SAP’s portfolio, and drove adoption of SAP technologies across the APAC region, delivering solutions used in over 40 countries.
              </p>
            </div>
          </motion.div>

          {/* CTO Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-blue-100 shadow-[0_10px_30px_rgba(41,151,208,0.08)] hover:shadow-[0_15px_40px_rgba(41,151,208,0.15)] transition-all flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shrink-0 border border-blue-100 bg-white shadow-sm flex items-center justify-center">
              <img 
                src="/cto.png" 
                alt="Govind Gagoria - CTO" 
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-4 text-left flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Govind Gagoria</h3>
                  <p className="text-[#2997D0] font-semibold text-sm">Chief Technology Officer (CTO)</p>
                </div>
                <a 
                  href="https://www.linkedin.com/in/govindgagoria/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-blue-50 text-[#2997D0] hover:bg-[#2997D0] hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border border-blue-200"
                >
                  <FiLinkedin className="w-4 h-4" /> Connect
                </a>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Govind is an accomplished technical architect and engineering leader driving Auggit's core product ecosystem. With deep-rooted expertise in secure architecture, data localization, and enterprise scalability, he spearheads technical strategy to ensure robust performance across all platforms.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Learn More About Us Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center pt-4"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-[#2997D0] hover:bg-[#2585b7] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(41,151,208,0.3)] group"
          >
            <span>Learn More About Our Team</span>
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}