"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Sparkles } from "lucide-react";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal-up mb-14 text-center">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Professional Journey
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Three roles across AI product building, healthcare analytics, and
            published research.
          </p>
        </div>

        <div className="relative space-y-6">
          {/* spine */}
          <div
            className="absolute bottom-4 left-[27px] top-4 hidden w-px bg-gradient-to-b from-violet-500/60 via-indigo-500/40 to-transparent md:block"
            aria-hidden
          />

          {experience.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="reveal-up group relative md:pl-16"
            >
              {/* timeline node */}
              <div
                className="absolute left-0 top-8 hidden h-[54px] w-[54px] items-center justify-center md:flex"
                aria-hidden
              >
                <div className="relative z-10 flex h-3.5 w-3.5 rounded-full bg-violet-500 ring-4 ring-violet-500/20 transition-transform group-hover:scale-125" />
              </div>

              <div className="glass overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-violet-500/25 hover:shadow-xl hover:shadow-violet-500/5">
                {/* accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${item.color}`} />

                <div className="p-5 sm:p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    {/* left: identity */}
                    <div className="flex gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-lg font-bold text-white shadow-lg`}
                      >
                        {item.company.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="default" className="text-[10px] uppercase tracking-wider">
                            {item.type}
                          </Badge>
                          <span className="text-xs font-medium tabular-nums text-violet-400">
                            {item.startYear}
                            <span className="mx-1 text-muted-foreground">→</span>
                            {item.endYear}
                          </span>
                        </div>
                        <h3 className="mt-2 text-lg font-semibold leading-snug sm:text-xl">
                          {item.title}
                        </h3>
                        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1 font-medium text-foreground/80">
                            <Building2 className="h-3.5 w-3.5" />
                            {item.company}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* right: period pill */}
                    <div className="shrink-0 self-start rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground sm:text-right">
                      {item.period}
                    </div>
                  </div>

                  {/* impact — single line */}
                  <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                    {item.impact}
                  </p>

                  {/* tags + metrics row */}
                  <div className="mt-5 flex flex-col gap-4 border-t border-white/5 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-medium text-foreground/80 transition-colors group-hover:border-violet-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 sm:justify-end">
                      {item.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl bg-violet-500/5 px-3 py-2 text-center sm:min-w-[110px]"
                        >
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                            {m.label}
                          </p>
                          <p className="mt-0.5 text-xs font-semibold text-violet-300">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
