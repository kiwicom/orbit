import * as React from "react";

import Tooltip from "./Tooltip";
import type { Props } from "./types";

const ErrorFormTooltip = ({ shown, onShown, error, help, ...props }: Props) => {
  return (
    <>
      {shown && help && !error && (
        <Tooltip isHelp shown={shown} onShown={() => onShown(prev => !prev)} {...props}>
          {help}
        </Tooltip>
      )}
      {shown && error && (
        <Tooltip shown={shown} onShown={value => onShown(value)} {...props}>
          {error}
        </Tooltip>
      )}
    </>
  );
};

export default ErrorFormTooltip;
