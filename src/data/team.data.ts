export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  portfolio?: string;
  socialUrl: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Safayet Hossan Safin",
    role: "Founder & CEO",
    image: "/images/team/safin.jpg",
    bio: "Full Stack Developer & SaaS Builder. Leading software architectures, AI automations, and digital brand scaling at Softilo. Based in Chattogram, Bangladesh.",
    portfolio: "https://safayet-hossan.vercel.app",
    socialUrl: {
      linkedin: "https://linkedin.com/in/safayethossansafin",
      github: "https://github.com/safin332211",
      twitter: "https://x.com",
    },
  },

  {
    id: "2",
    name: "Jahedul Alam",
    role: "Chief Operating Officer",
    image: "/images/team/jahedul-alam.png",
    bio: "Driving operational excellence, creative strategy, and user-centered digital experiences at Softilo, with expertise in UI/UX design and product innovation.",
    portfolio: "https://jahedul-alam.vercel.app/",
    socialUrl: {
      github: "",
      linkedin: "https://www.linkedin.com/in/md-jahedul-alam-192227437",
      twitter: "",
    },
  },

  {
    id: "3",
    name: "Muntasir Mahmud",
    role: "Full Stack Developer",
    image: "/images/team/muntasir-mahmud.png",
    bio: "Building scalable, high-performance web applications and seamless digital experiences through modern frontend and backend development at Softilo.",
    socialUrl: {
      github: "https://github.com/muntasirtanjil",
      linkedin: "https://www.linkedin.com/in/muntasir-mahmud-tanjil/",
      twitter: "",
    },
  },
  {
    id: "4",
    name: "Nusrat Jahan",
    role: "AI Automation Specialist",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Building autonomous workflows, smart chatbot pipelines, and enterprise automation systems.",
    socialUrl: {
      linkedin: "https://linkedin.com",
    },
  },
];
