// @flow
import * as React from "react";

import Tooltip from "./Tooltip";

import type { Props } from ".";

const ErrorFormTooltip = ({
  iconRef,
  inputRef,
  inputSize = "normal",
  onClose,
  onShow,
  labelRef,
  tooltipShown,
  dataTest,
  error,
  help,
  inlineLabel,
}: Props): React.Node => {
  return (
    <>
      {help && !error && (
        <Tooltip
          dataTest={dataTest}
          inputRef={inputRef}
          iconRef={iconRef}
          labelRef={labelRef}
          inputSize={inputSize}
          onClose={onClose}
          onShow={onShow}
          isHelp
          inlineLabel={inlineLabel}
          shown={tooltipShown}
        >
          {help}
        </Tooltip>
      )}
      {error && (
        <Tooltip
          dataTest={dataTest}
          inputRef={inputRef}
          labelRef={labelRef}
          iconRef={iconRef}
          inputSize={inputSize}
          onClose={onClose}
          onShow={onShow}
          inlineLabel={inlineLabel}
          shown={tooltipShown}
        >
          {error}
        </Tooltip>
      )}
    </>
  );
};

export default ErrorFormTooltip;
