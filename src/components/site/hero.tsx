"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ListChecks, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

type Showcase = {
  name: string;
  url: string;
  screenshot: string;
};

const showcases: Showcase[] = [
  { name: "Dwell Chronicles Ghana", url: "https://dwellchroniclesgh.com/", screenshot: "/projects/dwellchroniclesgh.png" },
  { name: "Global Experience Ghana", url: "https://globalexperiencegh.org/", screenshot: "/projects/globalexperiencegh.png" },
  { name: "Progressive Youth Club, Ho", url: "https://pycclub.org/", screenshot: "/projects/pycclub.png" },
  { name: "RAS MUTA Foundation", url: "https://rasmutafoundation.org/", screenshot: "/projects/rasmutafoundation.png" },
  { name: "Fafaa FM Online", url: "https://fafaafmonline.com/", screenshot: "/projects/fafaafmonline.png" },
  { name: "Duamenefa Foundation", url: "https://duamenefafoundation.org/", screenshot: "/projects/duamenefafoundation.png" },
  { name: "24Hour News Online", url: "https://24hournewsonline.com/", screenshot: "/projects/24hournewsonline.png" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-advance the carousel every 3.5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % showcases.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  // Pause-on-hover would be nice but adds complexity; auto-advance is sufficient
  const active = showcases[current];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#1B2A5C] text-white pt-16 pb-24 lg:pt-24 lg:pb-32"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-radial-fade" aria-hidden />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#1B2A5C]/30 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#E31E24]/20 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              Empowering Businesses Through <span className="bg-gradient-to-r from-[#E31E24] to-white bg-clip-text text-transparent">Innovative IT Solutions</span>
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
                className="bg-[#E31E24] hover:bg-[#C0181F] text-white shadow-brand hover:shadow-lg transition-all h-12 px-6 text-base font-semibold group"
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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-xs text-white/55"
            >
              Live websites built and maintained by Clipe Consult — showcased on the right.
            </motion.p>
          </div>

          {/* Right visual: auto-rotating carousel of client website screenshots */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#1B2A5C]/40 to-[#E31E24]/30 blur-2xl rounded-3xl" aria-hidden />

              {/* Carousel card */}
              <div className="relative glass-card rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="bg-[#0A1330]/95 backdrop-blur-sm px-3 py-2.5 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex-1 mx-2 h-5 rounded-md bg-white/10 flex items-center px-2 overflow-hidden">
                    <span className="text-[10px] text-white/70 font-mono truncate">
                      {active.url.replace("https://", "")}
                    </span>
                  </div>
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open live site in new tab"
                    className="inline-flex h-6 w-6 items-center justify-center rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Screenshot area (fixed aspect ratio to prevent layout shift) */}
                <a
                  href={active.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] bg-slate-200 overflow-hidden group"
                  aria-label={`Visit ${active.name} — opens in new tab`}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={active.url}
                      src={active.screenshot}
                      alt={`Screenshot of ${active.name} website`}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>

                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A5C]/30 via-transparent to-transparent pointer-events-none" />

                  {/* Hover hint */}
                  <div className="absolute inset-0 bg-[#1B2A5C]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#1B2A5C] text-sm font-bold shadow-lg">
                      <ExternalLink className="h-4 w-4" />
                      Visit Live Site
                    </span>
                  </div>

                  {/* Active site name badge */}
                  <div className="absolute bottom-3 left-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1B2A5C]/85 backdrop-blur-sm border border-white/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-semibold text-white">{active.name}</span>
                    </div>
                  </div>
                </a>

                {/* Dot navigation */}
                <div className="bg-[#0A1330]/95 backdrop-blur-sm px-3 py-2.5 border-t border-white/10 flex items-center justify-center gap-1.5">
                  {showcases.map((s, i) => (
                    <button
                      key={s.url}
                      onClick={() => setCurrent(i)}
                      aria-label={`Show ${s.name}`}
                      aria-pressed={i === current}
                      className="group/dot relative h-1.5 rounded-full transition-all duration-300"
                      style={{
                        width: i === current ? 28 : 8,
                        backgroundColor: i === current ? "#E31E24" : "rgba(255,255,255,0.25)",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Counter badge */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E31E24] text-white text-[11px] font-bold shadow-lg">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                {String(current + 1).padStart(2, "0")} / {String(showcases.length).padStart(2, "0")} LIVE
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scrolling marquee of all client thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 lg:mt-20 pt-8 border-t border-white/10"
        >
          <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40 mb-6">
            Live client websites built by Clipe Consult
          </p>
          <div className="relative overflow-hidden mask-fade-r">
            {/* Duplicate the array so the marquee loops seamlessly */}
            <div className="flex gap-4 animate-marquee w-max">
              {[...showcases, ...showcases].map((s, i) => (
                <a
                  key={`${s.url}-${i}`}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-shrink-0 w-64 rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-[#E31E24]/50 transition-colors"
                  aria-label={`Visit ${s.name} — opens in new tab`}
                >
                  <div className="aspect-[16/10] bg-slate-200 overflow-hidden">
                    <img
                      src={s.screenshot}
                      alt={`Screenshot of ${s.name}`}
                      className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-3 py-2 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-white/80 truncate">
                      {s.name}
                    </span>
                    <ExternalLink className="h-3 w-3 text-white/40 group-hover:text-[#E31E24] transition-colors flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
