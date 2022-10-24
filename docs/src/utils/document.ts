export function getDocumentPageTitle(title: string, breadcrumbs: string[] = []): string {
  if (breadcrumbs.includes("Components")) {
    return `${title} component`;
  }
  if (breadcrumbs.includes("Hooks")) {
    return `${title} hook`;
  }
  if (
    breadcrumbs.includes("Getting started") &&
    (title === "For designers" || title === "For developers")
  ) {
    return `Getting started: ${title}`;
  }
  return title;
}
