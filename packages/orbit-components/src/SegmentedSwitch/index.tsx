import * as React from "react";
import styled, { css } from "styled-components";

import getSpacingToken from "../common/getSpacingToken";
import FormLabel from "../FormLabel";
import defaultTheme from "../defaultTheme";
import Stack from "../Stack";
import SwitchSegment, { StyledText, StyledLabel } from "./SwitchSegment";
import ErrorFormTooltip from "../ErrorFormTooltip";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import type { Props } from "./types";

const StyledWrapper = styled.label<{
  $maxWidth?: Props["maxWidth"];
  spaceAfter?: Props["spaceAfter"];
}>`
  ${({ theme, $maxWidth }) => css`
    display: flex;
    width: 100%;
    position: relative;
    flex-direction: column;
    max-width: ${$maxWidth};
    margin-bottom: ${getSpacingToken};
    gap: ${theme.orbit.spaceXXXSmall};

    ${StyledLabel} {
      &:nth-child(odd) {
        ${StyledText} {
          border-radius: 5px 0 0 5px;
        }
      }

      &:nth-child(even) {
        ${StyledText} {
          border-radius: 0 5px 5px 0;
        }
      }
    }
  `};
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const SegmentedSwitch = ({
  options,
  dataTest,
  onChange,
  showTooltip,
  spaceAfter,
  onFocus,
  maxWidth,
  help,
  error,
  label,
}: Props) => {
  const {
    tooltipShown,
    tooltipShownHover,
    setTooltipShown,
    setTooltipShownHover,
    labelRef,
  } = useErrorTooltip({ onFocus });

  React.useEffect(() => {
    if (showTooltip) setTooltipShown(true);
    else setTooltipShown(false);
  }, [showTooltip]);

  return (
    <StyledWrapper spaceAfter={spaceAfter} data-test={dataTest} $maxWidth={maxWidth}>
      {label && (
        <FormLabel
          help={!!help}
          error={!!error}
          labelRef={labelRef}
          onMouseEnter={() => setTooltipShownHover(true)}
          onMouseLeave={() => setTooltipShownHover(false)}
        >
          {label}
        </FormLabel>
      )}
      <Stack flex spacing="none">
        {options.map(({ value, label: optionLabel, ...props }) => (
          <SwitchSegment
            key={value}
            value={value}
            label={optionLabel}
            setTooltipShown={setTooltipShown}
            onChange={onChange}
            onFocus={onFocus}
            {...props}
          />
        ))}
      </Stack>
      {(!!help || !!error) && (
        <ErrorFormTooltip
          help={help}
          error={error}
          helpClosable={false}
          shown={tooltipShown || tooltipShownHover}
          onShown={prev => setTooltipShown(!prev)}
          referenceElement={labelRef}
        />
      )}
    </StyledWrapper>
  );
};

export default SegmentedSwitch;
export { Props };
