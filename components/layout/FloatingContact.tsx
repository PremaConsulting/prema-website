import { site } from "@/lib/site";

export default function FloatingContact() {
  return (
    <div
      className="fixed top-1/2 right-[18px] z-50 flex flex-col gap-[14px] max-md:right-3 max-md:gap-2.5"
      style={{ transform: "translateY(-50%)" }}
    >
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="fab-btn fab-whatsapp"
      >
        <svg viewBox="0 0 24 24" className="fill-current" aria-hidden>
          <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.94.53 3.76 1.45 5.32L2 22l4.99-1.55a10.04 10.04 0 0 0 5.05 1.35h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.07c-.24.68-1.4 1.26-1.93 1.34-.49.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.61-2.89-1.25-4.77-4.16-4.92-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.12 1.01-2.41.26-.28.58-.35.77-.35h.55c.18 0 .42-.07.65.5.24.58.81 2 .88 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.21 1.36.28.14.44.12.6-.07.17-.19.7-.81.89-1.09.19-.28.37-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
        </svg>
      </a>
      <a
        href={site.phoneHref}
        aria-label="Call us"
        className="fab-btn fab-call"
      >
        <svg viewBox="0 0 24 24" className="fill-current" aria-hidden>
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2z" />
        </svg>
      </a>
    </div>
  );
}
