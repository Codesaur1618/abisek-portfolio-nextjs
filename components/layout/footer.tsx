import Link from "next/link";
import { Mail, Newspaper } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              AI Engineer · Machine Learning Researcher · Data Scientist
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
              aria-label="GitHub"
              data-cursor
            >
              <GitHubIcon />
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
              aria-label="LinkedIn"
              data-cursor
            >
              <LinkedInIcon />
            </Link>
            <Link
              href={siteConfig.linkedinNewsletter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-[#0a66c2]/20 hover:text-[#70b7ff]"
              aria-label="Subscribe to LinkedIn newsletter"
              data-cursor
            >
              <Newspaper className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
              aria-label="Email"
              data-cursor
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js,
            Three.js & GSAP.
          </p>
        </div>
      </div>
    </footer>
  );
}
