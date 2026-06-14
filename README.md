# Abisek Portfolio

Premium portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Three.js.

## Features

- Interactive 3D neural network hero background (Three.js)
- GSAP scroll animations and page transitions
- Framer Motion micro-interactions
- Dark/light theme toggle
- GitHub API integration with contribution graph
- Interactive skills radar chart and progress bars
- Full SEO setup (Open Graph, Twitter cards, JSON-LD, sitemap, robots)
- Responsive glassmorphism design
- 15 portfolio sections

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** Shadcn-style components
- **Animation:** Framer Motion, GSAP
- **3D:** Three.js, React Three Fiber
- **Charts:** Recharts
- **Icons:** Lucide React
- **Deployment:** Vercel-ready

## Installation

```bash
git clone <your-repo-url>
cd abisek-portfolio-nextjs
npm install
cp .env.example .env.local
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `GITHUB_TOKEN` | Optional GitHub PAT for higher API rate limits |
| `NEXT_PUBLIC_SITE_URL` | Production site URL for SEO |
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub username (default: Codesaur1618) |

## Deployment

### Vercel (Recommended)

1. Push this repo to GitHub (`Codesaur1618/abisek-portfolio-nextjs`)
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Vercel auto-detects Next.js — no build settings changes needed
4. Add environment variables (optional but recommended):

| Variable | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` | Set after first deploy for correct SEO |
| `NEXT_PUBLIC_GITHUB_USERNAME` | `Codesaur1618` | GitHub profile for stats section |
| `GITHUB_TOKEN` | *(optional)* | GitHub PAT for higher API rate limits |

5. Deploy — production URL will be live in ~2 minutes

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Codesaur1618/abisek-portfolio-nextjs)

### Manual build

```bash
npm run build
npm run start
```

## Customization

- **Content:** Edit `lib/data.ts` for all portfolio content
- **Theme:** Modify CSS variables in `app/globals.css`
- **Sections:** Components live in `components/sections/`
- **Resume:** Replace `public/resume.pdf` with your CV

## Project Structure

```
abisek-portfolio-nextjs/
├── app/                  # Next.js App Router
├── components/
│   ├── effects/          # Cursor, particles, transitions
│   ├── layout/           # Navbar, footer
│   ├── providers/        # Theme provider
│   ├── sections/         # Page sections
│   ├── three/            # Three.js components
│   └── ui/               # Shadcn UI components
├── lib/                  # Data, utils, GitHub API
├── public/               # Static assets
└── styles/               # Global styles (app/globals.css)
```

## License

MIT
