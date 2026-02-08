"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="relative bg-neutral-900 text-white overflow-hidden">
            {/* Architectural dot patterns */}
            <div className="absolute top-0 right-0 w-[45%] h-[45%] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:14px_14px] opacity-40" />
            <div className="absolute bottom-0 left-0 w-[45%] h-[45%] bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:14px_14px] opacity-40" />
            <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_60%)]" />


            <div className="relative max-w-7xl mx-auto px-6 py-40">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                >
                    <p className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-8">
                        Let’s talk
                    </p>

                    <h2 className="text-5xl md:text-6xl font-light leading-tight mb-10">
                        If you’re planning
                        <br />
                        an energy project,
                        <br />
                        let’s review it properly.
                    </h2>

                    <p className="text-neutral-300 text-lg leading-relaxed mb-14 max-w-2xl">
                        Whether you’re sourcing equipment, navigating engineering challenges,
                        or scaling delivery across multiple projects, Green Raven provides
                        clarity, access, and execution support — without friction.
                    </p>

                    <a
                        href="https://calendar.app.google/9qsvNemHcAkYwesn9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-sm font-medium text-neutral-900 hover:bg-neutral-200 transition"
                    >
                        Schedule a consultation
                    </a>
                </motion.div>
            </div>
            <motion.div
                className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_60%)]"
                animate={{ opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute bottom-20 right-24 hidden md:block">
                <div className="flex items-center gap-6 text-neutral-600">
                    <span className="h-px w-24 bg-neutral-700" />
                    <span className="text-xs tracking-[0.3em] uppercase">
                        Green Raven
                    </span>
                </div>
            </div>

        </section>
    );
}
