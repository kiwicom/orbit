export const omitNumbers = str =>
  str
    .split("/")
    .map(s => s.replace(/^\d+-\s*/g, ""))
    .join("/");
