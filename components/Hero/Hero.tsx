import Image from "next/image";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            {site.hero.title}
          </h1>
          <p className={styles.subtitle}>{site.hero.subtitle}</p>
          <a
            className={`btn btnGold ${styles.cta}`}
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.labels.scheduleWhatsApp}
          </a>
          <ul className={styles.badges}>
            {site.hero.badges.map((badge) => (
              <li key={badge.id}>{badge.label}</li>
            ))}
          </ul>
        </div>
        <div className={styles.media}>
          <Image
            src="/images/hero.webp"
            alt={site.hero.imageAlt}
            width={720}
            height={900}
            priority
            sizes="(min-width: 960px) 46vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
