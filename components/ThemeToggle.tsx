"use client";

import { MonitorCog, Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function applyTheme(nextTheme: Theme) {
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const savedTheme = localStorage.getItem("portfolio-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)")
      .matches
      ? "light"
      : "dark";
    return savedTheme === "light" ? "light" : systemTheme;
  });

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-100"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Theme: ${theme}`}
    >
      {typeof window === "undefined" ? (
        <MonitorCog size={16} />
      ) : theme === "dark" ? (
        <SunMedium size={16} />
      ) : (
        <Moon size={16} />
      )}
    </button>
  );
}
