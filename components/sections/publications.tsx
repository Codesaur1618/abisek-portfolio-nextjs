import Link from "next/link";
import { publications } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";

export function PublicationsSection() {
  return (
    <section id="publications" className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            Publications
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Peer-Reviewed Research
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {publications.map((pub, index) => (
            <article
              key={pub.title}
              className="reveal-up glass group flex flex-col gap-4 rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-violet-500/30 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">
                  <FileText className="h-6 w-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold leading-snug group-hover:text-violet-300">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pub.venue} · {pub.date}
                  </p>
                </div>
              </div>
              <Link
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-2 text-sm text-violet-400 transition-colors hover:text-violet-300"
                data-cursor
              >
                View Paper
                <ExternalLink className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
