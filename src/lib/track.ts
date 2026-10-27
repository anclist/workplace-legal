declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Push a conversion event to GTM/GA4 if present; no-op otherwise. */
export function track(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

/** Delegate clicks on any [data-cta] element to a `cta_click` event. */
export function trackCtaClicks() {
  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-cta]');
    if (el) track('cta_click', { cta: el.dataset.cta, href: el.getAttribute('href') });
  });
}
