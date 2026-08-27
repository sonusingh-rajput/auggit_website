import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    quote: "Auggit's automation platform completely transformed how we handle invoice verification and vendor onboarding. Operations are effortless and audit-ready.",
    author: "Sarah Jenkins",
    role: "Chief Operations Officer",
    company: "Global Logistics UK",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 2,
    quote: "The SLaiCE integration allowed us to extract and secure precisely the financial data we needed from our SAP architecture without any friction.",
    author: "David Vance",
    role: "Head of IT Infrastructure",
    company: "Enterprise Systems Ltd",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 3,
    quote: "Exceptional document management tools combined with 100% regulatory compliance. It gives our entire board ultimate peace of mind.",
    author: "Priya Sharma",
    role: "Compliance Director",
    company: "Fintech Innovations",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 4,
    quote: "The document workflow is a game-changer for managing our audits. It's efficient, transparent, and completely hassle-free.",
    author: "Joshua Taylor",
    role: "Senior Accountant",
    company: "Apex Global",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 5,
    quote: "Implementation took days instead of months. Our vendor reconciliation errors dropped by nearly 85% within the very first quarter.",
    author: "Elena Rostova",
    role: "VP of Finance",
    company: "Nordic Commerce",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 6,
    quote: "The automated gate pass and invoice validation modules streamlined our multi-factory supply chain across 4 locations.",
    author: "Marcus Chen",
    role: "Supply Chain Director",
    company: "AeroTech Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 7,
    quote: "Cleanest, most intuitive data compliance UI we've ever deployed. Audit preparations now take hours rather than weeks.",
    author: "Amina Al-Mansoor",
    role: "Internal Audit Lead",
    company: "Emirates FinTech",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 8,
    quote: "SLaiCE's ability to localize only the mandatory reporting fields into local repositories kept us fully compliant with national data laws.",
    author: "Robert Kowalski",
    role: "Enterprise Architect",
    company: "Kowalski & Partners",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 9,
    quote: "Customer support is top-tier. Every customization requested was supported smoothly by the Auggit team.",
    author: "Claire Beauchamp",
    role: "Chief Technology Officer",
    company: "Lumina Cloud",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 10,
    quote: "Our productivity skyrocketed. We process thousands of digital invoices daily without a single bottleneck.",
    author: "Karthik Raja",
    role: "Head of Operations",
    company: "NexGen Logistics",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: 11,
    quote: "An indispensable tool for high-volume enterprise compliance. It eliminates human data entry risk entirely.",
    author: "Sophie Dubois",
    role: "Risk Management Lead",
    company: "Veritas Global",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const avatarScrollRef = useRef<HTMLDivElement>(null);

  // Auto-play slideshow every 5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  // Center the active thumbnail automatically when selected
  useEffect(() => {
    if (avatarScrollRef.current) {
      const activeElement = avatarScrollRef.current.children[activeIndex] as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeReview = testimonials[activeIndex];

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-white text-slate-900 py-28 px-6 lg:px-16 border-b border-slate-200"
    >
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

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#2997D0] bg-blue-50 rounded-full border border-blue-200 shadow-sm">
            Client Perspectives ({testimonials.length}+ Reviews)
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Loved by Teams <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">Everywhere</span>
          </h2>
        </motion.div>

        {/* Central Interactive Focal Card */}
        <div className="w-full relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeReview.id}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full bg-white/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border border-blue-200/80 shadow-[0_20px_50px_rgba(41,151,208,0.12)] text-center space-y-6 relative overflow-hidden"
            >
              {/* Decorative Subtle Accent Glow */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />

              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Animated Quote */}
              <p className="text-lg sm:text-2xl font-medium text-slate-800 leading-relaxed max-w-2xl mx-auto italic">
                "{activeReview.quote}"
              </p>

              {/* Author Details */}
              <div className="pt-2">
                <h4 className="font-bold text-slate-900 text-base">{activeReview.author}</h4>
                <p className="text-xs text-slate-500 font-medium">
                  {activeReview.role} — <span className="text-[#2997D0]">{activeReview.company}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 10+ Member Interactive Avatar Carousel Row */}
        <div className="w-full max-w-2xl flex items-center justify-between gap-3 mt-10">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-white/90 border border-slate-200 text-slate-600 hover:bg-[#2997D0] hover:text-white transition-all shadow-sm shrink-0"
            aria-label="Previous Review"
          >
            <HiChevronLeft className="w-5 h-5" />
          </button>

          {/* Horizontally Scrollable Avatar Strip */}
          <div 
            ref={avatarScrollRef}
            className="flex items-center gap-3 overflow-x-auto py-3 px-2 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative rounded-full shrink-0 p-0.5 transition-all duration-300 ${
                    isActive 
                      ? "ring-3 ring-[#2997D0] scale-110 shadow-md opacity-100" 
                      : "opacity-45 hover:opacity-90 ring-1 ring-transparent"
                  }`}
                  title={`${item.author} (${item.company})`}
                >
                  <img 
                    src={item.avatar} 
                    alt={item.author} 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-white/90 border border-slate-200 text-slate-600 hover:bg-[#2997D0] hover:text-white transition-all shadow-sm shrink-0"
            aria-label="Next Review"
          >
            <HiChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Indicator Count */}
        <div className="mt-4 text-xs font-semibold text-slate-400">
          <span className="text-[#2997D0]">{activeIndex + 1}</span> / {testimonials.length}
        </div>

      </div>
    </section>
  );
}