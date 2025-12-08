export function getAssetPath(rawPath: string): string {
  if (!rawPath) return rawPath;

 
  const cleaned = rawPath.replace(/^[\u0610-\u061A\u064B-\u065F\u06D6-\u06ED]/, "");


  const withoutLeadingSlash = cleaned.replace(/^\/+/, "");

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  return `${normalizedBase}${withoutLeadingSlash}`;
}
