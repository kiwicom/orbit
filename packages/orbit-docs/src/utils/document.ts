export function getDocumentPageTitle(title: string, trail: string[] = []): string {
  if (trail.includes("Components")) {
    return `${title} component`;
  }
  if (trail.includes("Hooks")) {
    return `${title} hook`;
  }
  if (
    trail.includes("Getting started") &&
    (title === "For designers" || title === "For developers")
  ) {
    return `Getting started: ${title}`;
  }
  return title;
}
