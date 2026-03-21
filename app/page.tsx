"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ProfileHeader } from "@/components/ProfileHeader";
import { TabNav } from "@/components/TabNav";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ArticlesSection } from "@/components/ArticlesSection";
import { projects, profile, articles, experiences, certificates } from "@/data/portfolio";
import { Asterisk, BookOpen } from "lucide-react";

type Tab = "projects" | "skills" | "certificates" | "pinned" | "experience" | "articles";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
};

export default function Home() {
  const [tab, setTab] = useState<Tab>("pinned");

  const pinned = projects.filter((p) => p.pinned);
  const allProjects = projects.filter((p) => !p.pinned);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <ProfileHeader />
      <TabNav active={tab} onChange={(t) => setTab(t as Tab)} />

      <main className="max-w-4xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {tab === "pinned" && (
            <motion.div key="pinned" {...fadeUp}>
              <SectionLabel>
                <Asterisk size={15} />
                Featured Projects
                ({pinned.length})
              </SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {pinned.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </motion.div>
          )}

          {tab === "experience" && (
            <motion.div key="experience" {...fadeUp}>
              <SectionLabel>
                <Asterisk size={15} />
                Work Experience
                ({experiences.length})
              </SectionLabel>
              <div className="mt-4">
                <ExperienceSection />
              </div>
            </motion.div>
          )}

          {tab === "projects" && (
            <motion.div key="projects" {...fadeUp}>
              <SectionLabel>
                <Asterisk size={15} />
                All Projects
                ({projects.length})
              </SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {projects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </motion.div>
          )}

          {tab === "skills" && (
            <motion.div key="skills" {...fadeUp}>
              <SectionLabel>
                <Asterisk size={15} />
                Skills
              </SectionLabel>
              <div className="mt-4 rounded-2xl border p-5 md:p-6" style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}>
                <SkillsSection />
              </div>
            </motion.div>
          )}

          {tab === "certificates" && (
            <motion.div key="certs" {...fadeUp}>
              <SectionLabel>
                <Asterisk size={15} />
                Certificates
                ({certificates.length})
              </SectionLabel>
              <div className="mt-4">
                <CertificatesSection />
              </div>
            </motion.div>
          )}

          {tab === "articles" && (
            <motion.div key="articles" {...fadeUp}>
              <SectionLabel>
                <Asterisk size={15} />
                Articles & Writing ({articles.length})
              </SectionLabel>
              <div className="mt-4">
                <ArticlesSection />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <footer
        className="border-t mt-12 py-8 text-center text-xs"
        style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
      >
        
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-sm font-medium flex gap-2 items-center"
      style={{ color: "var(--text-secondary)" }}
    >
      {children}
    </h2>
  );
}
