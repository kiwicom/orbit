// @flow
import * as React from "react";

import Tooltip from "./Tooltip";

import type { Props } from ".";

const ErrorFormTooltip = ({ shown, error, help, ...props }: Props): React.Node => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (shown) setVisible(true);
  }, [shown]);

  return (
    <>
      {visible && help && !error && (
        <Tooltip isHelp visible={visible} onShow={() => setVisible(prev => !prev)} {...props}>
          {help}
        </Tooltip>
      )}
      {visible && error && (
        <Tooltip visible={visible} onShow={value => setVisible(value)} {...props}>
          {error}
        </Tooltip>
      )}
    </>
  );
};

export default ErrorFormTooltip;
