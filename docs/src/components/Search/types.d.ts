import type { DebouncedFunc } from "lodash";

export interface SearchResult {
  id: string;
  name: string;
  breadcrumbs?: string[];
  description: string;
  path?: string;
}

export type LodashDebounceFunc = DebouncedFunc<(downshiftInput: { inputValue?: string }) => void>;
