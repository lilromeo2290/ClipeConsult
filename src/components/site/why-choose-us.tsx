"use client";

import { motion } from "framer-motion";
import { whyChooseItems } from "@/lib/site-data";
import { Award, Headset, ShieldCheck, Clock, TrendingUp, Wallet, Users, Sparkles, Lock, Globe2 } from "lucide-react";

const iconMap = [Award, Wallet, Headset, Sparkles, Users, Clock, Lock, Headset, TrendingUp, Globe2];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#1B2A5C] text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-[#1B2A5C]/20 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#E31E24]/15 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#E31E24]" />
              Why Choose Clipe Consult
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance"
            >
              Ten reasons businesses in Ghana trust us with their IT.
            </motion.h2>
          </div>
          <div className="lg:col-span-7 lg:pt-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base lg:text-lg text-white/70 leading-relaxed"
            >
              Anyone can sell you a website or fix a printer. What sets Clipe Consult apart is the combination of technical depth, business understanding and genuine partnership — the kind that turns one-off projects into multi-year relationships. Here&apos;s what that looks like in practice.
            </motion.p>
          </div>
        </div>

        {/* Grid of reasons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {whyChooseItems.map((item, i) => {
            const Icon = iconMap[i] ?? Award;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                className="group relative rounded-xl p-5 bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-[#E31E24]/40 transition-all backdrop-blur-sm"
              >
                <div className="absolute top-4 right-4 text-[10px] font-mono text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1B2A5C] to-[#E31E24] mb-3 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] text-sm font-bold text-white mb-1.5 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-white/65 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid sm:grid-cols-3 gap-6 pt-10 border-t border-white/10"
        >
          {[
            { value: "99.98%", label: "Average uptime across managed clients" },
            { value: "< 2 hr", label: "Average emergency response time" },
            { value: "4.9 / 5", label: "Average client satisfaction rating" },
          ].map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#E31E24] to-white bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
