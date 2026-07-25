"use client";

import {
  Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram,
  ArrowRight, MessageCircle, Clock, ShieldCheck,
} from "lucide-react";
import { navItems, services, contactInfo } from "@/lib/site-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed!", { description: "You'll receive our weekly IT tips & insights." });
    setEmail("");
  };

  const handleNav = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative bg-[#0B1F3A] text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#0056D2]/15 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* Top CTA strip */}
        <div className="py-10 border-b border-white/10 grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="font-[family-name:var(--font-poppins)] text-2xl lg:text-3xl font-bold leading-tight">
              Get weekly IT tips for Ghanaian businesses
            </h3>
            <p className="mt-2 text-sm text-white/65">
              Practical cybersecurity, web design & productivity insights — straight to your inbox. No spam, ever.
            </p>
          </div>
          <form onSubmit={subscribe} className="flex gap-2">
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="h-12 bg-white/10 border-white/15 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-[#4A90E2]"
            />
            <Button type="submit" size="lg" className="h-12 bg-[#0056D2] hover:bg-[#004BB0] text-white px-6 group flex-shrink-0">
              Subscribe
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>

        {/* Main footer */}
        <div className="py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-[#0056D2] to-[#4A90E2] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-2xl font-[family-name:var(--font-poppins)]">C</span>
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#0B1F3A]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xl font-[family-name:var(--font-poppins)]">Clipe Consult</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#4A90E2] font-medium">
                  IT Consulting • Ghana
                </span>
              </div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed mb-5">
              Empowering Ghanaian businesses through innovative IT solutions — website design, software development, IT support, hosting, networks and training. Trusted by 180+ organizations across Ghana.
            </p>

            {/* Contact list */}
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5 text-white/75">
                <MapPin className="h-4 w-4 mt-0.5 text-[#4A90E2] flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li>
                <a href={`tel:${contactInfo.phonePrimary.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-white/75 hover:text-white transition">
                  <Phone className="h-4 w-4 text-[#4A90E2] flex-shrink-0" />
                  <span>{contactInfo.phonePrimary}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.emailPrimary}`} className="flex items-center gap-2.5 text-white/75 hover:text-white transition">
                  <Mail className="h-4 w-4 text-[#4A90E2] flex-shrink-0" />
                  <span>{contactInfo.emailPrimary}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/75">
                <Clock className="h-4 w-4 mt-0.5 text-[#4A90E2] flex-shrink-0" />
                <span>{contactInfo.hoursWeekday}<br />{contactInfo.hoursSaturday}</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-5 flex items-center gap-2">
              {[
                { icon: Facebook, label: "Facebook", href: "https://facebook.com/clipeconsult" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/clipeconsult" },
                { icon: Twitter, label: "Twitter", href: "https://twitter.com/clipeconsult" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com/clipeconsult" },
                { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}` },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-[#0056D2] hover:border-[#0056D2] transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-[family-name:var(--font-poppins)] text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.href);
                    }}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-[family-name:var(--font-poppins)] text-sm font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("#services");
                    }}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust badges */}
          <div className="lg:col-span-3">
            <h4 className="font-[family-name:var(--font-poppins)] text-sm font-bold uppercase tracking-wider text-white mb-4">
              Why Trust Us
            </h4>
            <ul className="space-y-3">
              {[
                { icon: ShieldCheck, label: "SSL & daily backups on every site" },
                { icon: Clock, label: "24/7 monitoring for managed clients" },
                { icon: Phone, label: "1-hour response time during work hours" },
                { icon: Mail, label: "Ghana Data Protection Act compliant" },
              ].map((b) => (
                <li key={b.label} className="flex items-start gap-2.5">
                  <b.icon className="h-4 w-4 mt-0.5 text-[#4A90E2] flex-shrink-0" />
                  <span className="text-sm text-white/65 leading-relaxed">{b.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Clipe Consult. All rights reserved. Registered in Ghana.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-ring" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
