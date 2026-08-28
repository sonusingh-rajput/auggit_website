import { motion } from "framer-motion";

const topRowClients = [
  { src: "/client-1.png" },
  { src: "/client-2.png" },
  { src: "/client-3.png" },
  { src: "/client-4.png" },
  { src: "/client-5.png" },
];

const bottomRowClients = [
  { src: "/client-5.png" },
  { src: "/client-4.png" },
  { src: "/client-3.png" },
  { src: "/client-1.png" },
  { src: "/client-2.png" },
];

export default function BrandTicker() {
  const infiniteTop = [...topRowClients, ...topRowClients, ...topRowClients, ...topRowClients];
  const infiniteBottom = [...bottomRowClients, ...bottomRowClients, ...bottomRowClients, ...bottomRowClients];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-blue-50/40 to-white py-20 overflow-hidden relative border-y border-slate-200">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#2997D0] bg-blue-50 rounded-full border border-blue-200 shadow-sm backdrop-blur-sm">
            Trusted Partners
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight"
        >
          Powering <span className="bg-gradient-to-r from-[#2997D0] via-blue-600 to-indigo-600 bg-clip-text text-transparent">World-Class</span> Workflows
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Join 500+ innovative companies transforming their operations with our platform
        </motion.p>
      </div>

      {/* Dual Scrolling Tracks Container */}
      <div className="relative z-10 w-full overflow-hidden py-4 space-y-6" style={{ perspective: "1200px" }}>
        
        {/* Enhanced Gradient Masks for Light Theme */}
        <div className="absolute left-0 inset-y-0 w-32 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-32 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Top Track (Moving Left) */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 35, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex items-center gap-6 whitespace-nowrap min-w-max px-4"
          style={{ transform: "rotateX(2deg) rotateY(-2deg)" }}
        >
          {infiniteTop.map((client, index) => (
            <div
              key={`top-${index}`}
              className="relative w-[180px] h-[100px] sm:w-[220px] sm:h-[120px] flex-shrink-0 rounded-2xl bg-gradient-to-br from-blue-200/50 via-sky-100/30 to-white p-[1.5px] shadow-lg shadow-blue-500/5 hover:shadow-blue-500/15 transition-all duration-500 group"
            >
              <div className="relative w-full h-full rounded-2xl bg-white/90 backdrop-blur-xl flex items-center justify-center overflow-hidden border border-slate-200/80 group-hover:border-blue-300 transition-all duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-blue-50 via-transparent to-sky-50/50" />
                
                <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
                  <img
                    src={client.src}
                    alt="Client Brand Logo"
                    className="max-h-12 max-w-[140px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 drop-shadow-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Track (Moving Right) */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 38, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex items-center gap-6 whitespace-nowrap min-w-max px-4"
          style={{ transform: "rotateX(2deg) rotateY(-2deg)" }}
        >
          {infiniteBottom.map((client, index) => (
            <div
              key={`bottom-${index}`}
              className="relative w-[180px] h-[100px] sm:w-[220px] sm:h-[120px] flex-shrink-0 rounded-2xl bg-gradient-to-br from-blue-200/50 via-sky-100/30 to-white p-[1.5px] shadow-lg shadow-blue-500/5 hover:shadow-blue-500/15 transition-all duration-500 group"
            >
              <div className="relative w-full h-full rounded-2xl bg-white/90 backdrop-blur-xl flex items-center justify-center overflow-hidden border border-slate-200/80 group-hover:border-blue-300 transition-all duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-blue-50 via-transparent to-sky-50/50" />
                
                <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
                  <img
                    src={client.src}
                    alt="Client Brand Logo"
                    className="max-h-12 max-w-[140px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 drop-shadow-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="text-2xl font-bold text-slate-900">500+</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Enterprise Clients</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-slate-200" />
          <div>
            <p className="text-2xl font-bold text-slate-900">98%</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Satisfaction Rate</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-slate-200" />
          <div>
            <p className="text-2xl font-bold text-slate-900">4.9★</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Average Rating</p>
          </div>
        </div>
      </div>

    </div>
  );
}