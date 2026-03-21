"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Project } from "@/data/portfolio";
import { ProjectModal } from "./ProjectModal";

function ProjectThumbnail({project, size = "normal",}: {project: Project; size?: "normal" | "large";}) {
  const h = size === "large" ? "h-48 md:h-56" : "h-32 md:h-40";

  return project.thumbnail ? (
    <div className={`w-full ${h} rounded-t-xl overflow-hidden`}>
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
  ) : (
    <div
      className={`w-full ${h} rounded-xl flex items-center justify-center relative overflow-hidden`}
      style={{ background: `${project.color}18` }}
    >
      <div
        className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
        style={{ background: project.color }}
      />
      <div
        className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-10"
        style={{ background: project.color }}
      />
      <div
        className="relative z-10 px-3 py-1.5 rounded-full text-xs font-semibold"
        style={{ background: project.color, color: "#fff" }}
      >
        {project.tags[0]}
      </div>
    </div>
  );
} export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="grid-item group cursor-pointer rounded-2xl overflow-hidden border transition-shadow hover:shadow-xl flex flex-col h-full"
        style={{
          background: "var(--bg-secondary)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-sm)",
        }}
        onClick={() => setOpen(true)}
      >
        <ProjectThumbnail project={project} size="large" />
        <div className="p-4 flex flex-col flex-1">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3
                className="font-semibold text-base"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
              </h3>
              <ExternalLink size={14} style={{ color: "var(--text-muted)" }} />
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
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
          <div
            className="flex items-center gap-4 mt-3 pt-3 border-t text-xs"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            <span className="flex items-center gap-1">
              <Heart size={12} /> {project.likes}
            </span>
            <span className="flex items-center gap-1">
              <Eye size={12} /> {project.views}
            </span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

