// @flow
import * as React from "react";

import Tooltip from "./Tooltip";

import type { Props } from ".";

const ErrorFormTooltip = ({
  shown,
  onShown,
  error,
  help,
  helpClosable = true,
  ...props
}: Props): React.Node => {
  return (
    <>
      {shown && help && !error && (
        <Tooltip
          isHelp
          shown={shown}
          helpClosable={helpClosable}
          onShown={() => onShown(prev => !prev)}
          {...props}
        >
          {help}
        </Tooltip>
      )}
      {shown && error && (
        <Tooltip
          shown={shown}
          helpClosable={helpClosable}
          onShown={value => onShown(value)}
          {...props}
        >
          {error}
        </Tooltip>
      )}
    </>
  );
};

export default ErrorFormTooltip;
