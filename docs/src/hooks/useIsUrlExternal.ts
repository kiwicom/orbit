export default function useIsUrlExternal(url?: string): boolean {
  if (!url || typeof document === "undefined") return false;
  // https://stackoverflow.com/a/2911045/1247274
  const parser = document.createElement("a");
  parser.href = url;
  return parser.hostname !== window.location.hostname;
}
