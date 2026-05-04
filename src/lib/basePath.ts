const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(assetPath: string): string {
  const normalized = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${basePath}${normalized}`;
}
