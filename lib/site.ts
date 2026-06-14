/** Runtime site config — reads Vercel env vars in production */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000")
  );
}

export function getGitHubUsername(): string {
  return process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "Codesaur1618";
}
