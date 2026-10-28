"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.logo} href="#inicio">
          {site.name}
        </a>

        <nav className={styles.desktopNav} aria-label="Principal">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className={`btn btnGold ${styles.cta}`}
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.labels.schedule}
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? site.labels.closeMenu : site.labels.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={open ? styles.barOpen : styles.bar} />
          <span className={open ? styles.barOpen : styles.bar} />
          <span className={open ? styles.barOpen : styles.bar} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={open ? styles.mobileOpen : styles.mobile}
        aria-hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a
            className={`btn btnGold ${styles.mobileCta}`}
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            {site.labels.schedule}
          </a>
        </nav>
      </div>
    </header>
  );
}
