export default function Partner() {
  return (
    <div className="min-h-screen bg-[#021024] text-[#C1E8FF] px-6 py-16 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white">Partner with Auggit</h1>
        <p className="text-[#7DA0CA] text-lg leading-relaxed">
          Join our global network of technology integrators, consultants, and compliance experts to accelerate digital transformation.
        </p>
      </div>
      <div className="bg-[#052659]/50 border border-[#5483B3]/30 p-10 rounded-3xl max-w-2xl mx-auto text-center space-y-6">
        <h3 className="text-2xl font-bold text-white">Become an Authorized Channel Partner</h3>
        <p className="text-[#7DA0CA] text-sm">Gain priority technical support, partner revenue share tiers, and exclusive certification workshops.</p>
        <a href="/contact" className="inline-block bg-[#2997D0] text-white font-semibold px-8 py-3 rounded-full shadow-lg">
          Apply For Partnership
        </a>
      </div>
    </div>
  );
}