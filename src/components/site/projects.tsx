"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, TrendingUp, Globe } from "lucide-react";
import { projects } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF1F8] text-[#1B2A5C] text-xs font-semibold mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#1B2A5C]" />
              Selected Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A5C] leading-tight text-balance"
            >
              Real websites. Live right now.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-base lg:text-lg text-[#5A6B82] leading-relaxed"
            >
              A snapshot of recent websites designed, built and maintained by Clipe Consult for clients across Ghana — foundations, NGOs, media houses, real estate and more. Click any project to visit the live site.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-[#1B2A5C]/20 text-[#1B2A5C] hover:bg-[#1B2A5C] hover:text-white"
            >
              Start your project
              <ArrowUpRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              aria-label={`Visit ${project.title} — opens in new tab`}
            >
              {/* Screenshot */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={project.screenshot}
                  alt={`Screenshot of ${project.title} website`}
                  className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Browser chrome overlay */}
                <div className="absolute inset-x-0 top-0 h-8 bg-[#1B2A5C]/95 backdrop-blur-sm flex items-center px-3 gap-1.5 opacity-90">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  <div className="flex-1 mx-2 h-4 rounded-sm bg-white/15 flex items-center px-2">
                    <span className="text-[9px] text-white/80 font-mono truncate">{project.url.replace("https://", "").replace("/", "")}</span>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A5C]/70 via-[#1B2A5C]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#1B2A5C] text-sm font-bold shadow-lg">
                    <ExternalLink className="h-4 w-4" />
                    Visit Live Site
                  </span>
                </div>
                {/* Category badge */}
                <div className="absolute top-10 left-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-[#1B2A5C] shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#1B2A5C] leading-tight group-hover:text-[#E31E24] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-[#5A6B82] flex-shrink-0 mt-1 group-hover:text-[#E31E24] group-hover:rotate-12 transition-all" />
                </div>
                <p className="text-sm text-[#5A6B82] leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#EEF1F8] text-[#1B2A5C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}

          {/* 8th cell — CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="relative rounded-2xl p-7 bg-gradient-to-br from-[#1B2A5C] to-[#2A3A6A] text-white border border-[#1B2A5C] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#E31E24]/20 blur-2xl" aria-hidden />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] text-xl lg:text-2xl font-bold mb-3">
                Yours could be next.
              </h3>
              <p className="text-sm text-white/75 leading-relaxed mb-6">
                We design and build modern, fast, secure websites for businesses, NGOs, churches, schools and media houses across Ghana. Let&apos;s make yours stand out.
              </p>
            </div>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#E31E24] hover:bg-[#C0181F] text-white group"
            >
              Request a Quote
              <ArrowUpRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left"
        >
          <TrendingUp className="h-5 w-5 text-[#E31E24]" />
          <p className="text-sm text-[#5A6B82]">
            <span className="font-bold text-[#1B2A5C]">All {projects.length} websites above are live</span> — click any thumbnail to open the live site in a new tab.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
