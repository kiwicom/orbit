// @flow
import * as React from "react";

import Tooltip from "./Tooltip";

import type { Props } from ".";

const ErrorFormTooltip = ({
  id,
  iconRef,
  inputRef,
  inputSize = "normal",
  onClose,
  onShow,
  labelRef,
  shown,
  dataTest,
  error,
  help,
  inlineLabel,
}: Props): React.Node => {
  return (
    <>
      {help && !error && (
        <Tooltip
          id={id}
          dataTest={dataTest}
          inputRef={inputRef}
          iconRef={iconRef}
          labelRef={labelRef}
          inputSize={inputSize}
          onClose={onClose}
          onShow={onShow}
          isHelp
          inlineLabel={inlineLabel}
          shown={shown}
        >
          {help}
        </Tooltip>
      )}
      {error && (
        <Tooltip
          id={id}
          dataTest={dataTest}
          inputRef={inputRef}
          labelRef={labelRef}
          iconRef={iconRef}
          inputSize={inputSize}
          onClose={onClose}
          onShow={onShow}
          inlineLabel={inlineLabel}
          shown={shown}
        >
          {error}
        </Tooltip>
      )}
    </>
  );
};

export default ErrorFormTooltip;
