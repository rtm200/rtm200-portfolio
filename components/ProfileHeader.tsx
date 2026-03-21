"use client";

import { motion } from "framer-motion";
import { MapPin, Linkedin, Github, DockIcon, FileText } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

export function ProfileHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-8 md:py-10 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-shrink-0 flex justify-center md:justify-start"
          >
            <div className="relative">
              <div
                className="w-24 h-24 md:w-36 md:h-36 rounded-full p-[3px]"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden border-2"
                  style={{ borderColor: "var(--bg)" }}
                >
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    style={{ background: "#b6e3f4"}}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div>
                <h1
                  className="text-xl md:text-2xl font-semibold tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {profile.name}
                </h1>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {profile.username}
                </p>
              </div>

              <div className="flex items-center gap-2 sm:ml-auto">
                <SocialButton href={profile.links.cv} icon={<FileText size={14} />} label="CV" />
                <SocialButton href={profile.links.linkedin} icon={<Linkedin size={14} />} label="LinkedIn" />
                <SocialButton href={profile.links.github} icon={<Github size={14} />} label="GitHub" />
              </div>
            </div>

            <div className="flex items-center gap-6 md:gap-8 flex-wrap">
              <Stat value={stats.projects} label="projects" />
              <div className="h-4 w-px bg-current opacity-10" />
              <Stat value={stats.skills} label="skills" />
              <div className="h-4 w-px bg-current opacity-10" />
              <Stat value={stats.certificates} label="certs" />
              <div className="h-4 w-px bg-current opacity-10" />
              <Stat value={stats.articles} label="articles" />
            </div>

            <div>
              <p
                className="text-sm leading-relaxed max-w-sm"
                style={{ color: "var(--text-primary)" }}
              >
                {profile.bio}
              </p>
              {profile.location && (
                <div
                  className="flex items-center gap-1 mt-2 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <MapPin size={13} />
                  <span>{profile.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <p className="text-lg font-semibold leading-tight" style={{ color: "var(--text-primary)" }}>
        {value}
      </p>
      <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
        {label}
      </p>
    </div>
  );
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium hover:opacity-80 transition-all"
      style={{
        background: "var(--bg-elevated)",
        color: "var(--text-primary)",
        border: "1px solid var(--border)",
      }}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
