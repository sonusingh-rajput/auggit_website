import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote: "Auggit's automation platform completely transformed how we handle our invoice verification and vendor onboarding. Operations are seamless.",
    author: "Linda A.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "The SLaiCE integration allowed us to extract and secure precisely the financial data we needed from our SAP architecture without friction.",
    author: "Henry B.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "The document management workflow is a game-changer for managing our compliance audits. It's really efficient and completely hassle-free.",
    author: "Joshua T.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    quote: "Finding a software solution that really understands all of our data security needs has never been easier. This platform has changed our business.",
    author: "Samantha K.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-24 px-6 lg:px-16 border-b border-slate-200">
      
      {/* Background Code Effects Layer (Reversed Blue Stripe Background) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. Repeating Stripe Pattern with Vertical Shading Illusion */}
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

        {/* 2. Bottom-to-Top Soft Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-blue-200/50 pointer-events-none" />

        {/* 3. Right White Fade for Smooth Transition */}
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />

      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            <span className="text-[#2997D0]">Client Testimonials:</span> <br />
            <span className="text-slate-800">Hear from Those We’ve Cared For</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Discover the difference we make through the voices of those we’ve served:
          </p>
        </div>

        {/* Top Left Decorative Dot Matrix */}
        <div className="absolute top-28 left-4 sm:left-12 grid grid-cols-5 gap-2 opacity-60 pointer-events-none z-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#2997D0]" />
          ))}
        </div>

        {/* Testimonial Cards Grid (Top Row: 2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {testimonials.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-[0_10px_30px_rgba(41,151,208,0.1)] flex items-start gap-5 relative group hover:border-[#2997D0] transition-all"
            >
              <img 
                src={item.avatar} 
                alt={item.author} 
                className="w-16 h-16 rounded-2xl object-cover border border-blue-100 shadow-sm shrink-0"
              />
              <div className="space-y-2">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  "{item.quote}"
                </p>
                <p className="font-bold text-slate-900 text-sm pt-1">
                  - {item.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Counter Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 text-center my-12 relative z-10">
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#2997D0]">10,000+</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Successful Consultations</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#2997D0]">2,500+</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Healthcare Professionals</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#2997D0]">98%</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Patient Satisfaction Rate</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-5xl font-extrabold text-[#2997D0]">200+</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">Top Specialists</p>
          </div>
        </div>

        {/* Testimonial Cards Grid (Bottom Row: 2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {testimonials.slice(2, 4).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-[0_10px_30px_rgba(41,151,208,0.1)] flex items-start gap-5 relative group hover:border-[#2997D0] transition-all"
            >
              <img 
                src={item.avatar} 
                alt={item.author} 
                className="w-16 h-16 rounded-2xl object-cover border border-blue-100 shadow-sm shrink-0"
              />
              <div className="space-y-2">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  "{item.quote}"
                </p>
                <p className="font-bold text-slate-900 text-sm pt-1">
                  - {item.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Right Decorative Dot Matrix */}
        <div className="absolute bottom-10 right-4 sm:right-12 grid grid-cols-5 gap-2 opacity-65 pointer-events-none z-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[#2997D0]" />
          ))}
        </div>

      </div>
    </section>
  );
}