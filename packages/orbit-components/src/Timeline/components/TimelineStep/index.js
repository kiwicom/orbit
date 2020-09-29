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
import Hide from "../../../Hide";
import { useStatuses, useStep } from "../../TimelineContext";

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

const getLineWidth = (desktop, isLeft, last, theme) => {
  if (desktop) {
    if (!isLeft) return css`calc(50% + ${theme.orbit.spaceSmall})`;
    return "50%";
  }

  return "2px";
};

const ProgressLineStyled = styled.span`
  ${({ desktop, theme, status, isLeft, last }) => css`
    position: absolute;
    width: ${getLineWidth(desktop, isLeft, last, theme)};
    ${isLeft ? `left: 0` : `right: -20px`};
    z-index: -1;
    top: 40px;
    ${!desktop && `left: 11px`};
    background: ${renderStatus(status, theme)};
    ${!desktop && `top: 0`};
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
`;

const TimelineStep = ({ children, step, time, status }: Props) => {
  const { state, dispatch } = useStatuses();
  const { index, last } = useStep();

  const getStatus = state.statuses[index + 1];

  React.useEffect(() => {
    dispatch({ type: "ADD_STATUS", payload: status || null });
  }, [dispatch, status]);

  return (
    <>
      <Hide on={["desktop", "largeDesktop"]}>
        <RelativeStyled>
          <Stack inline spacing="compact" spaceAfter="large">
            {!last && <ProgressLineStyled status={getStatus} data-test="progressLine" />}
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
      </Hide>
      <Hide on={["smallMobile", "mediumMobile", "largeMobile", "tablet"]}>
        <RelativeStyled>
          <Stack inline direction="column" align="center" spacing="compact" spaceAfter="large">
            <TimeWrapperStyled visible={!!status}>
              <Text size="small">{time}</Text>
            </TimeWrapperStyled>
            <ProgressLineStyled data-test="progressLine" desktop isLeft status={status} />
            <IconWrapperStyled>
              <StatusIcon status={status} />
            </IconWrapperStyled>
            <ProgressLineStyled
              data-testid="progressLine"
              desktop
              last={last}
              status={getStatus || (last && status)}
            />
            <Stack flex align="center" direction="column">
              <Stack inline spacing="condensed" align="center">
                <Badge type={status}>
                  <Text type={status || "secondary"}>{step}</Text>
                </Badge>
              </Stack>
              <Text align="center" type={status ? "primary" : "secondary"}>
                {children}
              </Text>
            </Stack>
          </Stack>
        </RelativeStyled>
      </Hide>
    </>
  );
};

export default TimelineStep;
