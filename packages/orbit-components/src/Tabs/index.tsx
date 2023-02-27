import * as React from "react";

import Stack from "../Stack";
import TabProvider from "./TabContext";
import Tab from "./components/Tab";
import TabPanel from "./components/TabPanel";
import TabPanels from "./components/TabPanels";
import TabList from "./components/TabList";
import type { Props } from "./types";

const Tabs = ({ children, spacing, dataTest, defaultSelected, onChange }: Props) => {
  return (
    <TabProvider defaultSelected={defaultSelected} onChange={onChange}>
      <Stack dataTest={dataTest} direction="column" spacing={spacing}>
        {children}
      </Stack>
    </TabProvider>
  );
};

export default Tabs;
export { Tab, TabPanel, TabPanels, TabList };
