import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import AboutHero from "~/components/about/AboutHero";
import AboutStory from "~/components/about/AboutStory";
import VisionMissionCards from "~/components/about/VisionMissionCards";
import AboutTimeline from "~/components/about/AboutTimeline";
import AboutLeadership from "~/components/about/AboutLeadership";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white text-slate-900 relative overflow-hidden py-20 px-6 lg:px-16 space-y-32">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-tr from-blue-200/30 to-indigo-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-32">
        <AboutHero />
        <AboutStory />
        <AboutTimeline />
        <VisionMissionCards />
        <AboutLeadership />

        {/* Bottom Call to Action Banner */}
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