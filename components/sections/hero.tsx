"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Newspaper } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { TypingEffect } from "@/components/effects/typing-effect";

const NeuralNetworkBackground = dynamic(
  () =>
    import("@/components/three/neural-network").then(
      (m) => m.NeuralNetworkBackground
    ),
  { ssr: false, loading: () => <div className="absolute inset-0 -z-10 bg-gradient-radial" /> }
);

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <NeuralNetworkBackground />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full ring-2 ring-violet-500/40 ring-offset-2 ring-offset-background shadow-xl shadow-violet-500/20 sm:h-28 sm:w-28"
        >
          <Image
            src={siteConfig.profileImage}
            alt={siteConfig.name}
            width={112}
            height={112}
            className="h-full w-full object-cover object-top"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent dark:from-white dark:via-violet-100 dark:to-violet-300">
            {siteConfig.displayName}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex justify-center"
        >
          <TypingEffect />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" data-cursor>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" data-cursor>
            <a href={siteConfig.resumeUrl} download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild variant="glass" size="lg" data-cursor>
            <Link href="#contact">
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </motion.div>

        <motion.a
          href={siteConfig.linkedinNewsletter}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15 }}
          className="group mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-[#0a66c2]/30 bg-[#0a66c2]/10 px-6 py-4 backdrop-blur-sm transition-all hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/15 hover:shadow-lg hover:shadow-[#0a66c2]/10 sm:flex-row sm:text-left"
          data-cursor
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0a66c2]/20">
            <Newspaper className="h-5 w-5 text-[#70b7ff]" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm font-semibold text-foreground">
              {siteConfig.newsletter.title}
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
              {siteConfig.newsletter.description}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-[#0a66c2] px-4 py-2 text-xs font-semibold text-white transition-transform group-hover:scale-105">
            Subscribe on LinkedIn
          </span>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll to about"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
