"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { contactInfo, projectTypes, budgetRanges } from "@/lib/site-data";
import { toast } from "sonner";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Project enquiry received!", {
      description: "We'll respond within one business hour.",
    });
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#002060] to-[#001845] text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#ED1C24]/15 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#1A3A6E]/30 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Content + contact info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.3em] font-bold text-[#ED1C24] mb-4"
            >
              Start a Project
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance"
            >
              LET'S BUILD<br />
              <span className="text-[#ED1C24]">SOMETHING THAT MATTERS.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-lg text-white/70 leading-relaxed"
            >
              Your idea. Our expertise. A smarter future.
            </motion.p>

            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-10 space-y-4"
            >
              {[
                { icon: Phone, label: "Call", value: contactInfo.phonePrimary, href: `tel:${contactInfo.phonePrimary.replace(/\s/g, "")}` },
                { icon: MessageCircle, label: "WhatsApp", value: contactInfo.whatsapp, href: `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}` },
                { icon: Mail, label: "Email", value: contactInfo.emailPrimary, href: `mailto:${contactInfo.emailPrimary}` },
                { icon: MapPin, label: "Location", value: contactInfo.address, href: "#" },
                { icon: Clock, label: "Hours", value: contactInfo.hoursWeekday, href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/15 group-hover:bg-[#ED1C24] transition-colors flex-shrink-0">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-white/50 font-medium">{item.label}</p>
                    <p className="text-sm text-white/90 truncate">{item.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Project enquiry form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl bg-white text-[#002060] p-6 lg:p-8 shadow-2xl"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#002060] mb-2">
                  Thank you — message received!
                </h3>
                <p className="text-sm text-[#6B7280] max-w-md">
                  Our team will get back to you shortly. For urgent matters, WhatsApp us at {contactInfo.whatsapp}.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#002060] mb-1">
                  Project Enquiry
                </h3>
                <p className="text-xs text-[#6B7280] mb-4">Tell us about your project. We'll respond within one business hour.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-bold">Name *</Label>
                    <Input id="name" name="name" required placeholder="Your full name" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-xs font-bold">Organization</Label>
                    <Input id="organization" name="organization" placeholder="Company / NGO / School" className="h-11" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@example.com" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-bold">Phone *</Label>
                    <Input id="phone" name="phone" required placeholder="+233 24 000 0000" className="h-11" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-xs font-bold">Project Type *</Label>
                    <Select name="projectType" required>
                      <SelectTrigger id="projectType" className="h-11">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-xs font-bold">Budget Range</Label>
                    <Select name="budget">
                      <SelectTrigger id="budget" className="h-11">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((b) => (
                          <SelectItem key={b} value={b}>{b}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-xs font-bold">Project Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    placeholder="Tell us about your project, timeline and goals..."
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold">Preferred Contact Method</Label>
                  <RadioGroup defaultValue="email" className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email" className="text-sm font-normal cursor-pointer">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone" className="text-sm font-normal cursor-pointer">Phone</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="whatsapp" id="contact-whatsapp" />
                      <Label htmlFor="contact-whatsapp" className="text-sm font-normal cursor-pointer">WhatsApp</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full h-12 bg-[#ED1C24] hover:bg-[#B8181F] text-white text-base font-bold shadow-xl group"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      START YOUR PROJECT
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
