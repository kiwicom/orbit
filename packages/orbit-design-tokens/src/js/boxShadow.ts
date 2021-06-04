type BoxShadowDefinition = {
  def: [string, string, string?, string?];
  color: string;
  inset?: boolean;
};
const boxShadow = (definitions: Array<BoxShadowDefinition> | BoxShadowDefinition): string =>
  (Array.isArray(definitions) ? definitions : [definitions])
    .map(({ def, color, inset = false }) =>
      [inset ? "inset" : null, ...def.slice(0, 4), color].filter(Boolean).join(" "),
    )
    .join(",");

export default boxShadow;
