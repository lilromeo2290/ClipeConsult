"use client";

import { motion } from "framer-motion";
import { Clock, BarChart3, ArrowRight, GraduationCap, Users, Award } from "lucide-react";
import { trainingCourses } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Training() {
  return (
    <section id="training" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#0056D2]/5 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8F1FC] text-[#0056D2] text-xs font-semibold mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0056D2]" />
              IT Training & Capacity Building
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1F3A] leading-tight text-balance"
            >
              Upskill your team. Empower your school. Future-proof your career.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-base lg:text-lg text-[#5A6B82] leading-relaxed"
            >
              Our training programmes combine instructor-led sessions, hands-on labs and real-world projects. Whether you&apos;re upskilling a corporate team, equipping teachers and students, or accelerating your personal career, we have a track for you.
            </motion.p>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-3 gap-3"
            >
              {[
                { icon: Users, value: "1,200+", label: "Learners trained" },
                { icon: GraduationCap, value: "8", label: "Course tracks" },
                { icon: Award, value: "95%", label: "Completion rate" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-4 bg-gradient-to-br from-[#0B1F3A] to-[#0056D2] text-white text-center">
                  <s.icon className="h-5 w-5 mx-auto mb-2 text-[#4A90E2]" />
                  <div className="font-[family-name:var(--font-poppins)] text-xl font-extrabold">{s.value}</div>
                  <div className="text-[10px] text-white/65 mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainingCourses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group rounded-xl p-5 bg-white border border-slate-200 hover:border-[#0056D2]/30 hover:shadow-lg transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[#E8F1FC] text-[#0056D2] group-hover:bg-[#0056D2] group-hover:text-white transition-colors">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="text-[10px] font-mono text-[#5A6B82]/50">0{i + 1}</span>
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] text-base font-bold text-[#0B1F3A] mb-2 leading-tight group-hover:text-[#0056D2] transition-colors">
                {course.title}
              </h3>
              <p className="text-xs text-[#5A6B82] leading-relaxed mb-4 flex-1">{course.description}</p>
              <div className="space-y-2 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-[11px] text-[#5A6B82]">
                  <BarChart3 className="h-3.5 w-3.5 text-[#0056D2]" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#5A6B82]">
                  <Clock className="h-3.5 w-3.5 text-[#0056D2]" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl bg-[#0B1F3A] text-white text-center sm:text-left"
        >
          <div>
            <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold mb-1">
              Looking for custom corporate training?
            </h3>
            <p className="text-sm text-white/70">
              We design bespoke programmes for teams of 5 or more — at your office or ours.
            </p>
          </div>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white text-[#0B1F3A] hover:bg-white/90 flex-shrink-0 group"
          >
            Enquire about training
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
