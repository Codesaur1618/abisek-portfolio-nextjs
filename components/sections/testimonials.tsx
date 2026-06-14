import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const placeholders = [
  {
    quote:
      "Abisek combines research rigour with practical engineering — a rare blend that accelerates every project he touches.",
    author: "Research Supervisor",
    role: "Academic Mentor",
  },
  {
    quote:
      "His ability to translate complex AI concepts into actionable dashboards made a measurable difference for our stakeholders.",
    author: "Project Lead",
    role: "KatalyzU",
  },
  {
    quote:
      "One of the most proactive engineers I've mentored — consistently delivering publication-quality work ahead of schedule.",
    author: "IEEE Mentor",
    role: "IEEE India Council",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            What People Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Placeholder testimonials — replace with real quotes from supervisors
            and collaborators.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {placeholders.map((t) => (
            <blockquote
              key={t.author}
              className="reveal-up glass relative rounded-2xl border border-white/10 p-6"
            >
              <Quote className="mb-4 h-8 w-8 text-violet-500/30" />
              <p className="leading-relaxed text-muted-foreground italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/5 pt-4">
                <p className="font-medium">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
