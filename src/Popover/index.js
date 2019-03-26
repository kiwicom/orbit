// @flow
import * as React from "react";
import styled from "styled-components";

import Portal from "../Portal";
import PopoverContentWrapper from "./components/ContentWrapper";
import type { Props, State } from "./index.js.flow";

const StyledPopoverChild = styled.div`
  position: relative;
`;

class Popover extends React.PureComponent<Props, State> {
  state = {
    shown: false,
  };

  handleOut = () => {
    this.setState({ shown: false });
  };

  handleClick = () => {
    this.setState({ shown: !this.state.shown });
  };

  container: { current: any | HTMLDivElement } = React.createRef();

  render() {
    const { shown } = this.state;
    const { children, content, preferredPosition, dataTest } = this.props;

    return (
      <React.Fragment>
        <StyledPopoverChild onClick={this.handleClick} ref={this.container}>
          {children}
        </StyledPopoverChild>
        {shown && (
          <Portal element="popovers">
            <PopoverContentWrapper
              containerRef={this.container.current}
              preferredPosition={preferredPosition}
              onClose={this.handleOut}
              dataTest={dataTest}
            >
              {content}
            </PopoverContentWrapper>
          </Portal>
        )}
      </React.Fragment>
    );
  }
}

export default Popover;
