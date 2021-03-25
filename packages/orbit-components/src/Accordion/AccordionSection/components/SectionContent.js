// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import type { Globals } from "../../../common/common.js.flow";

const Wrapper = styled.div`
  padding: ${({ theme }) => `0 ${theme.orbit.spaceLarge} ${theme.orbit.spaceLarge}`};
`;

Wrapper.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  children: React.Node,
  ...Globals,
|};

const AccordionSectionContent = ({ children, dataTest }: Props): React.Node => (
  <Wrapper data-test={dataTest && `${dataTest}Content`}>{children}</Wrapper>
);

export default AccordionSectionContent;
