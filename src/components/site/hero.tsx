"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ListChecks, ShieldCheck, Cpu, Cloud, Code2, Globe, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/site-data";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const floatingBadges = [
  { icon: Code2, label: "Custom Software", x: "-6%", y: "22%" },
  { icon: Cloud, label: "Cloud Hosting", x: "92%", y: "16%" },
  { icon: ShieldCheck, label: "Cybersecurity", x: "94%", y: "62%" },
  { icon: Globe, label: "Web Design", x: "-8%", y: "70%" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0B1F3A] text-white pt-16 pb-24 lg:pt-24 lg:pb-32"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#0056D2]/30 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#4A90E2]/20 blur-3xl" aria-hidden />

      {/* Floating badges (desktop only) */}
      {floatingBadges.map((b, i) => (
        <motion.div
          key={b.label}
          className="hidden xl:flex absolute z-10 items-center gap-2 px-4 py-2.5 rounded-full glass-card text-sm font-medium"
          style={{ left: b.x, top: b.y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 0.8 + i * 0.15, duration: 0.5 },
            scale: { delay: 0.8 + i * 0.15, duration: 0.5 },
            y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <b.icon className="h-4 w-4 text-[#4A90E2]" />
          {b.label}
        </motion.div>
      ))}

      <div className="container mx-auto max-w-7xl px-6 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium backdrop-blur-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-white/90">Trusted IT partner for 180+ Ghanaian businesses</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              Empowering Businesses Through <span className="bg-gradient-to-r from-[#4A90E2] to-white bg-clip-text text-transparent">Innovative IT Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-lg lg:text-xl text-white/75 leading-relaxed max-w-2xl"
            >
              Clipe Consult delivers reliable technology solutions that help businesses grow, improve productivity, strengthen cybersecurity, and embrace digital transformation — across Ghana and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                size="lg"
                onClick={() => scrollTo("contact")}
                className="bg-[#0056D2] hover:bg-[#004BB0] text-white shadow-brand hover:shadow-lg transition-all h-12 px-6 text-base font-semibold group"
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="bg-white/5 border-white/25 text-white hover:bg-white/10 hover:text-white hover:border-white/40 backdrop-blur-sm h-12 px-6 text-base font-semibold"
              >
                <ListChecks className="h-5 w-5 mr-2" />
                Request a Quote
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => scrollTo("services")}
                className="text-white hover:bg-white/10 hover:text-white h-12 px-6 text-base font-semibold"
              >
                View Our Services
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-extrabold text-white">
                    {s.value}
                    <span className="text-[#4A90E2]">{s.suffix}</span>
                  </span>
                  <span className="mt-1 text-xs lg:text-sm text-white/65 leading-snug">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0056D2]/40 to-[#4A90E2]/30 blur-2xl rounded-3xl" aria-hidden />

              {/* Main card */}
              <div className="relative glass-card rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="text-[11px] text-white/50 font-mono">clipe-consult.com/dashboard</div>
                </div>

                {/* Mock dashboard */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4 col-span-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-white/60 font-medium">System Uptime</span>
                      <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                        <Zap className="h-3 w-3" /> 99.98%
                      </span>
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 65, 50, 80, 55, 90, 75, 95, 70, 88, 92, 78].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-[#0056D2] to-[#4A90E2]"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.8 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-7 w-7 rounded-lg bg-[#0056D2]/30 flex items-center justify-center">
                        <ShieldCheck className="h-4 w-4 text-[#4A90E2]" />
                      </div>
                      <span className="text-xs text-white/70 font-medium">Threats Blocked</span>
                    </div>
                    <div className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white">1,284</div>
                    <div className="text-[10px] text-emerald-400 mt-1">▼ 12% vs last week</div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-7 w-7 rounded-lg bg-[#0056D2]/30 flex items-center justify-center">
                        <Cpu className="h-4 w-4 text-[#4A90E2]" />
                      </div>
                      <span className="text-xs text-white/70 font-medium">Avg Load</span>
                    </div>
                    <div className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-white">42%</div>
                    <div className="text-[10px] text-white/50 mt-1">All systems nominal</div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4 col-span-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-white/70 font-medium">Active Projects</span>
                      <span className="text-xs text-[#4A90E2]">View all</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { name: "School ERP — Ho", progress: 78 },
                        { name: "Hotel Booking Engine", progress: 92 },
                        { name: "Network Refresh — Accra", progress: 45 },
                      ].map((p) => (
                        <div key={p.name} className="flex items-center gap-3">
                          <span className="text-[11px] text-white/60 flex-1 truncate">{p.name}</span>
                          <div className="w-20 h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#0056D2] to-[#4A90E2]"
                              initial={{ width: 0 }}
                              animate={{ width: `${p.progress}%` }}
                              transition={{ delay: 1.4, duration: 0.8 }}
                            />
                          </div>
                          <span className="text-[10px] text-white/70 w-8 text-right">{p.progress}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating review card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 hidden sm:block glass-card rounded-xl p-4 shadow-xl max-w-[240px]"
              >
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-white/85 leading-relaxed">
                  &ldquo;Clipe Consult rebuilt our school platform — uptime is rock-solid and parents love the new portal.&rdquo;
                </p>
                <p className="text-[10px] text-white/55 mt-2 font-medium">— Headmaster, Volta Heritage School</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 lg:mt-24 pt-8 border-t border-white/10"
        >
          <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
            Serving businesses across Ghana
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white/50 font-[family-name:var(--font-poppins)] font-semibold text-sm md:text-base">
            <span>Schools</span>
            <span className="hidden md:inline h-1 w-1 rounded-full bg-white/30" />
            <span>Hotels</span>
            <span className="hidden md:inline h-1 w-1 rounded-full bg-white/30" />
            <span>Hospitals</span>
            <span className="hidden md:inline h-1 w-1 rounded-full bg-white/30" />
            <span>Churches</span>
            <span className="hidden md:inline h-1 w-1 rounded-full bg-white/30" />
            <span>NGOs</span>
            <span className="hidden md:inline h-1 w-1 rounded-full bg-white/30" />
            <span>Government</span>
            <span className="hidden md:inline h-1 w-1 rounded-full bg-white/30" />
            <span>Real Estate</span>
            <span className="hidden md:inline h-1 w-1 rounded-full bg-white/30" />
            <span>Manufacturing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
