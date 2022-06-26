import React from "react";
import styled, { css } from "styled-components";
import { Text, mediaQueries as mq } from "@kiwicom/orbit-components";

import { srOnly, notSrOnly } from "../mixins";
import { HEADER_HEIGHT, ROW_HEIGHT, STATUS_COLOR, PLATFORMS, Status } from "./consts";
import FigmaIcon from "../../images/statuses/figma.svg";
import ReactIcon from "../../images/statuses/react.svg";
import AppleIcon from "../../images/statuses/apple.svg";
import AndroidIcon from "../../images/statuses/android.svg";
import componentStatusData from "../../data/component-status.yaml";

export const StyledContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    border: 1px solid ${theme.orbit.paletteCloudDark};
    border-radius: ${theme.orbit.borderRadiusLarge};
    overflow: hidden;
  `};
`;

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTableHead = styled.thead`
  ${({ theme }) => css`
    background: ${theme.orbit.paletteCloudLight};
    border-bottom: 1px solid ${theme.orbit.paletteCloudDark};
    tr {
      height: ${HEADER_HEIGHT};
    }
  `};
`;

export const StyledPlatform = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.orbit.spaceXSmall};
    align-items: center;
    justify-content: center;
  `};
`;

export const StyledPlatformLabel = styled.div<{ $hidden?: boolean }>`
  ${({ $hidden }) => css`
    ${srOnly};
    ${!$hidden &&
    css`
      ${mq.largeMobile(css`
        ${notSrOnly};
      `)};
      ${mq.tablet(css`
        ${srOnly};
      `)};
      ${mq.desktop(css`
        ${notSrOnly};
      `)};
    `};
  `}
`;

export const StyledTableBody = styled.tbody`
  tr {
    height: ${ROW_HEIGHT};
  }
`;

export const StyledTableCell = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.orbit.spaceXSmall};
    align-items: center;
    justify-content: center;
    ${mq.tablet(css`
      flex-direction: column;
      gap: ${theme.orbit.spaceXSmall};
    `)};
    ${mq.desktop(css`
      flex-direction: row;
      gap: ${theme.orbit.spaceSmall};
    `)};
  `};
`;

export const StyledStatusDot = styled.div<{ status: Status }>`
  ${({ theme, status }) => css`
    width: ${theme.orbit.spaceXSmall};
    height: ${theme.orbit.spaceXSmall};
    border-radius: ${theme.orbit.borderRadiusCircle};
    background: ${theme.orbit[STATUS_COLOR[status]]};
  `};
`;

export const StyledStatusName = styled.div`
  ${srOnly};
  ${mq.largeMobile(css`
    ${notSrOnly};
  `)};
`;

interface Props {
  component: string;
}

const ComponentStatus = ({ component: componentName }: Props) => {
  const component = componentStatusData.find(item => item.component === componentName);

  if (!component) {
    return <Text>This component has not yet been started.</Text>;
  }

  return (
    <StyledContainer>
      <StyledTable>
        <StyledTableHead>
          <tr>
            {Object.entries({
              Figma: FigmaIcon,
              React: ReactIcon,
              iOS: AppleIcon,
              Android: AndroidIcon,
            }).map(([platform, Icon]) => (
              <th key={platform}>
                <StyledPlatform>
                  <Icon />
                  <StyledPlatformLabel>
                    <Text>{platform}</Text>
                  </StyledPlatformLabel>
                </StyledPlatform>
              </th>
            ))}
          </tr>
        </StyledTableHead>
        <StyledTableBody>
          <tr>
            {PLATFORMS.filter(platform => platform !== "docs").map(platform => (
              <td key={platform}>
                <StyledTableCell>
                  <StyledStatusDot status={component[platform]} />
                  <StyledStatusName>{component[platform]}</StyledStatusName>
                </StyledTableCell>
              </td>
            ))}
          </tr>
        </StyledTableBody>
      </StyledTable>
    </StyledContainer>
  );
};

export default ComponentStatus;
