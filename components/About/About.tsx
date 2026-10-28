import Image from "next/image";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-title">
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div className={styles.media}>
            <Image
              src="/images/about.webp"
              alt={site.about.imageAlt}
              width={720}
              height={900}
              sizes="(min-width: 960px) 40vw, 100vw"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <header className="sectionHeader">
              <span className="sectionEyebrow">{site.name}</span>
              <h2 id="sobre-title" className="sectionTitle">
                {site.about.title}
              </h2>
              <p className="sectionLead">{site.about.lead}</p>
            </header>
          </Reveal>
          <h3 className={styles.diffTitle}>{site.about.differentialsTitle}</h3>
          <ul className={styles.list}>
            {site.about.differentials.map((item) => (
                <li key={item.id} className={styles.item}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
