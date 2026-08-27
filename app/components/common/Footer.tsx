import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiArrowRight, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#021024] to-[#052659] text-[#C1E8FF] border-t border-[#5483B3]/30 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        
        {/* Brand & Contact Column (Spans 2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src="/Auggit-logo-2.png" 
              alt="Auggit Logo" 
              className="h-14 md:h-20 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(193,232,255,0.4)]" 
            />
          </div>
          <p className="text-sm text-[#7DA0CA] leading-relaxed max-w-sm">
            Secure document management and enterprise compliance tracking built for modern digital workflows.
          </p>
          
          {/* Contact Details */}
          <div className="space-y-3 text-sm text-[#7DA0CA] pt-2">
            <div className="flex items-start gap-3">
              <FiMapPin className="w-5 h-5 text-[#2997D0] shrink-0 mt-0.5" />
              <span>Anna Nagar, Chennai, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="w-4 h-4 text-[#2997D0] shrink-0" />
              <span>+91 9600134009</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="w-4 h-4 text-[#2997D0] shrink-0" />
              <span>sales@auggit.com</span>
            </div>
          </div>
        </div>

        {/* Support Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-[#2997D0] pl-2.5">
            Support
          </h4>
          <ul className="space-y-2.5 text-sm text-[#7DA0CA]">
            <li>
              <a href="/faq/edms" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> Getting Started
              </a>
            </li>
            <li>
              <a href="/faq/edms" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> FAQs
              </a>
            </li>
            <li>
              <a href="/insights" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> Help Articles
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> Report an issue
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> Contact Help Desk
              </a>
            </li>
          </ul>
        </div>

        {/* Products Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-[#2997D0] pl-2.5">
            Products
          </h4>
          <ul className="space-y-2.5 text-sm text-[#7DA0CA]">
            <li>
              <a href="/product/edms" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> a-eDMS Platform
              </a>
            </li>
            <li>
              <a href="/product/slaice" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> SLaiCE Integration
              </a>
            </li>
            <li>
              <a href="/insights" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> Compliance Audits
              </a>
            </li>
            <li>
              <a href="/partner" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> Partner Programs
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-[#2997D0] pl-2.5">
            Legal
          </h4>
          <ul className="space-y-2.5 text-sm text-[#7DA0CA]">
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> Cookie Notice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#2997D0] opacity-0 group-hover:opacity-100 transition-opacity">›</span> Trust Center
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Connect Column */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-l-2 border-[#2997D0] pl-2.5">
            Follow Us
          </h4>
          <div className="flex items-center gap-3 text-[#7DA0CA]">
            <a href="#" className="p-2.5 rounded-xl bg-[#021024]/60 border border-[#5483B3]/20 hover:bg-[#2997D0] hover:text-white transition-all shadow-md" aria-label="LinkedIn">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-[#021024]/60 border border-[#5483B3]/20 hover:bg-[#2997D0] hover:text-white transition-all shadow-md" aria-label="YouTube">
              <FaYoutube className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-[#021024]/60 border border-[#5483B3]/20 hover:bg-[#2997D0] hover:text-white transition-all shadow-md" aria-label="Facebook">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="p-2.5 rounded-xl bg-[#021024]/60 border border-[#5483B3]/20 hover:bg-[#2997D0] hover:text-white transition-all shadow-md" aria-label="Instagram">
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-[#7DA0CA] pt-2">
            Stay updated with our latest insights and product updates.
          </p>
        </div>

      </div>

      {/* Trust Badges & Certifications Row - FIXED for mobile */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 border-t border-[#5483B3]/20">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {/* Clutch Badge */}
          <div className="bg-white/5 border border-[#5483B3]/30 p-2 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-lg">
            <img 
              src="/AvailableOn_QR_R_blue.svg" 
              alt="Top Consulting Company Clutch UK" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain" 
            />
          </div>
          
          {/* SAP Partner Badge */}
          <div className="bg-white/5 border border-[#5483B3]/30 p-2 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-lg">
            <img 
              src="/SAP_Partner_R.svg" 
              alt="SAP Partner" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain" 
            />
          </div>

          {/* ISO 27001 Badge */}
          <div className="bg-white/5 border border-[#5483B3]/30 p-2 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-lg">
            <img 
              src="/AvailableOn_R_blue.svg" 
              alt="ISO 27001:2022 Certified" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain" 
            />
          </div>

          {/* Patent Pending Badge */}
          <div className="bg-white/5 border border-[#5483B3]/30 p-2 rounded-xl backdrop-blur-sm flex items-center justify-center shadow-lg">
            <img 
              src="/patent-pending-icon-stamp-innovation.png" 
              alt="Patent Pending" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain" 
            />
          </div>
        </div>

        {/* Legal links below badges on mobile */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs text-[#7DA0CA] md:hidden">
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#021024]/80 py-4 border-t border-[#5483B3]/10 text-center">
        <p className="text-xs text-[#7DA0CA] px-4">
          Auggit {new Date().getFullYear()} &copy; All Rights Reserved. Enterprise Document Management Solutions.
        </p>
      </div>
    </footer>
  );
}