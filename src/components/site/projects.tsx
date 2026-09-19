"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F4F6FA] to-white overflow-hidden">
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
            Featured Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#002060] leading-tight text-balance"
          >
            Real projects. Real impact. Real results.
          </motion.h2>
        </div>

        {/* Projects grid */}
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
                  alt={`Screenshot of ${project.title}`}
                  className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex px-2.5 py-1 rounded-md bg-[#002060]/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002060]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#002060] text-sm font-bold shadow-lg">
                    <ArrowUpRight className="h-4 w-4" />
                    View Project
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#002060] mb-2 leading-tight group-hover:text-[#ED1C24] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed flex-1">{project.description}</p>
              </div>
            </motion.a>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="rounded-2xl p-7 bg-gradient-to-br from-[#002060] to-[#001845] text-white flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#ED1C24]/20 blur-2xl" aria-hidden />
            <div className="relative">
              <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold mb-3">
                Your project could be next.
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Let's build something that moves your business forward.
              </p>
            </div>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#ED1C24] hover:bg-[#B8181F] text-white group relative z-10"
            >
              Start Your Project
              <ArrowUpRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
