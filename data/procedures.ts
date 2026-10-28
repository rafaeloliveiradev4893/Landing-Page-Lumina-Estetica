export type Procedure = {
  id: string;
  name: string;
  description: string;
  whatsappMessage: string;
};

export const procedures: Procedure[] = [
  {
    id: "limpeza-de-pele",
    name: "Limpeza de pele",
    description:
      "Cuidado para remover impurezas e deixar a pele mais confortável e uniforme.",
    whatsappMessage: "Olá! Quero saber mais sobre limpeza de pele.",
  },
  {
    id: "peeling",
    name: "Peeling",
    description:
      "Protocolo que auxilia na renovação da superfície da pele, indicado após avaliação.",
    whatsappMessage: "Olá! Quero saber mais sobre peeling.",
  },
  {
    id: "harmonizacao-facial",
    name: "Harmonização facial",
    description:
      "Conjunto de técnicas para equilibrar volumes e contornos, sempre com indicação individual.",
    whatsappMessage: "Olá! Quero saber mais sobre harmonização facial.",
  },
  {
    id: "botox",
    name: "Botox",
    description:
      "Aplicação para suavizar linhas de expressão, com conversa prévia sobre expectativas.",
    whatsappMessage: "Olá! Quero saber mais sobre botox.",
  },
  {
    id: "preenchimento",
    name: "Preenchimento",
    description:
      "Técnica para restaurar volume em pontos específicos do rosto, conforme avaliação.",
    whatsappMessage: "Olá! Quero saber mais sobre preenchimento.",
  },
  {
    id: "drenagem-linfatica",
    name: "Drenagem linfática",
    description:
      "Massagem suave que favorece o conforto corporal e a sensação de leveza.",
    whatsappMessage: "Olá! Quero saber mais sobre drenagem linfática.",
  },
];
