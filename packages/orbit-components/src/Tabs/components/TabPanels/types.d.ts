import type { Globals } from "../../../common/types";
import type { Props as TabPanelProps } from "../TabPanel";

export interface Props extends Globals {
  children: React.ReactElement<TabPanelProps> | React.ReactElement<TabPanelProps>[];
}
