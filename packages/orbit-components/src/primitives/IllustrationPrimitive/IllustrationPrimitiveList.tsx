import React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import mq from "../../utils/mediaQuery";

import IllustrationPrimitive from ".";

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};
`;

List.defaultProps = {
  theme: defaultTheme,
};

const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    width: 100%;
    min-height: 80px;
    background-color: white;
    margin-bottom: ${theme.orbit.spaceLarge};
    border-radius: ${theme.orbit.borderRadiusLarge};
    border: ${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard}
      ${theme.orbit.paletteCloudNormal};
    padding: ${theme.orbit.spaceLarge};
    ${mq.largeMobile(css`
      flex-direction: row;
    `)};
  `}
`;

Container.defaultProps = {
  theme: defaultTheme,
};

const IllustrationJSX = styled.div`
  ${({ theme }) => css`
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    font-size: 12px;
    line-height: ${theme.orbit.lineHeightTextSmall};
    color: ${theme.orbit.paletteInkNormal};
    background-color: ${theme.orbit.paletteCloudLight};
    border: ${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard}
      ${theme.orbit.paletteCloudNormal};
    margin-top: ${theme.orbit.spaceMedium};
    padding: ${theme.orbit.spaceXXSmall} ${theme.orbit.spaceXSmall};
    ${mq.largeMobile(css`
      margin: 0;
    `)};
  `}
`;

IllustrationJSX.defaultProps = {
  theme: defaultTheme,
};

const IllustrationPrimitiveList = (props: { images: string[]; nameOfComponent: string }) => {
  return (
    <List>
      {props.images.map(illustration => {
        return (
          <Container key={illustration}>
            <IllustrationPrimitive name={illustration} />
            <IllustrationJSX>{`<${props.nameOfComponent} name="${illustration}" />`}</IllustrationJSX>
          </Container>
        );
      })}
    </List>
  );
};

export default IllustrationPrimitiveList;
