"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { teamMembers } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Team() {
  return (
    <section id="team" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] font-bold text-[#ED1C24] mb-4"
          >
            Our Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#002060] leading-tight text-balance"
          >
            The people building the technology.
          </motion.h2>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className={cn("relative aspect-[3/4] bg-gradient-to-br overflow-hidden", member.avatarBg)}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-4 rounded-full border-2 border-white/15" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-poppins)] text-6xl font-extrabold text-white drop-shadow-lg">
                    {member.initials}
                  </span>
                </div>
                {/* Role badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-8">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-poppins)] text-base font-bold text-[#002060] mb-2 leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed mb-4">{member.bio}</p>

                {/* Social links */}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      onClick={(e) => e.preventDefault()}
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#EEF1F8] text-[#002060] hover:bg-[#002060] hover:text-white transition-colors"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#EEF1F8] text-[#002060] hover:bg-[#002060] hover:text-white transition-colors"
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
