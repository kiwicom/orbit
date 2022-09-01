import * as React from "react";
import styled from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import * as Icons from "../icons";

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-radius: ${defaultTokens.borderRadiusLarge};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  width: 100%;
  min-height: 80px;
  background-color: white;
  margin-bottom: ${defaultTokens.spaceLarge};
  border-radius: ${defaultTokens.borderRadiusLarge};
  border: ${defaultTokens.borderWidthCard} ${defaultTokens.borderStyleCard}
    ${defaultTokens.paletteCloudNormal};
  padding-right: ${defaultTokens.spaceLarge};
`;

const IconImport = styled.div`
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 12px;
  line-height: ${defaultTokens.lineHeightTextSmall};
  color: ${defaultTokens.paletteInkNormal};
  background-color: ${defaultTokens.paletteCloudLight};
  border: ${defaultTokens.borderWidthCard} ${defaultTokens.borderStyleCard}
    ${defaultTokens.paletteCloudNormal};
  padding: ${defaultTokens.spaceXXSmall} ${defaultTokens.spaceXSmall};
`;

const IconList = () => (
  <List>
    {Object.keys(Icons)
      .filter(n => n !== "__namedExportsOrder")
      .map(icon => {
        const Icon = styled(Icons[icon])`
          padding: 0 ${defaultTokens.spaceLarge};
          flex-shrink: 0;
        `;

        const iconName = `${icon}`;
        return (
          <Container key={icon}>
            <Icon size="large" color="primary" />
            <IconImport>
              {`import ${iconName} from "@kiwicom/orbit-components/lib/icons/${iconName}"`}
            </IconImport>
          </Container>
        );
      })}
  </List>
);

export default IconList;
