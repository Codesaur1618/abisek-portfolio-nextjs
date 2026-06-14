import { certifications } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Certifications
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Credentials & Training
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="reveal-up glass flex items-start gap-4 rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:border-violet-500/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
                <Award className="h-5 w-5 text-violet-400" />
              </div>
              <div>
                <h3 className="font-medium leading-snug">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
