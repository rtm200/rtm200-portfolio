"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock, BookOpen, Tag } from "lucide-react";
import { articles, Article } from "@/data/portfolio";
import { TR, US } from "country-flag-icons/react/1x1";

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.a
      href={article.mediumUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-2xl border overflow-hidden cursor-pointer transition-shadow hover:shadow-lg no-underline"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border)",
        textDecoration: "none",
      }}
    >

      <div
        className="h-1 w-full flex-shrink-0"
        style={{ background: article.color }}
      />

      <div className="flex flex-col gap-3 p-4 flex-1">
  
        <div className="flex flex-wrap gap-1.5">
          {article.language === "tr" ? (
            <TR className="rounded-full w-4 h-4" />
          ) : article.language === "eng" ? (
            <US className="rounded-full w-4 h-4" />
          ) : null}
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full"
              style={{
                background: `${article.color}18`,
                color: article.color,
              }}
            >
              <Tag size={9} />
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="text-sm font-semibold leading-snug line-clamp-2 group-hover:underline flex gap-2 items-start"
          style={{ color: "var(--text-primary)" }}
        >
          {article.title}
        </h3>

        <p
          className="text-xs leading-relaxed line-clamp-3 flex-1"
          style={{ color: "var(--text-secondary)" }}
        >
          {article.description}
        </p>

        <div
          className="flex items-center justify-between pt-2 mt-auto border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="text-[10px]"
              style={{ color: "var(--text-muted)" }}
            >
              {article.date}
            </span>
            <span
              className="flex items-center gap-1 text-[10px]"
              style={{ color: "var(--text-muted)" }}
            >
              <Clock size={10} />
              {article.readTime}
            </span>
          </div>
          <span
            className="flex items-center gap-1 text-[10px] font-medium transition-colors group-hover:opacity-100 opacity-60"
            style={{ color: article.color }}
          >
            Read on Medium
            <ExternalLink size={10} />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export function ArticlesSection() {
  if (articles.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center py-16 gap-3 rounded-2xl border"
        style={{
          background: "var(--bg-secondary)",
          borderColor: "var(--border)",
        }}
      >
        <BookOpen size={32} style={{ color: "var(--text-muted)" }} />
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          No articles yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {articles.map((article, i) => (
        <ArticleCard key={article.id} article={article} index={i} />
      ))}
    </div>
  );
}
