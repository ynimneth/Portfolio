"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Star } from "lucide-react";
import { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  updatedAt: string;
};

export default function GitHubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    let active = true;

    async function loadRepos() {
      try {
        const response = await fetch("/api/github");
        const data = (await response.json()) as { repos?: Repo[] };

        if (active && data.repos) {
          setRepos(data.repos);
        }
      } catch {}
    }

    void loadRepos();

    return () => {
      active = false;
    };
  }, []);

  if (!repos.length) {
    return null;
  }

  return (
    <div className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-3 text-cyan-100">
          <GitBranch size={18} />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            GitHub Activity
          </p>
          <h3 className="mt-1 text-xl font-semibold text-white">
            Recently updated repositories
          </h3>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {repos.map((repo, index) => (
          <motion.a
            key={repo.id}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-cyan-300/25 hover:bg-cyan-400/10"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-lg font-semibold text-white">{repo.name}</h4>
              <ArrowUpRight size={16} className="text-slate-400" />
            </div>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">
              {repo.description || "Repository available on GitHub."}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
              <span>{repo.language || "Code"}</span>
              <span className="inline-flex items-center gap-1">
                <Star size={12} />
                {repo.stars}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
