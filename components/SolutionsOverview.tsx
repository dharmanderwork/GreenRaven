"use client";

import { motion } from "framer-motion";

export default function SolutionsOverview() {
  return (
    <section className="relative bg-neutral-50 text-neutral-900 overflow-hidden">
      {/* Architectural grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-28"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-500 mb-6">
            What We Deliver
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Integrated energy systems,
            <br />
            engineered as one.
          </h2>

          <p className="text-neutral-600 text-lg leading-relaxed">
            Green Raven designs, builds, and supports energy infrastructure
            across multiple disciplines. Each system is engineered independently —
            and optimized to perform together.
          </p>
        </motion.div>

        {/* Content + Signal Column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* LEFT — Solutions */}
          <div className="md:col-span-8 space-y-24">
            {[
              {
                index: "01",
                title: "Solar Energy Systems",
                subtitle: "Commercial & large-scale deployment",
                description:
                  "Rooftop, ground-mounted, and distributed solar systems engineered for performance certainty, permitting clarity, and long-term reliability.",
              },
              {
                index: "02",
                title: "Geothermal Infrastructure",
                subtitle: "High-efficiency thermal systems",
                description:
                  "Closed-loop and hybrid geothermal solutions designed to stabilize operational energy demand and deliver long-term efficiency.",
              },
              {
                index: "03",
                title: "Backup & Prime Power",
                subtitle: "Operational resilience",
                description:
                  "Generator systems specified for real-world conditions — ensuring continuity, safety, and reliability when it matters most.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid grid-cols-12 gap-8 items-start"
              >
                <div className="col-span-2">
                  <span className="text-6xl font-light text-neutral-300">
                    {item.index}
                  </span>
                </div>

                <div className="col-span-10">
                  <h3 className="text-3xl font-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm uppercase tracking-wide text-neutral-500 mb-6">
                    {item.subtitle}
                  </p>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Kinetic Signal Column */}
          <div className="md:col-span-4 hidden md:flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-full w-px bg-neutral-300"
            >
              {/* Moving indicators */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neutral-900"
                  style={{ top: `${20 + i * 30}%` }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 max-w-2xl"
        >
          <p className="text-neutral-700 text-lg leading-relaxed mb-8">
            These systems are not sold as components — they are engineered as
            infrastructure, designed to perform across decades of operation.
          </p>

          <button className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-8 py-4 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">
            Discuss your project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
