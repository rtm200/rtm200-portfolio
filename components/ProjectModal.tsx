"use client";

import { motion } from "framer-motion";
import { X, Github, ExternalLink, Heart, Eye } from "lucide-react";
import { Project } from "@/data/portfolio";
import { useEffect } from "react";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 modal-backdrop"
      style={{ background: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.97 }}
        transition={{ type: "spring", damping: 28, stiffness: 360 }}
        className="w-full sm:max-w-lg max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl"
        style={{ background: "var(--bg-secondary)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div
            className="w-10 h-1 rounded-full"
            style={{ background: "var(--border-strong)" }}
          />
        </div>

        <div
          className="h-2 mx-4 mt-2 rounded-full"
          style={{ background: project.color }}
        />

        <div className="flex items-start justify-between p-5 pb-3">
          <div>
            <h2
              className="text-xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {project.title}
            </h2>
            <div
              className="flex items-center gap-4 mt-1 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="flex items-center gap-1">
                <Heart size={13} /> {project.likes}
              </span>
              <span className="flex items-center gap-1">
                <Eye size={13} /> {project.views}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70"
            style={{
              background: "var(--bg-elevated)",
              color: "var(--text-secondary)",
            }}
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-5 pb-6 space-y-4">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.fullDescription}
          </p>

          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--text-muted)" }}
            >
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: `${project.color}18`,
                    color: project.color,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium hover:opacity-80 transition-all"
              style={{
                background: "var(--bg-elevated)",
                color: "var(--text-primary)",
                border: "1px solid var(--border)",
              }}
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-white hover:opacity-80 transition-all"
              style={{ background: project.color }}
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
