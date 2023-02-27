import * as React from "react";

import type { Props } from "./types";

interface TabsContextValue {
  defaultSelected?: Props["defaultSelected"];
  onChange: Props["onChange"];
  selected: number | undefined;
  setSelected: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const TabsContext = React.createContext<TabsContextValue>({
  defaultSelected: 0,
  onChange: () => {},
  selected: 0,
  setSelected: () => {},
});

const TabContext = React.createContext<{ index: number; compact: boolean }>({
  index: 0,
  compact: false,
});

const TabPanelContext = React.createContext<{ isActive: boolean; index: number }>({
  isActive: false,
  index: 0,
});

const TabsProvider = ({
  children,
  defaultSelected = 0,
  onChange,
}: React.PropsWithChildren<Pick<TabsContextValue, "onChange" | "defaultSelected">>) => {
  const [selected, setSelected] = React.useState<number | undefined>(defaultSelected);

  return (
    <TabsContext.Provider value={{ selected, setSelected, onChange }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabProvider = ({ children, index, compact }) => {
  return <TabContext.Provider value={{ index, compact }}>{children}</TabContext.Provider>;
};

export const TabPanelProvider = ({ children, isActive, index }) => {
  return (
    <TabPanelContext.Provider value={{ isActive, index }}>{children}</TabPanelContext.Provider>
  );
};

export default TabsProvider;

export const useTabs = () => React.useContext(TabsContext);
export const useTab = () => React.useContext(TabContext);
export const usePanel = () => React.useContext(TabPanelContext);
