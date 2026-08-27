import { motion } from "framer-motion";
import { HiStar, HiCheckCircle } from "react-icons/hi";

const rowOneTestimonials = [
  {
    quote: "Auggit's automation platform completely transformed how we handle our invoice verification and vendor onboarding.",
    author: "Linda A.",
    role: "Operations Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "The SLaiCE integration allowed us to extract and secure precisely the financial data we needed from SAP without friction.",
    author: "Henry B.",
    role: "IT Director",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "Exceptional document management tools combined with 100% regulatory compliance. It gives our board total peace of mind.",
    author: "Priya Sharma",
    role: "Compliance Head",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
];

const rowTwoTestimonials = [
  {
    quote: "The document workflow is a game-changer for managing our audits. It's efficient, transparent, and completely hassle-free.",
    author: "Joshua T.",
    role: "Senior Accountant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "Finding a software solution that understands our data security needs has never been easier. This platform changed our business.",
    author: "Samantha K.",
    role: "Managing Director",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "Setup took days, not months. The automated tracking features saved us hundreds of manual administrative hours.",
    author: "David Vance",
    role: "Systems Architect",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
];

export default function TestimonialSection() {
  const infiniteRow1 = [...rowOneTestimonials, ...rowOneTestimonials, ...rowOneTestimonials];
  const infiniteRow2 = [...rowTwoTestimonials, ...rowTwoTestimonials, ...rowTwoTestimonials];

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-28 px-6 lg:px-16 border-b border-slate-200">
      
      {/* Background Code Effects Layer (Reversed Blue Stripe Background) */}
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

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2997D0] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-blue-200 shadow-sm">
            <HiCheckCircle className="w-4 h-4 text-[#2997D0]" /> Verified Enterprise Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Trusted by Industry Leaders <br />
            <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            See how our advanced compliance automation empowers modern teams to perform at their absolute best.
          </p>
        </div>

        {/* Dual Marquee Scrolling Testimonial Tracks */}
        <div className="relative w-full overflow-hidden py-4 space-y-6">
          
          {/* Side Fading Masks */}
          <div className="absolute left-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Row 1: Moving Left */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex items-center gap-6 whitespace-nowrap min-w-max"
          >
            {infiniteRow1.map((item, index) => (
              <div 
                key={`r1-${index}`}
                className="w-[340px] sm:w-[400px] bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-blue-100 shadow-[0_10px_30px_rgba(41,151,208,0.08)] space-y-4 flex flex-col justify-between"
                style={{ whiteSpace: "normal" }}
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <img src={item.avatar} alt={item.author} className="w-11 h-11 rounded-full object-cover border border-blue-200" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Row 2: Moving Right */}
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            className="flex items-center gap-6 whitespace-nowrap min-w-max"
          >
            {infiniteRow2.map((item, index) => (
              <div 
                key={`r2-${index}`}
                className="w-[340px] sm:w-[400px] bg-white/95 backdrop-blur-xl p-6 rounded-3xl border border-blue-100 shadow-[0_10px_30px_rgba(41,151,208,0.08)] space-y-4 flex flex-col justify-between"
                style={{ whiteSpace: "normal" }}
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <img src={item.avatar} alt={item.author} className="w-11 h-11 rounded-full object-cover border border-blue-200" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Statistics Counter Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-center relative z-10 max-w-5xl mx-auto">
          <div className="space-y-1 bg-white/60 p-4 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#2997D0]">10,000+</h3>
            <p className="text-xs text-slate-600 font-medium">Invoices Verified</p>
          </div>
          <div className="space-y-1 bg-white/60 p-4 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#2997D0]">2,500+</h3>
            <p className="text-xs text-slate-600 font-medium">Vendors Onboarded</p>
          </div>
          <div className="space-y-1 bg-white/60 p-4 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#2997D0]">98%</h3>
            <p className="text-xs text-slate-600 font-medium">Audit Satisfaction Rate</p>
          </div>
          <div className="space-y-1 bg-white/60 p-4 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#2997D0]">200+</h3>
            <p className="text-xs text-slate-600 font-medium">Enterprise Clients</p>
          </div>
        </div>

      </div>
    </section>
  );
}