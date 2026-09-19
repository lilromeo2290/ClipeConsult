"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  const focusAreas = [
    "Software Development",
    "Digital Transformation",
    "IT Infrastructure",
    "Cybersecurity",
    "Cloud",
    "Enterprise Systems",
    "Technology Consulting",
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-[#F4F6FA] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#002060] to-[#001845] overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-grid opacity-30" />
              {/* Logo centered */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <img
                  src="/raclipe-logo.png"
                  alt="RACLIPE CONSULT"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              {/* Accent */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#ED1C24] to-[#002060]" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.3em] font-bold text-[#ED1C24] mb-4"
            >
              About RACLIPE CONSULT
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-[#002060] leading-tight text-balance mb-6"
            >
              Technology that works in the real world.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base text-[#6B7280] leading-relaxed mb-6"
            >
              RACLIPE CONSULT provides technology, business solutions and digital systems for organizations. We design, build, secure and support technology that helps businesses operate, grow and compete — from a business website to a complete enterprise platform.
            </motion.p>

            {/* Focus areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[#ED1C24] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#002060]">{area}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#002060] hover:bg-[#001845] text-white"
              >
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
