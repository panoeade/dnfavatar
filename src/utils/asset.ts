export function assetUrl(path?: string): string {
  const base = (import.meta as any).env?.APP_ASSET_BASE ?? "https://cdn.reo.ink/web/avatar.tools.gamessage.com";
  if (!path) return "";
  if (/^(https?:|data:)/.test(path)) return path;
  if (!path.startsWith("/")) return path;
  return base ? `${base}${path}` : path;
}
