"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { projects } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

const gradients = [
  "from-[#0056D2] to-[#4A90E2]",
  "from-[#0B1F3A] to-[#0056D2]",
  "from-[#4A90E2] to-[#6BB1FF]",
  "from-[#0B1F3A] to-[#1A3A5C]",
  "from-[#0056D2] to-[#0B1F3A]",
  "from-[#1A3A5C] to-[#4A90E2]",
];

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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8F1FC] text-[#0056D2] text-xs font-semibold mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0056D2]" />
              Selected Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1F3A] leading-tight text-balance"
            >
              Real projects. Measurable results.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-base lg:text-lg text-[#5A6B82] leading-relaxed"
            >
              A snapshot of recent work across schools, hotels, hospitals, NGOs and retail clients in Ghana. Every project ships with a measurable outcome — uptime, revenue, efficiency or satisfaction.
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
              className="border-[#0B1F3A]/20 text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white"
            >
              Start your project
              <ArrowUpRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Visual top */}
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${gradients[i % gradients.length]} overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <div className="font-[family-name:var(--font-poppins)] text-4xl lg:text-5xl font-extrabold mb-1">
                    {project.metric}
                  </div>
                  <div className="text-xs text-white/70 uppercase tracking-wider">{project.metricLabel}</div>
                </div>
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-white">
                  {project.category}
                </div>
                <ArrowUpRight className="absolute top-4 right-4 h-5 w-5 text-white/50 group-hover:text-white group-hover:rotate-12 transition-all" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#0B1F3A] mb-2 leading-tight group-hover:text-[#0056D2] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#5A6B82] leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#E8F1FC] text-[#0056D2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl p-6 lg:p-8 bg-gradient-to-r from-[#E8F1FC] to-[#F4F6FA] border border-[#0056D2]/15 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-[#0056D2] flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#0B1F3A]">
                250+ projects delivered — and counting
              </h3>
              <p className="text-sm text-[#5A6B82]">
                From single-page sites to multi-site ERP rollouts. Yours could be next.
              </p>
            </div>
          </div>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#0056D2] hover:bg-[#004BB0] text-white flex-shrink-0"
          >
            Start your project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
