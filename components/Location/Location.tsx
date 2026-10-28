import { site } from "@/data/site";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Location.module.css";

export default function Location() {
  return (
    <section id="contato" className="section" aria-labelledby="contato-title">
      <div className="container">
        <Reveal>
          <header className="sectionHeader">
            <span className="sectionEyebrow">{site.name}</span>
            <h2 id="contato-title" className="sectionTitle">
              {site.location.title}
            </h2>
            <p className="sectionLead">{site.location.subtitle}</p>
          </header>
        </Reveal>
        <div className={styles.grid}>
          <Reveal>
            <div className={styles.info}>
              <div>
                <h3>{site.labels.addressTitle}</h3>
                <p>{site.address.full}</p>
              </div>
              <div>
                <h3>{site.labels.hoursTitle}</h3>
                <ul>
                  {site.hours.map((item) => (
                    <li key={item.days}>
                      <span>{item.days}</span>
                      <span>{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                className="btn btnGold"
                href={site.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.labels.howToGetThere}
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.map}>
              <iframe
                src={site.mapEmbedUrl}
                title={site.labels.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
