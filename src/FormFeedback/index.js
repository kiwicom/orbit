// @flow
import React, { useState } from "react";

import FormFeedbackTooltip from "../FormFeedbackTooltip";

import type { Props } from "./index";

const FormFeedback = ({
  error,
  help,
  tooltipShown,
  tooltipShownHover,
  labelRef,
  iconRef,
}: Props) => {
  const [helpClosed, setHelpClosed] = useState(false);

  // TODO: Get rid of those ugly conditions
  return (
    <>
      {help && !helpClosed && !error && (
        <FormFeedbackTooltip
          isHelp
          shown={!helpClosed}
          boundingRef={labelRef}
          iconBoundingRef={iconRef}
          onClick={() => setHelpClosed(true)}
        >
          {help}
        </FormFeedbackTooltip>
      )}
      {(tooltipShown || tooltipShownHover) && error && (
        <FormFeedbackTooltip
          shown={tooltipShown || tooltipShownHover}
          boundingRef={labelRef}
          iconBoundingRef={iconRef}
        >
          {error}
        </FormFeedbackTooltip>
      )}
    </>
  );
};

export default FormFeedback;
