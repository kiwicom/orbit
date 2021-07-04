import React from "react";

import "tailwindcss/dist/base.min.css";
import { DevModeProvider } from "./src/hooks/useDevMode.tsx";

exports.wrapPageElement = ({ element }) => {
  return <DevModeProvider>{element}</DevModeProvider>;
};
