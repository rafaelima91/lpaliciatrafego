# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Landing Page - Agentes de IA para Gestão de Tráfego

## Contexto do Projeto
Landing page para venda de agentes de IA que atuam como gestor de tráfego operacional (subida de campanhas, otimização de anúncios, geração de relatórios, insights de otimização, etc).

## Stack e Ferramentas
- **Nuxt 4** (estrutura de arquivos: pages dentro de app/pages, components em app/components)
- **Tailwind CSS** (customizado com tema próprio)
- **Importação explícita de componentes** (sempre usar importação explícita nos arquivos Vue)
- **Padrão de nomes:** PascalCase para componentes, nomes semânticos e claros, seguindo convenções Nuxt/Vue

## Esquema de Cores (tailwind.config.js)
- **Primary:** Amarelos (vários tons, de 50 a 950)
- **Secondary:** Preto e cinzas
- **Light/Dark:** Branco, quase preto e variações
- **Accent:** Gold, bronze, amber
- **Gradientes customizados:** Ex: `bg-hero-yellow` (primary-500 para primary-900)

## Tipografia
- **Fontes:** Outfit (principal), Poppins, Inter
- **fontFamily:** `sans`, `display` (ver tailwind.config.js)
- **fontSize/fontWeight:** Utilitários semânticos (display, title, subtitle, body, caption, bold, etc.)

## Componentes Criados
- **Badge.vue:** Badge estilizado, com suporte a gradiente, borda, cor customizada, slot para texto, três bolinhas opcionais.
- **VideoPlayer.vue:** Player de YouTube responsivo, proporção 16:9, visual sóbrio (fundo escuro, borda discreta, três bolinhas no topo estilo Mac), largura máxima alinhada à coluna do hero.
- **HeroSection.vue:** Seção hero com badge, título, subtítulo e vídeo, responsivo, usando utilitários e padrões do projeto.

## Padrões de Layout e Responsividade
- **Coluna central do hero:** max-w-2xl (mobile/tablet), max-w-4xl (desktop)
- **Textos:** Quebra automática, sem <br> manual, sempre responsivo
- **Vídeo:** Proporção 16:9, altura e largura responsivas, alinhado à coluna central

## Boas Práticas
- Sempre importar componentes explicitamente
- Usar nomes semânticos e claros para arquivos e componentes
- Utilizar utilitários do tailwind.config.js para cores, gradientes, tipografia e espaçamentos
- Evitar estilos inline ou duplicados; centralizar padrões no tailwind.config.js
- Manter o visual sóbrio, moderno e elegante

## Como dar continuidade
- Consulte este documento antes de abrir um novo chat
- Se necessário, peça para o assistente ler este README.md para retomar contexto
- Novos componentes, seções ou padrões devem seguir as diretrizes acima

---

Se precisar de mais detalhes técnicos, consulte também o tailwind.config.js e os arquivos de componentes em app/components.
