import { site } from "@/data/site";

export const whatsappLink = (
  msg = "Olá! Gostaria de agendar uma avaliação."
) => `https://wa.me/${site.phone}?text=${encodeURIComponent(msg)}`;
