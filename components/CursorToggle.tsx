"use client";

import { MousePointer2, MousePointerBan } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-cursor-enabled";

export default function CursorToggle() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return localStorage.getItem(STORAGE_KEY) !== "false";
  });

  useEffect(() => {
    document.documentElement.dataset.cursor = enabled ? "on" : "off";
  }, [enabled]);

  function toggleCursor() {
    const nextEnabled = !enabled;
    setEnabled(nextEnabled);
    localStorage.setItem(STORAGE_KEY, String(nextEnabled));
    window.dispatchEvent(
      new CustomEvent("portfolio-cursor-toggle", {
        detail: { enabled: nextEnabled },
      })
    );
  }

  return (
    <button
      type="button"
      onClick={toggleCursor}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-100"
      aria-label={enabled ? "Disable custom cursor" : "Enable custom cursor"}
      title={`Cursor ${enabled ? "on" : "off"}`}
    >
      {enabled ? <MousePointer2 size={16} /> : <MousePointerBan size={16} />}
    </button>
  );
}
