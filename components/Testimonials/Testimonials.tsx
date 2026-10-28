import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section
      className={`section ${styles.wrap}`}
      aria-labelledby="depoimentos-title"
    >
      <div className="container">
        <Reveal>
          <header className="sectionHeader">
            <span className="sectionEyebrow">{site.name}</span>
            <h2 id="depoimentos-title" className="sectionTitle">
              {site.testimonials.title}
            </h2>
            <p className="sectionLead">{site.testimonials.subtitle}</p>
          </header>
        </Reveal>
        <Reveal>
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <figure key={item.id} className={styles.card}>
                <blockquote>
                  <p>{item.text}</p>
                </blockquote>
                <figcaption>{item.name}</figcaption>
              </figure>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
