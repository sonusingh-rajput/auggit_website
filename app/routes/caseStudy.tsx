export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-[#c3d9f7be] text-[#C1E8FF] px-6 py-16 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white">Case Study Auggit</h1>
        <p className="text-[#7DA0CA] text-lg leading-relaxed">
          We pioneer secure, automated enterprise document management systems and compliance frameworks to scale modern organizations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        <div className="bg-[#052659]/60 backdrop-blur-md p-8 rounded-3xl border border-[#5483B3]/30 space-y-3">
          <h3 className="text-xl font-bold text-white">Our Mission</h3>
          <p className="text-sm text-[#7DA0CA]">To streamline complex enterprise documentation through foolproof automated security and clean UI design.</p>
        </div>
        <div className="bg-[#052659]/60 backdrop-blur-md p-8 rounded-3xl border border-[#5483B3]/30 space-y-3">
          <h3 className="text-xl font-bold text-white">Our Vision</h3>
          <p className="text-sm text-[#7DA0CA]">Eliminating friction in compliance audits globally with next-gen intelligence hubs.</p>
        </div>
        <div className="bg-[#052659]/60 backdrop-blur-md p-8 rounded-3xl border border-[#5483B3]/30 space-y-3">
          <h3 className="text-xl font-bold text-white">Core Values</h3>
          <p className="text-sm text-[#7DA0CA]">Uncompromising data integrity, relentless user-centric performance, and transparent workflows.</p>
        </div>
      </div>
    </div>
  );
}