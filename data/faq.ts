export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    id: "avaliacao",
    question: "Como funciona a avaliação?",
    answer:
      "A avaliação é uma conversa presencial para entender sua rotina, histórico e o que você busca. A profissional explica as opções e, se fizer sentido, sugere um plano. Você decide o próximo passo sem pressão.",
  },
  {
    id: "dor",
    question: "Os procedimentos doem?",
    answer:
      "A sensação varia conforme o procedimento e a sua pele. Na avaliação, explicamos o que esperar e quais cuidados podem deixar o momento mais confortável. Nada é feito sem o seu consentimento.",
  },
  {
    id: "duracao",
    question: "Quanto tempo dura o resultado?",
    answer:
      "Cada protocolo tem um tempo de manutenção diferente, que depende do tipo de cuidado e do organismo. Isso é conversado na avaliação, com informações claras e sem promessas de resultado.",
  },
  {
    id: "pagamento",
    question: "Quais formas de pagamento?",
    answer:
      "Aceitamos as formas mais comuns, como Pix, cartão e dinheiro. Detalhes de valores e parcelamento são apresentados na clínica, após a avaliação.",
  },
  {
    id: "agendar",
    question: "Preciso agendar antes?",
    answer:
      "Sim. O atendimento é com hora marcada para garantir tempo e atenção para você. Chame no WhatsApp e combinamos o melhor horário.",
  },
];
