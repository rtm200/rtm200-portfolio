"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const CATEGORY_COLORS: Record<string, { text: string; bg: string; dot: string }> = {
  Frontend: { text: "#3b82f6", bg: "rgba(59,130,246,0.08)", dot: "#3b82f6" },
  Backend:  { text: "#10b981", bg: "rgba(16,185,129,0.08)", dot: "#10b981" },
  Database: { text: "#f59e0b", bg: "rgba(245,158,11,0.08)",  dot: "#f59e0b" },
  DevOps:   { text: "#8b5cf6", bg: "rgba(139,92,246,0.08)", dot: "#8b5cf6" },
  Language: { text: "#ec4899", bg: "rgba(236,72,153,0.08)", dot: "#ec4899" },
  Design:        { text: "#ef4444", bg: "rgba(239,68,68,0.08)",   dot: "#ef4444" },
  "System Design": { text: "#06b6d4", bg: "rgba(6,182,212,0.08)", dot: "#06b6d4" },
  Security: { text: "#F52727", bg: "rgba(245,39,39,0.08)", dot: "#F52727" },
};

export function SkillsSection() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="space-y-7">
      {categories.map((cat, catIndex) => {
        const catSkills = skills.filter((s) => s.category === cat);
        const palette = CATEGORY_COLORS[cat] ?? {
          text: "#6b7280",
          bg: "rgba(107,114,128,0.08)",
          dot: "#6b7280",
        };

        return (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: catIndex * 0.07 }}
          >
            <h3
              className="text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-2"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: palette.dot }}
              />
              {cat}
            </h3>

            <div className="flex flex-wrap gap-2">
              {catSkills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: catIndex * 0.07 + i * 0.04 }}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    color: palette.text,
                    background: palette.bg,
                    border: `1px solid ${palette.text}22`,
                  }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}