// @flow
import * as React from "react";

import useMediaQuery from "../../hooks/useMediaQuery";

import QueryContext from ".";

type Props = {|
  +children?: React.Node,
|};

const QueryContextProvider: React.ComponentType<Props> = ({ children }) => {
  const value = useMediaQuery();
  return <QueryContext.Provider value={value}>{children}</QueryContext.Provider>;
};

export default QueryContextProvider;
