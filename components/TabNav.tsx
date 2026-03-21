"use client";

import { motion } from "framer-motion";
import { Grid3X3, Award, Zap, Star, Briefcase, BookOpen } from "lucide-react";

type Tab = "projects" | "skills" | "certificates" | "pinned" | "experience" | "articles";

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "pinned", label: "Pinned", icon: <Star size={15} /> },
  { id: "projects", label: "Projects", icon: <Grid3X3 size={15} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={15} /> },
  { id: "articles", label: "Articles", icon: <BookOpen size={15} /> },
  { id: "skills", label: "Skills", icon: <Zap size={15} /> },
  { id: "certificates", label: "Certificates", icon: <Award size={15} /> },
];

export function TabNav({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  return (
    <div
      className="sticky top-14 z-40 border-b mb-4"
      style={{
        background: "var(--bg)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="relative flex items-center gap-1.5 px-4 py-4 text-xs font-medium uppercase tracking-widest transition-colors"
              style={{
                color: active === tab.id ? "var(--text-primary)" : "var(--text-muted)",
              }}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
              {active === tab.id && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: "var(--text-primary)" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
