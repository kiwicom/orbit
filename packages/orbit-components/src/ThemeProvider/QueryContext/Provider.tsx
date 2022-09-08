import * as React from "react";

import useMediaQuery from "../../hooks/useMediaQuery";

import QueryContext from ".";

interface Props {
  children?: React.ReactNode;
}

const QueryContextProvider: React.FC<Props> = ({ children }) => {
  const value = useMediaQuery();
  return <QueryContext.Provider value={value}>{children}</QueryContext.Provider>;
};

export default QueryContextProvider;
