# Lumina Estética

Landing page de portfólio para a **Lumina Estética**, uma clínica fictícia. O site apresenta os serviços e a experiência da clínica e tem como objetivo principal iniciar conversas e agendamentos de avaliação pelo WhatsApp.

> **Aviso:** este é um projeto fictício. Telefone, endereço e demais informações de contato são placeholders e não representam uma clínica real.

## Funcionalidades

- Página responsiva com navegação por âncoras e menu mobile.
- Hero com chamada para agendamento.
- Seis cards de procedimentos, cada um com uma mensagem própria para o WhatsApp.
- Seções sobre a clínica e seus diferenciais, depoimentos fictícios, perguntas frequentes, chamada final e localização.
- Botão flutuante para contato pelo WhatsApp.
- Metadados para mecanismos de busca e compartilhamento, incluindo Open Graph e favicon.
- Animações de entrada e preferências de movimento reduzido.

## Tecnologias

- Next.js com App Router e React.
- TypeScript em modo estrito.
- CSS Modules e variáveis CSS, sem biblioteca de componentes.
- `next/font/google` para as fontes e `next/image` para as imagens.
- npm para gerenciamento de dependências.

## Como executar

Requer Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Comandos disponíveis:

```bash
npm run lint   # verifica o código com ESLint
npm run build  # gera a versão de produção
npm run start  # inicia a versão de produção após o build
```

## Estrutura do projeto

```text
app/
  globals.css      # estilos globais e variáveis de design
  layout.tsx       # fontes, idioma e metadados
  page.tsx         # composição da página inicial
components/        # seções e componentes da landing page
data/
  site.ts          # informações da clínica, navegação e textos gerais
  procedures.ts    # procedimentos e mensagens de WhatsApp
  faq.ts           # perguntas frequentes
  testimonials.ts  # depoimentos fictícios
lib/
  whatsapp.ts      # criação de links para o WhatsApp
public/
  favicon.svg
  images/          # imagens do site e créditos
```

## Personalização

- Atualize textos, navegação, SEO, contato, endereço e horário em `data/site.ts`.
- Edite os procedimentos e suas mensagens em `data/procedures.ts`, as perguntas em `data/faq.ts` e os depoimentos em `data/testimonials.ts`.
- Para trocar imagens, substitua os arquivos em `public/images/` e mantenha seus créditos e fontes documentados em `public/images/CREDITS.md`.
- Os links de WhatsApp são gerados por `lib/whatsapp.ts` com o telefone definido em `data/site.ts`. Substitua o placeholder por um número autorizado antes de usar o site com dados reais.

## Imagens e conteúdo

As imagens utilizadas estão em `public/images/`; suas fontes e créditos estão registrados em [`public/images/CREDITS.md`](public/images/CREDITS.md). Os depoimentos e dados apresentados são ilustrativos.

## Deploy

O projeto pode ser publicado na [Vercel](https://vercel.com/) conectando o repositório. O comando de build usado na publicação é `npm run build`.
