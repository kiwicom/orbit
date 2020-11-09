// @flow
import React, { useRef } from "react";
import styled from "styled-components";

import TooltipPrimitive from "../primitives/TooltipPrimitive";
import defaultTheme from "../defaultTheme";
import { rtlSpacing } from "../utils/rtl";
import resolveTooltipPosition from "./helpers/resolveTooltipPosition";
import useDimensions from "./hooks/useDimensions";

import type { Props } from "./index";

const StyledFormFeedbackTooltip = styled.div`
  position: absolute;
  ${resolveTooltipPosition};
`;

StyledFormFeedbackTooltip.defaultProps = {
  theme: defaultTheme,
};

const StyledCloseButton = styled.a`
  color: ${({ theme }) => theme.orbit.paletteWhite};
  cursor: pointer;
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
  display: flex;
`;

StyledCloseButton.defaultProps = {
  theme: defaultTheme,
};

const TooltipForm = ({
  iconRef,
  labelRef,
  tooltipShown,
  prefferedPosition = "top",
  prefferedAlign,
  dataTest,
  error,
  help,
  inlineLabel,
}: Props) => {
  const contentRef = useRef(null);

  const { iconBounding, bounding } = useDimensions(
    { iconBoundingRef: iconRef, boundingRef: labelRef },
    inlineLabel,
  );

  return (
    <StyledFormFeedbackTooltip
      ref={contentRef}
      data-test={dataTest}
      iconBounding={iconBounding}
      bounding={bounding}
      position="top"
      inlineLabel={inlineLabel}
      aria-live="polite"
    >
      {help && !error && (
        <TooltipPrimitive
          preferredPosition={prefferedPosition}
          preferredAlign={prefferedAlign}
          content={help}
          help={!!help}
          tooltipShown={tooltipShown}
        />
      )}
      {error && (
        <TooltipPrimitive
          preferredPosition={prefferedPosition}
          preferredAlign={prefferedAlign}
          content={error}
          error={!!error}
          tooltipShown={tooltipShown}
        />
      )}
    </StyledFormFeedbackTooltip>
  );
};

export default TooltipForm;
