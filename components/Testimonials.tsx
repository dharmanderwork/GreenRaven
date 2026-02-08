"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="relative bg-neutral-50 overflow-hidden">
      {/* Subtle architectural accent */}
      <div className="absolute inset-y-0 right-0 w-[35%] bg-white rounded-l-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-500 mb-6">
            Trusted by professionals
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Proven where
            <br />
            decisions matter.
          </h2>

          <p className="text-neutral-600 text-lg leading-relaxed">
            Green Raven partners with professionals who value execution,
            communication, and real-world results.
          </p>
        </motion.div>

        {/* Testimonial */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl"
        >
          {/* Quote mark */}
          <div className="absolute -top-10 -left-6 text-[120px] leading-none text-neutral-200 font-light select-none">
            “
          </div>

          <p className="relative text-2xl md:text-3xl font-light text-neutral-800 leading-relaxed mb-10">
            After testing Green Raven for a small commercial solar project,
            we found that we could cut our material costs almost in half.
            Fantastic communication and industry advice on so many other
            levels — definitely a resource I can’t recommend enough.
          </p>

          <footer className="flex items-center gap-6">
            <div className="h-px w-12 bg-neutral-400" />
            <div>
              <p className="text-neutral-900 font-medium">
                John K.
              </p>
              <p className="text-neutral-500 text-sm">
                Commercial Solar Project Lead
              </p>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
