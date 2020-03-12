// @flow
import * as React from "react";

import QueryContext from "../../ThemeProvider/QueryContext";
import useMediaQueryContext from "../../ThemeProvider/QueryContext/useMediaQueryContext";

import type { UseMediaQuery } from "./index";

const useMediaQuery: UseMediaQuery = () => {
  const media = React.useContext(QueryContext);
  if (media != null && Object.values(media).some(v => v != null)) {
    return media;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMediaQueryContext();
};

export default useMediaQuery;
