"use client";

import { motion } from "framer-motion";

const values = [
  "Direct Manufacturer Relationships",
  "Nationwide U.S. Distribution",
  "Commercial Solar & Energy Systems",
  "Permit-Ready Engineering",
  "Installer & Sales Network",
  "Scalable Project Execution",
  "Financing & PPA Structures",
  "Geothermal & Generator Solutions",
];

export default function ValueMarquee() {
  return (
    <section className="relative bg-neutral-900 overflow-hidden">
      {/* Gradient Edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10" />

      <div className="py-10">
        <motion.div
          className="flex whitespace-nowrap gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {[...values, ...values].map((value, i) => (
            <span
              key={i}
              className="text-neutral-300 text-lg tracking-wide uppercase font-medium"
            >
              {value}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
