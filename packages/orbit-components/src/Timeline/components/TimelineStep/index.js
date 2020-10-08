// @flow
import React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import Badge from "../../../Badge";
import Text from "../../../Text";
import Stack from "../../../Stack";
import CheckCircle from "../../../icons/CheckCircle";
import Circle from "../../../icons/CircleEmpty";
import AlertCircle from "../../../icons/AlertCircle";
import CloseCircle from "../../../icons/CloseCircle";
import { useStatuses, useStep } from "../../TimelineContext";
import useMediaQuery from "../../../hooks/useMediaQuery";

import type { Props } from "./index";

const IconWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ theme }) => theme.orbit.spaceLarge};
  min-height: ${({ theme }) => theme.orbit.spaceLarge};
  svg {
    background: ${({ theme }) => theme.orbit.paletteWhite};
  }
`;

IconWrapperStyled.defaultProps = {
  theme: defaultTheme,
};

const StatusIcon = ({ status }) => {
  if (status === "success") return <CheckCircle color="success" />;
  if (status === "warning") return <AlertCircle color="warning" />;
  if (status === "critical") return <CloseCircle color="critical" />;

  return <Circle color="tertiary" size="small" />;
};

const renderStatus = (status, theme) => {
  if (status === "success") return theme.orbit.colorTextSuccess;
  if (status === "warning") return theme.orbit.colorTextWarning;
  if (status === "critical") return theme.orbit.colorTextCritical;

  return theme.orbit.paletteCloudNormalHover;
};

const ProgressLineStyled = styled.span`
  ${({ desktop, theme, status, isLeft }) => css`
    ${!desktop && `position: absolute`};
    width: ${desktop ? "50%" : "2px"};
    ${isLeft ? `left: 0` : `right: -20px`};
    z-index: -1;
    ${!desktop && `left: 11px`};
    background: ${renderStatus(status, theme)};
    height: ${desktop ? `2px` : `calc(100% + 20px)`};
  `}
`;

ProgressLineStyled.defaultProps = {
  theme: defaultTheme,
};

const TimeWrapperStyled = styled.div`
  visibility: ${({ visible }) => (visible ? `visible` : `hidden`)};
`;

const IndentStyled = styled.div`
  padding-left: ${({ theme }) => theme.orbit.spaceXSmall};
`;

IndentStyled.defaultProps = {
  theme: defaultTheme,
};

const RelativeStyled = styled.div`
  position: relative;
  ${({ inner, theme }) =>
    inner &&
    css`
      width: calc(100% + ${parseInt(theme.orbit.spaceSmall, 10) * 2}px);
      display: flex;
      align-items: center;
    `};
`;

RelativeStyled.defaultProps = {
  theme: defaultTheme,
};

const DescriptionStyled = styled.div`
  max-width: 250px;
  width: 100%;
`;

const TimelineStep = ({ children, step, time, status }: Props) => {
  const { statuses, setStatuses } = useStatuses();
  const { index, last } = useStep();
  const { isDesktop } = useMediaQuery();

  const nextStatus = statuses[index + 1];

  React.useEffect(() => {
    setStatuses(prev => ({ ...prev, [index]: status || null }));
  }, [setStatuses, status, index]);

  return isDesktop ? (
    <RelativeStyled>
      <Stack inline direction="column" align="center" spacing="compact" spaceAfter="large">
        <TimeWrapperStyled visible={!!status}>
          <Text size="small">{time}</Text>
        </TimeWrapperStyled>
        <RelativeStyled inner>
          <ProgressLineStyled data-test="progressLine" desktop isLeft status={status} />
          <IconWrapperStyled>
            <StatusIcon status={status} />
          </IconWrapperStyled>
          <ProgressLineStyled
            data-test="progressLine"
            desktop
            status={nextStatus || (last && status)}
          />
        </RelativeStyled>
        <Stack flex align="center" direction="column">
          <Stack inline spacing="condensed" align="center">
            <Badge type={status}>
              <Text type={status || "secondary"}>{step}</Text>
            </Badge>
          </Stack>
          <Text align="center" type={status ? "primary" : "secondary"}>
            <DescriptionStyled>{children}</DescriptionStyled>
          </Text>
        </Stack>
      </Stack>
    </RelativeStyled>
  ) : (
    <RelativeStyled>
      <Stack inline spacing="compact" spaceAfter="large">
        {!last && <ProgressLineStyled status={nextStatus} data-test="progressLine" />}
        <IconWrapperStyled>
          <StatusIcon status={status} />
        </IconWrapperStyled>
        <Stack flex direction="column">
          <Stack inline spacing="condensed" align="center">
            <Badge type={status}>
              <Text type={status || "secondary"}>{step}</Text>
            </Badge>
            <Text size="small">{time}</Text>
          </Stack>
          <IndentStyled>
            <Text type={status ? "primary" : "secondary"}>{children}</Text>
          </IndentStyled>
        </Stack>
      </Stack>
    </RelativeStyled>
  );
};

export default TimelineStep;
