"use client";

import { useState } from "react";
import { faq } from "@/data/faq";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Faq.module.css";

export default function Faq() {
  const [openId, setOpenId] = useState(faq[0].id);

  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container">
        <Reveal>
          <header className="sectionHeader">
            <span className="sectionEyebrow">{site.name}</span>
            <h2 id="faq-title" className="sectionTitle">
              {site.faq.title}
            </h2>
            <p className="sectionLead">{site.faq.subtitle}</p>
          </header>
        </Reveal>
        <Reveal>
        <div className={styles.list}>
          {faq.map((item) => {
            const expanded = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
                <div key={item.id} className={styles.item}>
                  <h3 className={styles.heading}>
                    <button
                      id={buttonId}
                      type="button"
                      className={styles.button}
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      onClick={() => setOpenId(item.id)}
                    >
                      {item.question}
                      <span className={styles.icon} aria-hidden="true">
                        {expanded ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={expanded ? styles.panelOpen : styles.panel}
                  >
                    <div className={styles.inner}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
