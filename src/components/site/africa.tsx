"use client";

import { motion } from "framer-motion";

export function Africa() {
  return (
    <section id="africa" className="relative py-20 lg:py-28 bg-[#002060] text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#ED1C24]/10 blur-3xl" aria-hidden />

      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.3em] font-bold text-[#ED1C24] mb-4"
            >
              Our Reach
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance"
            >
              BUILT IN GHANA.<br />
              READY FOR AFRICA.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-base lg:text-lg text-white/70 leading-relaxed max-w-xl"
            >
              Technology built from Ghana, designed for businesses and organizations that want to operate, grow and compete beyond borders.
            </motion.p>
          </div>

          {/* Right: Africa map visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-lg mx-auto"
          >
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full"
              fill="none"
            >
              {/* Africa continent shape (simplified) */}
              <path
                d="M 200 60
                   L 260 50
                   L 320 70
                   L 360 110
                   L 390 170
                   L 400 240
                   L 380 300
                   L 340 360
                   L 290 400
                   L 240 410
                   L 190 390
                   L 150 350
                   L 130 290
                   L 120 220
                   L 140 140
                   L 170 90
                   Z"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                fill="rgba(255,255,255,0.03)"
              />

              {/* Connection lines from Ghana to other African cities */}
              {[
                { x: 220, y: 200, tx: 280, ty: 100 },
                { x: 220, y: 200, tx: 320, ty: 180 },
                { x: 220, y: 200, tx: 360, ty: 250 },
                { x: 220, y: 200, tx: 300, ty: 320 },
                { x: 220, y: 200, tx: 200, ty: 350 },
                { x: 220, y: 200, tx: 160, ty: 250 },
              ].map((line, i) => (
                <line
                  key={i}
                  x1={line.x}
                  y1={line.y}
                  x2={line.tx}
                  y2={line.ty}
                  stroke="rgba(237,28,36,0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="16"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </line>
              ))}

              {/* Other African city nodes */}
              {[
                { x: 280, y: 100 },
                { x: 320, y: 180 },
                { x: 360, y: 250 },
                { x: 300, y: 320 },
                { x: 200, y: 350 },
                { x: 160, y: 250 },
              ].map((node, i) => (
                <circle key={i} cx={node.x} cy={node.y} r="4" fill="rgba(255,255,255,0.4)" />
              ))}

              {/* Ghana highlighted (center-left) */}
              <circle cx="220" cy="200" r="10" fill="#ED1C24" />
              <circle cx="220" cy="200" r="20" fill="none" stroke="#ED1C24" strokeWidth="2" opacity="0.5">
                <animate attributeName="r" from="20" to="35" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="220" y="175" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">GHANA</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
