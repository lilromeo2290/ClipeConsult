"use client";

import { motion } from "framer-motion";
import {
  GraduationCap, Hotel, Church, HeartPulse, Landmark, ShoppingBag,
  HandHeart, Building2, HardHat, Home, Factory, Store,
} from "lucide-react";
import { industries } from "@/lib/site-data";

const iconMap = [
  GraduationCap, Hotel, Church, HeartPulse, Landmark, ShoppingBag,
  HandHeart, Building2, HardHat, Home, Factory, Store,
];

export function Industries() {
  return (
    <section id="industries" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-[#F4F6FA] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8F1FC] text-[#0056D2] text-xs font-semibold mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0056D2]" />
            Industries We Serve
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1F3A] leading-tight text-balance"
          >
            Tailored IT solutions for every sector
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base lg:text-lg text-[#5A6B82] leading-relaxed"
          >
            Different industries face different technology challenges. We bring deep, sector-specific experience to every engagement — from regulatory compliance in banking to e-learning for schools.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = iconMap[i] ?? Building2;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="group relative rounded-xl p-5 bg-white border border-slate-200 hover:border-[#0056D2]/40 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#0056D2] to-[#4A90E2] origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F1FC] group-hover:bg-gradient-to-br group-hover:from-[#0056D2] group-hover:to-[#0B1F3A] transition-all flex-shrink-0">
                    <Icon className="h-5 w-5 text-[#0056D2] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-poppins)] text-sm font-bold text-[#0B1F3A] mb-1">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-[#5A6B82] leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-[#5A6B82]">
            Don&apos;t see your industry?{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#0056D2] font-semibold hover:underline"
            >
              Let&apos;s talk — we love new challenges →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
