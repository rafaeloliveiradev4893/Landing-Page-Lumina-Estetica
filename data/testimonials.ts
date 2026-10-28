export type Testimonial = {
  id: string;
  name: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "ana",
    name: "Ana Clara M.",
    text: "Me senti ouvida desde o primeiro contato. A equipe explicou cada etapa com calma e o ambiente é muito acolhedor.",
  },
  {
    id: "beatriz",
    name: "Beatriz S.",
    text: "Atendimento atencioso e sem pressa. Saí da avaliação com as dúvidas esclarecidas e confiança para decidir no meu tempo.",
  },
  {
    id: "camila",
    name: "Camila R.",
    text: "Espaço limpo, equipe gentil e conversa sincera. Foi fácil agendar pelo WhatsApp e me senti bem cuidada.",
  },
];
