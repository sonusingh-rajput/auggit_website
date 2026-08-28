import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router";
import { HiHome, HiCube, HiDocumentText, HiUser, HiChevronDown, HiMenu, HiX, HiBriefcase, HiLightBulb } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const navItems = [
  { name: "Home", href: "/", icon: HiHome },
  { 
    name: "Products", 
    href: "/product/slaice", 
    icon: HiCube,
    dropdown: [
      { name: "SLaiCE", href: "/product/slaice" },
      { name: "Automation Suite", href: "/product/automation-suite" },
    ]
  },
  { name: "About Us", href: "/about", icon: HiUser },
  { 
    name: "Resources", 
    href: "/casestudy", 
    icon: HiDocumentText,
    dropdown: [
      { name: "Case study", href: "/casestudy" },
      { name: "Use case", href: "/usecase" },
      { name: "FAQs", href: "/faq" },
    ]
  },
];

export default function Navbar() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine active tab synchronously on render
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path.startsWith("/product")) return "Products";
    if (path.startsWith("/about")) return "About Us";
    if (path.startsWith("/faq")) return "FAQs";
    if (path.startsWith("/usecase") || path.startsWith("/faq")) return "Resources";
    return "";
  };

  const activeTab = getActiveTab();

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-12 py-1 sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.03)]">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center">
          <img 
            src="/Auggit-logo-2.png" 
            alt="Auggit Logo" 
            className="h-16 md:h-20 w-auto object-contain " 
          />
        </Link>
      </div>

      {/* Desktop Liquid Glass Nested Capsule Navbar */}
      <nav className="hidden lg:flex items-center bg-white/30 backdrop-blur-3xl px-2.5 py-1.5 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_10px_30px_rgba(0,0,0,0.06)] border border-white/60">
        <div className="flex items-center relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const hasDropdown = !!item.dropdown;
            const isDropdownOpen = activeDropdown === item.name;
            const isActive = activeTab === item.name;

            return (
              <div 
                key={item.name} 
                className="relative flex items-center px-1"
                onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  onClick={() => {
                    if (hasDropdown) {
                      setActiveDropdown(isDropdownOpen ? null : item.name);
                    }
                  }}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 z-10 ${
                    isActive 
                      ? "text-slate-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_4px_12px_rgba(0,0,0,0.08)]" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {/* Floating Inner Pill Background Effect matching the reference */}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-full -z-10 border border-white shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#2997D0]" : "text-slate-500"}`} />
                  <span>{item.name}</span>
                  {hasDropdown && (
                    <HiChevronDown 
                      className={`w-3 h-3 ${isActive ? "text-[#2997D0]" : "text-slate-500"} transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`} 
                    />
                  )}
                </Link>

                {/* Glass Dropdown Menu */}
                <AnimatePresence>
                  {hasDropdown && isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-52 bg-white/80 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/60 py-2 z-50 overflow-hidden"
                    >
                      {item.dropdown?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#2997D0] hover:bg-white/60 transition-colors font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Right Action: Contact Us Button */}
      <div className="flex items-center gap-4">
        <Link
          to="/contact"
          className="hidden sm:flex items-center gap-2 bg-[#2997D0] hover:bg-[#2585b7] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-[0_4px_16px_rgba(41,151,208,0.3)] group border border-blue-300/30 backdrop-blur-md"
        >
          <span>Contact Us</span>
          <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/60 backdrop-blur-md text-slate-700 border border-white/80 hover:bg-white/90 transition-colors shadow-sm"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white/85 backdrop-blur-3xl border-b border-white/50 shadow-2xl lg:hidden overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2 border-b border-slate-200/50 pb-3">
                  <Link
                    to={item.href}
                    onClick={() => {
                      if (!item.dropdown) setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between font-medium py-1 ${
                      activeTab === item.name ? "text-[#2997D0]" : "text-slate-800 hover:text-[#2997D0]"
                    }`}
                  >
                    <span className="flex items-center gap-3 text-base">
                      <item.icon className={`w-5 h-5 ${activeTab === item.name ? "text-[#2997D0]" : "text-slate-500"}`} />
                      {item.name}
                    </span>
                  </Link>
                  {item.dropdown && (
                    <div className="pl-8 space-y-2.5 pt-1 border-l-2 border-slate-200 ml-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-slate-600 hover:text-[#2997D0] py-1"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#2997D0] text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-[#2997D0]/30"
                >
                  Contact Us <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}