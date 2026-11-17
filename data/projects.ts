export type ProjectSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  links: { demo?: string; github?: string };
  caseStudy: {
    intro: string;
    role: string;
    sections: ProjectSection[];
  };
};

/**
 * Lista de projetos. Para acrescentar um, copia o objeto abaixo e muda os campos.
 * O ideal são 3 a 4 projetos bem explicados.
 */
export const projects: Project[] = [
  {
    slug: "mundo-hospitalar",
    title: "Mundo-Hospitalar",
    year: "2026",
    summary:
      "Site de uma unidade hospitalar com contas de utilizador, marcação de consultas online e recibo em PDF. Feito sem frameworks, com foco em acessibilidade.",
    tags: ["HTML", "CSS", "JavaScript", "Acessibilidade", "localStorage"],
    links: {
      demo: "", // TODO: endereço da demonstração (ex.: GitHub Pages)
      github: "", // TODO: endereço do repositório
    },
    caseStudy: {
      intro:
        "O Mundo-Hospitalar começou como um site institucional de seis páginas e cresceu para uma aplicação de marcação de consultas, toda em HTML, CSS e JavaScript simples.",
      role: "Front-end: estrutura, estilos, lógica e acessibilidade. (TODO: ajusta ao que fizeste de facto.)",
      sections: [
        {
          title: "O problema",
          paragraphs: [
            "O site tinha páginas duplicadas para visitantes e para utilizadores com conta, o mesmo header, footer e login repetidos em cada ficheiro, formulários com poucas validações e pouca atenção à acessibilidade.",
          ],
        },
        {
          title: "O que construí",
          bullets: [
            "Uma só versão de cada página: o header mostra o botão de login ou o avatar do utilizador, consoante a sessão.",
            "Header, footer e modal de login desenhados a partir de um único ficheiro, em vez de copiados por todas as páginas.",
            "Formulários com validação completa (nome, BI, telefone, email, password…) e mensagens junto a cada campo.",
            "Marcação de consultas num único modal: vários serviços, validação de dias e horas, atendimento ao domicílio com acréscimo de preço e recibo em PDF.",
            "Edição de perfil que só guarda o que mudou e mantém as marcações ligadas à conta.",
          ],
        },
        {
          title: "Decisões e porquê",
          bullets: [
            "<dialog> nativo para todos os modais: o navegador trata do foco, da tecla Esc e do fundo.",
            "Dados dos doutores e serviços em ficheiros próprios, separados da interface: a lista, o modal e a marcação partilham a mesma fonte.",
            "Validações num módulo único, reutilizado pelo cadastro e pela edição de perfil.",
            "Formato de dados compatível com a versão anterior, para a parte de administração continuar a funcionar.",
          ],
        },
        {
          title: "Acessibilidade",
          bullets: [
            "Estrutura semântica, link para saltar para o conteúdo e foco sempre visível.",
            "Formulários com rótulos, mensagens anunciadas a leitores de ecrã e erros que não dependem só da cor.",
            "Carrossel com pausa e respeito pela preferência de movimento reduzido; tabela de serviços com cabeçalhos e legenda.",
            "Contrastes de cor ajustados e layout fluido, do telemóvel ao ecrã grande.",
          ],
        },
        {
          title: "Limitações assumidas",
          paragraphs: [
            "Não há servidor: os dados vivem no localStorage e a password é guardada em texto simples, o que serve para demonstração mas nunca para produção. Um próximo passo seria um back-end com autenticação e passwords cifradas.",
          ],
        },
        {
          title: "O que aprendi",
          paragraphs: [
            "Separar dados, validação e interface torna o código mais fácil de mudar; o que o navegador já oferece (como o <dialog>) poupa muito trabalho; e é importante assumir abertamente os limites de segurança de um projeto sem servidor. (TODO: acrescenta o que aprendeste tu.)",
          ],
        },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
