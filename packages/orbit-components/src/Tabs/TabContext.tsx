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
  const value = React.useMemo(() => ({ selected, onChange, setSelected }), [onChange, selected]);

  return <TabsContext value={value}>{children}</TabsContext>;
};

export const TabProvider = ({ children, index, compact }) => {
  const value = React.useMemo(() => ({ index, compact }), [index, compact]);

  return <TabContext value={value}>{children}</TabContext>;
};

export const TabPanelProvider = ({ children, isActive, index }) => {
  const value = React.useMemo(() => ({ isActive, index }), [isActive, index]);

  return <TabPanelContext value={value}>{children}</TabPanelContext>;
};

export default TabsProvider;

export const useTabs = () => React.useContext(TabsContext);
export const useTab = () => React.useContext(TabContext);
export const usePanel = () => React.useContext(TabPanelContext);
