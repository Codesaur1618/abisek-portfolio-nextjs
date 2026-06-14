"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Selected projects spanning AI research, computer vision, data analytics,
            and full-stack intelligent systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="reveal-up group glass overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-violet-950/50 to-indigo-950/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <Button asChild variant="outline" size="sm" data-cursor>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <GitHubIcon className="h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button asChild variant="ghost" size="sm" data-cursor>
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
