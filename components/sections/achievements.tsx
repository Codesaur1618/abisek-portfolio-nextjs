import { achievements } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Star } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";

const iconMap = {
  award: Award,
  graduation: GraduationCap,
  star: Star,
  github: GitHubIcon,
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Achievements
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Highlights
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Star;
            return (
              <div
                key={item.title}
                className="reveal-up glass group rounded-2xl border border-white/10 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7 text-violet-400" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
