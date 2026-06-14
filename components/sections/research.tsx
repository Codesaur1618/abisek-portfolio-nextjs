import { research } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FlaskConical, Lightbulb, Telescope } from "lucide-react";

export function ResearchSection() {
  const sections = [
    {
      icon: BookOpen,
      title: "Abstract",
      content: research.abstract,
      type: "text" as const,
    },
    {
      icon: FlaskConical,
      title: "Methodology",
      content: research.methodology,
      type: "list" as const,
    },
    {
      icon: Lightbulb,
      title: "Findings",
      content: research.findings,
      type: "list" as const,
    },
    {
      icon: Telescope,
      title: "Future Scope",
      content: research.futureScope,
      type: "list" as const,
    },
  ];

  return (
    <section id="research" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Research
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            {research.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {research.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <Card
              key={section.title}
              className={`reveal-up ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                    <section.icon className="h-5 w-5 text-violet-400" />
                  </div>
                  <CardTitle className="font-serif text-xl">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {section.type === "text" ? (
                  <p className="leading-relaxed text-muted-foreground">
                    {section.content as string}
                  </p>
                ) : (
                  <ol className="space-y-3">
                    {(section.content as string[]).map((item, i) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="font-serif text-violet-400">{i + 1}.</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
