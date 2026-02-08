import React from "react";

export default function WhyGreenRaven() {
  return (
    <section className="relative bg-neutral-950 text-white overflow-hidden">
      {/* Subtle grain / depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)] opacity-40" />

      {/* Dot pattern – top right */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:14px_14px]" />
      </div>

      {/* Dot pattern – bottom left */}
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] opacity-15">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:14px_14px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-6">
            Why Green Raven
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Built for energy decisions
            <br />
            that must endure.
          </h2>

          <p className="text-neutral-300 text-lg leading-relaxed">
            Green Raven partners with organizations that think beyond
            short-term savings. Our work sits at the intersection of
            engineering discipline, supply-chain strength, and execution
            certainty — delivering energy systems that perform for decades,
            not just at commissioning.
          </p>
        </div>

        {/* Proof pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {[
            {
              title: "Infrastructure-First Thinking",
              body:
                "We design and deploy energy systems the way infrastructure should be built — conservatively engineered, permit-ready, and scalable. Every solution is evaluated for lifecycle performance, not surface-level efficiency.",
            },
            {
              title: "Manufacturer-Direct Advantage",
              body:
                "Our direct relationships with Tier-1 manufacturers reduce risk, improve lead times, and ensure long-term serviceability. No fragile middle layers. No uncertainty when it matters most.",
            },
            {
              title: "Execution Across Complexity",
              body:
                "From rooftop solar to large-scale commercial deployments, backup generation, and geothermal integration — Green Raven operates across technical and regulatory complexity with disciplined coordination.",
            },
            {
              title: "Built for Long-Term Partnership",
              body:
                "We don’t approach projects as transactions. We align with owners, developers, and operators who require accountability, clarity, and performance across the full lifecycle of an energy asset.",
            },
          ].map((item, index) => (
            <div key={index} className="max-w-xl">
              <h3 className="text-xl font-medium mb-4">
                {item.title}
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-24">
          <p className="text-neutral-400 text-lg italic">
            Energy systems aren’t products. <br className="hidden sm:block" />
            They’re commitments.
          </p>
        </div>
      </div>
    </section>
  );
}
