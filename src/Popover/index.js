// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTokens from "../defaultTokens";
import Portal from "../Portal";
import ClickOutside from "../ClickOutside";
import PopoverContentWrapper from "./helpers/ContentWrapper";

import type { Props } from "./index";

const StyledPopoverChild = styled.div`
  position: relative;
`;
StyledPopoverChild.defaultProps = {
  theme: defaultTokens,
};

class Popover extends React.PureComponent<Props, State> {
  state = {
    shown: false,
  };

  handleIn = () => {
    this.setState({ shown: true });
  };

  handleOut = () => {
    this.setState({ shown: false });
  };

  handleClick = () => {
    this.setState({ shown: !this.state.shown });
  };

  handleClickOutside = () => {
    this.timeOutOutside = setTimeout(() => {
      this.setState({ shown: false });
    });
  };

  handleClickContent = () => {
    clearTimeout(this.timeOutOutside);
  };

  container: { current: any | HTMLDivElement } = React.createRef();

  render() {
    const { shown } = this.state;
    const { children, content, preferredPosition, prefferedAnchorPosition } = this.props;
    const { handleClickContent, handleOut, container } = this;

    return (
      <React.Fragment>
        <StyledPopoverChild onClick={this.handleClick} ref={container}>
          <ClickOutside onClickOutside={this.handleClickOutside}>{children}</ClickOutside>
        </StyledPopoverChild>
        {shown && (
          <Portal>
            <PopoverContentWrapper
              containerRef={container}
              content={content}
              handleClickContent={handleClickContent}
              preferredPosition={preferredPosition}
              prefferedAnchorPosition={prefferedAnchorPosition}
              handleClose={handleOut}
            />
          </Portal>
        )}
      </React.Fragment>
    );
  }
}

export default Popover;
