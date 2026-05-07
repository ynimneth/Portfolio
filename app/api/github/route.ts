import { NextResponse } from "next/server";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
};

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/users/ynimneth/repos?sort=updated&per_page=6",
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
              }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return NextResponse.json({ repos: [] }, { status: response.status });
    }

    const repos = (await response.json()) as GitHubRepo[];

    return NextResponse.json({
      repos: repos.slice(0, 3).map((repo) => ({
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
      })),
    });
  } catch {
    return NextResponse.json({ repos: [] }, { status: 500 });
  }
}
