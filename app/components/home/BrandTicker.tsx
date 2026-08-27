import { motion } from "framer-motion";

const clients = [
  { src: "/client-1.png" },
  { src: "/client-2.png" },
  { src: "/client-3.png" },
  { src: "/client-4.png" },
  { src: "/client-5.png" },
];

export default function BrandTicker() {
  const infiniteClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="w-full bg-gradient-to-b from-[#021024] via-[#0a1a2e] to-[#021024] py-20 overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#2997D0]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#3ba2d8]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C1E8FF]/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#C1E8FF] bg-[#C1E8FF]/10 rounded-full border border-[#C1E8FF]/20 backdrop-blur-sm">
            Trusted Partners
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
        >
          Powering <span className="bg-gradient-to-r from-[#2997D0] to-[#C1E8FF] bg-clip-text text-transparent">World-Class</span> Workflows
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-[#C1E8FF]/60 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Join 500+ innovative companies transforming their operations with our platform
        </motion.p>
      </div>

      {/* 3D Curved Track Container */}
      <div className="relative z-10 w-full overflow-hidden py-8" style={{ perspective: "1200px" }}>
        
        {/* Enhanced Gradient Masks */}
        <div className="absolute left-0 inset-y-0 w-32 sm:w-48 bg-gradient-to-r from-[#021024] via-[#021024]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-32 sm:w-48 bg-gradient-to-l from-[#021024] via-[#021024]/80 to-transparent z-20 pointer-events-none" />

        {/* Scrolling Track with perspective transform */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 40, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex items-center gap-8 md:gap-12 whitespace-nowrap min-w-max px-4"
          style={{ transform: "rotateX(2deg) rotateY(-2deg)" }}
        >
          {infiniteClients.map((client, index) => {
            return (
              <motion.div
                key={index}
                className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] flex-shrink-0 rounded-3xl bg-gradient-to-br from-[#2997D0]/20 via-[#3ba2d8]/10 to-[#C1E8FF]/5 p-[1.5px] shadow-2xl shadow-[#2997D0]/10 hover:shadow-[#2997D0]/30 transition-all duration-500 group"
              >
                {/* Inner Content */}
                <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#0a1a2e] to-[#021024] backdrop-blur-xl flex items-center justify-center overflow-hidden border border-[#C1E8FF]/10 group-hover:border-[#C1E8FF]/30 transition-all duration-500">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[#2997D0]/20 via-transparent to-[#C1E8FF]/10" />
                  
                  {/* Top Shine */}
                  <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C1E8FF]/40 to-transparent pointer-events-none" />
                  
                  {/* Bottom Shine */}
                  <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#2997D0]/20 to-transparent pointer-events-none" />

                  {/* Logo Image */}
                  <div className="relative z-10 flex items-center justify-center w-full h-full p-5">
                    <img
                      src={client.src}
                      alt="Client Brand Logo"
                      className="max-h-14 max-w-[140px] object-contain brightness-110 contrast-110 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 drop-shadow-lg"
                    />
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[#C1E8FF]/10 group-hover:border-[#C1E8FF]/30 transition-all duration-500 rounded-tl-xl" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[#C1E8FF]/10 group-hover:border-[#C1E8FF]/30 transition-all duration-500 rounded-br-xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="text-2xl font-bold text-white">500+</p>
            <p className="text-xs text-[#C1E8FF]/50 uppercase tracking-wider">Enterprise Clients</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[#C1E8FF]/10" />
          <div>
            <p className="text-2xl font-bold text-white">98%</p>
            <p className="text-xs text-[#C1E8FF]/50 uppercase tracking-wider">Satisfaction Rate</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[#C1E8FF]/10" />
          <div>
            <p className="text-2xl font-bold text-white">4.9★</p>
            <p className="text-xs text-[#C1E8FF]/50 uppercase tracking-wider">Average Rating</p>
          </div>
        </div>
      </div>

    </div>
  );
}