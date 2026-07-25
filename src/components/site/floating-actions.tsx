"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 text-[#0B1F3A] shadow-lg hover:bg-slate-50 transition-all",
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl transition-all hover:scale-105"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
