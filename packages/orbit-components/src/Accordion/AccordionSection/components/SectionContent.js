// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";

const Wrapper = styled.div`
  padding: ${({ theme }) => `0 ${theme.orbit.spaceLarge} ${theme.orbit.spaceLarge}`};
`;

Wrapper.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  children: React.Node,
  dataTest?: string,
|};

const AccordionSectionContent = ({ children, dataTest }: Props) => (
  <Wrapper data-test={`${dataTest}Content`}>{children}</Wrapper>
);

export default AccordionSectionContent;
