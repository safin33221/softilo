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
    id: "5",
    name: "Belal Hossain",
    role: "Chief Creative Officer (CCO)",
    image: "/images/team/Belal-Hossain.png",
    bio: "Leading Softilo's creative vision, visual identity, and design strategy. Specializing in graphic design, brand development, creative direction, and delivering impactful visual experiences.",
    socialUrl: {
      linkedin: "",
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

];
