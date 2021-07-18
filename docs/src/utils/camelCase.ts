function camelCase(str: string): string {
  if (str) {
    return str
      .split(/[-\s]/g)
      .map((s, i) => (i !== 0 ? s.charAt(0).toUpperCase() + s.substr(1, s.length) : s))
      .join("");
  }
  return null;
}

export default camelCase;
