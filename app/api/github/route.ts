import { NextResponse } from "next/server";
import { fetchGitHubStats } from "@/lib/github";
import { siteConfig } from "@/lib/data";

export async function GET() {
  const stats = await fetchGitHubStats(siteConfig.githubUsername);
  return NextResponse.json(stats, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
    },
  });
}
