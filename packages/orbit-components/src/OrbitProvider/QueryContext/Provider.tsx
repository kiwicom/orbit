import * as React from "react";

import useMediaQuery from "../../hooks/useMediaQuery";

import QueryContext from ".";

interface Props {
  children?: React.ReactNode;
}

interface Props {
  children?: React.ReactNode;
}

const QueryContextProvider: React.FC<Props> = ({ children }) => {
  const value = useMediaQuery();
  return <QueryContext value={value}>{children}</QueryContext>;
};

export default QueryContextProvider;
