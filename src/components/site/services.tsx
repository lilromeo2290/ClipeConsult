"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] font-bold text-[#ED1C24] mb-4"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#002060] leading-tight text-balance"
          >
            Complete technology solutions for modern businesses and governments.
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-7 hover:border-[#002060]/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative number */}
              <span className="absolute top-5 right-6 font-[family-name:var(--font-poppins)] text-5xl font-extrabold leading-none text-[#002060]/5 group-hover:text-[#ED1C24]/10 transition-colors">
                {service.number}
              </span>

              <div className="relative">
                {/* Icon */}
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#002060] to-[#1A3A6E] mb-5 shadow-md group-hover:scale-105 transition-transform">
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#002060] mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#EEF1F8] text-[#002060]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn more link */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#002060] hover:text-[#ED1C24] transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-[#ED1C24] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
