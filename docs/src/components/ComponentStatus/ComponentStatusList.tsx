import React from "react";
import styled, { css } from "styled-components";
import { Text, TextLink } from "@kiwicom/orbit-components";
import { Link } from "gatsby";

import { HEADER_HEIGHT, ROW_HEIGHT, GROUPS, PLATFORMS } from "./consts";
import {
  StyledContainer,
  StyledTable,
  StyledTableHead,
  StyledPlatform,
  StyledPlatformLabel,
  StyledTableBody,
  StyledTableCell,
  StyledStatusDot,
  StyledStatusName,
} from "./ComponentStatus";
import { h2 as H2 } from "../../mdx-components";
import useFontLoaded from "../../hooks/useFontLoaded";
import FigmaIcon from "../../images/statuses/figma.svg";
import ReactIcon from "../../images/statuses/react.svg";
import AppleIcon from "../../images/statuses/apple.svg";
import AndroidIcon from "../../images/statuses/android.svg";
import DocsIcon from "../../images/statuses/docs.svg";
import componentStatusData from "../../data/component-status.yaml";

const DEFAULT_COMPONENT_COL_WIDTH = 200;

const StyledScrollable = styled.div<{ $componentColWidth?: number }>`
  ${({ $componentColWidth = DEFAULT_COMPONENT_COL_WIDTH }) => css`
    overflow-x: auto;
    margin-left: ${$componentColWidth}px;

    ${StyledTable} {
      width: calc(100% + ${$componentColWidth}px);
    }
  `};
`;

const StyledColGroup = styled.colgroup`
  col:first-child {
    width: 0;
  }
  col:not(:first-child) {
    width: 25%;
  }
`;

const StyledComponentHead = styled.th<{ $width?: number }>`
  ${({ theme, $width = DEFAULT_COMPONENT_COL_WIDTH }) => css`
    position: absolute;
    left: 0;
    width: ${$width}px;
    height: calc(${HEADER_HEIGHT} + 1px);
    padding: 0 ${theme.orbit.spaceSixX};
    display: grid;
    place-content: center start;
    background: ${theme.orbit.paletteCloudLight};
    border-right: 1px solid ${theme.orbit.paletteCloudDark};
    border-bottom: 1px solid ${theme.orbit.paletteCloudDark};
  `};
`;

const StyledTableRow = styled.tr`
  ${({ theme }) => css`
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.orbit.paletteCloudDark};
    }
  `};
`;

const StyledComponentName = styled.th<{ $width?: number }>`
  ${({ theme, $width = DEFAULT_COMPONENT_COL_WIDTH }) => css`
    position: absolute;
    left: 0;
    width: ${$width}px;
    height: ${ROW_HEIGHT};
    display: grid;
    place-content: center start;
    border-right: 1px solid ${theme.orbit.paletteCloudDark};
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.orbit.paletteCloudDark};
    }
    a {
      padding: 0 ${theme.orbit.spaceSixX};
    }
  `};
`;

const StyledComponentText = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.orbit.spaceSixX};
    font-weight: ${theme.orbit.fontWeightMedium};
  `};
`;

function OrbitGatsbyLink({ href, ...props }) {
  return <Link to={href} {...props} />;
}

const ComponentStatusList = () => {
  const [componentColWidth, setComponentColWidth] = React.useState<number | undefined>();
  const fontLoaded = useFontLoaded();

  const componentColMeasurer = React.useCallback<(element: HTMLDivElement | null) => void>(
    element => {
      if (element && fontLoaded) {
        const domRect = element.getBoundingClientRect();
        setComponentColWidth(prevWidth => Math.max(prevWidth ?? 0, domRect.width));
      }
    },
    [fontLoaded],
  );

  return (
    <>
      {GROUPS.map(group => (
        <React.Fragment key={group}>
          <H2>{group}</H2>
          <StyledContainer>
            <StyledScrollable $componentColWidth={componentColWidth}>
              <StyledTable>
                <StyledColGroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </StyledColGroup>
                <StyledTableHead>
                  <tr>
                    <StyledComponentHead $width={componentColWidth}>
                      <Text weight="bold">Component</Text>
                    </StyledComponentHead>
                    {Object.entries({
                      Figma: FigmaIcon,
                      React: ReactIcon,
                      iOS: AppleIcon,
                      Android: AndroidIcon,
                      Documentation: DocsIcon,
                    }).map(([platform, Icon]) => (
                      <th key={platform}>
                        <StyledPlatform>
                          <Icon />
                          <StyledPlatformLabel $hidden>{platform}</StyledPlatformLabel>
                        </StyledPlatform>
                      </th>
                    ))}
                  </tr>
                </StyledTableHead>
                <StyledTableBody>
                  {componentStatusData
                    .filter(item => item.group === group)
                    .map(item => (
                      <StyledTableRow key={item.component}>
                        <StyledComponentName $width={componentColWidth}>
                          <div ref={componentColMeasurer}>
                            {item.docs === "Released" ? (
                              <TextLink
                                standAlone
                                // @ts-expect-error "asComponent" is not correctly typed
                                asComponent={OrbitGatsbyLink}
                                href={`/components/${group
                                  .toLowerCase()
                                  .replace(" ", "-")}/${item.component.toLowerCase()}/`}
                              >
                                {item.component}
                              </TextLink>
                            ) : (
                              <StyledComponentText>{item.component}</StyledComponentText>
                            )}
                          </div>
                        </StyledComponentName>
                        {PLATFORMS.map(platform => (
                          <td key={platform}>
                            <StyledTableCell>
                              <StyledStatusDot status={item[platform]} />
                              <StyledStatusName>{item[platform]}</StyledStatusName>
                            </StyledTableCell>
                          </td>
                        ))}
                      </StyledTableRow>
                    ))}
                </StyledTableBody>
              </StyledTable>
            </StyledScrollable>
          </StyledContainer>
        </React.Fragment>
      ))}
    </>
  );
};

export default ComponentStatusList;
