import type { Spacing } from "../Stack/types";
import type { Globals } from "../common/types";

export interface TabProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export interface Props extends Globals {
  defaultSelected?: number;
  spacing?: Spacing;
  onChange?: (idx?: number) => void | Promise<void>;
  children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
}
