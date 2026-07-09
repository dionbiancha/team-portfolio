// src/data/team.ts
export type TeamMember = {
  area: string;
  lead: string;
  photo: string; // path to image in public/
  linkedinUrl: string;
  portfolioUrl?: string;
  tagline: string;
  tags: string[];
};

export const team: TeamMember[] = [
  {
    area: "DevOps | Cloud Infrastructure",
    lead: "Laercio Bubiak",
    photo: "/team/laercio.png",
    linkedinUrl: "https://www.linkedin.com/in/laercio-bubiak/",
    portfolioUrl: "https://www.laercio.me/",
    tagline: "Automatiza deploys pra ninguém dormir com medo de subir errado.",
    tags: ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD", "Serverless"," Cloud Security"," Cloud Architecture", "Cloud Cost Optimization"],
  },
  {
    area: "Frontend",
    lead: "Dionei Bianchati",
    photo: "/team/dionei.png",
    linkedinUrl: "https://www.linkedin.com/in/dionbiancha",
    portfolioUrl: "https://dionei.com/",
    tagline: "Deixa qualquer interface rápida mesmo em conexão fraca.",
    tags: ["React", "Next.js", "React Native"],
  },

  {
    area: "Fullstack Engineer",
    lead: "Vinicios Engelage",
    photo: "/team/vinicios.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/viniengelage/",
    portfolioUrl: "https://www.viniengelage.com/",
    tagline: "Resolvo bugs para não me estressar e me estresso corrigindo bugs.",
    tags: ["Javascript", "Web", "Mobile", "React", "NextJS", "React Native"," Docker"," Expo"],
  },
];
