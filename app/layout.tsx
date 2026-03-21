import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rouzbeh Attar Madraki — Portfolio",
  description: "Mid-Level Full-Stack Web Developer | Next.js, React, Laravel, PHP, MySQL | Responsive Frontends & REST APIs.",
  keywords: ["portfolio", "developer", "full-stack", "react", "nextjs", 'laravel', 'php', 'mysql', 'web development'],
  openGraph: {
    title: "Rouzbeh Attar Madraki — Portfolio",
    description: "Mid-Level Full-Stack Web Developer | Next.js, React, Laravel, PHP, MySQL | Responsive Frontends & REST APIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
