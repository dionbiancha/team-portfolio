# Labub Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir a landing page institucional da Labub em Next.js 14 + TypeScript + Tailwind CSS, com 7 seções, efeito de cursor neon e dados fictícios.

**Architecture:** Dados em arquivos TypeScript (`src/data/`), componentes em `src/components/` (um por seção), página montada em `src/app/page.tsx`. O `SmokeCanvas` é o único Client Component. Todas as outras seções são Server Components.

**Tech Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS v3 · React Testing Library · Jest

---

## File Map

```
src/
  app/
    layout.tsx          ← Inter font, metadata, html/body wrapper
    page.tsx            ← monta todas as seções em ordem
    globals.css         ← Tailwind directives, marquee keyframes, text-stroke utils
  components/
    Nav.tsx             ← navbar sticky com glass blur
    Hero.tsx            ← headline 3 linhas + badge + grid decorativo
    Metrics.tsx         ← marquee infinito com 8 métricas
    Services.tsx        ← split: texto esq + mockup UI dir
    Team.tsx            ← grid 4 colunas com foto B&W
    HowItWorks.tsx      ← 3 steps com número outline gigante
    Cases.tsx           ← grid 3 cards com SVG logos
    Testimonials.tsx    ← grid 2 cards com foto B&W
    Cta.tsx             ← contato tipográfico centrado
    Footer.tsx          ← linha simples copyright
    SmokeCanvas.tsx     ← 'use client' — efeito neon no cursor
  data/
    team.ts             ← tipo TeamMember + array de 4 membros
    cases.ts            ← tipo Case + array de 3 projetos
    testimonials.ts     ← tipo Testimonial + array de 2 depoimentos
    metrics.ts          ← array de 8 strings de métricas
next.config.ts          ← remotePatterns para randomuser.me
tailwind.config.ts      ← extend: animation marquee + cores custom
```

---

## Task 1: Scaffold do projeto

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, estrutura de pastas

- [ ] **Step 1: Criar o projeto Next.js**

```bash
cd C:\Users\dionb\Repository\team-portfolio
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```

Responder aos prompts: aceitar todos os defaults.

- [ ] **Step 2: Instalar dependências de teste**

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

- [ ] **Step 3: Criar jest.config.ts**

```typescript
// jest.config.ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

- [ ] **Step 4: Criar jest.setup.ts**

```typescript
// jest.setup.ts
import '@testing-library/jest-dom'
```

- [ ] **Step 5: Adicionar script de teste no package.json**

Abrir `package.json` e adicionar em `"scripts"`:
```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 6: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Next.js project with TypeScript and Tailwind"
```

---

## Task 2: Configuração Tailwind + Next.js

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `next.config.ts`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Substituir tailwind.config.ts**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg:      '#080808',
        card:    '#0d0d0d',
        accent:  '#6366f1',
        muted:   '#555555',
        subtle:  '#333333',
        dimmed:  '#444444',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Substituir next.config.ts**

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'randomuser.me' },
    ],
  },
}

export default nextConfig
```

- [ ] **Step 3: Substituir globals.css**

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-inter: 'Inter', system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #080808;
  color: #f0f0f0;
}

/* Outline text helper */
.text-outline {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(240, 240, 240, 0.2);
}

/* Gradient text helper */
.text-gradient {
  background: linear-gradient(90deg, #6366f1, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Marquee fade edges */
.marquee-fade::before,
.marquee-fade::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 160px;
  z-index: 2;
  pointer-events: none;
}
.marquee-fade::before {
  left: 0;
  background: linear-gradient(to right, #080808 0%, transparent 100%);
}
.marquee-fade::after {
  right: 0;
  background: linear-gradient(to left, #080808 0%, transparent 100%);
}
```

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts next.config.ts src/app/globals.css
git commit -m "feat: configure Tailwind with custom colors, marquee animation and global styles"
```

---

## Task 3: Data files

**Files:**
- Create: `src/data/team.ts`
- Create: `src/data/cases.ts`
- Create: `src/data/testimonials.ts`
- Create: `src/data/metrics.ts`

- [ ] **Step 1: Criar src/data/team.ts**

```typescript
// src/data/team.ts
export type TeamMember = {
  area: string
  lead: string
  role: string
  photo: string        // path suffix for randomuser.me, e.g. 'women/44'
  members: string[]
}

export const team: TeamMember[] = [
  {
    area: 'Frontend',
    lead: 'Ana Souza',
    role: 'Frontend Lead',
    photo: 'women/44',
    members: ['Rafael Mendes', 'Camila Torres'],
  },
  {
    area: 'Backend',
    lead: 'Carlos Lima',
    role: 'Backend Lead',
    photo: 'men/32',
    members: ['Thiago Ramos', 'Julia Neves'],
  },
  {
    area: 'UX Design',
    lead: 'Mariana Costa',
    role: 'UX Lead',
    photo: 'women/68',
    members: ['Diego Farias', 'Letícia Braga'],
  },
  {
    area: 'DevOps',
    lead: 'Pedro Alves',
    role: 'DevOps Lead',
    photo: 'men/75',
    members: ['Renata Silva', 'Bruno Carvalho'],
  },
]
```

- [ ] **Step 2: Criar src/data/cases.ts**

```typescript
// src/data/cases.ts
export type Case = {
  name: string
  tag: string
  description: string
  stack: string[]
  theme: 'blue' | 'dark' | 'green'
}

export const cases: Case[] = [
  {
    name: 'Moda Sul',
    tag: 'E-commerce · Frontend + Backend',
    description: 'Plataforma completa de vendas online com integração de pagamento e logística em tempo real.',
    stack: ['React', 'Node.js', 'AWS'],
    theme: 'blue',
  },
  {
    name: 'Saúde+',
    tag: 'Saúde · Time completo',
    description: 'App de agendamento de consultas e prontuário eletrônico para rede de 12 clínicas.',
    stack: ['Next.js', 'Python', 'UX'],
    theme: 'dark',
  },
  {
    name: 'Pago',
    tag: 'Fintech · Backend + DevOps',
    description: 'Dashboard de gestão financeira em tempo real para PMEs com relatórios automáticos e alertas.',
    stack: ['GraphQL', 'K8s', 'CI/CD'],
    theme: 'green',
  },
]
```

- [ ] **Step 3: Criar src/data/testimonials.ts**

```typescript
// src/data/testimonials.ts
export type Testimonial = {
  name: string
  role: string
  photo: string   // path suffix for randomuser.me
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Fernanda Rocha',
    role: 'CEO, Moda Sul',
    photo: 'women/21',
    text: 'A Labub entendeu o que a gente precisava sem reuniões intermináveis. O resultado chegou antes do prazo e superou o que imaginávamos.',
  },
  {
    name: 'Rafael Menezes',
    role: 'CTO, Fintech Pago',
    photo: 'men/54',
    text: 'Ter frontend, backend e UX no mesmo time foi o diferencial. Comunicação sempre clara, produto de altíssima qualidade e zero dor de cabeça.',
  },
]
```

- [ ] **Step 4: Criar src/data/metrics.ts**

```typescript
// src/data/metrics.ts
export type Metric = {
  value: string
  label: string
}

export const metrics: Metric[] = [
  { value: '40+',   label: 'Projetos entregues' },
  { value: '4',     label: 'Frentes especializadas' },
  { value: '98%',   label: 'Taxa de satisfação' },
  { value: '3+',    label: 'Anos de mercado' },
  { value: '12',    label: 'Especialistas no time' },
  { value: '<24h',  label: 'Tempo de resposta' },
  { value: '15+',   label: 'Clientes ativos' },
  { value: '100%',  label: 'Projetos no prazo' },
]
```

- [ ] **Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: add TypeScript data files for team, cases, testimonials and metrics"
```

---

## Task 4: Layout + page shell

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Substituir src/app/layout.tsx**

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Labub — Time completo de tecnologia',
  description: 'Frontend, Backend, UX Design e DevOps em um único time integrado. Da ideia ao deploy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-bg text-[#f0f0f0] antialiased">{children}</body>
    </html>
  )
}
```

- [ ] **Step 2: Substituir src/app/page.tsx com shell vazio**

```typescript
// src/app/page.tsx
export default function Home() {
  return (
    <main>
      <p className="text-center py-20 text-[#555]">Building...</p>
    </main>
  )
}
```

- [ ] **Step 3: Verificar que a página roda**

```bash
npm run dev
```

Abrir http://localhost:3000 — deve mostrar "Building..." no centro da tela escura.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "feat: set up layout with Inter font and page shell"
```

---

## Task 5: Componente Nav

**Files:**
- Create: `src/components/Nav.tsx`
- Create: `src/__tests__/Nav.test.tsx`

- [ ] **Step 1: Escrever teste**

```typescript
// src/__tests__/Nav.test.tsx
import { render, screen } from '@testing-library/react'
import Nav from '@/components/Nav'

describe('Nav', () => {
  it('renders logo and navigation links', () => {
    render(<Nav />)
    expect(screen.getByText('labub')).toBeInTheDocument()
    expect(screen.getByText('Serviços')).toBeInTheDocument()
    expect(screen.getByText('Time')).toBeInTheDocument()
    expect(screen.getByText('Cases')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
    expect(screen.getByText('Fale conosco →')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar teste e verificar que falha**

```bash
npm test -- Nav.test.tsx
```

Expected: FAIL — "Cannot find module '@/components/Nav'"

- [ ] **Step 3: Criar src/components/Nav.tsx**

```typescript
// src/components/Nav.tsx
const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Time',     href: '#time' },
  { label: 'Cases',    href: '#cases' },
  { label: 'Contato',  href: '#contato' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 py-5 border-b border-white/[0.06] bg-[rgba(8,8,8,0.85)] backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#3b82f6] flex items-center justify-center text-white font-black text-sm tracking-tighter">
          lb
        </div>
        <span className="text-[17px] font-extrabold tracking-tight text-white">
          la<span className="text-accent">bub</span>
        </span>
      </div>

      {/* Links */}
      <ul className="flex items-center gap-7">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-[13px] text-[#888] hover:text-white transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contato"
        className="text-[13px] font-bold text-bg bg-white px-[18px] py-2.5 rounded-lg hover:bg-white/90 transition-colors"
      >
        Fale conosco →
      </a>
    </nav>
  )
}
```

- [ ] **Step 4: Rodar teste e verificar que passa**

```bash
npm test -- Nav.test.tsx
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Nav.tsx src/__tests__/Nav.test.tsx
git commit -m "feat: add Nav component with sticky glass blur"
```

---

## Task 6: Componente Hero

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/__tests__/Hero.test.tsx`

- [ ] **Step 1: Escrever teste**

```typescript
// src/__tests__/Hero.test.tsx
import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders headline and badge', () => {
    render(<Hero />)
    expect(screen.getByText(/Aceitando novos projetos/)).toBeInTheDocument()
    expect(screen.getByText('Construímos')).toBeInTheDocument()
    expect(screen.getByText('move negócios.')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar teste e verificar que falha**

```bash
npm test -- Hero.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Criar src/components/Hero.tsx**

```typescript
// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative px-12 pt-24 pb-0 overflow-hidden">
      {/* Grid decorativo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow radial */}
      <div className="absolute pointer-events-none -top-32 -left-24 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_65%)]" />

      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.25)] px-3.5 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#6366f1]" />
          <span className="text-[11px] text-[#a5b4fc] font-medium tracking-wide">
            Aceitando novos projetos em 2025
          </span>
        </div>

        {/* Headline 3 linhas */}
        <h1 className="text-[64px] font-black tracking-[-3px] leading-none mb-6">
          <span className="block text-[#f0f0f0]">Construímos</span>
          <span className="block text-outline">o digital que</span>
          <span className="block text-gradient">move negócios.</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-[16px] text-[#666] leading-[1.7] max-w-[460px]">
          A Labub é um time completo de{' '}
          <strong className="text-[#aaa] font-medium">frontend, backend, UX e DevOps</strong>.
          Você foca no que importa — a gente cuida do resto, do zero ao deploy.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Rodar teste e verificar que passa**

```bash
npm test -- Hero.test.tsx
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.tsx src/__tests__/Hero.test.tsx
git commit -m "feat: add Hero component with typographic headline and grid decoration"
```

---

## Task 7: Componente Metrics (marquee)

**Files:**
- Create: `src/components/Metrics.tsx`
- Create: `src/__tests__/Metrics.test.tsx`

- [ ] **Step 1: Escrever teste**

```typescript
// src/__tests__/Metrics.test.tsx
import { render, screen } from '@testing-library/react'
import Metrics from '@/components/Metrics'

describe('Metrics', () => {
  it('renders all metric values', () => {
    render(<Metrics />)
    expect(screen.getAllByText('40+').length).toBeGreaterThan(0)
    expect(screen.getAllByText('98%').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Projetos entregues').length).toBeGreaterThan(0)
  })
})
```

- [ ] **Step 2: Rodar teste e verificar que falha**

```bash
npm test -- Metrics.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Criar src/components/Metrics.tsx**

```typescript
// src/components/Metrics.tsx
import { metrics } from '@/data/metrics'

export default function Metrics() {
  // Duplicar para loop infinito seamless
  const doubled = [...metrics, ...metrics]

  return (
    <div className="relative overflow-hidden marquee-fade mt-16 border-t border-b border-white/[0.06]">
      <div className="flex w-max animate-marquee">
        {doubled.map((m, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center px-14 py-7 opacity-30 blur-[1.2px] scale-95 transition-all duration-300 ease-out hover:opacity-100 hover:blur-0 hover:scale-105 cursor-default"
          >
            {/* Separador entre items */}
            {i % metrics.length !== 0 || i === 0 ? null : null}
            <span className="text-[48px] font-black tracking-[-2.5px] text-[#f0f0f0] leading-none">
              {m.value}
            </span>
            <span className="text-[11px] text-[#555] uppercase tracking-[1.5px] font-medium mt-1.5 whitespace-nowrap">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Rodar teste e verificar que passa**

```bash
npm test -- Metrics.test.tsx
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Metrics.tsx src/__tests__/Metrics.test.tsx
git commit -m "feat: add Metrics marquee with blur/focus hover effect"
```

---

## Task 8: Componente Services

**Files:**
- Create: `src/components/Services.tsx`
- Create: `src/__tests__/Services.test.tsx`

- [ ] **Step 1: Escrever teste**

```typescript
// src/__tests__/Services.test.tsx
import { render, screen } from '@testing-library/react'
import Services from '@/components/Services'

describe('Services', () => {
  it('renders section title and all service pills', () => {
    render(<Services />)
    expect(screen.getByText(/Da ideia ao/)).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('UX Design')).toBeInTheDocument()
    expect(screen.getByText('DevOps')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar teste e verificar que falha**

```bash
npm test -- Services.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Criar src/components/Services.tsx**

```typescript
// src/components/Services.tsx
const pills = ['Frontend', 'Backend', 'UX Design', 'DevOps']

export default function Services() {
  return (
    <section id="servicos" className="px-12 py-[120px]">
      <div className="grid grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-4">
            O que entregamos
          </p>
          <h2 className="text-[44px] font-black tracking-[-2.5px] leading-[1.05] text-[#f0f0f0] mb-5">
            Da ideia ao{' '}
            <em className="text-outline not-italic">deploy,</em>
            <br />
            a Labub cuida
            <br />
            de tudo.
          </h2>
          <p className="text-[15px] text-[#555] leading-[1.8] mb-7">
            Sem precisar contratar quatro fornecedores diferentes.{' '}
            <strong className="text-[#888] font-medium">
              Frontend, backend, UX e DevOps
            </strong>{' '}
            em um único time integrado que fala a mesma língua.
          </p>
          <div className="flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="text-[12px] text-[#555] font-medium border border-[#1e1e1e] px-3.5 py-1.5 rounded-full hover:border-accent hover:text-[#a5b4fc] hover:bg-[rgba(99,102,241,0.08)] transition-all cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Mockup UI */}
        <div className="relative bg-card border border-white/[0.07] rounded-2xl overflow-hidden h-[340px] flex flex-col">
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_85%_30%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(ellipse_at_15%_70%,rgba(99,102,241,0.1),transparent_50%)]" />

          {/* Browser bar */}
          <div className="flex items-center gap-[5px] px-3.5 py-2.5 bg-white/[0.03] border-b border-white/[0.05] flex-shrink-0">
            <span className="w-[7px] h-[7px] rounded-full bg-[#ff5f57]" />
            <span className="w-[7px] h-[7px] rounded-full bg-[#febc2e]" />
            <span className="w-[7px] h-[7px] rounded-full bg-[#28c840]" />
          </div>

          {/* Content placeholders */}
          <div className="flex-1 p-[18px] flex flex-col gap-[9px] relative z-10">
            <div className="h-2 rounded bg-[rgba(99,102,241,0.35)] w-[35%]" />
            <div className="h-2 rounded bg-white/[0.05] w-full" />
            <div className="h-2 rounded bg-white/[0.05] w-[70%]" />
            <div className="h-2 rounded bg-white/[0.05] w-[48%]" />
            <div className="flex gap-[7px] mt-1">
              {['🖥️', '⚙️', '🚀'].map((icon) => (
                <div key={icon} className="flex-1 bg-white/[0.03] border border-white/[0.05] rounded-lg p-[9px] flex flex-col gap-[5px]">
                  <span className="text-xs">{icon}</span>
                  <div className="h-1.5 rounded bg-white/[0.05] w-full" />
                  <div className="h-1.5 rounded bg-white/[0.05] w-[55%]" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
```

- [ ] **Step 4: Rodar teste e verificar que passa**

```bash
npm test -- Services.test.tsx
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Services.tsx src/__tests__/Services.test.tsx
git commit -m "feat: add Services section with split layout and UI mockup"
```

---

## Task 9: Componente Team

**Files:**
- Create: `src/components/Team.tsx`
- Create: `src/__tests__/Team.test.tsx`

- [ ] **Step 1: Escrever teste**

```typescript
// src/__tests__/Team.test.tsx
import { render, screen } from '@testing-library/react'
import Team from '@/components/Team'

describe('Team', () => {
  it('renders all team leads and their areas', () => {
    render(<Team />)
    expect(screen.getByText('Ana Souza')).toBeInTheDocument()
    expect(screen.getByText('Carlos Lima')).toBeInTheDocument()
    expect(screen.getByText('Mariana Costa')).toBeInTheDocument()
    expect(screen.getByText('Pedro Alves')).toBeInTheDocument()
    expect(screen.getByText('FRONTEND')).toBeInTheDocument()
    expect(screen.getByText('DEVOPS')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar teste e verificar que falha**

```bash
npm test -- Team.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Criar src/components/Team.tsx**

```typescript
// src/components/Team.tsx
import Image from 'next/image'
import { team } from '@/data/team'

export default function Team() {
  return (
    <section id="time" className="px-12 py-[120px]">
      <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-3">
        Quem faz acontecer
      </p>
      <h2 className="text-[36px] font-extrabold tracking-[-1.5px] text-[#f0f0f0] mb-12">
        O time da Labub.{' '}
        <span className="text-[#444]">Especialistas de verdade.</span>
      </h2>

      <div
        className="grid grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden"
      >
        {team.map((member) => (
          <div
            key={member.area}
            className="group relative bg-card p-7 overflow-hidden"
          >
            {/* Accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(99,102,241,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Photo */}
            <div className="w-16 h-16 rounded-full overflow-hidden border border-[rgba(99,102,241,0.3)] mb-4 flex-shrink-0">
              <Image
                src={`https://randomuser.me/api/portraits/${member.photo}.jpg`}
                alt={member.lead}
                width={64}
                height={64}
                className="w-full h-full object-cover grayscale contrast-105"
              />
            </div>

            <p className="text-[10px] text-accent font-semibold uppercase tracking-[1.5px] mb-1.5">
              {member.area.toUpperCase()}
            </p>
            <p className="text-[16px] font-bold text-[#e0e0e0] tracking-tight">
              {member.lead}
            </p>
            <p className="text-[12px] text-[#555] mt-1">{member.role}</p>

            {/* Sub-members */}
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              {member.members.map((m) => (
                <p key={m} className="text-[11px] text-[#444] mt-1">
                  + {m}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Rodar teste e verificar que passa**

```bash
npm test -- Team.test.tsx
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Team.tsx src/__tests__/Team.test.tsx
git commit -m "feat: add Team section with B&W photos and 4-column grid"
```

---

## Task 10: Componente HowItWorks

**Files:**
- Create: `src/components/HowItWorks.tsx`
- Create: `src/__tests__/HowItWorks.test.tsx`

- [ ] **Step 1: Escrever teste**

```typescript
// src/__tests__/HowItWorks.test.tsx
import { render, screen } from '@testing-library/react'
import HowItWorks from '@/components/HowItWorks'

describe('HowItWorks', () => {
  it('renders all 3 steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Conta pra gente')).toBeInTheDocument()
    expect(screen.getByText('A gente monta o time')).toBeInTheDocument()
    expect(screen.getByText('Entregamos juntos')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar teste e verificar que falha**

```bash
npm test -- HowItWorks.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Criar src/components/HowItWorks.tsx**

```typescript
// src/components/HowItWorks.tsx
const steps = [
  {
    num: '01',
    title: 'Conta pra gente',
    desc: 'Você descreve o que precisa — sem precisar saber de tecnologia. A gente entende e faz as perguntas certas.',
  },
  {
    num: '02',
    title: 'A gente monta o time',
    desc: 'Selecionamos os especialistas ideais para o seu projeto e apresentamos uma proposta clara e sem enrolação.',
  },
  {
    num: '03',
    title: 'Entregamos juntos',
    desc: 'Desenvolvimento com atualizações constantes. Você acompanha cada etapa e o produto vai ao ar no prazo.',
  },
]

export default function HowItWorks() {
  return (
    <section className="px-12 py-[120px] bg-[rgba(99,102,241,0.03)]">
      <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-3">
        Simples assim
      </p>
      <h2 className="text-[36px] font-extrabold tracking-[-1.5px] text-[#f0f0f0] mb-12">
        Três passos{' '}
        <span className="text-[#444]">para começar.</span>
      </h2>

      <div className="grid grid-cols-3 gap-0.5">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-card border border-white/[0.06] rounded-xl p-9"
          >
            {/* Número outline gigante */}
            <div
              className="text-[72px] font-black leading-none tracking-[-4px] mb-4"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(99,102,241,0.2)',
              }}
            >
              {step.num}
            </div>
            <h3 className="text-[18px] font-bold text-[#e0e0e0] tracking-tight mb-2">
              {step.title}
            </h3>
            <p className="text-[13px] text-[#555] leading-[1.6]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Rodar teste e verificar que passa**

```bash
npm test -- HowItWorks.test.tsx
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/HowItWorks.tsx src/__tests__/HowItWorks.test.tsx
git commit -m "feat: add HowItWorks section with outline number decoration"
```

---

## Task 11: Componente Cases

**Files:**
- Create: `src/components/Cases.tsx`
- Create: `src/__tests__/Cases.test.tsx`

- [ ] **Step 1: Escrever teste**

```typescript
// src/__tests__/Cases.test.tsx
import { render, screen } from '@testing-library/react'
import Cases from '@/components/Cases'

describe('Cases', () => {
  it('renders all 3 case names and their stacks', () => {
    render(<Cases />)
    expect(screen.getByText('Moda Sul')).toBeInTheDocument()
    expect(screen.getByText('Saúde+')).toBeInTheDocument()
    expect(screen.getByText('Pago')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('GraphQL')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar teste e verificar que falha**

```bash
npm test -- Cases.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Criar src/components/Cases.tsx**

```typescript
// src/components/Cases.tsx
import { cases, type Case } from '@/data/cases'

const themeStyles: Record<Case['theme'], string> = {
  blue:  'bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]',
  dark:  'bg-gradient-to-br from-[#0a0a0a] to-[#1f2937]',
  green: 'bg-gradient-to-br from-[#022c22] to-[#064e3b]',
}

const CaseLogo = ({ name }: { name: string }) => {
  if (name === 'Moda Sul') return (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
      <rect x="0" y="8" width="6" height="24" rx="3" fill="white" opacity="0.9" />
      <rect x="6" y="8" width="6" height="14" rx="2" fill="white" opacity="0.9" transform="skewX(-8)" />
      <rect x="12" y="8" width="6" height="24" rx="3" fill="white" opacity="0.9" />
      <text x="26" y="27" fontFamily="system-ui" fontSize="15" fontWeight="800" fill="white" letterSpacing="-0.5" opacity="0.95">MODA SUL</text>
    </svg>
  )
  if (name === 'Saúde+') return (
    <svg width="140" height="40" viewBox="0 0 140 40" fill="none">
      <rect x="0" y="12" width="24" height="6" rx="3" fill="white" opacity="0.9" />
      <rect x="9" y="3" width="6" height="24" rx="3" fill="white" opacity="0.9" />
      <text x="32" y="27" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="white" opacity="0.95" letterSpacing="-0.3">SAÚDE</text>
      <text x="84" y="27" fontFamily="system-ui" fontSize="14" fontWeight="900" fill="#34d399">+</text>
    </svg>
  )
  return (
    <svg width="130" height="44" viewBox="0 0 130 44" fill="none">
      <polygon points="14,2 26,9 26,23 14,30 2,23 2,9" fill="none" stroke="white" strokeWidth="2" opacity="0.9" />
      <text x="9" y="21" fontFamily="system-ui" fontSize="13" fontWeight="900" fill="white" opacity="0.95">P</text>
      <text x="36" y="24" fontFamily="system-ui" fontSize="15" fontWeight="800" fill="white" opacity="0.95" letterSpacing="-0.5">pago</text>
      <text x="36" y="38" fontFamily="system-ui" fontSize="8" fontWeight="500" fill="white" opacity="0.45" letterSpacing="1.5">FINTECH</text>
    </svg>
  )
}

export default function Cases() {
  return (
    <section id="cases" className="px-12 py-[120px]">
      <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-3">
        O que já entregamos
      </p>
      <h2 className="text-[36px] font-extrabold tracking-[-1.5px] text-[#f0f0f0] mb-12">
        Projetos que{' '}
        <span className="text-[#444]">fazem a diferença.</span>
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {cases.map((c) => (
          <div
            key={c.name}
            className="bg-card border border-white/[0.06] rounded-xl overflow-hidden"
          >
            {/* Logo area */}
            <div className={`h-[140px] flex items-center justify-center ${themeStyles[c.theme]}`}>
              <CaseLogo name={c.name} />
            </div>

            {/* Body */}
            <div className="p-5">
              <p className="text-[10px] text-accent font-semibold uppercase tracking-[1px] mb-2">
                {c.tag}
              </p>
              <h3 className="text-[15px] font-bold text-[#e0e0e0] tracking-tight">
                {c.name}
              </h3>
              <p className="text-[12px] text-[#555] mt-1.5 leading-[1.5]">
                {c.description}
              </p>
              <div className="flex gap-1.5 flex-wrap mt-3.5">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] text-[#444] border border-[#1e1e1e] px-2 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Rodar teste e verificar que passa**

```bash
npm test -- Cases.test.tsx
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Cases.tsx src/__tests__/Cases.test.tsx
git commit -m "feat: add Cases section with SVG logos and themed backgrounds"
```

---

## Task 12: Componente Testimonials

**Files:**
- Create: `src/components/Testimonials.tsx`
- Create: `src/__tests__/Testimonials.test.tsx`

- [ ] **Step 1: Escrever teste**

```typescript
// src/__tests__/Testimonials.test.tsx
import { render, screen } from '@testing-library/react'
import Testimonials from '@/components/Testimonials'

describe('Testimonials', () => {
  it('renders author names and quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText('Fernanda Rocha')).toBeInTheDocument()
    expect(screen.getByText('Rafael Menezes')).toBeInTheDocument()
    expect(screen.getByText(/reuniões intermináveis/)).toBeInTheDocument()
    expect(screen.getByText(/zero dor de cabeça/)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar teste e verificar que falha**

```bash
npm test -- Testimonials.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Criar src/components/Testimonials.tsx**

```typescript
// src/components/Testimonials.tsx
import Image from 'next/image'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <section className="px-12 py-[120px]">
      <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-3">
        O que dizem sobre a gente
      </p>
      <h2 className="text-[36px] font-extrabold tracking-[-1.5px] text-[#f0f0f0] mb-12">
        Clientes que{' '}
        <span className="text-[#444]">confiaram na Labub.</span>
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-card border border-white/[0.06] rounded-xl p-7"
          >
            <div className="text-[#fbbf24] tracking-[2px] text-sm mb-3.5">★★★★★</div>
            <p className="text-[15px] text-[#aaa] leading-[1.7]">
              <span className="text-accent text-2xl leading-none align-[-4px] mr-1">"</span>
              {t.text}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={`https://randomuser.me/api/portraits/${t.photo}.jpg`}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover grayscale contrast-105"
                />
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#e0e0e0]">{t.name}</p>
                <p className="text-[11px] text-[#444] mt-0.5">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Rodar teste e verificar que passa**

```bash
npm test -- Testimonials.test.tsx
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Testimonials.tsx src/__tests__/Testimonials.test.tsx
git commit -m "feat: add Testimonials section with B&W photos"
```

---

## Task 13: Componente Cta

**Files:**
- Create: `src/components/Cta.tsx`
- Create: `src/__tests__/Cta.test.tsx`

- [ ] **Step 1: Escrever teste**

```typescript
// src/__tests__/Cta.test.tsx
import { render, screen } from '@testing-library/react'
import Cta from '@/components/Cta'

describe('Cta', () => {
  it('renders contact info', () => {
    render(<Cta />)
    expect(screen.getByText('oi@labub.com.br')).toBeInTheDocument()
    expect(screen.getByText('+55 (51) 99999-0000')).toBeInTheDocument()
    expect(screen.getByText('Resposta em até 24h')).toBeInTheDocument()
    expect(screen.getByText('Resposta imediata')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar teste e verificar que falha**

```bash
npm test -- Cta.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Criar src/components/Cta.tsx**

```typescript
// src/components/Cta.tsx
export default function Cta() {
  return (
    <section id="contato" className="px-12 py-[120px] text-center relative overflow-hidden">
      {/* Glow central */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="relative z-10">
        <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-4">
          Pronto para começar?
        </p>
        <h2 className="text-[48px] font-black tracking-[-2.5px] leading-[1.0] text-[#f0f0f0] mb-3">
          A gente cuida do seu{' '}
          <em
            className="not-italic"
            style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(240,240,240,0.2)' }}
          >
            digital.
          </em>
          <br />
          Você foca no negócio.
        </h2>
        <p className="text-[15px] text-[#444] mb-12">
          Sem compromisso. A gente responde em até 24h.
        </p>

        {/* Contatos */}
        <div className="flex items-center justify-center gap-0">
          <div className="px-14 text-center">
            <p className="text-[10px] text-[#444] uppercase tracking-[2px] font-semibold mb-2.5">
              Email
            </p>
            <p className="text-[20px] font-extrabold tracking-tight text-[#e0e0e0]">
              oi@labub.com.br
            </p>
            <p className="text-[11px] text-[#333] mt-2">Resposta em até 24h</p>
          </div>

          <div className="w-px h-16 bg-white/[0.08]" />

          <div className="px-14 text-center">
            <p className="text-[10px] text-[#444] uppercase tracking-[2px] font-semibold mb-2.5">
              WhatsApp
            </p>
            <p className="text-[20px] font-extrabold tracking-tight text-[#25d366]">
              +55 (51) 99999-0000
            </p>
            <p className="text-[11px] text-[#333] mt-2">Resposta imediata</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Rodar teste e verificar que passa**

```bash
npm test -- Cta.test.tsx
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Cta.tsx src/__tests__/Cta.test.tsx
git commit -m "feat: add CTA section with typographic contact info"
```

---

## Task 14: Componente Footer

**Files:**
- Create: `src/components/Footer.tsx`
- Create: `src/__tests__/Footer.test.tsx`

- [ ] **Step 1: Escrever teste**

```typescript
// src/__tests__/Footer.test.tsx
import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders copyright and service list', () => {
    render(<Footer />)
    expect(screen.getByText(/Labub/)).toBeInTheDocument()
    expect(screen.getByText(/Frontend · Backend/)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar teste e verificar que falha**

```bash
npm test -- Footer.test.tsx
```

Expected: FAIL

- [ ] **Step 3: Criar src/components/Footer.tsx**

```typescript
// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="px-12 py-6 flex items-center justify-between">
      <span className="text-[12px] text-[#333]">
        © 2025 Labub. Todos os direitos reservados.
      </span>
      <span className="text-[12px] text-[#333]">
        Frontend · Backend · UX · DevOps
      </span>
    </footer>
  )
}
```

- [ ] **Step 4: Rodar teste e verificar que passa**

```bash
npm test -- Footer.test.tsx
```

Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/Footer.tsx src/__tests__/Footer.test.tsx
git commit -m "feat: add Footer component"
```

---

## Task 15: SmokeCanvas (Client Component)

**Files:**
- Create: `src/components/SmokeCanvas.tsx`

> Nota: Canvas + mousemove não são testáveis em jsdom. Verificação é visual no browser.

- [ ] **Step 1: Criar src/components/SmokeCanvas.tsx**

```typescript
// src/components/SmokeCanvas.tsx
'use client'

import { useEffect, useRef } from 'react'

const COLORS: [number, number, number][] = [
  [99,  102, 241],
  [139, 92,  246],
  [59,  130, 246],
  [167, 139, 250],
]

const MAX_PARTICLES = 60

class Particle {
  x: number; y: number; size: number; alpha: number
  vx: number; vy: number; decay: number; grow: number
  r: number; g: number; b: number

  constructor(mx: number, my: number) {
    const c = COLORS[Math.floor(Math.random() * COLORS.length)]
    this.x = mx + (Math.random() - 0.5) * 40
    this.y = my + (Math.random() - 0.5) * 40
    this.size  = Math.random() * 70 + 50
    this.alpha = Math.random() * 0.10 + 0.04
    this.vx    = (Math.random() - 0.5) * 0.7
    this.vy    = (Math.random() - 0.5) * 0.7 - 0.25
    this.decay = 0.006 + Math.random() * 0.004
    this.grow  = 0.8
    this.r = c[0]; this.g = c[1]; this.b = c[2]
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.alpha -= this.decay
    this.size  += this.grow
  }

  draw(ctx: CanvasRenderingContext2D) {
    const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
    g.addColorStop(0,    `rgba(${this.r},${this.g},${this.b},${this.alpha})`)
    g.addColorStop(0.45, `rgba(${this.r},${this.g},${this.b},${this.alpha * 0.3})`)
    g.addColorStop(1,    `rgba(${this.r},${this.g},${this.b},0)`)
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = g
    ctx.fill()
  }
}

export default function SmokeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = canvas.width  = window.innerWidth
    let H = canvas.height = window.innerHeight
    const particles: Particle[] = []
    let animId: number

    const onResize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    const onMouseMove = (e: MouseEvent) => {
      if (particles.length < MAX_PARTICLES) {
        particles.push(new Particle(e.clientX, e.clientY))
        particles.push(new Particle(e.clientX, e.clientY))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw(ctx)
        if (particles[i].alpha <= 0) particles.splice(i, 1)
      }
      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
```

- [ ] **Step 2: Verificar no browser que o efeito aparece**

```bash
npm run dev
```

Abrir http://localhost:3000 e mover o mouse — névoa neon deve aparecer no fundo.

- [ ] **Step 3: Commit**

```bash
git add src/components/SmokeCanvas.tsx
git commit -m "feat: add SmokeCanvas client component with neon cursor effect"
```

---

## Task 16: Montar page.tsx

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Substituir src/app/page.tsx**

```typescript
// src/app/page.tsx
import Nav           from '@/components/Nav'
import Hero          from '@/components/Hero'
import Metrics       from '@/components/Metrics'
import Services      from '@/components/Services'
import Team          from '@/components/Team'
import HowItWorks    from '@/components/HowItWorks'
import Cases         from '@/components/Cases'
import Testimonials  from '@/components/Testimonials'
import Cta           from '@/components/Cta'
import Footer        from '@/components/Footer'
import SmokeCanvas   from '@/components/SmokeCanvas'

export default function Home() {
  return (
    <>
      <SmokeCanvas />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Metrics />
          <Services />
          <Team />
          <HowItWorks />
          <Cases />
          <Testimonials />
          <Cta />
        </main>
        <Footer />
      </div>
    </>
  )
}
```

- [ ] **Step 2: Rodar o projeto e verificar a página completa**

```bash
npm run dev
```

Abrir http://localhost:3000 e verificar:
- [ ] Nav sticky com logo + links + botão
- [ ] Hero com headline 3 linhas (sólido / outline / gradiente)
- [ ] Métricas deslizando com blur/focus no hover
- [ ] Services com split texto + mockup
- [ ] Team com 4 fotos em P&B
- [ ] How It Works com números outline
- [ ] Cases com logos SVG
- [ ] Testimonials com fotos em P&B
- [ ] CTA com email + WhatsApp centrados
- [ ] Footer
- [ ] Efeito de névoa neon no cursor no fundo

- [ ] **Step 3: Rodar todos os testes**

```bash
npm test
```

Expected: todos os testes PASS

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble full landing page with all sections"
```

---

## Task 17: Build de produção

**Files:**
- Create: `.gitignore` (verificar que `.superpowers/` está incluído)

- [ ] **Step 1: Verificar .gitignore**

Garantir que `.superpowers/` está no `.gitignore`. Se não estiver, adicionar:

```
# superpowers brainstorm sessions
.superpowers/
```

- [ ] **Step 2: Rodar build de produção**

```bash
npm run build
```

Expected: build sem erros. Se houver erros de TypeScript ou ESLint, corrigir antes de continuar.

- [ ] **Step 3: Commit final**

```bash
git add .gitignore
git commit -m "chore: add .superpowers to gitignore and verify production build"
```

---

## Self-Review

**Spec coverage:**
- ✅ Nav com glass blur, logo, links, CTA
- ✅ Hero com headline 3 linhas (sólido/outline/gradiente), badge, grid decorativo
- ✅ Métricas: marquee infinito, sem pausa no hover, blur/focus, bordas fumacê
- ✅ Services: split layout, texto do B, mockup UI sem código
- ✅ Team: 4 colunas, fotos B&W grayscale, lead + 2 membros
- ✅ HowItWorks: 3 steps, número outline gigante
- ✅ Cases: 3 cards, SVG logos, temas blue/dark/green
- ✅ Testimonials: 2 cards, fotos B&W
- ✅ CTA: sem formulário, email + WhatsApp tipográfico centrado, divisor vertical
- ✅ Footer: copyright + serviços
- ✅ SmokeCanvas: névoa suave A, max 60 partículas, z-index 0 (atrás do conteúdo)
- ✅ Arquivos data TypeScript com tipos definidos
- ✅ next.config com remotePatterns para randomuser.me
- ✅ Tailwind com animate-marquee e cores custom

**Placeholder scan:** Nenhum TBD ou TODO encontrado.

**Type consistency:** `TeamMember.photo`, `Case.theme`, `Testimonial.photo` — usados consistentemente entre data files e componentes.
