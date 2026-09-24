"use client";

import { Phone, Mail, MapPin, MessageCircle, Facebook } from "lucide-react";
import { navItems, services, contactInfo } from "@/lib/site-data";

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative bg-[#001845] text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#ED1C24]/10 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand — enlarged logo */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <img src="/raclipe-logo.png" alt="RACLIPE CONSULT" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 font-medium mb-2">
              TECHNOLOGY <span className="text-[#ED1C24]">•</span> BUSINESS SOLUTIONS <span className="text-[#ED1C24]">•</span> DIGITAL SYSTEMS
            </p>
            <p className="text-sm text-white/65 leading-relaxed mb-5">
              RACLIPE CONSULT designs, builds, secures and supports technology that works in the real world.
            </p>

            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`tel:${contactInfo.phonePrimary.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-white/75 hover:text-white transition">
                  <Phone className="h-4 w-4 text-[#ED1C24] flex-shrink-0" />
                  <span>{contactInfo.phonePrimary}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.emailPrimary}`} className="flex items-center gap-2.5 text-white/75 hover:text-white transition">
                  <Mail className="h-4 w-4 text-[#ED1C24] flex-shrink-0" />
                  <span>{contactInfo.emailPrimary}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/75">
                <MapPin className="h-4 w-4 mt-0.5 text-[#ED1C24] flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://facebook.com/clipeconsult"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-[#ED1C24] hover:border-[#ED1C24] transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-emerald-600 hover:border-emerald-600 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-[family-name:var(--font-poppins)] text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                    className="text-sm text-white/65 hover:text-white transition"
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
                    onClick={(e) => { e.preventDefault(); handleNav("#services"); }}
                    className="text-sm text-white/65 hover:text-white transition"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-[family-name:var(--font-poppins)] text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-white/65">{contactInfo.phonePrimary}</li>
              <li className="text-white/65 break-all">{contactInfo.emailPrimary}</li>
              <li className="text-white/65 text-xs">{contactInfo.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} RACLIPE CONSULT. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs font-bold tracking-wider text-white/70">
              IDEAS TODAY <span className="text-[#ED1C24]">•</span> SOLUTIONS TOMORROW
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#" className="hover:text-white transition">Terms</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
