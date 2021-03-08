type BoxShadowDefinition = {
  def: [string, string, string?, string?];
  color: string;
};
const boxShadow = (definitions: Array<BoxShadowDefinition> | BoxShadowDefinition): string =>
  (Array.isArray(definitions) ? definitions : [definitions])
    .map(({ def, color }) => [...def.slice(0, 4), color].filter(Boolean).join(" "))
    .join(",");

export default boxShadow;
