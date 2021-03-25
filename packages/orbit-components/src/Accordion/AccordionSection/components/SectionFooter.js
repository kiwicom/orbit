// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import type { Globals } from "../../../common/common.js.flow";

const Wrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.orbit.spaceLarge};
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  position: sticky;
  bottom: 0;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowActionActive};
`;

Wrapper.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  children: React.Node,
  ...Globals,
|};

const AccordionSectionFooter = ({ children, dataTest }: Props): React.Node => (
  <Wrapper data-test={dataTest && `${dataTest}Footer`}>{children}</Wrapper>
);

export default AccordionSectionFooter;
