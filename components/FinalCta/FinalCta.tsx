import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.wrap} aria-labelledby="cta-title">
      <div className="container">
        <Reveal>
          <div className={styles.box}>
            <h2 id="cta-title" className={styles.title}>
              {site.finalCta.title}
            </h2>
            <p className={styles.text}>{site.finalCta.text}</p>
            <a
              className={`btn btnWhatsapp ${styles.button}`}
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.labels.scheduleWhatsApp}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
