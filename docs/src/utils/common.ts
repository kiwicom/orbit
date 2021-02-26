export const omitNumbers = (str: string) =>
  str
    .split("/")
    .map(s => s.replace(/^\d+-\s*/g, ""))
    .join("/");

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const pascalize = (str: string) =>
  str
    .replace(/-(.)/g, (_match, chartacter: string) => chartacter.toUpperCase())
    .replace(/^(.)/, ($1: string) => $1.toUpperCase());

export const sluggify = (str: string) =>
  str
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-") // replace all spaces and underscores with hyphens
    .replace(/[^A-Za-z0-9-/]+/g, ""); // remove everything not basic

export const copyTimeout = (
  copied: boolean,
  setCopied: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (copied) {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }
  return undefined;
};
