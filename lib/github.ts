export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
}

export interface GitHubProfile {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

export interface GitHubStats {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  totalStars: number;
  languages: { name: string; count: number }[];
}

const FALLBACK_STATS: GitHubStats = {
  profile: {
    login: "Codesaur1618",
    name: "Abisek Kamthan",
    bio: "AI Engineer & Machine Learning Researcher shaping the digital future with innovative software solutions.",
    public_repos: 54,
    followers: 6,
    following: 6,
    avatar_url: "https://avatars.githubusercontent.com/u/Codesaur1618",
    html_url: "https://github.com/Codesaur1618",
  },
  repos: [
    {
      name: "GNN-LLM-Enhanced-Drug-Interaction-detection-and-adverse-reaction-analysis-with-sentiment",
      description: "GNN-inspired Transformers and LLM models for drug interaction prediction",
      html_url: "https://github.com/Codesaur1618/GNN-LLM-Enhanced-Drug-Interaction-detection-and-adverse-reaction-analysis-with-sentiment",
      stargazers_count: 2,
      language: "Jupyter Notebook",
      fork: false,
    },
    {
      name: "ANPR",
      description: "License Plate Recognition with OpenCV",
      html_url: "https://github.com/Codesaur1618/ANPR",
      stargazers_count: 1,
      language: "Python",
      fork: false,
    },
    {
      name: "drowsiness_detector",
      description: "Computer vision drowsiness detection system",
      html_url: "https://github.com/Codesaur1618/drowsiness_detector",
      stargazers_count: 1,
      language: "Python",
      fork: false,
    },
  ],
  totalStars: 8,
  languages: [
    { name: "Python", count: 28 },
    { name: "Jupyter Notebook", count: 12 },
    { name: "JavaScript", count: 6 },
    { name: "C++", count: 4 },
    { name: "TypeScript", count: 4 },
  ],
};

export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        { headers, next: { revalidate: 3600 } }
      ),
    ]);

    if (!profileRes.ok || !reposRes.ok) return FALLBACK_STATS;

    const profile: GitHubProfile = await profileRes.json();
    const allRepos: GitHubRepo[] = await reposRes.json();
    const repos = allRepos.filter((r) => !r.fork).slice(0, 6);

    const totalStars = allRepos.reduce((acc, r) => acc + r.stargazers_count, 0);

    const langMap = new Map<string, number>();
    for (const repo of allRepos) {
      if (repo.language) {
        langMap.set(repo.language, (langMap.get(repo.language) ?? 0) + 1);
      }
    }
    const languages = Array.from(langMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);

    return { profile, repos, totalStars, languages };
  } catch {
    return FALLBACK_STATS;
  }
}
