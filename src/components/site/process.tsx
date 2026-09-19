"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/site-data";

export function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] font-bold text-[#ED1C24] mb-4"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#002060] leading-tight"
          >
            FROM IDEA TO SYSTEM
          </motion.h2>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[7.5%] right-[7.5%] h-0.5 bg-gradient-to-r from-[#002060] via-[#ED1C24] to-[#002060]" />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-2">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step number circle */}
                <div className="relative z-10 mb-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border-2 border-[#002060] group-hover:border-[#ED1C24] group-hover:bg-[#002060] transition-all">
                    <span className="font-[family-name:var(--font-poppins)] text-2xl font-extrabold text-[#002060] group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step title */}
                <h3 className="font-[family-name:var(--font-poppins)] text-sm font-bold text-[#002060] mb-1.5 uppercase tracking-wide">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="text-xs text-[#6B7280] leading-relaxed max-w-[160px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
