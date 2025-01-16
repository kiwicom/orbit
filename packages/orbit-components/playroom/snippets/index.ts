import type { Snippet } from "./snippet";
import Accordion from "./Accordion";
import VisualComponents from "./VisualComponents";
import BasicComponents from "./BasicComponents";
import Layouts from "./Layouts";
import Card from "./Card";
import Inputs from "./Inputs";
import Slider from "./Slider";
import Tile from "./Tile";
import Toast from "./Toast";

const snippets: Snippet[] = [
  ...Accordion,
  ...BasicComponents,
  ...Card,
  ...Inputs,
  ...Layouts,
  ...Slider,
  ...Tile,
  ...Toast,
  ...VisualComponents,
].sort((a, b) => a.group.localeCompare(b.group));

export default snippets;
