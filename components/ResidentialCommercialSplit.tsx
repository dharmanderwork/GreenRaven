"use client";

import { motion } from "framer-motion";

export default function ResidentialCommercialSplit() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.04),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.04),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-24"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-500 mb-6">
            Who We Support
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Built for both sides
            <br />
            of the energy market.
          </h2>

          <p className="text-neutral-600 text-lg leading-relaxed">
            Whether supporting homeowners or scaling commercial infrastructure,
            Green Raven delivers manufacturer-direct solutions with execution
            clarity at every level.
          </p>
        </motion.div>

        {/* Split Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
          {/* Residential */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-50 p-16 flex flex-col justify-between min-h-[520px]"
          >
            <div>
              <span className="text-sm uppercase tracking-wide text-neutral-500">
                Residential
              </span>

              <h3 className="text-4xl font-light mt-4 mb-8">
                Smart energy solutions
                <br />
                for homes.
              </h3>

              <ul className="space-y-4 text-neutral-700 text-lg">
                <li>• Residential solar hardware & supply</li>
                <li>• Installer-only distribution</li>
                <li>• Residential financing & PPA access</li>
                <li>• CRM & sales enablement tools</li>
              </ul>
            </div>

            <div className="mt-12">
              <button className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-8 py-4 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">
                Residential solutions
              </button>
            </div>
          </motion.div>

          {/* Commercial */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-900 text-white p-16 flex flex-col justify-between min-h-[520px]"
          >
            <div>
              <span className="text-sm uppercase tracking-wide text-neutral-400">
                Commercial
              </span>

              <h3 className="text-4xl font-light mt-4 mb-8">
                Infrastructure-grade
                <br />
                energy systems.
              </h3>

              <ul className="space-y-4 text-neutral-200 text-lg">
                <li>• Commercial solar & volume procurement</li>
                <li>• Permit-ready engineering & design</li>
                <li>• Commercial PPAs (50kW+)</li>
                <li>• Generators & geothermal solutions</li>
              </ul>
            </div>

            <div className="mt-12">
              <button className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-neutral-900 transition">
                Commercial solutions
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
