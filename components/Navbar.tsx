"use client";

import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Camera } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          
        </div>

        <button
          onClick={toggle}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            background: "var(--bg-elevated)",
            color: "var(--text-secondary)",
          }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </motion.nav>
  );
}
