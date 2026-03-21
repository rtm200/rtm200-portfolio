"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certificates, Certificate } from "@/data/portfolio";
import { useState } from "react";

function CertModal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop"
      style={{ background: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 360 }}
        className="w-full max-w-sm rounded-2xl overflow-hidden"
        style={{ background: "var(--bg-secondary)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="h-40 flex flex-col items-center justify-center gap-3 relative overflow-hidden"
          style={{ background: `${cert.color}18` }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, ${cert.color} 0px, ${cert.color} 1px, transparent 1px, transparent 20px)`,
            }}
          />
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg relative z-10"
            style={{ background: cert.color }}
          >
            {cert.logo}
          </div>
          <div className="relative z-10 text-center">
            <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
              {cert.title}
            </p>
          </div>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Issued by
            </p>
            <p className="font-semibold mt-0.5" style={{ color: "var(--text-primary)" }}>
              {cert.issuer}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Date
            </p>
            <p className="font-medium mt-0.5" style={{ color: "var(--text-secondary)" }}>
              {cert.date}
            </p>
          </div>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-medium text-white hover:opacity-80 transition-all"
            style={{ background: cert.color }}
          >
            <ExternalLink size={14} /> View Credential
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CertificatesSection() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 }}
            whileHover={{ y: -3 }}
            className="cursor-pointer rounded-2xl border overflow-hidden transition-shadow hover:shadow-lg"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
            onClick={() => setSelected(cert)}
          >
            <div
              className="h-20 flex items-center justify-center relative overflow-hidden"
              style={{ background: `${cert.color}12` }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 70% 30%, ${cert.color}, transparent 60%)`,
                }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold relative z-10"
                style={{ background: cert.color }}
              >
                {cert.logo}
              </div>
            </div>

            <div className="p-3">
              <p
                className="text-xs font-semibold line-clamp-2 leading-snug"
                style={{ color: "var(--text-primary)" }}
              >
                {cert.title}
              </p>
              <p
                className="text-[10px] mt-1 truncate"
                style={{ color: "var(--text-muted)" }}
              >
                {cert.issuer}
              </p>
              <p
                className="text-[10px] mt-0.5 font-medium"
                style={{ color: cert.color }}
              >
                {cert.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <CertModal cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
