// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";

const Wrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.orbit.spaceLarge};
  background-color: white;
  position: sticky;
  bottom: 0;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowActionActive};
`;

Wrapper.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  children: React.Node,
|};

const AccordionSectionFooter = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AccordionSectionFooter;
