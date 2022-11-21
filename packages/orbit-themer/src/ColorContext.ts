import * as React from "react";

import { DEFAULT_COLORS } from "./consts";

const ColorContext = React.createContext<{
  colors: typeof DEFAULT_COLORS;
  setColor: (flatObjectKey: unknown, color: unknown) => void;
  resetColors: () => void;
}>({ colors: DEFAULT_COLORS, setColor: () => {}, resetColors: () => {} });

export default ColorContext;
