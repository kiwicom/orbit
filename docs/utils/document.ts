import path from "path";

const rePathNumbers = new RegExp(`(^|${path.sep})\\d+-`, "g");

export const omitNumbers = filePath => filePath.replace(rePathNumbers, "$1");

export function getDocumentUrl(fileUrl, hasTabs) {
  const { dir, base, name } = path.parse(fileUrl);
  if (!base.startsWith("01-")) return omitNumbers(path.join(dir, name, "/"));

  return hasTabs ? omitNumbers(path.join(dir, "/")) : omitNumbers(path.join(dir, name, "/"));
}

export function getParentUrl(url) {
  return path.join(path.dirname(url), "/");
}

export async function getDocumentTrail(cache, url, trail = []) {
  if (url === "/") return trail;
  const { title } = await cache.get(url);

  // @ts-expect-error TODO
  return getDocumentTrail(cache, getParentUrl(url), [{ name: title, url }, ...trail]);
}
