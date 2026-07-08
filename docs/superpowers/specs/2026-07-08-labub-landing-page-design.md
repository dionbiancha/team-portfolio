# Labub — Landing Page Design Spec

**Date:** 2026-07-08  
**Project:** `team-portfolio`  
**Stack:** Next.js 14 · TypeScript · Tailwind CSS

---

## 1. Visão geral

Landing page institucional da **Labub**, um time completo de desenvolvimento (Frontend, Backend, UX Design, DevOps) voltado para pessoas de negócio e pessoas físicas que precisam contratar um time integrado. O objetivo da página é apresentar os serviços, o time e converter visitantes em contatos via email ou WhatsApp.

---

## 2. Decisões de design

### Estilo visual
- **Dark Editorial** — fundo `#080808`, tipografia grande e impactante, acento índigo/violeta (`#6366f1`)
- Inspiração: Vercel, Linear, Stripe
- Tipografia: Inter (Google Fonts) — pesos 400, 600, 700, 800, 900
- Sem bordas de separação entre seções — a página flui continuamente

### Tom de voz
- **Próximo e confiante** — linguagem acessível, sem gírias, como um parceiro experiente falando com o cliente
- Exemplo: "A gente cuida do seu digital. Você foca no seu negócio."

### Arquitetura de dados
- **Abordagem 2: arquivos TypeScript de dados** — `data/team.ts`, `data/services.ts`, `data/cases.ts`, `data/testimonials.ts`
- Componentes apenas renderizam, não contêm dados hardcoded
- Facilita atualização futura sem tocar no layout

---

## 3. Estrutura da página (7 seções)

### 3.1 Nav
- Sticky com `backdrop-filter: blur(12px)` e fundo `rgba(8,8,8,0.85)`
- Logo: marca quadrada gradiente (indigo→azul) com letras "lb" + wordmark "labub" com acento em `#6366f1`
- Links: Serviços · Time · Cases · Contato
- CTA: botão branco sólido "Fale conosco →"

### 3.2 Hero
- Badge: "Aceitando novos projetos em 2025" com ponto verde pulsante
- Headline 3 linhas com efeito tipográfico:
  - Linha 1: texto sólido `#f0f0f0`
  - Linha 2: texto outline (hollow, `-webkit-text-stroke`)
  - Linha 3: gradiente `#6366f1 → #3b82f6`
- Subtítulo em `#666`, max-width 460px
- Grid decorativo de linhas sutis no fundo + glow radial roxo

### 3.3 Métricas (marquee)
- Carrossel infinito auto-deslizante, **sem pausa no hover**
- 8 métricas: 40+ projetos · 4 frentes · 98% satisfação · 3+ anos · 12 especialistas · <24h resposta · 15+ clientes · 100% no prazo
- Estado padrão: `opacity: 0.3`, `filter: blur(1.2px)`, `scale(0.96)`
- Hover: `opacity: 1`, `blur(0)`, `scale(1.06)` — transição 0.35s
- Bordas laterais com gradiente `#080808 → transparent` (efeito fumacê)
- Sem bordas entre os itens — separador `·` textual

### 3.4 Serviços — "O que entregamos"
- Layout split: **texto à esquerda, mockup de UI à direita**
- Texto: headline "Da ideia ao deploy, a Labub cuida de tudo." + parágrafo + 4 pills clicáveis (Frontend · Backend · UX Design · DevOps)
- Visual: card escuro estilo browser (barra de dots coloridos) com linhas placeholder e 3 mini-cards com ícones
- Sem listar nem explicar cada serviço individualmente

### 3.5 Time — "Quem faz acontecer"
- Grid 4 colunas com borda de 1px entre cards (grid gap 1px, background da grade)
- Cada card: foto circular B&W (grayscale via CSS) + área (ex: "FRONTEND") + nome + cargo + 2 membros adicionais listados abaixo
- Linha de acento no topo do card aparece no hover
- Líderes e membros fictícios:
  - **Frontend**: Ana Souza (Lead) · Rafael Mendes · Camila Torres
  - **Backend**: Carlos Lima (Lead) · Thiago Ramos · Julia Neves
  - **UX Design**: Mariana Costa (Lead) · Diego Farias · Letícia Braga
  - **DevOps**: Pedro Alves (Lead) · Renata Silva · Bruno Carvalho
- Fotos: `randomuser.me` com `filter: grayscale(100%) contrast(1.05)`

### 3.6 Como funciona — "Três passos para começar"
- 3 cards escuros em grid horizontal
- Número gigante outline (`-webkit-text-stroke`) como elemento decorativo
- Passos: 1. Conta pra gente · 2. A gente monta o time · 3. Entregamos juntos

### 3.7 Cases — "Projetos que fazem a diferença"
- Grid 3 colunas
- Cada card: área colorida com logo SVG inline + corpo com tag de categoria, nome e descrição + pills de stack
- Projetos fictícios:
  - **Moda Sul** — E-commerce (azul escuro) — React, Node.js, AWS
  - **Saúde+** — Saúde / time completo (dark) — Next.js, Python, UX
  - **Pago** — Fintech (verde escuro) — GraphQL, K8s, CI/CD

### 3.8 Depoimentos — "O que dizem sobre a gente"
- Grid 2 colunas
- Cada card: estrelas ★★★★★ + citação com `"` em `#6366f1` + foto circular B&W + nome + cargo
- Clientes fictícios:
  - Fernanda Rocha, CEO Moda Sul
  - Rafael Menezes, CTO Fintech Pago
- Fotos: `randomuser.me` com grayscale

### 3.9 CTA + Contato — "Pronto para começar?"
- Fundo com glow radial central
- Headline com linha outline: "A gente cuida do seu *digital*. Você foca no negócio."
- **Sem formulário** — apenas dados de contato tipográficos centrados
- Email e WhatsApp separados por linha vertical fina
- Cada contato tem: label uppercase · valor em destaque · hint ("Resposta em até 24h")
- WhatsApp em verde `#25d366`

### 3.10 Footer
- Linha simples: copyright à esquerda · "Frontend · Backend · UX · DevOps" à direita

---

## 4. Efeito de cursor (neon smoke)

- Canvas fixo `z-index: 0`, conteúdo em `z-index: 1`
- **Névoa suave** (variante A): blobs índigo/violeta/azul/lavanda
- Max 60 partículas simultâneas, 2 por mousemove
- Tamanho: 50–120px, opacidade: 0.04–0.14, decay lento
- Sem `globalCompositeOperation` customizado (performance)
- Não interfere com cliques ou seleção de texto

---

## 5. Dados fictícios (TypeScript)

```typescript
// data/team.ts
export const team = [
  { area: 'Frontend', lead: 'Ana Souza', role: 'Frontend Lead', photo: 'women/44', members: ['Rafael Mendes', 'Camila Torres'] },
  { area: 'Backend',  lead: 'Carlos Lima', role: 'Backend Lead', photo: 'men/32',   members: ['Thiago Ramos', 'Julia Neves'] },
  { area: 'UX Design', lead: 'Mariana Costa', role: 'UX Lead', photo: 'women/68', members: ['Diego Farias', 'Letícia Braga'] },
  { area: 'DevOps',   lead: 'Pedro Alves', role: 'DevOps Lead', photo: 'men/75',  members: ['Renata Silva', 'Bruno Carvalho'] },
]

// data/cases.ts
export const cases = [
  { name: 'Moda Sul',  tag: 'E-commerce · Frontend + Backend', desc: '...', stack: ['React','Node.js','AWS'],    theme: 'blue'  },
  { name: 'Saúde+',   tag: 'Saúde · Time completo',           desc: '...', stack: ['Next.js','Python','UX'],    theme: 'dark'  },
  { name: 'Pago',     tag: 'Fintech · Backend + DevOps',      desc: '...', stack: ['GraphQL','K8s','CI/CD'],    theme: 'green' },
]

// data/testimonials.ts
export const testimonials = [
  { name: 'Fernanda Rocha', role: 'CEO, Moda Sul',      photo: 'women/21', text: '...' },
  { name: 'Rafael Menezes', role: 'CTO, Fintech Pago',  photo: 'men/54',   text: '...' },
]
```

---

## 6. Estrutura de componentes

```
src/
  app/
    page.tsx          ← monta as seções em ordem
    layout.tsx        ← fonte Inter, metadata
  components/
    Nav.tsx
    Hero.tsx
    Metrics.tsx       ← marquee animado
    Services.tsx      ← split texto + mockup
    Team.tsx          ← grid 4 cols
    HowItWorks.tsx    ← 3 steps
    Cases.tsx         ← grid 3 cards
    Testimonials.tsx  ← grid 2 cards
    Cta.tsx           ← contato tipográfico
    Footer.tsx
    SmokeCanvas.tsx   ← efeito de cursor (client component)
  data/
    team.ts
    cases.ts
    testimonials.ts
    metrics.ts
```

---

## 7. Configuração Tailwind

- Cor de acento customizada: `indigo: #6366f1`, `violet: #6366f1`
- Fonte padrão: Inter
- Background base: `#080808`
- Dark mode: não necessário (página é sempre dark)

---

## 8. Deploy

- Vercel (Next.js nativo)
- Sem banco de dados, sem CMS, sem autenticação
- Imagens de equipe via URL externa (randomuser.me) — substituir por fotos reais quando disponíveis
