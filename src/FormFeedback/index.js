// @flow
import React, { useState } from "react";

import FormFeedbackTooltip from "./Tooltip";

import type { Props } from "./index";

const FormFeedback = ({
  dataTest,
  error,
  help,
  tooltipShown,
  tooltipShownHover,
  labelRef,
  iconRef,
  inlineLabel,
}: Props) => {
  const [helpClosed, setHelpClosed] = useState(false);

  return (
    <>
      {help && !helpClosed && !error && (
        <FormFeedbackTooltip
          dataTest={dataTest}
          isHelp
          shown
          boundingRef={labelRef}
          iconBoundingRef={iconRef}
          inlineLabel={inlineLabel}
          onClick={() => setHelpClosed(true)}
        >
          {help}
        </FormFeedbackTooltip>
      )}
      {(tooltipShown || tooltipShownHover) && error && (
        <FormFeedbackTooltip
          dataTest={dataTest}
          shown
          boundingRef={labelRef}
          iconBoundingRef={iconRef}
          inlineLabel={inlineLabel}
        >
          {error}
        </FormFeedbackTooltip>
      )}
    </>
  );
};

export default FormFeedback;
