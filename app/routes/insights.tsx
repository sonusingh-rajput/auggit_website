export default function Insights() {
  return (
    <div className="min-h-screen bg-[#021024] text-[#C1E8FF] px-6 py-16 max-w-7xl mx-auto space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">Insights & Blog</h1>
        <p className="text-[#7DA0CA] text-lg">Expert articles, regulatory updates, and architectural guides from the Auggit engineering team.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-[#052659]/70 border border-[#5483B3]/30 p-6 rounded-3xl space-y-4">
            <span className="text-xs font-semibold text-[#2997D0] uppercase tracking-wider">Engineering &bull; May 2026</span>
            <h3 className="text-xl font-bold text-white">Securing Enterprise Document Pipelines at Scale</h3>
            <p className="text-sm text-[#7DA0CA]">Exploring zero-trust architecture principles for sensitive corporate cloud archives.</p>
            <a href="#" className="text-sm font-semibold text-[#2997D0] hover:underline inline-block pt-2">Read Article &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
}