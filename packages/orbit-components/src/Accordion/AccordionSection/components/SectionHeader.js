// @flow
import * as React from "react";
import styled from "styled-components";

import Button from "../../../Button";
import defaultTheme from "../../../defaultTheme";

const Wrapper = styled.div`
  display: flex;
  padding: ${({ theme, noPadding }) =>
    !noPadding && `${theme.orbit.spaceXLarge} ${theme.orbit.spaceLarge}`};
  background-color: white;
  align-items: center;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const HeaderActions = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.orbit.spaceLarge};
`;

Wrapper.defaultProps = {
  theme: defaultTheme,
};

HeaderActions.defaultProps = {
  theme: defaultTheme,
};

type Props = {
  children: React.Node,
  expanded: boolean,
  expandable: boolean,
  onExpand?: () => void | Promise<any>,
  actions?: React.Node,
};

const AccordionSectionHeader = ({
  children,
  actions,
  expanded,
  onExpand,
  expandable = true,
}: Props) => {
  return (
    <Wrapper>
      <HeaderContent>{children}</HeaderContent>
      {!expanded && (
        <HeaderActions>
          {expandable &&
            (actions || (
              <Button onClick={onExpand} type="secondary">
                Open
              </Button>
            ))}
        </HeaderActions>
      )}
    </Wrapper>
  );
};

export default AccordionSectionHeader;
