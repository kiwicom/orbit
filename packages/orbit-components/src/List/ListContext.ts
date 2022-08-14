import * as React from "react";

import { Size } from "../common/common";
import { Type } from "./index.d";

interface ListContextProps {
  readonly size?: Size | null;
  readonly type?: Type | null;
}

const ListContext = React.createContext<ListContextProps>({
  size: null,
  type: null,
});

ListContext.displayName = "ListOrbitContext";

export default ListContext;
