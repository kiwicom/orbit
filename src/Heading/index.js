// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import { withTheme } from "theming";
import createComponentFromTagProp from "react-create-component-from-tag-prop";

type Props = {
  element: "h1" | "h2" | "h3" | "h4" | "h5",
  type: "display" | "title1" | "title2" | "title3",
  children: React.Node,
  theme: typeof defaultTokens,
};

const HeadingElement = createComponentFromTagProp({
  prop: "element",
  propsToOmit: ["type", "tokens", "theme"],
});

const StyledHeading = styled(HeadingElement)`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.tokens.sizeHeading[props.type]};
  font-weight: ${props => props.tokens.weightHeading[props.type]};
  color: ${props => props.theme.colorHeading};
  line-height: ${props => props.theme.lineHeightHeading};
  margin: 0;
`;

const Heading = (props: Props) => {
  const { children, theme } = props;
  const tokens = {
    weightHeading: {
      display: theme.fontWeightHeadingDisplay,
      title1: theme.fontWeightHeadingLevel1,
      title2: theme.fontWeightHeadingLevel2,
      title3: theme.fontWeightHeadingLevel3,
    },
    sizeHeading: {
      display: theme.fontSizeHeadingDisplay,
      title1: theme.fontSizeHeadingTitle1,
      title2: theme.fontSizeHeadingTitle2,
      title3: theme.fontSizeHeadingTitle3,
    },
  };
  return (
    <StyledHeading tokens={tokens} {...props}>
      {children}
    </StyledHeading>
  );
};

const HeadingWithTheme = withTheme(Heading);
HeadingWithTheme.displayName = "Heading";
HeadingWithTheme.defaultProps = {
  element: "h1",
  type: "title1",
};

export default HeadingWithTheme;
