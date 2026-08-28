import { motion } from "framer-motion";
import { useParams, Link } from "react-router";
import { FiArrowLeft, FiCheckCircle, FiShield, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { useCasesData } from "./usecase";

export default function SingleUseCasePage() {
  const { slug } = useParams();
  const useCase = useCasesData.find((u) => u.slug === slug);

  if (!useCase) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Use Case Not Found</h2>
        <p className="text-slate-500 text-sm">The use case you are looking for does not exist or has been removed.</p>
        <Link to="/usecase" className="px-6 py-2.5 rounded-xl bg-[#2997D0] text-white text-xs font-semibold cursor-pointer">
          Back to Use Cases
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white text-slate-900 py-16 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Back Link */}
        <Link to="/usecase" className="inline-flex items-center gap-2 text-xs font-bold text-[#2997D0] hover:underline cursor-pointer">
          <FiArrowLeft className="w-4 h-4" /> Back to all use cases
        </Link>

        {/* Hero Title Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-blue-50 text-[#2997D0] text-xs font-bold uppercase tracking-wider border border-blue-200">
            {useCase.category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {useCase.title}
          </h1>

          <div className="flex items-center gap-4 bg-blue-50/80 p-4 rounded-2xl border border-blue-200 text-[#2997D0]">
            <FiTrendingUp className="w-6 h-6 shrink-0" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Core Enterprise Impact</h4>
              <p className="text-sm font-semibold">{useCase.impact} delivered through optimized digital workflows.</p>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-blue-100 aspect-video bg-slate-100">
          <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover" />
        </div>

        {/* Main Content Body */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-8 text-slate-700 text-base leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Executive Overview</h2>
            <p className="text-lg font-medium text-slate-800">{useCase.summary}</p>
            <p>{useCase.overview}</p>
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-bold text-slate-900">Key Operational Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCase.benefits.map((benefit, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-slate-900">Architecture & Implementation</h2>
            <p>
              Auggit integrates directly into existing corporate structures without disrupting live daily operations. By bridging enterprise data storage with automated indexing, organizations establish a single, verifiable source of operational truth.
            </p>
          </div>

        </motion.div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#021024] to-[#052659] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h3 className="text-2xl font-bold">Ready to deploy this use case in your enterprise?</h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2997D0] hover:bg-[#2585b7] text-white font-semibold text-sm transition-all shadow-lg cursor-pointer"
          >
            <span>Talk to our architects</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}