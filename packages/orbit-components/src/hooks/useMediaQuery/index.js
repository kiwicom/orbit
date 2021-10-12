// @flow
import * as React from "react";

import QueryContext from "../../ThemeProvider/QueryContext";

import typeof UseMediaQuery from ".";

const useMediaQuery: UseMediaQuery = () => React.useContext(QueryContext);

export default useMediaQuery;
