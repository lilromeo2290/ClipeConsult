"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, CalendarCheck, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0056D2] via-[#0B1F3A] to-[#0B1F3A]" />
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#4A90E2]/30 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#0056D2]/40 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-5xl px-6 relative text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available now — typical response within 1 business hour
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-balance"
        >
          Need Reliable IT Solutions?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto"
        >
          Let Clipe Consult transform your business with innovative technology solutions — designed, built and supported right here in Ghana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white text-[#0056D2] hover:bg-white/90 h-13 px-7 text-base font-semibold shadow-xl group"
          >
            Request a Quote
            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-white/5 border-white/30 text-white hover:bg-white/15 hover:text-white hover:border-white/50 backdrop-blur-sm h-13 px-7 text-base font-semibold"
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Talk to an Expert
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-white hover:bg-white/10 hover:text-white h-13 px-7 text-base font-semibold"
          >
            <CalendarCheck className="h-5 w-5 mr-2" />
            Book a Consultation
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60"
        >
          <span className="flex items-center gap-2">
            <PhoneCall className="h-4 w-4 text-[#4A90E2]" />
            +233 244 000 000
          </span>
          <span className="hidden sm:inline h-1 w-1 rounded-full bg-white/30" />
          <span>Ho • Accra • Whole Ghana</span>
          <span className="hidden sm:inline h-1 w-1 rounded-full bg-white/30" />
          <span>Mon – Sat: 8AM – 6PM</span>
        </motion.div>
      </div>
    </section>
  );
}
