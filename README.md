# Código Aberto

O **Código Aberto** é um projeto criado para aproximar pessoas do universo da tecnologia. A proposta é **explicar conceitos técnicos de forma simples, clara e acessível**, ajudando leigos e iniciantes a entenderem como a tecnologia impacta o dia a dia e pode ser utilizada de maneira prática.

## 🎯 Objetivos

- Tornar conteúdos de tecnologia **mais acessíveis e compreensíveis**.  
- Criar um espaço de aprendizado contínuo, com foco em **educação digital**.  
- Compartilhar **artigos, tutoriais e materiais visuais** em formato de blog e redes sociais.  
- Promover a **inclusão digital** e reduzir barreiras de entrada para quem está começando.  

## 👥 Público-Alvo

- Pessoas **leigas** que querem começar a entender de tecnologia.  
- Estudantes de diversas áreas que precisam de uma visão prática do universo digital.  
- Interessados em **transformação digital** e como a tecnologia molda o futuro.  
- Curiosos que desejam aprender de maneira leve, mas com conteúdo de qualidade.  

## 💡 Soluções Apresentadas

- **Blog online** com artigos explicativos e linguagem acessível.  
- **Página no Instagram** com posts visuais, curtos e objetivos.  
- Conteúdos que unem o tom **professoral** com uma pegada **tech-cool**, equilibrando didática e modernidade.  
- Identidade visual clara e consistente, fortalecendo a marca “Código Aberto”.  

## 🚀 Próximos Passos

- Lançamento inicial de artigos no blog.  
- Integração de conteúdo multimídia (vídeos curtos e reels).  
- Expansão para uma **comunidade de aprendizado colaborativo**.  

# 📚 Código Aberto - Blog de Tecnologia

Um blog moderno e responsivo para compartilhar conteúdos sobre tecnologia, desenvolvido com Next.js 15 e TypeScript.

## 🚀 Como Rodar a Aplicação

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação e Execução

1. **Clone ou baixe o projeto**
   \`\`\`bash
   # Se usando Git
   git clone <url-do-repositorio>
   cd codigo-aberto-blog
   
   # Ou baixe o ZIP e extraia
   \`\`\`

2. **Instale as dependências**
   \`\`\`bash
   npm install --legacy-peer-deps
   \`\`\`
   > Nota: Use `--legacy-peer-deps` para evitar conflitos com React 19

3. **Execute o projeto**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Acesse no navegador**
   \`\`\`
   http://localhost:3000
   \`\`\`

### Comandos Disponíveis

\`\`\`bash
npm run dev          # Executa em modo desenvolvimento
npm run build        # Gera build de produção
npm run start        # Executa build de produção
npm run lint         # Executa linter
\`\`\`

## 🏗️ Arquitetura do Projeto

### Estrutura de Pastas

\`\`\`
├── app/                          # App Router (Next.js 15)
│   ├── artigos/                  # Páginas de artigos
│   │   ├── [id]/page.tsx        # Página dinâmica de artigo individual
│   │   └── page.tsx             # Lista de todos os artigos
│   ├── categoria/               # Páginas de categorias
│   │   └── [slug]/page.tsx      # Página dinâmica por categoria
│   ├── globals.css              # Estilos globais e tokens de design
│   ├── layout.tsx               # Layout raiz da aplicação
│   └── page.tsx                 # Página inicial
├── components/                   # Componentes reutilizáveis
│   ├── articles/                # Componentes de artigos individuais
│   │   ├── react-18-article.tsx
│   │   ├── machine-learning-article.tsx
│   │   └── ...                  # Outros artigos
│   ├── ui/                      # Componentes base (shadcn/ui)
│   ├── categories.tsx           # Grid de categorias
│   ├── featured-posts.tsx       # Posts em destaque
│   ├── footer.tsx               # Rodapé
│   ├── header.tsx               # Cabeçalho com navegação
│   ├── hero.tsx                 # Seção hero da homepage
│   ├── recent-posts.tsx         # Posts recentes
│   └── search-dropdown.tsx      # Busca com dropdown
├── lib/                         # Utilitários e dados
│   ├── articles-data.ts         # Dados centralizados dos artigos
│   └── utils.ts                 # Funções utilitárias
├── public/                      # Arquivos estáticos
│   ├── ebooks/                  # PDFs para download
│   └── images/                  # Imagens e logo
└── hooks/                       # Custom hooks
    └── use-mobile.tsx           # Hook para detecção mobile
\`\`\`

### Padrões Arquiteturais

#### 1. **Separação de Responsabilidades**
- **Dados**: Centralizados em `lib/articles-data.ts`
- **Componentes**: Modulares e reutilizáveis
- **Páginas**: Apenas orquestração de componentes
- **Estilos**: Sistema de design tokens no `globals.css`

#### 2. **Componentes de Artigos**
Cada artigo é um componente separado em `components/articles/`, permitindo:
- Reutilização em diferentes páginas
- Manutenção centralizada do conteúdo
- Fácil adição de novos artigos

#### 3. **Roteamento Dinâmico**
- `/artigos/[id]` - Artigos individuais por ID
- `/categoria/[slug]` - Filtro por categoria
- Navegação programática com Next.js Router

#### 4. **Sistema de Busca Client-Side**
- Busca em tempo real sem APIs externas
- Dropdown com resultados filtrados
- Navegação direta para artigos

## 🛠️ Tecnologias Utilizadas

### Frontend Framework
- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript

### Estilização
- **Tailwind CSS v4** - Framework CSS utilitário
- **shadcn/ui** - Componentes de interface pré-construídos
- **Lucide React** - Biblioteca de ícones
- **DM Sans** - Fonte tipográfica do Google Fonts

### Funcionalidades
- **Busca Client-Side** - Filtro em tempo real com JavaScript
- **Downloads Diretos** - PDFs servidos estaticamente
- **Modo Escuro** - Sistema de temas com `next-themes`
- **Responsividade** - Design mobile-first

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 🎨 Sistema de Design

### Paleta de Cores
- **Primária**: Azul neon (`#00D4FF`)
- **Secundária**: Roxo (`#8B5CF6`)
- **Neutros**: Escala de cinzas para fundos e textos
- **Suporte**: Verde para sucesso, vermelho para erros

### Tipografia
- **Headings**: DM Sans (600, 700)
- **Body**: DM Sans (400, 500)
- **Código**: Geist Mono

### Responsividade
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)

## 📝 Como Adicionar Conteúdo

### Novo Artigo

1. **Criar componente do artigo** em `components/articles/`
2. **Adicionar dados** em `lib/articles-data.ts`
3. **Adicionar eBook** em `public/ebooks/`

### Nova Categoria

1. **Adicionar categoria** aos artigos em `articles-data.ts`
2. A página de categoria será gerada automaticamente

## 🔧 Personalização

### Logo
- Substitua o arquivo em `public/images/logo.png`
- Ajuste o tamanho no componente `Header`

### Cores
- Modifique os tokens em `app/globals.css`
- Use as classes Tailwind correspondentes

### Conteúdo
- Edite os textos em `components/articles/`
- Atualize metadados em `articles-data.ts`

## 📦 Deploy

### Vercel (Recomendado)
\`\`\`bash
# Conecte seu repositório ao Vercel
# Deploy automático a cada push
\`\`\`

### Build Manual
\`\`\`bash
npm run build
npm run start
\`\`\`

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️ para a comunidade de tecnologia**
