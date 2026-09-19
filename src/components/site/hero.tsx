"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Users, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trustPoints } from "@/lib/site-data";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const trustIcons = [ShieldCheck, Users, Sparkles, TrendingUp];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#002060] text-white pt-16 pb-0 lg:pt-20 lg:pb-0"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#ED1C24]/15 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#1A3A6E]/40 blur-3xl" aria-hidden />

      {/* Subtle Africa map watermark on the left side */}
      <svg
        className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04] hidden lg:block"
        viewBox="0 0 500 500"
        fill="none"
        aria-hidden
      >
        <path
          d="M180 80 L240 60 L300 80 L340 120 L360 180 L350 250 L320 300 L280 340 L240 360 L200 350 L160 320 L140 270 L130 200 L150 130 Z"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        {/* Ghana highlighted */}
        <circle cx="200" cy="180" r="15" fill="white" />
        <circle cx="200" cy="180" r="25" fill="none" stroke="white" strokeWidth="1" opacity="0.5" />
      </svg>

      <div className="container mx-auto max-w-7xl px-6 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left content (60%) */}
          <div className="lg:col-span-7 py-12 lg:py-20">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              WE BUILD THE<br />
              TECHNOLOGY THAT<br />
              <span className="text-[#ED1C24]">MOVES BUSINESS</span><br />
              <span className="text-[#ED1C24]">FORWARD.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-base lg:text-lg text-white/70 leading-relaxed max-w-xl"
            >
              From a business website to a complete enterprise platform, RACLIPE CONSULT designs, builds, secures and supports technology that works in the real world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("contact")}
                className="bg-[#ED1C24] hover:bg-[#B8181F] text-white h-13 px-7 text-base font-bold group"
              >
                START YOUR PROJECT
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("about")}
                className="bg-white/5 border-white/25 text-white hover:bg-white/10 hover:text-white hover:border-white/40 backdrop-blur-sm h-13 px-7 text-base font-bold"
              >
                <Play className="h-4 w-4 mr-2" />
                WATCH OUR STORY
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl"
            >
              {trustPoints.map((point, i) => {
                const Icon = trustIcons[i];
                return (
                  <div key={point.title} className="flex flex-col gap-1">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 border border-white/15 mb-1">
                      <Icon className="h-4 w-4 text-[#ED1C24]" />
                    </div>
                    <span className="text-sm font-bold text-white tracking-wide">{point.title}</span>
                    <span className="text-xs text-white/50">{point.description}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Founder photo (40%) */}
          <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute inset-0"
            >
              {/* Gradient background behind the photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ED1C24]/20 via-transparent to-[#1A3A6E]/30" aria-hidden />

              {/* The founder photo — positioned to the right, facing left toward the content */}
              <div className="absolute inset-0 flex items-end justify-end">
                <img
                  src="/founder.jpeg"
                  alt="Raymond Romeo Dravie — Founder & CEO of RACLIPE CONSULT"
                  className="h-full w-full object-cover object-top lg:object-center"
                  style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}
                />
              </div>

              {/* Subtle digital interface overlay (top-right) */}
              <div className="absolute top-6 right-6 hidden lg:flex flex-col gap-1.5">
                <div className="glass-card rounded-lg px-3 py-2 text-xs">
                  <span className="text-emerald-400 font-mono">●</span>
                  <span className="text-white/80 ml-2">Systems Online</span>
                </div>
                <div className="glass-card rounded-lg px-3 py-2 text-xs">
                  <span className="text-[#ED1C24] font-mono">●</span>
                  <span className="text-white/80 ml-2">Ghana • Africa</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient transition to next section */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-b from-transparent to-white pointer-events-none" aria-hidden />
    </section>
  );
}
