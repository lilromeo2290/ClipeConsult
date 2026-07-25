"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F4F6FA] to-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[#0056D2]/30 to-transparent" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8F1FC] text-[#0056D2] text-xs font-semibold mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0056D2]" />
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1F3A] leading-tight text-balance"
          >
            Seven services. One trusted IT partner.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base lg:text-lg text-[#5A6B82] leading-relaxed"
          >
            From your first website to enterprise software, network infrastructure and ongoing support — Clipe Consult covers the full technology stack so you don&apos;t need to juggle multiple vendors.
          </motion.p>
        </div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, idx) => {
            const isFeatured = idx === 0 || idx === 4;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                className={cn(
                  "group relative rounded-2xl p-6 lg:p-7 transition-all duration-300 border overflow-hidden flex flex-col",
                  isFeatured
                    ? "lg:row-span-1 bg-gradient-to-br from-[#0B1F3A] to-[#0056D2] text-white border-transparent shadow-xl hover:shadow-2xl"
                    : "bg-white border-slate-200 hover:border-[#0056D2]/30 hover:shadow-xl"
                )}
              >
                {/* Decorative number */}
                <span
                  className={cn(
                    "absolute top-5 right-6 font-[family-name:var(--font-poppins)] text-5xl font-extrabold leading-none select-none",
                    isFeatured ? "text-white/10" : "text-[#0056D2]/10 group-hover:text-[#0056D2]/20"
                  )}
                >
                  {service.number}
                </span>

                <div className="relative">
                  <div
                    className={cn(
                      "inline-flex h-14 w-14 items-center justify-center rounded-xl mb-5 transition-transform group-hover:scale-105",
                      isFeatured ? "bg-white/15 backdrop-blur-sm" : "bg-gradient-to-br from-[#0056D2] to-[#0B1F3A]"
                    )}
                  >
                    <service.icon className={cn("h-7 w-7", isFeatured ? "text-white" : "text-white")} />
                  </div>

                  <h3
                    className={cn(
                      "font-[family-name:var(--font-poppins)] text-xl lg:text-2xl font-bold mb-2 leading-tight",
                      isFeatured ? "text-white" : "text-[#0B1F3A]"
                    )}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={cn(
                      "text-sm leading-relaxed mb-5",
                      isFeatured ? "text-white/80" : "text-[#5A6B82]"
                    )}
                  >
                    {service.shortDescription}
                  </p>

                  {/* Feature chips */}
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-2 mb-5">
                    {service.features.slice(0, 6).map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-xs">
                        <Check
                          className={cn(
                            "h-3.5 w-3.5 mt-0.5 flex-shrink-0",
                            isFeatured ? "text-emerald-300" : "text-[#0056D2]"
                          )}
                        />
                        <span className={isFeatured ? "text-white/85" : "text-[#0B1F3A]/80"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.keywords.slice(0, 3).map((k) => (
                      <span
                        key={k}
                        className={cn(
                          "px-2 py-0.5 rounded-md text-[10px] font-medium",
                          isFeatured ? "bg-white/10 text-white/70" : "bg-[#E8F1FC] text-[#0056D2]"
                        )}
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-dashed border-current/10">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group/link",
                      isFeatured ? "text-white hover:text-emerald-300" : "text-[#0056D2] hover:text-[#004BB0]"
                    )}
                  >
                    Request a quote
                    <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}

          {/* 8th cell — CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="relative rounded-2xl p-7 bg-gradient-to-br from-[#E8F1FC] to-[#F4F6FA] border border-[#0056D2]/15 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#0056D2]/10 blur-2xl" aria-hidden />
            <div className="relative">
              <h3 className="font-[family-name:var(--font-poppins)] text-xl lg:text-2xl font-bold text-[#0B1F3A] mb-3">
                Need something custom?
              </h3>
              <p className="text-sm text-[#5A6B82] leading-relaxed mb-6">
                Have a project that doesn&apos;t fit neatly into a category? Tell us what you&apos;re trying to achieve and we&apos;ll architect the right solution.
              </p>
            </div>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#0056D2] hover:bg-[#004BB0] text-white group"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-[#5A6B82]">
            Looking for ongoing IT support?{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#0056D2] font-semibold hover:underline"
            >
              Ask about our managed IT service plans →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
