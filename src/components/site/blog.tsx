"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar, Clock, Rss } from "lucide-react";
import { blogCategories, blogPosts } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function Blog() {
  return (
    <section id="blog" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F4F6FA] to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF1F8] text-[#1B2A5C] text-xs font-semibold mb-5"
          >
            <Rss className="h-3 w-3" />
            Latest Articles
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base lg:text-lg text-[#5A6B82] leading-relaxed"
          >
            Practical, no-fluff articles on cybersecurity, web design, software development, networking, AI, Microsoft Office and more — written by our team for Ghanaian businesses.
          </motion.p>
        </div>

        {/* Featured posts */}
        <div className="grid lg:grid-cols-3 gap-6 mb-14">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-[#1B2A5C]/30 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="relative aspect-[16/9] bg-gradient-to-br from-[#1B2A5C] via-[#1B2A5C] to-[#E31E24] overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute inset-0 flex items-end p-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-white">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 h-8 w-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[11px] text-[#5A6B82] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-[#1B2A5C] mb-3 leading-tight group-hover:text-[#1B2A5C] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#5A6B82] leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <a
                  href="#blog"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B2A5C] hover:text-[#142149] mt-auto"
                >
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-6 lg:p-8 bg-white border border-slate-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#1B2A5C]">
                Browse by category
              </h3>
              <p className="text-sm text-[#5A6B82] mt-1">12 categories. 200+ articles. Find what you need.</p>
            </div>
            <Button variant="outline" className="border-[#1B2A5C]/30 text-[#1B2A5C] hover:bg-[#1B2A5C] hover:text-white">
              View all articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <a
                key={cat.name}
                href="#blog"
                onClick={(e) => e.preventDefault()}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#F4F6FA] hover:bg-[#1B2A5C] text-[#1B2A5C] hover:text-white text-sm font-medium transition-colors"
              >
                {cat.name}
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white text-[#5A6B82] group-hover:bg-white/20 group-hover:text-white transition-colors">
                  {cat.posts}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
