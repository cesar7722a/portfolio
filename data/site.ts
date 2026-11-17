/**
 * Conteúdo geral do site. É AQUI que mudas o teu nome, texto e contactos.
 * Ligações vazias ("") não aparecem no site.
 */
export const site = {
  // TODO: substituir pelos teus dados
  name: "O Teu Nome",
  role: "Programador Front-End",
  tagline: "Construo interfaces acessíveis, rápidas e simples de usar.",
  email: "teu@email.com",
  location: "", // ex.: "Luanda, Angola" (deixa vazio para não mostrar)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Portfólio de programador front-end: projetos web acessíveis, com foco em HTML, CSS e JavaScript.",

  social: {
    github: "", // ex.: "https://github.com/o-teu-utilizador"
    linkedin: "", // ex.: "https://www.linkedin.com/in/o-teu-perfil"
  },

  // TODO: reescreve com a tua voz. 2 a 3 parágrafos curtos chegam.
  about: [
    "Gosto de transformar ideias em páginas que funcionam bem para toda a gente: rápidas, claras e acessíveis a quem usa teclado, leitor de ecrã ou um telemóvel pequeno.",
    "Tenho vindo a construir projetos completos em HTML, CSS e JavaScript, do design dos formulários às regras de negócio, e agora estou a aprofundar React, Next.js e TypeScript.",
    "Quando não estou a programar, gosto de ... (acrescenta aqui algo pessoal).",
  ],

  skills: {
    sei: [
      "HTML semântico",
      "CSS (Grid, Flexbox)",
      "JavaScript",
      "Acessibilidade (WCAG)",
      "Design responsivo",
      "Git",
    ],
    aAprender: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
} as const;

export type Site = typeof site;
