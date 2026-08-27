import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import { SiSap } from "react-icons/si";

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
          <span className="text-blue-500 font-mono font-bold text-sm sm:text-base min-w-[2.8rem]">
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
            <div className="pb-5 pl-4 sm:pl-[4.8rem] pr-2 text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FaqSlaice() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-blue-100/30 py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-200/50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            <SiSap className="w-4 h-4" />
            <span>SAP Integration Engine</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Everything you need to know about SLaiCE – from how it works to security, compliance, and integration.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-blue-200/40 border border-blue-100/60 p-2 sm:p-4">
          {slaiceFaqData.map((item, index) => (
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