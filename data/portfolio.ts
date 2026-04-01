export const profile = {
  name: "Rouzbeh Attar Madraki",
  username: "Software Engineer",
  avatar: "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Adrian",
  bio: "Mid-Level Full-Stack Web Developer | Next.js, React, Laravel, PHP, MySQL | Responsive Frontends & REST APIs.",
  location: "Istanbul, Turkey",
  links: {
    linkedin: "https://www.linkedin.com/in/rouzbeh-attar-madraki/",
    github: "https://github.com/rtm200",
    cv: "/cv.pdf",
  },
};

export const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
 
  { name: "Laravel", category: "Backend" },
  { name: "Django", category: "Backend" },
 
  { name: "Docker", category: "DevOps" },
 
  { name: "Redis", category: "Database" },
  { name: "SQL", category: "Database" },
  { name: "MySQL", category: "Database" },
 
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "PHP", category: "Language" },
  { name: "HTML & CSS", category: "Language" },
 
  { name: "API Development", category: "System Design" },
  { name: "Database Design", category: "System Design" },

  { name: "Web Security", category: "Security" },
  { name: "Penetration Testing", category: "Security" },
  { name: "OWASP Top 10", category: "Security" },
  { name: "XSS", category: "Security" },
  { name: "SQL Injection", category: "Security" },
  { name: "CSRF", category: "Security" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  thumbnail: string;
  tags: string[];
  github: string;
  demo: string;
  pinned: boolean;
  likes: number;
  views: number;
  color: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "LinkedIn UI",
    description: "The clone of LinkedIn's Homepage theme built with Nextjs and Tailwind CSS.",
    fullDescription:
      "This project is a clone of LinkedIn's homepage theme, built using Next.js and Tailwind CSS. It has a responsive design that is closely similar to the original LinkedIn Theme. The project represents the ability to recreate complex interfaces using modern web technologies.",
    thumbnail: "projects/linkedin.png",
    tags: ["Nextjs", "TypeScript", "Tailwind", "Clone"],
    github: "https://github.com/rtm200/linkedin",
    demo: "https://linkedin-eta-six.vercel.app/",
    pinned: true,
    likes: 342,
    views: 5800,
    color: "#C7C7C7",
  },
  {
    id: "2",
    title: "MoviFy",
    description: "Movie discovery app with TMDB Api.",
    fullDescription:
      "You can browse and search movies, the details are getting fetched from realtime TMDB api.",
    thumbnail: "projects/Movify.png",
    tags: ["HTML/CSS", "JavaScript", "Api"],
    github: "https://github.com/rtm200/movify",
    demo: "https://rtm200.github.io/movify/",
    pinned: true,
    likes: 218,
    views: 4200,
    color: "#C73232",
  },
  {
    id: "3",
    title: "Pokemon Restful API",
    description: "its a small Restful Api system with php and mysql",
    fullDescription:
      "This is a backend project designed for storing pokemon data in our database and providing them for users.",
    thumbnail: "",
    tags: ["PHP", "Mysql", "Javascript", "Restful Api"],
    github: "https://github.com/rtm200/api_design",
    demo: "#",
    pinned: true,
    likes: 189,
    views: 3100,
    color: "#10b981",
  },
  {
    id: "4",
    title: "Valorant Clone",
    description: "A Clone of Valorant's homepage theme.",
    fullDescription:
      "This project is a clone of Valorant's homepage theme, built using HTML/CSS and Javascript. It has a responsive design that is closely similar to the original Valorant Theme.",
    thumbnail: "projects/valorant.png",
    tags: ["HTML/CSS", "Javascript", "Clone"],
    github: "https://github.com/rtm200/valorant-website-clone",
    demo: "https://rtm200.github.io/valorant-website-clone/",
    pinned: false,
    likes: 156,
    views: 2700,
    color: "#f59e0b",
  },
  {
    id: "5",
    title: "Uber Clone",
    description: "A Clone of Uber's homepage theme.",
    fullDescription:
      "This project is a clone of Uber's homepage theme, built using HTML/CSS and Javascript. It has a responsive design that is closely similar to the original Uber Theme.",
    thumbnail: "projects/uber.png",
    tags: ["HTML/CSS", "Javascript", "Clone"],
    github: "https://github.com/rtm200/uber-clone",
    demo: "https://rtm200.github.io/uber-clone/",
    pinned: false,
    likes: 134,
    views: 2200,
    color: "#C7C7C7",
  },
  {
    id: "6",
    title: "Spotify Clone",
    description: "A Clone of Spotify's homepage theme.",
    fullDescription:
      "This project is a clone of Spotify's homepage theme, built using HTML/CSS and Javascript. It has a responsive design that is closely similar to the original Spotify Theme.",
    thumbnail: "projects/spotify.png",
    tags: ["HTML/CSS", "Javascript", "Clone"],
    github: "https://github.com/rtm200/spotify-clone",
    demo: "https://rtm200.github.io/spotify-clone/",
    pinned: false,
    likes: 201,
    views: 3900,
    color: "#10b981",
  },
];

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  color: string;
  logo: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "May 2023",
    credentialUrl: "https://www.freecodecamp.org/certification/rtm200/responsive-web-design",
    color: "#FF9900",
    logo: "FCC",
  },
  {
    id: "2",
    title: "Python",
    issuer: "kaggle",
    date: "May 2023",
    credentialUrl: "https://www.kaggle.com/learn/certification/rouzbehattar/python",
    color: "#0866FF",
    logo: "kaggle",
  },
  {
    id: "3",
    title: "Javascript Algorithms And Data Structures v8",
    issuer: "FreeCodeCamp",
    date: "Jan 2025",
    credentialUrl: "https://www.freecodecamp.org/certification/rtm200/javascript-algorithms-and-data-structures-v8",
    color: "#4285F4",
    logo: "FCC",
  },
  {
    id: "4",
    title: "Intro to Sql",
    issuer: "kaggle",
    date: "Jan 2025",
    credentialUrl: "https://www.kaggle.com/learn/certification/rouzbehattar2/intro-to-sql",
    color: "#FB08FF",
    logo: "kaggle",
  },
  {
    id: "5",
    title: "Advanced Sql",
    issuer: "kaggle",
    date: "Jan 2025",
    credentialUrl: "https://www.kaggle.com/learn/certification/rouzbehattar2/advanced-sql",
    color: "#326CE5",
    logo: "kaggle",
  },
  {
    id: "6",
    title: "Web Apps with Firebase",
    issuer: "Google Developer Program",
    date: "Jan 2025",
    credentialUrl: "https://developers.google.com/profile/badges/playlists/firebase/web-apps-with-firebase",
    color: "#FF6F00",
    logo: "GDP",
  },
];
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  color: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Frontend Development Journey",
    company: "Education",
    location: "",
    period: "2020 - 2021",
    description: [
      "Began my journey in web development.",
      "Started learning HTML and CSS, building small projects such as personal websites and landing pages."
    ],
    skills: ["HTML", "CSS"],
    color: "#10b981",
  },
  {
    id: "2",
    role: "Junior Developer",
    company: "Education",
    location: "",
    period: "2021 - 2022",
    description: [
      "Dove deeper into web technologies.",
      "Learned JavaScript, PHP, while developing small websites and applications.",
      "Created dynamic functions, including form validation, responsive menu and contents and simple CRUD systems."
    ],
    skills: ["JavaScript", "PHP", "React", "CRUD"],
    color: "#3b82f6",
  },
  {
    id: "3",
    role: "High School Intern",
    company: "Internship",
    location: "Turkey",
    period: "Sep 2021 - Jun 2022",
    description: [
      "Completed a 9-month internship during high school focused on WordPress websites.",
      "Customized WordPress websites using themes and plugins.",
      "Learned content management, e-commerce management and website deployment."
    ],
    skills: ["WordPress", "HTML", "CSS", "Web Design"],
    color: "#14b8a6",
  },
  {
    id: "4",
    role: "Freelance Web Developer",
    company: "Freelance",
    location: "Istanbul, Turkey · Hybrid",
    period: "2022 - PRESENT",
    description: [
      "Built real-world and cloned websites.",
      "Developed freelance projects and cloned popular websites to gain real-world experience in UI/UX mostly for frontend skills."
    ],
    skills: ["PHP", "MySQL", "Web Development", "UI/UX", "Responsive Design"],
    color: "#f59e0b",
  },
  {
    id: "5",
    role: "Web Security Journey",
    company: "Eucation",
    location: "Remote",
    period: "2022 - 2023",
    description: [
      "Explored web security and ethical hacking.",
      "Gained knowledge in web security and penetration testing through PortSwigger Academy and CTF games such as Picoctf and HacktheBox.",
      "Learned OWASP Top 10 vulnerabilities, including XSS, SQL Injection, and CSRF.",
      "Tested my skills in real-world scenarios."
    ],
    skills: ["Web Security", "Penetration Testing", "OWASP Top 10", "XSS", "SQL Injection", "CSRF"],
    color: "#0ea5e9",
  },
  {
    id: "6",
    role: "Backend Developer / Database Designer",
    company: "Poofo",
    location: "Canada · Remote",
    period: "2023 - 2024",
    description: [
      "Designed and implemented database schemas for efficient data management using MySQL and pure PHP.",
      "Developed backend logic and server-side functions to support web applications.",
      "Maintained clean, modular, and maintainable code following MVC and OOP principles."
    ],
    skills: ["PHP", "MySQL", "Backend Development", "OOP", "MVC", "Database Design"],
    color: "#ef4444",
  },
  {
    id: "7",
    role: "Backend Intern (API & Integration Developer)",
    company: "Internship",
    location: "Remote",
    period: "Jun 2024 - Aug 2024",
    description: [
      "Completed a 3-month summer internship focused on backend development.",
      "Worked on third-party integrations including Instagram and Facebook APIs.",
    ],
    skills: ["PHP", "API Integration", "Instagram API", "Facebook API"],
    color: "#6366f1",
  },
  {
    id: "8",
    role: "Full-Stack Web & Mobile Developer",
    company: "Webookcare",
    location: "Vancouver, British Columbia, Canada · Remote",
    period: "Sep 2025 - Present",
    description: [
      "Developed RESTful APIs using Laravel to support web and mobile applications.",
      "Designed MySQL database schemas, indexes, and user workflows for optimal performance and usability.",
      "Built React Native mobile app interfaces, integrating with backend APIs for seamless user experience.",
      "Implemented full-stack solutions covering backend, frontend, and database, following OOP principles and best practices.",
      "Collaborated with team members to improve feature workflows and optimize database queries."
    ],
    skills: ["Laravel", "React Native", "Next.js", "MySQL", "RESTful API", "Full-Stack Development", "Google Cloud"],
    color: "#8b5cf6",
  },
  {
    id: "9",
    role: "Web Development Intern",
    company: "Ceviz Bilişim Anonim Şirketi",
    location: "Istanbul, Türkiye · Remote",
    period: "Feb 2026 - Present",
    description: [
      "Gained hands-on experience in web development projects during internship.",
    ],
    skills: ["Internship Experience"],
    color: "#22c55e",
  }
];

export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  mediumUrl: string;
  color: string;
  language: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Modern Authentication Tasarımı | Multi-Method Login",
    description: "Modern bir kullanıcı giriş sistemi.",
    date: "Mar 2026",
    readTime: "3 min read",
    tags: ["Software Architecture", "System Design", "Database Design"],
    mediumUrl: "https://medium.com/@rouzbehattar/modern-authentication-tasar%C4%B1m%C4%B1-multi-method-login-32ee81b9da5c",
    color: "#3b82f6",
    language: "tr",
  },
  {
    id: "2",
    title: "How I Built an End-to-End Encrypted Live Chat System in PHP",
    description: "I developed a secure, mini chat system, designed to ensure complete privacy for users. The system implements end-to-end encryption (E2EE), meaning that all messages are encrypted on the sender’s device and can only be decrypted by the intended receiver.",
    date: "Apr 2026",
    readTime: "3 min read",
    tags: ["System Design", "Database Security", "Security"],
    mediumUrl: "https://medium.com/@rouzbehattar/how-i-built-an-end-to-end-encrypted-live-chat-system-in-php-3df6c86d899e",
    color: "#3b82f6",
    language: "eng",
  },
];





export const stats = {
  projects: projects.length,
  skills: skills.length,
  certificates: certificates.length,
  articles: articles.length,
};
