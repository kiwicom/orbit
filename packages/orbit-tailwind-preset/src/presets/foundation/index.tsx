import type { Config } from "tailwindcss";

import defaultFoundation from "./theme/defaultFoundation";
import { spacing, screens, font, lineHeight, boxShadow, duration } from "./theme";

const cfg: Config["theme"] = {
  theme: {
    colors: defaultFoundation.palette,
    spacings: spacing,
    borderRadius: defaultFoundation["border-radius"],
    screens,
    lineHeight,
    boxShadow,
    transitionDuration: duration,
    ...font,
  },
};

export default cfg;
