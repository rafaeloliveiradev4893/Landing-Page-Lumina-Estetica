import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import styles from "./WhatsAppButton.module.css";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12.04 2c-5.46 0-9.91 4.44-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.06 22l5.25-1.38c1.45.79 3.08 1.21 4.73 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.44 17.5 2 12.04 2zm5.79 14.09c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.61-2.89-1.25-4.76-4.16-4.91-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.81 2 .88 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.38-.42.51-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.69-.8.88-1.08.19-.28.37-.23.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z"
      />
    </svg>
  );
}

export default function WhatsAppButton() {
  return (
    <a
      className={styles.button}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={site.labels.whatsappAria}
    >
      <WhatsAppIcon />
    </a>
  );
}
