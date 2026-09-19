"use client";

import { motion } from "framer-motion";
import { Beaker } from "lucide-react";
import { labAreas } from "@/lib/site-data";

export function Lab() {
  return (
    <section id="lab" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#001845] via-[#002060] to-[#001845] text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#ED1C24]/10 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ED1C24]/15 border border-[#ED1C24]/30 text-xs font-bold text-[#ED1C24] mb-5"
          >
            <Beaker className="h-3.5 w-3.5" />
            RACLIPE LAB
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance"
          >
            WE DON'T JUST USE TECHNOLOGY.<br />
            <span className="text-[#ED1C24]">WE BUILD IT.</span>
          </motion.h2>
        </div>

        {/* Lab areas grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {labAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative rounded-xl p-5 bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-[#ED1C24]/40 transition-all backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-3 right-4 text-[10px] font-mono text-white/20">
                0{i + 1}
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] text-base font-bold text-white mb-1.5 leading-tight">
                {area.title}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">{area.description}</p>
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#002060] to-[#ED1C24] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
