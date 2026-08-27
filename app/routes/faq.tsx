// import FaqEdms from "./faq-edms";
// import FaqSlaice from "./faq-slaice";

// export default function FaqAll() {
//   return (
//     <div>
//       <FaqSlaice />
//       <div className="border-t border-blue-200/50 my-16" />
//       <FaqEdms />
//     </div>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiDatabase, FiBox } from "react-icons/fi";
import { SiSap } from "react-icons/si";

// ========== SLaiCE FAQ DATA ==========
const slaiceFaqData = [
  {
    id: "01",
    question: "What is SLaiCE?",
    answer:
      "SLaiCE is an SAP – approved product which allows organizations to selectively replicate systems using defined data subsets, apply optional data masking, and preserve system integrity, without moving data outside the SAP landscape.",
  },
  {
    id: "02",
    question: "How does SLaiCE work?",
    answer:
      "SLaiCE is built on SLT (SAP Landscape Transformation) replication platform, and it uses native SLT functionality and tools. As an add-on, SLaiCE runs entirely within the existing SAP landscape, without storing / processing data outside the SAP landscape. The process begins in the source system, where SLaiCE identifies the required data to be replicated, based on predefined rules such as date ranges, business objects, or organizational structures. Once configured, SLaiCE securely replicates the selected data to one or more target systems. The replication follows SAP all replication processes and security/authorization controls.",
  },
  {
    id: "03",
    question: "What technology does SLaiCE use?",
    answer:
      "Built entirely on SAP-native technologies, SLaiCE leverages SLT replication services, SAP Data Services and other SAP-provided solutions to ensure seamless integration and performance.",
  },
  {
    id: "04",
    question: "What platforms does SLaiCE work on?",
    answer:
      "SLaiCE works on SAP - ECC, SAP S/4 HANA on premise and SAP S/4 HANA private cloud.",
  },
  {
    id: "05",
    question: "Does SLaiCE support data masking or scrambling?",
    answer:
      "Yes, SLaiCE supports data masking and scrambling. Sensitive data can be masked at the time of extraction from the source to the target system. When provided by the clients, masking rules can be configured based on business requirements, data objects and field-level sensitivity. Additionally, when data is already encrypted or masked in the source system, SLaiCE can replicate the same masked data to the target system.",
  },
  {
    id: "06",
    question: "Does SLaiCE support custom or add-on tables?",
    answer:
      "Yes, SLaiCE supports custom and partner add-on tables. Custom tables/ partner add-on can be: Selected for data slicing, Masked if required, Included in dependency-aware replication scenarios. No additional development is required to include custom tables / partner add-on.",
  },
  {
    id: "07",
    question: "What is the execution process of SLaiCE?",
    answer:
      "SLaiCE follows a source-system–driven execution model. All SLaiCE activities are initiated and executed from the source SAP system. From there, data is selectively extracted to one or more target systems. SLaiCE runs entirely within the customer's SAP landscape, using SAP-native mechanisms to control data selection.",
  },
  {
    id: "08",
    question: "How does SLaiCE transform data?",
    answer:
      "SLaiCE is built on SLT framework to enable secure and reliable data replication between SAP systems. By configuring SLT with precise filters and business parameters, SLaiCE ensures that only the required datasets are selected and replicated, rather than copying the entire SAP database. This selective replication approach supports compliance and reduces operational complexity.",
  },
  {
    id: "09",
    question: "Where does SLaiCE store the extracted data?",
    answer:
      "No data is extracted or stored outside the SAP landscape. All data extracted from the source system is replicated onto the target system, staying within the customer's SAP landscape. In addition, any data that is already encrypted in the source system remains encrypted during replication. SLaiCE transfers the data in its secured form to the target system, maintaining data confidentiality and integrity across landscape.",
  },
  {
    id: "10",
    question: "Can SLaiCE process unstructured data?",
    answer:
      "SLaiCE does not independently scan or classify structured or unstructured data. Instead, it integrates with existing SAP or third-party data discovery and classification tools within the customer's landscape. It then replicates data in accordance with the classifications and masking policies defined by those tools.",
  },
  {
    id: "11",
    question: "How does SLaiCE ensure data security during replication?",
    answer:
      "SLaiCE operating entirely within the SAP landscape, hence inheriting the security features configured for that landscape. As an SAP add-on, SLaiCE inherits SAP's built-in security capabilities, including secure authentication mechanisms and standard SAP encryption protocols for data handling.",
  },
  {
    id: "12",
    question: "How does SLaiCE ensure data breach preparedness and protection?",
    answer:
      "SLaiCE operates entirely within the existing SAP landscape and inherits SAP's established security framework and controls. SLaiCE ensures sensitive data remains protected throughout the slicing and extraction process, minimizing breach risk and maintaining secure data handling.",
  },
];

// ========== eDMS FAQ DATA ==========
const edmsFaqData = [
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

// ========== REUSABLE FAQ ITEM COMPONENT ==========
const FaqItem = ({ item, isOpen, toggle, product }) => {
  const gradientColors = product === "slaice" 
    ? "from-blue-500 to-cyan-500" 
    : "from-emerald-500 to-teal-500";

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
        isOpen 
          ? "bg-white/90 shadow-xl shadow-indigo-200/50 border border-indigo-200/60" 
          : "bg-white/60 hover:bg-white/80 shadow-md shadow-indigo-100/30 border border-white/50 hover:border-indigo-200/40"
      }`}
      initial={false}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Gradient accent line */}
      <motion.div 
        className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b ${gradientColors}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <button
        onClick={toggle}
        className="flex items-center justify-between w-full py-5 px-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="flex items-start gap-5 text-sm sm:text-base">
          <span className={`text-2xl font-extrabold bg-gradient-to-r ${gradientColors} bg-clip-text text-transparent min-w-[3rem]`}>
            {item.id}
          </span>
          <span className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors pt-0.5">
            {item.question}
          </span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          className={`flex-shrink-0 ml-4 p-1.5 rounded-full transition-all duration-300 ${
            isOpen 
              ? `bg-gradient-to-r ${gradientColors} text-white shadow-md shadow-blue-200` 
              : "bg-indigo-50/50 text-indigo-400 group-hover:bg-indigo-100 group-hover:text-indigo-600"
          }`}
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
            <div className="pb-6 pl-6 pr-6 sm:pl-[4.8rem] text-slate-600 text-sm leading-relaxed whitespace-pre-line border-t border-indigo-100/50 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ========== MAIN FAQ ALL COMPONENT ==========
export default function FaqAll() {
  const [activeTab, setActiveTab] = useState("slaice");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentData = activeTab === "slaice" ? slaiceFaqData : edmsFaqData;
  const productLabel = activeTab === "slaice" ? "SLaiCE" : "eDMS";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50/80 via-white to-cyan-50/80 py-16 px-4 sm:px-6 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-600 text-xs font-bold uppercase tracking-wider shadow-sm shadow-blue-100/50">
            <FiDatabase className="w-4 h-4" />
            Support Center
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Find answers to the most common questions about our products.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white/60 backdrop-blur-sm rounded-2xl border border-blue-100/50 shadow-lg shadow-blue-100/30">
            <button
              onClick={() => { setActiveTab("slaice"); setOpenIndex(null); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "slaice"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-200/50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <SiSap className="w-4 h-4" />
              SLaiCE
            </button>
            <button
              onClick={() => { setActiveTab("edms"); setOpenIndex(null); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "edms"
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-200/50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
              }`}
            >
              <FiBox className="w-4 h-4" />
              eDMS
            </button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {currentData.map((item, index) => (
            <FaqItem
              key={`${activeTab}-${item.id}`}
              item={item}
              isOpen={openIndex === index}
              toggle={() => toggleItem(index)}
              product={activeTab}
            />
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-lg shadow-indigo-100/30"
        >
          <p className="text-slate-600 text-sm font-medium">
            Still have questions about <span className="font-bold text-slate-800">{productLabel}</span>?{" "}
            <a href="/contact" className="text-blue-600 font-bold hover:underline hover:text-blue-800 transition-colors">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}