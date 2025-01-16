import type { Snippet } from "./snippet";
import Accordion from "./Accordion";
import VisualComponents from "./VisualComponents";
import BasicComponents from "./BasicComponents";
import Layouts from "./Layouts";
import Card from "./Card";
import Inputs from "./Inputs";

const snippets: Snippet[] = [
  ...Accordion,
  ...BasicComponents,
  ...Card,
  ...Inputs,
  ...Layouts,
  ...VisualComponents,
].sort((a, b) => a.group.localeCompare(b.group));

export default snippets;
