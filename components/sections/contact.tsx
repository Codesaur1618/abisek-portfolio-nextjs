"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { siteConfig } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open to research collaborations, AI engineering roles, and exciting
            opportunities. Reach out anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="reveal-left space-y-6">
            <Card>
              <CardContent className="space-y-6 pt-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 transition-colors hover:text-violet-400"
                  data-cursor
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                    <Mail className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{siteConfig.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                    <MapPin className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{siteConfig.location}</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 transition-all hover:border-violet-500/50 hover:bg-violet-500/10"
                    aria-label="GitHub"
                    data-cursor
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 transition-all hover:border-violet-500/50 hover:bg-violet-500/10"
                    aria-label="LinkedIn"
                    data-cursor
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <motion.div
            className="reveal-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-6">
                {submitted ? (
                  <div className="py-12 text-center">
                    <p className="text-lg font-medium text-violet-400">
                      Thank you for reaching out!
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      I&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-500/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-500/50"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-violet-500/50"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <Button type="submit" className="w-full" data-cursor>
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
