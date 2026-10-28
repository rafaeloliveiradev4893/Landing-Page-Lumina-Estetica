import { procedures } from "@/data/procedures";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Procedures.module.css";

export default function Procedures() {
  return (
    <section
      id="procedimentos"
      className="section"
      aria-labelledby="procedimentos-title"
    >
      <div className="container">
        <Reveal>
          <header className="sectionHeader">
            <span className="sectionEyebrow">{site.name}</span>
            <h2 id="procedimentos-title" className="sectionTitle">
              {site.procedures.title}
            </h2>
            <p className="sectionLead">{site.procedures.subtitle}</p>
          </header>
        </Reveal>
        <Reveal>
        <div className={styles.grid}>
          {procedures.map((procedure) => (
            <article key={procedure.id} className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  <ProcedureIcon id={procedure.id} />
                </span>
                <h3 className={styles.name}>{procedure.name}</h3>
                <p className={styles.description}>{procedure.description}</p>
                <a
                  className={styles.link}
                  href={whatsappLink(procedure.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.labels.learnMore}
                </a>
            </article>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcedureIcon({ id }: { id: string }) {
  switch (id) {
    case "peeling":
      return (
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2.5 13.6 9l6.4 1.6L13.6 12.2 12 18.8l-1.6-6.6L4 10.6 10.4 9 12 2.5Zm7 10.3 1 3.7 3.7 1-3.7 1-1 3.7-1-3.7-3.7-1 3.7-1 1-3.7Z"
          />
        </svg>
      );
    case "harmonizacao-facial":
      return (
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 3.2a8.8 8.8 0 1 1 0 17.6 8.8 8.8 0 0 1 0-17.6Zm-3.1 7.2a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Zm6.2 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2ZM8.6 14.4c.8 1.5 2 2.3 3.4 2.3s2.6-.8 3.4-2.3a.8.8 0 0 0-1.4-.8c-.5 1-1.2 1.5-2 1.5s-1.5-.5-2-1.5a.8.8 0 1 0-1.4.8Z"
          />
        </svg>
      );
    case "botox":
      return (
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19.8 4.2c-4.3-.4-9.4 1.4-12 5.5-1.8 2.8-1.9 6.1-.4 8.3L5 20.4l1.7 1.1 2.3-2.5c2.4.8 5.3.1 7.5-2.2 4-4.3 4.7-10.4 3.3-12.6ZM9.4 16.6c-.8-1.6-.6-3.8.6-5.7 1.8-2.8 5.2-4.4 8.4-4.5-1.1 2.8-2.8 7.3-9 10.2Z"
          />
        </svg>
      );
    case "preenchimento":
      return (
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 3.2 3.5 10.4 12 20.8l8.5-10.4L12 3.2Zm0 2.6 5.4 4.6H6.6L12 5.8Z"
          />
        </svg>
      );
    case "drenagem-linfatica":
      return (
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3 8.5c1.8-1.6 3.8-1.6 5.5 0 1.6 1.5 3.4 1.5 5 0 1.7-1.6 3.7-1.6 5.5 0l1.2-1.4c-2.2-2-5-2-6.7-.4-1.6 1.5-3.3 1.5-4.9 0-1.8-1.6-4.6-1.6-6.8.4L3 8.5Zm0 5c1.8-1.6 3.8-1.6 5.5 0 1.6 1.5 3.4 1.5 5 0 1.7-1.6 3.7-1.6 5.5 0l1.2-1.4c-2.2-2-5-2-6.7-.4-1.6 1.5-3.3 1.5-4.9 0-1.8-1.6-4.6-1.6-6.8.4L3 13.5Zm0 5c1.8-1.6 3.8-1.6 5.5 0 1.6 1.5 3.4 1.5 5 0 1.7-1.6 3.7-1.6 5.5 0l1.2-1.4c-2.2-2-5-2-6.7-.4-1.6 1.5-3.3 1.5-4.9 0-1.8-1.6-4.6-1.6-6.8.4L3 18.5Z"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 2.2c.4.6 6.8 9 6.8 13.1A6.8 6.8 0 1 1 5.2 15.3C5.2 11.2 11.6 2.8 12 2.2Z"
          />
        </svg>
      );
  }
}
