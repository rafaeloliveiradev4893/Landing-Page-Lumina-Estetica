# AGENTS.md — Lumina Estética (Landing Page)

Projeto de portfólio: landing page de uma clínica de estética **fictícia**.
Objetivo único: **converter visitantes em conversas no WhatsApp** (agendamento de avaliação).

Leia este arquivo inteiro antes de escrever qualquer código.

---

## 1. Stack (não trocar)

- **Next.js** (App Router) + **TypeScript** (strict)
- **CSS Modules** + variáveis CSS em `app/globals.css` (sem Tailwind, sem UI libs)
- Fontes via `next/font/google`
- Imagens via `next/image`
- Gerenciador de pacotes: `npm`
- Deploy: Vercel

**Não instalar** bibliotecas de animação (Framer Motion, GSAP, AOS), de ícones pesadas ou de UI (MUI, Chakra, shadcn). Ícones: SVG inline em componentes.

**Não ativar** `cacheComponents` no `next.config.ts`. A página é 100% estática, sem fetch, banco ou API. Não usar `'use cache'`.

---

## 2. Escopo (só o que está aqui)

### Deve ter
- Header fixo com links âncora + botão "Agendar" + menu hambúrguer no mobile
- Hero com CTA de WhatsApp
- Seção de procedimentos (6 cards, cada um com link de WhatsApp próprio)
- Sobre / diferenciais
- Depoimentos (3 cards)
- FAQ em accordion (5 perguntas)
- CTA final
- Localização (endereço, horário, mapa)
- Footer (com aviso de projeto fictício)
- Botão flutuante de WhatsApp
- SEO básico (title, description, Open Graph, favicon)

### Não fazer
- Formulário, login, painel, blog, chat, CMS, backend, banco de dados
- Seção "antes e depois" (publicidade de estética tem regras rígidas)
- Promessas de resultado, preços ou termos como "garantido", "milagroso"
- Dependências extras sem necessidade clara

Se algo não estiver na lista "Deve ter", **não adicione**.

---

## 3. Estrutura de pastas

```
app/
  layout.tsx          # fontes, metadata, Open Graph
  page.tsx            # monta as seções
  globals.css         # variáveis, reset, tipografia base
components/
  Header/             # Header.tsx + Header.module.css
  Hero/
  Procedures/
  About/
  Testimonials/
  Faq/
  FinalCta/
  Location/
  Footer/
  WhatsAppButton/
  Reveal/             # wrapper de fade-up no scroll
data/
  procedures.ts
  faq.ts
  testimonials.ts
  site.ts             # nome, telefone, endereço, horários, redes
lib/
  whatsapp.ts         # gera link wa.me com mensagem
public/images/
```

Regras:
- Um componente por pasta, com seu `.module.css`
- **Todo texto de conteúdo mora em `data/`**. Componentes só renderizam. Trocar de cliente deve exigir editar apenas `data/` e as imagens.
- Telefone, endereço e redes ficam **só** em `data/site.ts`

---

## 4. Código

- TypeScript strict, sem `any`
- Componentes funcionais, nomes em PascalCase, arquivos de dados em camelCase
- Server Components por padrão. Usar `'use client'` **somente** em: `Header` (menu mobile), `Faq` (accordion), `Reveal` (IntersectionObserver)
- Props tipadas com `interface` ou `type`
- Sem comentários óbvios; comente apenas decisões não evidentes
- Sem código morto, sem `console.log`, sem imports não usados
- Nomes de variáveis, funções e componentes em inglês. Conteúdo visível em português (pt-BR).

### WhatsApp (`lib/whatsapp.ts`)
```ts
import { site } from "@/data/site";

export const whatsappLink = (
  msg = "Olá! Gostaria de agendar uma avaliação."
) => `https://wa.me/${site.phone}?text=${encodeURIComponent(msg)}`;
```
- Todo botão de WhatsApp usa `whatsappLink()`
- Links externos: `target="_blank"` + `rel="noopener noreferrer"`
- Mensagem específica por procedimento (ex.: "Olá! Quero saber mais sobre limpeza de pele.")

---

## 5. Design

### Variáveis (em `:root`)
```css
--bg: #FAF7F4;
--surface: #FFFFFF;
--nude: #D9B8A8;
--text: #2B2220;
--text-muted: #6B5E5A;
--gold: #B8935A;
--whatsapp: #25D366;
--radius: 16px;
--shadow: 0 8px 30px rgba(43, 34, 32, 0.08);
```
Nunca usar cores fixas (hex) fora de `:root`.

### Tipografia
- Títulos: **Cormorant Garamond** (ou Playfair Display)
- Texto: **Inter** (ou DM Sans)
- Tamanhos fluidos com `clamp()`
- Corpo mínimo de 16px

### Estilo
- Muito espaço em branco, seções com `padding-block` generoso
- Container com `max-width: 1120px` e padding lateral
- Cantos arredondados, sombras leves
- Visual de clínica premium: elegante, limpo, acolhedor

### Responsivo
- **Mobile-first**. Breakpoints: 640px, 960px
- Testar em 360px, 768px e 1280px
- Sem scroll horizontal em nenhuma largura
- Áreas clicáveis com no mínimo 44×44px

---

## 6. Animações

Permitido (somente `opacity` e `transform`):
- Fade-up ao rolar (componente `Reveal`, com `IntersectionObserver`, dispara uma vez)
- Entrada suave do título do hero
- Hover em cards e botões
- Pulso sutil no botão flutuante de WhatsApp
- Abertura/fechamento suave do accordion

Proibido: parallax, animações 3D, vídeo de fundo, loops chamativos, animar `width`/`height`/`top`/`left`.

**Obrigatório:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }
}
```
Conteúdo nunca pode ficar invisível se o JS falhar ou se o usuário preferir menos movimento.

---

## 7. Acessibilidade

- HTML semântico: `header`, `nav`, `main`, `section`, `footer`
- Um único `h1` (no hero), hierarquia de títulos sem pular níveis
- Toda `section` com `aria-labelledby` ou título associado
- `alt` descritivo em imagens (vazio apenas em decorativas)
- Contraste mínimo AA (texto sobre dourado/nude deve ser verificado)
- Foco visível em todos os elementos interativos
- Accordion com `button`, `aria-expanded` e `aria-controls`
- Menu mobile com `aria-expanded` e fechamento por `Esc`
- Botão flutuante com `aria-label="Falar no WhatsApp"`
- `lang="pt-BR"` no `<html>`

---

## 8. Performance e SEO

- Imagens em `.webp`, com `width`/`height` definidos
- `priority` apenas na imagem do hero; as demais com lazy loading
- Mapa: iframe com `loading="lazy"` e `title`
- Metadata completa em `layout.tsx`: `title`, `description`, `openGraph` (com imagem 1200×630), `icons`
- Meta: **Lighthouse 90+** em Performance, Acessibilidade, Boas práticas e SEO
- Sem CLS: reservar espaço para imagens e fontes

---

## 9. Conteúdo e ética

- Nome da clínica: **Lumina Estética** (fictícia)
- Procedimentos: limpeza de pele, peeling, harmonização facial, botox, preenchimento, drenagem linfática
- Depoimentos são fictícios e curtos; nunca citar resultados clínicos específicos
- Footer deve conter: **"Projeto fictício desenvolvido por Rafael para fins de portfólio."**
- Telefone e endereço são placeholders; não usar dados reais de terceiros
- Imagens: apenas bancos gratuitos com licença que permita uso (Unsplash, Pexels); guardar créditos em `public/images/CREDITS.md`

---

## 10. Git e entrega

- Commits pequenos, em português ou inglês, no padrão `tipo: descrição` (`feat:`, `fix:`, `style:`, `chore:`)
- Antes de finalizar, rodar `npm run lint` e `npm run build` sem erros nem warnings
- Não commitar `.env`, `node_modules`, `.next`

### Checklist final
- [ ] Todos os botões de WhatsApp abrem com a mensagem correta
- [ ] Funciona em celular real
- [ ] Sem scroll horizontal em 360px
- [ ] `prefers-reduced-motion` respeitado
- [ ] Imagens otimizadas e com `alt`
- [ ] Metadata e preview do link testados
- [ ] Lighthouse 90+ nas 4 categorias
- [ ] `npm run lint` e `npm run build` passando
- [ ] Aviso de projeto fictício no footer

---

## 11. Como o agente deve trabalhar

1. Ler este arquivo e o prompt da tarefa
2. Fazer um plano curto antes de codar
3. Implementar em ordem: base (layout, globals, data, lib) → Header/Hero/WhatsAppButton → seções → animações → SEO → revisão
4. Em caso de dúvida de escopo, **escolher a opção mais simples** e seguir
5. Ao terminar, listar o que foi feito, o que ficou de fora e como rodar o projeto