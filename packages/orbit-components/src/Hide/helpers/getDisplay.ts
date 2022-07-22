const getDisplay = () => ({ $block }: { $block?: boolean }): "block" | "inline-block" =>
  $block ? "block" : "inline-block";

export default getDisplay;
