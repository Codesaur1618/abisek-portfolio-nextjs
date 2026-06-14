import { bio, siteConfig } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Building Intelligent Systems
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal-left">
            <div className="glass relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="relative">
                <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-5xl font-bold text-white shadow-2xl shadow-violet-500/30">
                  AK
                </div>
                <h3 className="text-2xl font-bold">{siteConfig.name}</h3>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {siteConfig.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-4 w-4" />
                    MSc Data Science, Glasgow
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-right space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {bio}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Graduate AI & Data professional with an MSc in Data Science from the
              University of Glasgow and a B.Tech in Computer Science & Engineering
              (Big Data Analytics) with CGPA 9.68/10. I specialise in building
              AI-powered tools, data pipelines, and dashboards that turn complex
              data into practical insight.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              My work spans healthcare analytics, drug safety research, multimodal
              AI systems, and published peer-reviewed research on IEEE Xplore. I
              thrive at the intersection of research rigour and production-ready
              engineering.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["AI Research", "Data Pipelines", "Computer Vision", "NLP", "Full Stack"].map(
                (tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
