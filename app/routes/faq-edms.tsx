import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    id: "01",
    question: "What is Auggit eDMS?",
    answer:
      "Auggit eDMS is a platform for managing organizational documents with structure and control. It helps teams store, classify, review and access documents reliably on one common platform.",
  },
  {
    id: "02",
    question: "Where is the data stored?",
    answer:
      "Auggit eDMS is hosted on AWS cloud infrastructure, providing enterprise-grade security, reliability and availability. All documents and data stored in the platform are encrypted both in transit and at rest.",
  },
  {
    id: "03",
    question: "Who owns the data stored in Auggit eDMS?",
    answer:
      "All documents and data stored within Auggit eDMS remain the property of the customer organization. Auggit eDMS only provides the platform infrastructure for storing and managing these records.",
  },
  {
    id: "04",
    question: "Can Auggit eDMS support multi-entity or multi-department organizations?",
    answer:
      "Yes. Auggit eDMS is designed to support organizations operating across multiple entities, departments or business units, while maintaining controlled access and structured documentation across the organization.",
  },
  {
    id: "05",
    question: "Can Auggit eDMS integrate with other enterprise systems?",
    answer:
      "Yes. Auggit eDMS supports integration with enterprise systems such as ERP platforms, accounting software and other business applications through APIs and configurable integration layers.",
  },
  {
    id: "06",
    question: "How scalable is the platform?",
    answer:
      "Auggit eDMS is designed to support organizations of different sizes and can scale as document volumes and users increase. The platform architecture allows businesses to expand usage without restructuring their document systems.",
  },
  {
    id: "07",
    question: "How long does it typically take to implement Auggit eDMS?",
    answer:
      "For standard deployments, the platform can typically be activated within a few business days, depending on the organization's structure and integration requirements.",
  },
  {
    id: "08",
    question: "Can the platform be customised for specific business processes?",
    answer:
      "Yes. Auggit eDMS provides configurable workflows, tagging structures and integration options that allow organizations to align the platform with their internal processes and documentation requirements.",
  },
  {
    id: "09",
    question: "How does Auggit eDMS ensure data reliability and backup?",
    answer:
      "Auggit eDMS performs regular backups of client data to ensure business continuity and prevent data loss in case of unexpected events.",
  },
  {
    id: "10",
    question: "What kind of support is available after implementation?",
    answer:
      "Auggit eDMS provides ongoing technical support after deployment. Users can raise support tickets directly through the platform or contact the support team for assistance.",
  },
  {
    id: "11",
    question: "Does Auggit eDMS support access controls for different user roles?",
    answer:
      "Yes. The platform uses role-based access control to ensure that users can only access documents relevant to their responsibilities.",
  },
  {
    id: "12",
    question: "Can Auggit eDMS support organizations operating in regulated environments?",
    answer:
      "Yes. Auggit eDMS is designed to help organizations maintain structured documentation and operational records, supporting compliance, audit processes and regulatory requirements.",
  },
];

const FaqItem = ({ item, isOpen, toggle }) => {
  return (
    <motion.div
      className="border-b border-blue-100/60 last:border-b-0"
      initial={false}
    >
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full py-5 px-2 text-left group"
        aria-expanded={isOpen}
      >
        <span className="flex items-start gap-4 text-sm sm:text-base">
          <span className="text-blue-500 font-mono font-bold text-sm sm:text-base min-w-[2.5rem]">
            {item.id}.
          </span>
          <span className="font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
            {item.question}
          </span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4 p-1 rounded-full bg-blue-50 text-blue-500"
        >
          <FiChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-4 sm:pl-[4.5rem] pr-2 text-slate-600 text-sm leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FaqEdms() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-blue-100/30 py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-200/50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need to know about setting up and operating our electronic document management platform.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-blue-200/40 border border-blue-100/60 p-2 sm:p-4">
          {faqData.map((item, index) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              toggle={() => toggleItem(index)}
            />
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 text-sm">
            Still have questions?{" "}
            <a href="/contact" className="text-blue-600 font-semibold hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}