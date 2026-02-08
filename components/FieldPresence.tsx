"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FieldPresence() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Soft background accent */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-neutral-100 rounded-bl-[120px]" />

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
            Proven in the field
          </p>

          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Supporting energy projects
            <br />
            at every scale.
          </h2>

          <p className="text-neutral-600 text-lg leading-relaxed">
            From rooftop commercial arrays to large-scale infrastructure,
            Green Raven operates where execution, logistics, and reliability
            matter most.
          </p>
        </motion.div>

        {/* Image Composition */}
        <div className="grid grid-cols-12 gap-8">
          {/* Large anchor image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-7 relative h-[520px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
              alt="Commercial solar rooftop installation"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Stacked supporting images */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[240px] rounded-3xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
                alt="Solar installation in progress"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[240px] rounded-3xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634"
                alt="Large scale solar field"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Quiet reinforcement line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-2xl"
        >
          <p className="text-neutral-700 text-lg leading-relaxed">
            These projects demand more than equipment — they require coordination,
            trust, and execution discipline built over decades.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
