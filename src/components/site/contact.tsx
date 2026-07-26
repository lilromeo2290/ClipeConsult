"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2,
  Facebook, Linkedin, Twitter, Instagram, Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { contactInfo, services } from "@/lib/site-data";
import { toast } from "sonner";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulated submission (front-end only). In production this hits an API route.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Thanks! Your message has been received.", {
      description: "We'll respond within one business hour during working hours.",
    });
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-[#F4F6FA] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF1F8] text-[#1B2A5C] text-xs font-semibold mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#1B2A5C]" />
            Get in Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A5C] leading-tight text-balance"
          >
            Let&apos;s talk about your project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-base lg:text-lg text-[#5A6B82] leading-relaxed"
          >
            Fill out the form, send a WhatsApp message or give us a call. We respond to every enquiry within one business hour during working hours — typically much faster.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: contact info + map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick contact methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${contactInfo.phonePrimary.replace(/\s/g, "")}`}
                className="group rounded-xl p-5 bg-white border border-slate-200 hover:border-[#1B2A5C]/30 hover:shadow-lg transition-all"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1F8] group-hover:bg-[#1B2A5C] transition-colors mb-3">
                  <Phone className="h-5 w-5 text-[#1B2A5C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] text-sm font-bold text-[#1B2A5C] mb-1">Call Us</h3>
                <p className="text-xs text-[#5A6B82]">{contactInfo.phonePrimary}</p>
                <p className="text-xs text-[#5A6B82]">{contactInfo.phoneSecondary}</p>
              </a>

              <a
                href={`mailto:${contactInfo.emailPrimary}`}
                className="group rounded-xl p-5 bg-white border border-slate-200 hover:border-[#1B2A5C]/30 hover:shadow-lg transition-all"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1F8] group-hover:bg-[#1B2A5C] transition-colors mb-3">
                  <Mail className="h-5 w-5 text-[#1B2A5C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] text-sm font-bold text-[#1B2A5C] mb-1">Email Us</h3>
                <p className="text-xs text-[#5A6B82] truncate">{contactInfo.emailPrimary}</p>
                <p className="text-xs text-[#5A6B82] truncate">{contactInfo.emailSecondary}</p>
              </a>

              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl p-5 bg-white border border-slate-200 hover:border-emerald-400/40 hover:shadow-lg transition-all sm:col-span-2"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 group-hover:bg-emerald-500 transition-colors">
                    <MessageCircle className="h-5 w-5 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-poppins)] text-sm font-bold text-[#1B2A5C] mb-0.5">Chat on WhatsApp</h3>
                    <p className="text-xs text-[#5A6B82]">Fastest way to reach us — typically instant during work hours.</p>
                  </div>
                  <Send className="h-4 w-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>

            {/* Address + hours */}
            <div className="rounded-xl p-5 bg-white border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1F8] flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#1B2A5C]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-poppins)] text-sm font-bold text-[#1B2A5C] mb-1">Visit Our Office</h3>
                  <p className="text-xs text-[#5A6B82] leading-relaxed">{contactInfo.address}</p>
                </div>
              </div>
              <div className="my-4 h-px bg-slate-100" />
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF1F8] flex-shrink-0">
                  <Clock className="h-5 w-5 text-[#1B2A5C]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-poppins)] text-sm font-bold text-[#1B2A5C] mb-1">Business Hours</h3>
                  <p className="text-xs text-[#5A6B82]">{contactInfo.hoursWeekday}</p>
                  <p className="text-xs text-[#5A6B82]">{contactInfo.hoursSaturday}</p>
                  <p className="text-xs text-[#5A6B82]">{contactInfo.hoursSunday}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-[#1B2A5C] via-[#1B2A5C] to-[#E31E24]">
                <div className="absolute inset-0 bg-grid opacity-30" />
                {/* Stylized map placeholder */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
                  <path d="M0 80 Q 100 60 200 90 T 400 70" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
                  <path d="M0 140 Q 120 120 220 150 T 400 130" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
                  <path d="M0 200 Q 100 180 200 210 T 400 190" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
                  <path d="M80 0 Q 100 100 90 250" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
                  <path d="M180 0 Q 200 100 190 250" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
                  <path d="M280 0 Q 300 100 290 250" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
                </svg>
                {/* Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="relative inline-flex">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-white/40 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-white shadow-lg" />
                  </div>
                  <div className="mt-3 inline-block px-3 py-1.5 rounded-lg bg-white shadow-lg">
                    <span className="text-xs font-bold text-[#1B2A5C]">Clipe Consult</span>
                    <span className="block text-[10px] text-[#5A6B82]">Ho, Volta Region</span>
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-[#1B2A5C]" />
                  <span className="text-xs text-[#5A6B82]">Main Street, Ho, Volta Region</span>
                </div>
                <a
                  href="https://www.google.com/maps/place/Ho,+Ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#1B2A5C] hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="rounded-xl p-5 bg-[#1B2A5C] text-white">
              <h3 className="font-[family-name:var(--font-poppins)] text-sm font-bold mb-3">Follow Clipe Consult</h3>
              <div className="flex items-center gap-2">
                {[
                  { icon: Facebook, label: "Facebook", href: "https://facebook.com/clipeconsult" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/clipeconsult" },
                  { icon: Twitter, label: "Twitter", href: "https://twitter.com/clipeconsult" },
                  { icon: Instagram, label: "Instagram", href: "https://instagram.com/clipeconsult" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-[#1B2A5C] transition-colors"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl p-6 lg:p-8 bg-white border border-slate-200 shadow-xl">
              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-poppins)] text-xl lg:text-2xl font-bold text-[#1B2A5C] mb-1">
                  Request a free consultation
                </h3>
                <p className="text-sm text-[#5A6B82]">
                  Tell us what you&apos;re working on. We&apos;ll respond within one business hour with a tailored proposal.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 px-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#1B2A5C] mb-2">
                    Thank you — message received!
                  </h4>
                  <p className="text-sm text-[#5A6B82] max-w-md">
                    Our team will get back to you shortly. For urgent matters, WhatsApp us at {contactInfo.whatsapp}.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-xs font-semibold text-[#1B2A5C]">
                        First name <span className="text-red-500">*</span>
                      </Label>
                      <Input id="firstName" name="firstName" required placeholder="John" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-xs font-semibold text-[#1B2A5C]">
                        Last name <span className="text-red-500">*</span>
                      </Label>
                      <Input id="lastName" name="lastName" required placeholder="Doe" className="h-11" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-semibold text-[#1B2A5C]">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input id="email" name="email" type="email" required placeholder="john@company.com" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-semibold text-[#1B2A5C]">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </Label>
                      <Input id="phone" name="phone" required placeholder="+233 24 978 3736" className="h-11" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organization" className="text-xs font-semibold text-[#1B2A5C]">
                        Organization
                      </Label>
                      <Input id="organization" name="organization" placeholder="Your company / school / NGO" className="h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-xs font-semibold text-[#1B2A5C]">
                        Service of interest <span className="text-red-500">*</span>
                      </Label>
                      <Select name="service" required>
                        <SelectTrigger id="service" className="h-11">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.id} value={s.title}>{s.title}</SelectItem>
                          ))}
                          <SelectItem value="other">Other / Multiple services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-xs font-semibold text-[#1B2A5C]">
                      Estimated budget (optional)
                    </Label>
                    <Select name="budget">
                      <SelectTrigger id="budget" className="h-11">
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under GHS 5,000</SelectItem>
                        <SelectItem value="5k-15k">GHS 5,000 – 15,000</SelectItem>
                        <SelectItem value="15k-50k">GHS 15,000 – 50,000</SelectItem>
                        <SelectItem value="50k-plus">GHS 50,000+</SelectItem>
                        <SelectItem value="not-sure">Not sure yet — need guidance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-semibold text-[#1B2A5C]">
                      Project details <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project, timeline, current systems, goals…"
                      className="resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Checkbox id="consent" className="mt-0.5" required />
                    <Label htmlFor="consent" className="text-xs text-[#5A6B82] leading-relaxed">
                      I agree that Clipe Consult may contact me about my enquiry. We respect your privacy and never share your information with third parties.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full h-12 bg-[#1B2A5C] hover:bg-[#142149] text-white text-base font-semibold shadow-brand group"
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-[11px] text-[#5A6B82]">
                    Protected by spam filtering • Your information is never shared
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
