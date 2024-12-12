import * as React from "react";

import { OrbitProvider } from "..";
import defaultTheme from "../defaultTheme";

interface Props {
  children: React.ReactNode;
}

export const DarkModeWrapper = ({ children }: Props) => {
  return (
    <OrbitProvider theme={defaultTheme} useId={React.useId} colorScheme="dark">
      {children}
    </OrbitProvider>
  );
};

export default DarkModeWrapper;
