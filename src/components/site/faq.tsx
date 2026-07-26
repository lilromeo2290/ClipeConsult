"use client";

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden />

      <div className="container mx-auto max-w-5xl px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF1F8] text-[#1B2A5C] text-xs font-semibold mb-5"
          >
            <HelpCircle className="h-3 w-3" />
            Frequently Asked Questions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A5C] leading-tight text-balance"
          >
            Answers to the questions we hear most
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base lg:text-lg text-[#5A6B82] leading-relaxed"
          >
            Pricing, timelines, support, security, training and more. If your question isn&apos;t here, just ask us — we typically respond within one business day.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={cn(
                  "rounded-xl border bg-white transition-all overflow-hidden",
                  isOpen ? "border-[#1B2A5C]/30 shadow-md" : "border-slate-200 hover:border-slate-300"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${i}`}
                >
                  <span className={cn(
                    "font-[family-name:var(--font-poppins)] text-base lg:text-lg font-semibold transition-colors",
                    isOpen ? "text-[#1B2A5C]" : "text-[#1B2A5C]"
                  )}>
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "inline-flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0 transition-all",
                      isOpen ? "bg-[#1B2A5C] text-white rotate-180" : "bg-[#F4F6FA] text-[#1B2A5C]"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  id={`faq-content-${i}`}
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm lg:text-base text-[#5A6B82] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center p-6 rounded-2xl bg-gradient-to-r from-[#EEF1F8] to-[#F4F6FA] border border-[#1B2A5C]/15"
        >
          <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#1B2A5C] mb-2">
            Still have questions?
          </h3>
          <p className="text-sm text-[#5A6B82] mb-4">
            Our team is one message away. Get a free, no-obligation consultation today.
          </p>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#1B2A5C] hover:bg-[#142149] text-white"
          >
            Get Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
