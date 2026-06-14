import { education } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Education
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Academic Background
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="reveal-up glass flex flex-col gap-4 rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-violet-500/30 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
                  <GraduationCap className="h-6 w-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="mt-1 font-medium text-violet-400">
                    {edu.institution}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {edu.location}
                    </span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground md:max-w-xs md:text-right">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
