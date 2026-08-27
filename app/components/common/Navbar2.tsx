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
      { name: "Automation Suite", href: "/product/edms" },
    ]
  },
  { name: "About Us", href: "/about", icon: HiUser },
  { 
    name: "Resources", 
    href: "/insights", 
    icon: HiDocumentText,
    dropdown: [
      { name: "Case study", href: "/insights" },
      { name: "Use case", href: "/insights" },
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
    if (path.startsWith("/insights") || path.startsWith("/faq")) return "Resources";
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
    <header className="w-full flex items-center justify-between px-4 md:px-12 py-3 sticky top-0 z-50 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-2xl border-b border-gray-700/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center">
          <img 
            src="/Auggit-logo-2.png" 
            alt="Auggit Logo" 
            className="h-10 md:h-14 w-auto object-contain brightness-0 invert filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" 
          />
        </Link>
      </div>

      {/* Desktop Glass Navbar */}
      <nav className="hidden lg:flex items-center bg-white/10 backdrop-blur-3xl px-3 py-2 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10">
        <div className="flex items-center relative gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const hasDropdown = !!item.dropdown;
            const isDropdownOpen = activeDropdown === item.name;
            const isActive = activeTab === item.name;

            return (
              <div 
                key={item.name} 
                className="relative flex items-center"
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
                  className={`relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-white bg-white/20 shadow-[0_4px_15px_rgba(255,255,255,0.1)]" 
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-gray-400"}`} />
                  <span>{item.name}</span>
                  {hasDropdown && (
                    <HiChevronDown 
                      className={`w-3 h-3 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-blue-400" : "text-gray-400"
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
                      className="absolute top-full left-0 mt-3 w-52 bg-gray-800/90 backdrop-blur-3xl rounded-2xl shadow-2xl border border-gray-700/50 py-2 z-50 overflow-hidden"
                    >
                      {item.dropdown?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors font-medium"
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
          className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-[0_4px_16px_rgba(59,130,246,0.3)] group border border-blue-400/20"
        >
          <span>Contact Us</span>
          <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-colors shadow-sm"
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
            className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-3xl border-b border-gray-700/50 shadow-2xl lg:hidden overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2 border-b border-gray-700/50 pb-3">
                  <Link
                    to={item.href}
                    onClick={() => {
                      if (!item.dropdown) setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between font-medium py-1 ${
                      activeTab === item.name ? "text-blue-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3 text-base">
                      <item.icon className={`w-5 h-5 ${activeTab === item.name ? "text-blue-400" : "text-gray-500"}`} />
                      {item.name}
                    </span>
                  </Link>
                  {item.dropdown && (
                    <div className="pl-8 space-y-2.5 pt-1 border-l-2 border-gray-700 ml-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-gray-400 hover:text-white py-1"
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
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-500/30"
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