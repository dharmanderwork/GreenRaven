"use client";

import { motion } from "framer-motion";

const steps = [
  {
    index: "01",
    title: "Project definition",
    description:
      "We start by understanding project scope, technical requirements, delivery timelines, and regulatory constraints — before any sourcing begins.",
  },
  {
    index: "02",
    title: "Manufacturer sourcing",
    description:
      "Equipment is sourced directly from vetted U.S. and international manufacturers, often with volume-based pricing and compliance requirements addressed.",
  },
  {
    index: "03",
    title: "Engineering & design",
    description:
      "Permit-ready designs are produced with accuracy and speed, supported by engineers who routinely tackle complex commercial projects.",
  },
  {
    index: "04",
    title: "Logistics & delivery",
    description:
      "We coordinate nationwide shipping — jobsite or warehouse — ensuring timelines are met without bloated freight costs.",
  },
  {
    index: "05",
    title: "Ongoing partnership",
    description:
      "Beyond delivery, we remain engaged as a long-term partner — supporting growth, solving problems, and connecting you with the right tools and partners.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-6">
            How We Work
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            A proven process
            <br />
            from scope to execution.
          </h2>

          <p className="text-neutral-300 text-lg leading-relaxed">
            Green Raven combines direct manufacturer access with disciplined
            execution — delivering energy projects with clarity, speed, and
            confidence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Spine */}
          <div className="absolute left-0 right-0 top-6 h-px bg-neutral-700 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                {/* Marker */}
                <div className="mb-8 flex items-center gap-4">
                  <span className="text-4xl font-light text-neutral-400">
                    {step.index}
                  </span>
                  <div className="flex-1 h-px bg-neutral-700 md:hidden" />
                </div>

                <h3 className="text-2xl font-light mb-4">
                  {step.title}
                </h3>

                <p className="text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 max-w-2xl"
        >
          <p className="text-neutral-300 text-lg leading-relaxed mb-8">
            The result is a streamlined experience that removes friction and
            allows energy projects to move faster — without sacrificing quality
            or control.
          </p>

          <button className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-neutral-900 transition">
            Schedule a consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
