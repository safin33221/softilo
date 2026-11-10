export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  role: string;
  image: string;
  bio: string;
  knowsAbout?: string[];
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
    slug: "safayet-hossan-safin",
    role: "Founder & CEO",
    image: "/images/team/safin.jpg",
    bio: "Founder & CEO of Softilo (softilo.io). Full Stack Software Engineer leading enterprise software architectures, Educational & Travel ERP platforms, AI automations, and digital brand scaling.",
    knowsAbout: [
      "Custom Software Architecture",
      "Next.js & Full Stack Engineering",
      "SaaS & ERP Systems",
      "AI Workflow Automation",
    ],
    portfolio: "https://safayet-hossan.vercel.app",
    socialUrl: {
      linkedin: "https://linkedin.com/in/safayethossansafin",
      github: "https://github.com/safin332211",
    },
  },
  {
    id: "2",
    name: "Jahedul Alam",
    slug: "jahedul-alam",
    role: "Chief Operating Officer (COO)",
    image: "/images/team/jahedul-alam.png",
    bio: "Chief Operating Officer at Softilo (softilo.io). Driving operational excellence, product strategy, and user-centered UI/UX design experiences for modern enterprises.",
    knowsAbout: [
      "Operations Management",
      "UI/UX Design Systems",
      "Product Strategy",
      "Digital Transformation",
    ],
    portfolio: "https://jahedul-alam.vercel.app/",
    socialUrl: {
      linkedin: "https://www.linkedin.com/in/md-jahedul-alam-192227437",
    },
  },
  {
    id: "3",
    name: "Belal Hossain",
    slug: "belal-hossain",
    role: "Chief Creative Officer (CCO)",
    image: "/images/team/Belal-Hossain.png",
    bio: "Chief Creative Officer at Softilo (softilo.io). Leading Softilo's creative vision, visual identity, brand development, and high-impact graphic design systems.",
    knowsAbout: [
      "Brand Identity Design",
      "Creative Direction",
      "Visual Communication",
      "Graphic Design Systems",
    ],
    socialUrl: {},
  },
  {
    id: "4",
    name: "Muntasir Mahmud",
    slug: "muntasir-mahmud",
    role: "Full Stack Developer",
    image: "/images/team/muntasir-mahmud.png",
    bio: "Full Stack Developer at Softilo (softilo.io). Engineering scalable, high-performance web applications, custom ERP portals, and seamless digital experiences.",
    knowsAbout: [
      "Full Stack Web Development",
      "React & Next.js",
      "Backend API Architecture",
      "Database Engineering",
    ],
    socialUrl: {
      github: "https://github.com/muntasirtanjil",
      linkedin: "https://www.linkedin.com/in/muntasir-mahmud-tanjil/",
    },
  },
  {
    id: "5",
    name: "Shawon Devnath",
    slug: "shawon-devnath",
    role: "Social Media Manager",
    image: "/images/team/Shawon-Devnath.png",
    bio: "Social Media Manager at Softilo (softilo.io). Leading social media growth strategy, content planning, audience engagement, and performance campaign tracking.",
    knowsAbout: [
      "Social Media Marketing",
      "Content Strategy",
      "Brand Engagement",
      "Performance Analytics",
    ],
    socialUrl: {},
  },
  {
    id: "6",
    name: "Siam Patwary Noman",
    slug: "siam-patwary-noman",
    role: "Creative Media Producer",
    image: "/images/team/siam-patwary-noman.png",
    bio: "Creative Media Producer at Softilo (softilo.io). Producing commercial video documentaries, promotional ad films, motion graphics, and visual storytelling.",
    knowsAbout: [
      "Commercial Video Editing",
      "Motion Graphics",
      "Documentary Production",
      "Visual Storytelling",
    ],
    socialUrl: {},
  },
];
