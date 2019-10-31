// @flow
import * as React from "react";

import type { ListContextType } from "./ListContext";

const ListContext: ListContextType = React.createContext({
  size: null,
  type: null,
});

export default ListContext;
