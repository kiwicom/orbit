import React from "react";

import { save, load } from "../utils/storage";

type Enabled = boolean;
type SetEnabled = (newEnabled: boolean) => void;

const DevMode = React.createContext<[Enabled, SetEnabled]>([false, () => {}]);

export function DevModeProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (load("devMode") === "enabled") setEnabled(true);
  }, []);

  const value = React.useMemo<[boolean, SetEnabled]>(
    () => [
      enabled,
      (newEnabled: boolean) => {
        save("devMode", newEnabled ? "enabled" : "disabled");
        setEnabled(newEnabled);
      },
    ],
    [enabled],
  );

  return <DevMode.Provider value={value}>{children}</DevMode.Provider>;
}

export default function useDevMode(): [Enabled, SetEnabled] {
  return React.useContext(DevMode);
}
