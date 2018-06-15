// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";
import createComponentFromTagProp from "react-create-component-from-tag-prop";

export const ELEMENT_OPTIONS = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
};

export const TYPE_OPTIONS = {
  DISPLAY: "display",
  TITLE1: "title1",
  TITLE2: "title2",
  TITLE3: "title3",
};

type Props = {|
  element: $Values<typeof ELEMENT_OPTIONS>,
  type: $Values<typeof TYPE_OPTIONS>,
  children: React.Node,
  theme: typeof defaultTokens,
|};

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
  const { children, theme, type, element } = props;
  const tokens = {
    weightHeading: {
      [TYPE_OPTIONS.DISPLAY]: theme.fontWeightHeadingDisplay,
      [TYPE_OPTIONS.TITLE1]: theme.fontWeightHeadingLevel1,
      [TYPE_OPTIONS.TITLE2]: theme.fontWeightHeadingLevel2,
      [TYPE_OPTIONS.TITLE3]: theme.fontWeightHeadingLevel3,
    },
    sizeHeading: {
      [TYPE_OPTIONS.DISPLAY]: theme.fontSizeHeadingDisplay,
      [TYPE_OPTIONS.TITLE1]: theme.fontSizeHeadingTitle1,
      [TYPE_OPTIONS.TITLE2]: theme.fontSizeHeadingTitle2,
      [TYPE_OPTIONS.TITLE3]: theme.fontSizeHeadingTitle3,
    },
  };
  return (
    <StyledHeading theme={theme} tokens={tokens} type={type} element={element}>
      {children}
    </StyledHeading>
  );
};

Heading.defaultProps = {
  element: "h1",
  type: "title1",
  theme: defaultTokens,
};

export default Heading;
