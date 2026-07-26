"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to international standards on every project — from a simple website to a multi-site ERP rollout.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Transparent pricing, honest advice, and recommendations that serve your business — not our bottom line.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We continuously invest in modern tools, frameworks and training so our clients always stay ahead of the curve.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We measure success by your growth. Most of our clients stay with us for years and refer us to their networks.",
  },
];

const highlights = [
  { icon: Award, label: "Certified Engineers" },
  { icon: Clock, label: "24/7 Support" },
  { icon: ShieldCheck, label: "Secure by Design" },
  { icon: TrendingUp, label: "Agile Delivery" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-[#1B2A5C]/5 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: intro */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF1F8] text-[#1B2A5C] text-xs font-semibold mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#1B2A5C]" />
              About Clipe Consult
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A5C] leading-tight text-balance"
            >
              Your trusted technology partner, rooted in Ghana.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-base lg:text-lg text-[#5A6B82] leading-relaxed"
            >
              Founded in Ho and serving clients across Ghana, Clipe Consult is a full-service IT consulting firm helping organizations adopt modern technology with confidence. We design websites, build software, deploy networks, secure infrastructure and train teams — all under one roof.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 text-base lg:text-lg text-[#5A6B82] leading-relaxed"
            >
              Our mission is simple: to make enterprise-grade technology accessible and affordable for every Ghanaian business — from one-person startups to government institutions — so they can compete, grow and thrive in the digital economy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 grid grid-cols-2 gap-3"
            >
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white">
                  <div className="h-9 w-9 rounded-lg bg-[#EEF1F8] flex items-center justify-center">
                    <h.icon className="h-4 w-4 text-[#1B2A5C]" />
                  </div>
                  <span className="text-sm font-medium text-[#1B2A5C]">{h.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#1B2A5C] hover:bg-[#142149] text-white"
              >
                Explore Our Services
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border-[#1B2A5C]/20 text-[#1B2A5C] hover:bg-[#1B2A5C] hover:text-white"
              >
                Talk to Our Team
              </Button>
            </motion.div>
          </div>

          {/* Right: mission/vision + image card */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-[#1B2A5C] via-[#1B2A5C] to-[#E31E24] relative">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/15 backdrop-blur-sm mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-white/80 max-w-md mx-auto leading-relaxed">
                      To empower Ghanaian businesses with reliable, secure and innovative technology solutions that drive measurable growth.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="rounded-xl p-6 bg-[#1B2A5C] text-white shadow-lg"
              >
                <Eye className="h-8 w-8 text-[#E31E24] mb-3" />
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  To be West Africa&apos;s most trusted IT consulting firm — known for technical excellence, integrity and customer success.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl p-6 bg-gradient-to-br from-[#1B2A5C] to-[#E31E24] text-white shadow-lg"
              >
                <Heart className="h-8 w-8 text-white mb-3" />
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold mb-2">Our Promise</h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  Honest advice, fair pricing and dependable support — every project, every client, every single time.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Values row */}
        <div className="mt-16 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <h3 className="font-[family-name:var(--font-poppins)] text-2xl md:text-3xl font-bold text-[#1B2A5C] mb-3">
              The values that drive every project
            </h3>
            <p className="text-[#5A6B82]">
              These four principles shape how we hire, how we build and how we serve our clients across Ghana.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-6 bg-white border border-slate-200 hover:border-[#1B2A5C]/30 hover:shadow-xl transition-all"
              >
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-[#1B2A5C]/5 to-transparent rounded-bl-3xl rounded-tr-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="relative">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#1B2A5C] to-[#1B2A5C] flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                    <v.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#1B2A5C] mb-2">
                    {v.title}
                  </h4>
                  <p className="text-sm text-[#5A6B82] leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
