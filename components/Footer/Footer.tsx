import { site } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.logo}>{site.name}</p>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.labels.instagram} {site.instagramHandle}
        </a>
        <p>{site.footer.copyright}</p>
        <p className={styles.disclaimer}>{site.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
