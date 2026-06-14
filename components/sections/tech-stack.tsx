"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function TechStackSection() {
  const categories = [...new Set(techStack.map((t) => t.category))];

  return (
    <section id="tech-stack" className="section-padding overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Tech Stack
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Tools & Technologies
          </h2>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h3 className="reveal-left mb-4 text-sm font-medium uppercase tracking-widest text-violet-400">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack
                .filter((t) => t.category === category)
                .map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    className="reveal-up glass rounded-xl border border-white/10 px-5 py-3 text-sm font-medium transition-all hover:border-violet-500/40 hover:shadow-md hover:shadow-violet-500/10"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {tech.name}
                  </motion.div>
                ))}
            </div>
          </div>
        ))}

        <div className="reveal-up mt-12 overflow-hidden rounded-2xl border border-white/10 bg-muted/20 py-6">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech.name}-${i}`}
                className="text-lg font-medium text-muted-foreground"
              >
                {tech.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
