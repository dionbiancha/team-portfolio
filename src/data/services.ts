export type ServiceItem = {
  title: string;
  desc: string;
};

export type ServiceArea = {
  key: string;
  slug: string;
  label: string;
  icon: string;
  summary: string;
  items: ServiceItem[];
};

export const serviceAreas: ServiceArea[] = [
  {
    key: "frontend",
    slug: "frontend",
    label: "Frontend",
    icon: "🖥️",
    summary:
      "Interfaces que carregam rápido e funcionam bem em qualquer dispositivo, do primeiro clique ao deploy.",
    items: [
      {
        title: "Interfaces de Alta Performance",
        desc: "Desenvolvimento de interfaces rápidas e responsivas, otimizadas para carregar bem mesmo em conexões instáveis.",
      },
      {
        title: "Aplicações Web Modernas (React/Next.js)",
        desc: "Criação de aplicações escaláveis com React e Next.js, aproveitando renderização híbrida (SSR/SSG) para performance e SEO.",
      },
      {
        title: "Aplicativos Mobile (React Native)",
        desc: "Desenvolvimento de apps multiplataforma com React Native, unificando código para iOS e Android sem perder qualidade nativa.",
      },
      {
        title: "Design Systems e Componentes",
        desc: "Construção de bibliotecas de componentes reutilizáveis, garantindo consistência visual e velocidade de desenvolvimento.",
      },
      {
        title: "Integração com APIs",
        desc: "Consumo e integração de APIs REST e GraphQL, garantindo comunicação eficiente entre frontend e backend.",
      },
      {
        title: "Acessibilidade e Qualidade de Código",
        desc: "Aplicação de boas práticas de acessibilidade (WCAG), testes automatizados e revisão de código para reduzir bugs em produção.",
      },
    ],
  },
  {
    key: "fullstack",
    slug: "fullstack",
    label: "FullStack",
    icon: "⚙️",
    summary:
      "Do banco de dados à API, sistemas construídos pra crescer sem quebrar.",
    items: [
      {
        title: "Arquitetura de APIs",
        desc: "Projeto e desenvolvimento de APIs REST e GraphQL escaláveis, documentadas e prontas para crescer junto com o produto.",
      },
      {
        title: "Modelagem de Banco de Dados",
        desc: "Design de esquemas relacionais e não relacionais otimizados para performance, consistência e crescimento de dados.",
      },
      {
        title: "Autenticação e Segurança",
        desc: "Implementação de fluxos de autenticação, autorização e proteção de dados sensíveis seguindo boas práticas de mercado.",
      },
      {
        title: "Integrações e Microsserviços",
        desc: "Conexão entre sistemas internos e serviços de terceiros (pagamentos, notificações, ERPs) com arquiteturas desacopladas.",
      },
      {
        title: "Testes Automatizados",
        desc: "Cobertura de testes unitários, de integração e end-to-end para garantir confiabilidade em cada entrega.",
      },
      {
        title: "Escalabilidade e Performance",
        desc: "Otimização de queries, cache e infraestrutura para suportar picos de tráfego sem degradar a experiência.",
      },
    ],
  },
  {
    key: "ux",
    slug: "ux-design",
    label: "UX Design",
    icon: "🎨",
    summary: "Decisões de design validadas com gente de verdade, não com achismo.",
    items: [
      {
        title: "Pesquisa com Usuários",
        desc: "Entrevistas, testes de usabilidade e coleta de dados reais para embasar decisões de design com evidências, não achismo.",
      },
      {
        title: "Arquitetura de Informação",
        desc: "Organização de conteúdo e fluxos de navegação para que o usuário encontre o que precisa sem esforço.",
      },
      {
        title: "Prototipação e Wireframes",
        desc: "Criação de protótipos navegáveis para validar fluxos antes de qualquer linha de código ser escrita.",
      },
      {
        title: "Design de Interface (UI)",
        desc: "Definição de identidade visual, componentes e microinterações que tornam o produto agradável de usar.",
      },
      {
        title: "Design Systems",
        desc: "Construção de sistemas de design consistentes, documentados e reutilizáveis entre times e produtos.",
      },
      {
        title: "Testes de Usabilidade",
        desc: "Validação contínua de hipóteses de design com usuários reais, medindo taxa de sucesso e pontos de fricção.",
      },
    ],
  },
  {
    key: "devops",
    slug: "devops",
    label: "DevOps",
    icon: "🚀",
    summary: "Da infraestrutura ao compliance, ambientes estáveis e prontos pra escalar.",
    items: [
      {
        title: "Infraestrutura Cloud",
        desc: "Planejamento, implantação e gestão de ambientes em nuvem, garantindo alta disponibilidade, escalabilidade e eficiência de custos.",
      },
      {
        title: "Arquiteto de Soluções",
        desc: "Desenho de arquiteturas robustas e seguras, alinhadas às necessidades do negócio, aplicando boas práticas e tecnologias modernas.",
      },
      {
        title: "Segurança da Informação (Blue Team)",
        desc: "Atuação em defesa cibernética, análise de riscos, implementação de controles e monitoramento para proteção dos ativos digitais.",
      },
      {
        title: "DevOps, Automação e IaC",
        desc: "Integração de práticas ágeis, automação de pipelines e padronização de ambientes com Infraestrutura como Código, acelerando entregas com qualidade e confiabilidade.",
      },
      {
        title: "FinOps",
        desc: "Gestão financeira em ambientes de nuvem, com foco em otimização de custos, governança e tomada de decisões baseadas em dados para equilibrar desempenho e eficiência.",
      },
      {
        title: "Observabilidade e Monitoramento",
        desc: "Implementação de métricas, logs e alertas para garantir visibilidade em tempo real dos sistemas e antecipação de incidentes.",
      },
    ],
  },
];
