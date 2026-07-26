"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, Heart, Users, TrendingUp, Coffee } from "lucide-react";
import { careers } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

const perks = [
  { icon: TrendingUp, title: "Real career growth", description: "Mentorship, certifications and a clear path from junior to senior." },
  { icon: Heart, title: "Health & wellness", description: "Comprehensive health insurance for you and your dependents." },
  { icon: Coffee, title: "Flexible & hybrid", description: "Hybrid work options and flexible hours when projects allow." },
  { icon: Users, title: "Great team culture", description: "Collaborative, curious and humble — no egos, just building." },
];

export function Careers() {
  return (
    <section id="careers" className="relative py-20 lg:py-28 bg-[#1B2A5C] text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-[#1B2A5C]/20 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#E31E24]/15 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: intro + perks */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#E31E24]" />
              Careers at Clipe Consult
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance"
            >
              Build the digital future of Ghana with us.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-base lg:text-lg text-white/70 leading-relaxed"
            >
              We&apos;re a small, tight-knit team of engineers, designers and consultants who genuinely love technology. If you want to do the best work of your career while making a real impact on Ghanaian businesses, we&apos;d love to meet you.
            </motion.p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-xl p-4 bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <perk.icon className="h-5 w-5 text-[#E31E24] mb-2" />
                  <h3 className="font-[family-name:var(--font-poppins)] text-sm font-bold mb-1">{perk.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{perk.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: open positions */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl p-6 lg:p-8 bg-white text-[#1B2A5C] shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold">Open positions</h3>
                  <p className="text-sm text-[#5A6B82] mt-1">Updated weekly — we hire on a rolling basis.</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {careers.length} active roles
                </span>
              </div>

              <div className="space-y-3">
                {careers.map((role, i) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group rounded-xl p-4 border border-slate-200 hover:border-[#1B2A5C]/30 hover:bg-[#F4F6FA] transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-[family-name:var(--font-poppins)] text-base font-bold text-[#1B2A5C] group-hover:text-[#1B2A5C] transition-colors">
                          {role.title}
                        </h4>
                        <p className="text-sm text-[#5A6B82] mt-1.5 leading-relaxed line-clamp-2">{role.description}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-3 text-[11px] text-[#5A6B82]">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#EEF1F8] text-[#1B2A5C] font-medium">
                            <Briefcase className="h-3 w-3" />
                            {role.type}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {role.location}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-[#1B2A5C] flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <p className="text-sm text-[#5A6B82] mb-4">
                  Don&apos;t see a perfect fit? Send us your CV — we&apos;re always looking for great people.
                </p>
                <Button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-[#1B2A5C] hover:bg-[#142149] text-white"
                >
                  Send your CV
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
