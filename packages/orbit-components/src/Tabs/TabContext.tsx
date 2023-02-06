import * as React from "react";

import type { Props } from "./types";

interface TabsContextValue {
  defaultSelected?: Props["defaultSelected"];
  onChange: Props["onChange"];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
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

const TabPanelContext = React.createContext<{ isSelected: boolean; index: number }>({
  isSelected: false,
  index: 0,
});

const TabsProvider = ({
  children,
  defaultSelected = 0,
  onChange,
}: React.PropsWithChildren<Pick<TabsContextValue, "onChange" | "defaultSelected">>) => {
  const [selected, setSelected] = React.useState(defaultSelected);

  React.useEffect(() => {
    if (onChange) onChange(selected);
  }, [onChange, selected]);

  return (
    <TabsContext.Provider value={{ selected, setSelected, onChange }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabProvider = ({ children, index, compact }) => {
  return <TabContext.Provider value={{ index, compact }}>{children}</TabContext.Provider>;
};

export const TabPanelProvider = ({ children, isSelected, index }) => {
  return (
    <TabPanelContext.Provider value={{ isSelected, index }}>{children}</TabPanelContext.Provider>
  );
};

export default TabsProvider;

export const useTabs = () => React.useContext(TabsContext);
export const useTab = () => React.useContext(TabContext);
export const usePanel = () => React.useContext(TabPanelContext);
