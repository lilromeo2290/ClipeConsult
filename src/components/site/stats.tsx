"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/site-data";

export function Stats() {
  return (
    <section className="relative -mt-8 z-30 bg-white py-0">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-[#002060] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center py-8 px-4 text-center group hover:bg-white/5 transition-colors"
              >
                <span className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-extrabold text-white group-hover:text-[#ED1C24] transition-colors">
                  {stat.value}
                </span>
                <span className="mt-1 text-[10px] lg:text-xs uppercase tracking-wider text-white/60 font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
