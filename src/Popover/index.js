// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTokens from "../defaultTokens";
import Portal from "../Portal";
import type { Props } from "./index";

const PopoverChild = styled.div`
  background: red;
`;

const PopoverContent = styled.div`
  background: beige;
`;

class Popover extends React.PureComponent<Props, State> {
  render() {
    const { children, content, trigger } = this.props;

    return (
      <React.Fragment>
        <PopoverChild>{children}</PopoverChild>
        <Portal>
          <PopoverContent>{content}</PopoverContent>
        </Portal>
      </React.Fragment>
    );
  }
}
export default Popover;
