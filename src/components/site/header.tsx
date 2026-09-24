"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { navItems, contactInfo } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-[#002060] text-white/80 text-xs">
        <div className="container mx-auto max-w-7xl px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${contactInfo.phonePrimary.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white transition">
              <Phone className="h-3.5 w-3.5 text-[#ED1C24]" />
              <span>{contactInfo.phonePrimary}</span>
            </a>
            <span className="text-white/40">|</span>
            <span className="tracking-wider text-white/60">IDEAS TODAY <span className="text-[#ED1C24]">•</span> SOLUTIONS TOMORROW</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">TECHNOLOGY <span className="text-[#ED1C24]">•</span> BUSINESS SOLUTIONS <span className="text-[#ED1C24]">•</span> DIGITAL SYSTEMS</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200"
            : "bg-white/80 backdrop-blur-sm border-b border-transparent"
        )}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Logo — enlarged for better visibility */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
              className="flex items-center group"
              aria-label="RACLIPE CONSULT — Home"
            >
              <div className="relative h-16 lg:h-20 w-auto flex items-center flex-shrink-0">
                <img
                  src="/raclipe-logo.png"
                  alt="RACLIPE CONSULT logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Primary">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                    className={cn(
                      "relative px-3 py-2 text-sm font-bold rounded-md transition-colors",
                      isActive ? "text-[#002060]" : "text-[#002060]/70 hover:text-[#002060]"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-[#ED1C24] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                size="sm"
                className="hidden md:inline-flex bg-[#ED1C24] hover:bg-[#B8181F] text-white shadow-md transition-all"
              >
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}>
                  START YOUR PROJECT
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </Button>
              <button
                className="xl:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg border border-slate-200 text-[#002060] hover:bg-slate-50 transition"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] xl:hidden transition-all duration-300",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-[#002060]/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[88%] max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <img src="/raclipe-logo.png" alt="RACLIPE CONSULT" className="h-14 w-auto object-contain" />
            <button
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 hover:bg-slate-50"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-[#002060]" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-6 space-y-1" aria-label="Mobile">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg text-base font-bold transition-colors",
                    isActive ? "bg-[#EEF1F8] text-[#002060]" : "text-[#002060] hover:bg-slate-50"
                  )}
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </a>
              );
            })}
          </nav>

          <div className="p-6 border-t border-slate-100 space-y-3 bg-slate-50">
            <Button
              asChild
              className="w-full bg-[#ED1C24] hover:bg-[#B8181F] text-white shadow-md"
            >
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}>
                START YOUR PROJECT
              </a>
            </Button>
            <a
              href={`tel:${contactInfo.phonePrimary.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 text-sm text-[#002060]"
            >
              <Phone className="h-4 w-4" />
              {contactInfo.phonePrimary}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
