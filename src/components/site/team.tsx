"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Users } from "lucide-react";
import { teamMembers } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Team() {
  return (
    <section id="team" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F4F6FA] to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden />
      <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-[#1B2A5C]/5 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF1F8] text-[#1B2A5C] text-xs font-semibold mb-5"
          >
            <Users className="h-3 w-3" />
            Meet the Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A5C] leading-tight text-balance"
          >
            The people behind Clipe Consult
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base lg:text-lg text-[#5A6B82] leading-relaxed"
          >
            A small, tight-knit team of certified engineers, developers, designers and trainers — united by a mission to deliver reliable, innovative technology solutions across Ghana. Get to know the people who will be working on your project.
          </motion.p>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-[#1B2A5C]/30 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Avatar header */}
              <div className={cn("relative aspect-square bg-gradient-to-br flex items-center justify-center overflow-hidden", member.avatarBg)}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                {/* Decorative ring */}
                <div className="absolute inset-4 rounded-full border-2 border-white/15" />
                <div className="absolute inset-6 rounded-full border border-white/10" />
                {/* Initials */}
                <span className="relative font-[family-name:var(--font-poppins)] text-5xl font-extrabold text-white drop-shadow-lg">
                  {member.initials}
                </span>
                {/* Role badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/40 to-transparent p-3 pt-8">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-white">
                    {member.role.split(" ")[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-[family-name:var(--font-poppins)] text-base font-bold text-[#1B2A5C] leading-tight mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#E31E24] mb-3">{member.role}</p>
                <p className="text-xs text-[#5A6B82] leading-relaxed mb-4 flex-1">{member.bio}</p>

                {/* Social icons */}
                <div className="flex items-center gap-1.5 pt-3 border-t border-slate-100">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      onClick={(e) => e.preventDefault()}
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#EEF1F8] text-[#1B2A5C] hover:bg-[#1B2A5C] hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      onClick={(e) => e.preventDefault()}
                      aria-label={`${member.name} on Twitter`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#EEF1F8] text-[#1B2A5C] hover:bg-[#1B2A5C] hover:text-white transition-colors"
                    >
                      <Twitter className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#EEF1F8] text-[#1B2A5C] hover:bg-[#1B2A5C] hover:text-white transition-colors"
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
