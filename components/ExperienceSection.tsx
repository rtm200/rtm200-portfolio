"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2, GraduationCap } from "lucide-react";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <div className="relative space-y-8">
      <div 
        className="absolute left-4 md:left-[21px] top-4 bottom-4 w-px opacity-20"
        style={{ background: "linear-gradient(to bottom, transparent, var(--text-primary) 5%, var(--text-primary) 95%, transparent)" }}
      />

      {experiences.map((exp, i) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative pl-12 md:pl-16 group"
        >
          
          <div 
            className="absolute left-0 md:left-[6px] top-1 w-8 h-8 rounded-full border-4 flex items-center justify-center z-10 transition-colors "
            style={{ 
              background: "var(--bg)", 
              borderColor: "var(--bg-secondary)",
              boxShadow: `0 0 0 1px ${exp.color}40`
            }}
          >
            <div 
              className="flex items-center justify-center opacity-70 w-full h-full"
              style={{ color: exp.color }}
            >
              {exp.id}
            </div>
          </div>

          <div 
            className="rounded-3xl border p-6 md:p-8 transition-all hover:shadow-xl hover:shadow-primary/5"
            style={{ 
              background: "var(--bg-secondary)",
              borderColor: "var(--border)"
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1.5">
                  <span
                    className="flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: exp.color }}
                  >
                    {exp.company === "Education" ? <GraduationCap size={14} /> : <Briefcase size={14} />}
                    {exp.company}
                  </span>
                  <span
                    className="flex items-center gap-1.5 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.location !== "" ? <MapPin size={14} /> : null}
                    
                    {exp.location}
                  </span>
                </div>
              </div>
              
              <div 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider self-start md:self-center"
                style={{ 
                  background: `${exp.color}15`, 
                  color: exp.color,
                  border: `1px solid ${exp.color}30`
                }}
              >
                <Calendar size={12} />
                {exp.period}
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.description.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: `${exp.color}80` }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider"
                  style={{ 
                    background: "var(--bg)", 
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)"
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
