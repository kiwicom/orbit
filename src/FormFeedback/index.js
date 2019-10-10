// @flow
import React, { useState } from "react";

import FormFeedbackTooltip from "../FormFeedbackTooltip";

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

  // TODO: Get rid of those ugly conditions
  return (
    <>
      {help && !helpClosed && !error && (
        <FormFeedbackTooltip
          dataTest={dataTest}
          isHelp
          shown
          boundingRef={labelRef}
          iconBoundingRef={iconRef}
          onClick={() => setHelpClosed(true)}
          inlineLabel={inlineLabel}
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
