/** Absolute URL for a root-relative path, respecting the configured `base`. */
export function absoluteUrl(path: string, site: URL | undefined) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return new URL(`${base}${path}`, site).href;
}
