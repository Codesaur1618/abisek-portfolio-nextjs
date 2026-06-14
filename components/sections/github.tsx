import Link from "next/link";
import Image from "next/image";
import { fetchGitHubStats } from "@/lib/github";
import { siteConfig } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { formatNumber } from "@/lib/utils";

export async function GitHubSection() {
  const stats = await fetchGitHubStats(siteConfig.githubUsername);

  return (
    <section id="github" className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal-up mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            GitHub
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Open Source Activity
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="reveal-left lg:col-span-1">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full ring-2 ring-violet-500/30">
                <Image
                  src={`https://github.com/${siteConfig.githubUsername}.png`}
                  alt={stats.profile.name ?? siteConfig.githubUsername}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardTitle>{stats.profile.name ?? siteConfig.shortName}</CardTitle>
              <p className="text-sm text-muted-foreground">@{stats.profile.login}</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-violet-400">
                    {stats.profile.public_repos}
                  </p>
                  <p className="text-xs text-muted-foreground">Repos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-violet-400">
                    {formatNumber(stats.totalStars)}
                  </p>
                  <p className="text-xs text-muted-foreground">Stars</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-violet-400">
                    {stats.profile.followers}
                  </p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-sm font-medium">Top Languages</p>
                <div className="flex flex-wrap gap-2">
                  {stats.languages.map((lang) => (
                    <Badge key={lang.name} variant="outline">
                      {lang.name} ({lang.count})
                    </Badge>
                  ))}
                </div>
              </div>

              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full border border-white/10 py-2 text-sm transition-colors hover:bg-white/5"
                data-cursor
              >
                <GitHubIcon className="h-4 w-4" />
                View Profile
              </Link>
            </CardContent>
          </Card>

          <div className="reveal-right space-y-4 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contribution Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={`https://ghchart.rshah.org/${siteConfig.githubUsername}`}
                    alt="GitHub contribution chart"
                    width={800}
                    height={120}
                    className="w-full"
                    unoptimized
                  />
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.repos.map((repo) => (
                <Link
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group rounded-xl border border-white/10 p-4 transition-all hover:border-violet-500/30"
                  data-cursor
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="truncate font-medium group-hover:text-violet-300">
                      {repo.name}
                    </h4>
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </div>
                  {repo.description && (
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {repo.description}
                    </p>
                  )}
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
