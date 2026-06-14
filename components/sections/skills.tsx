"use client";

import { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { skillCategories, radarSkills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

function AnimatedProgress({ value, name }: { value: number; name: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <Progress value={progress} />
    </div>
  );
}

function RadarTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: { subject: string; value: number } }[];
}) {
  if (!active || !payload?.length) return null;
  const { subject, value } = payload[0].payload;
  return (
    <div className="rounded-lg border border-white/10 bg-background/95 px-3 py-2 text-xs shadow-xl backdrop-blur-sm">
      <p className="font-medium">{subject}</p>
      <p className="text-violet-400">{value}% proficiency</p>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Technical Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Weighted from my MSc, B.Tech (9.68 CGPA), IBM & DeepLearning.AI
            certifications, and published AI / data projects.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="reveal-left">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Profile Competency Map</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Strongest in Python analytics, ML/NLP, data pipelines, and
                  peer-reviewed research — not generic full-stack scores.
                </p>
              </CardHeader>
              <CardContent>
                <div className="min-h-[380px] w-full min-w-0">
                  <ResponsiveContainer width="100%" height={380}>
                    <RadarChart data={radarSkills} cx="50%" cy="50%" outerRadius="72%">
                      <PolarGrid stroke="rgba(139,92,246,0.15)" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
                        tickLine={false}
                      />
                      <Tooltip content={<RadarTooltip />} />
                      <Radar
                        name="Proficiency"
                        dataKey="value"
                        stroke="#8b5cf6"
                        fill="#8b5cf6"
                        fillOpacity={0.35}
                        strokeWidth={2}
                        dot={{ fill: "#a78bfa", r: 3 }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {["MSc Data Science", "3× IEEE Papers", "IBM AI Certs", "KatalyzU"].map(
                    (chip) => (
                      <Badge key={chip} variant="outline" className="text-[10px]">
                        {chip}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="reveal-right space-y-6">
            {skillCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <AnimatedProgress
                      key={skill.name}
                      name={skill.name}
                      value={skill.level}
                    />
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
