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

  return (
    <DevMode.Provider
      value={[
        enabled,
        newEnabled => {
          save("devMode", newEnabled ? "enabled" : "disabled");
          setEnabled(newEnabled);
        },
      ]}
    >
      {children}
    </DevMode.Provider>
  );
}

export default function useDevMode(): [Enabled, SetEnabled] {
  return React.useContext(DevMode);
}
