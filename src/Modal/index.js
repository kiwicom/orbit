// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTokens from "../defaultTokens";
import ButtonLink, { StyledButtonLink } from "../ButtonLink";
import Close from "../icons/Close";
import SIZES from "./consts";
import media from "../utils/media";
import { StyledModalFooter } from "./ModalFooter";
import { MobileHeader } from "./ModalHeader";
import { StyledModalSection } from "./ModalSection";
import { StyledHeading } from "../Heading";

import type { Props, State, CloseElementType } from "./index";

const getSizeToken = () => ({ size }) => {
  const tokens = {
    // TODO: create tokens widthModalSmall,...
    [SIZES.SMALL]: "540px",
    [SIZES.NORMAL]: "740px",
    [SIZES.LARGE]: "1280px",
  };

  return tokens[size];
};

const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.orbit.zIndexModalOverlay};
  box-sizing: border-box;
  outline: none;
  overflow-x: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: ${({ theme }) => theme.orbit.fontfamily};

  ${media.desktop`
    overflow-y: auto;
    padding: ${({ theme }) => theme.orbit.spaceXXLarge};
 `};
`;

ModalBody.defaultProps = {
  theme: defaultTokens,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;

  position: fixed;
  width: 100%;
  border-top-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border-top-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  transition: top ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  top: ${({ loaded }) => (loaded ? "32px" : "100%")};

  ${media.desktop`
    position: relative;
    top: 0;
    max-width: ${getSizeToken};
    align-items: center;
  `};
`;

ModalWrapper.defaultProps = {
  theme: defaultTokens,
};

const CloseContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  // TODO create tokens
  height: 52px;
  width: 100%;
  transition: box-shadow ${({ theme }) => theme.orbit.durationNormal} ease-in-out,
    background-color ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  border-top-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border-top-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};

  & + ${StyledModalSection}:first-of-type {
    padding-top: 52px;
    border-top: 0;
    margin: 0;
  }

  ${StyledButtonLink} {
    margin-right: 4px;

    & svg {
      transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
      color: ${({ theme }) => theme.orbit.paletteInkLight};
    }
    &:hover svg {
      color: ${({ theme }) => theme.orbit.paletteInkLightHover};
    }

    &:active svg {
      color: ${({ theme }) => theme.orbit.paletteInkLightActive};
    }
  }
`;

CloseContainer.defaultProps = {
  theme: defaultTokens,
};

const ModalWrapperContent = styled.div`
  position: absolute;
  box-sizing: border-box;
  border-top-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border-top-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  background-color: ${({ theme }) => theme.orbit.backgroundModal};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  width: 100%;
  height: calc(
    100% - ${({ theme }) => theme.orbit.spaceXLarge} -
      ${({ fixedFooter }) => (fixedFooter ? "76px" : "0px")}
  );
  box-shadow: ${({ theme }) => theme.orbit.boxShadowModal};
  overflow-y: auto;
  overflow-x: hidden;

  ${StyledModalSection}:last-of-type {
    padding-bottom: ${({ theme, fixedFooter }) => fixedFooter && theme.orbit.spaceLarge};
    margin-bottom: ${({ fixedFooter }) => fixedFooter && "0"};
  }
  ${({ fixedFooter, theme }) =>
    fixedFooter &&
    css`
      ${StyledModalFooter} {
        padding: ${theme.orbit.spaceMedium};
        box-shadow: ${({ fullyScrolled }) =>
          fullyScrolled
            ? `0 0 1px 0 ${theme.orbit.paletteCloudNormal}`
            : "0 -2px 4px 0 rgba(23, 27, 30, 0.1)"};
        position: fixed;
        transition: box-shadow ${theme.orbit.durationFast} ease-in-out;
      }
    `};

  ${MobileHeader} {
    top: ${({ scrolled, theme }) => scrolled && theme.orbit.spaceXLarge};
    opacity: ${({ scrolled }) => scrolled && "1"};
  }
  ${CloseContainer} {
    top: ${({ scrolled, fixedClose }) => (fixedClose || scrolled) && "32px"};
    position: ${({ scrolled, fixedClose }) => (fixedClose || scrolled) && "fixed"};
    box-shadow: ${({ scrolled }) => scrolled && `0 2px 4px 0 rgba(23, 27, 30, 0.1)`};
    background-color: ${({ theme, scrolled }) => scrolled && theme.orbit.paletteWhite};
  }

  ${media.desktop`
    position: relative;
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    padding-bottom: 0;
    height: auto;
    overflow: visible;
    ${StyledModalSection}:last-of-type {
      padding-bottom: ${({ theme }) => theme.orbit.spaceXXLarge};
      margin-bottom: 0;
      &::after {
        content: none;
      }
    }
    ${StyledModalFooter} {
      position: relative;
      box-shadow: none;
      padding: ${({ theme }) => `0 ${theme.orbit.spaceXXLarge} ${theme.orbit.spaceXXLarge}`};
    }
    ${CloseContainer} {
      position: absolute;
      top: 0;
    }
  `};
`;

ModalWrapperContent.defaultProps = {
  theme: defaultTokens,
};

const CloseElement = ({ onClose, closable }: CloseElementType) => (
  <CloseContainer>
    {closable && <ButtonLink onClick={onClose} size="normal" icon={<Close />} transparent />}
  </CloseContainer>
);

class Modal extends React.PureComponent<Props, State> {
  constructor() {
    super();
    // $FlowExpected
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    scrolled: false,
    loaded: false,
    fixedClose: false,
    fullyScrolled: false,
  };

  componentDidMount() {
    // eslint-disable-next-line
    setTimeout(
      () =>
        this.setState({
          loaded: true,
        }),
      150,
    );
  }

  componentDidUpdate() {
    if (!this.state.scrolled) {
      this.setScrollPoint();
    }
  }

  setScrollPoint() {
    setTimeout(() => {
      if (!this.state.scrolled) {
        const { node } = this;
        if (node instanceof HTMLElement) {
          const el = node.querySelector(`.${<StyledHeading />.type.styledComponentId}`);
          if (el) {
            this.offset = el.clientHeight + el.offsetTop;
          }
        }
      }
    }, 550);
  }

  handleScroll(ev: Event) {
    if (ev.target instanceof HTMLDivElement) {
      this.setState({
        scrolled: ev.target.scrollTop >= this.offset,
        fixedClose: ev.target.scrollTop >= 1,
        fullyScrolled:
          this.props.fixedFooter &&
          // set this state sooner than the exact end of the scroll (with 10 value)
          ev.target.scrollTop >= ev.target.scrollHeight - ev.target.clientHeight - 10,
      });
    }
  }

  handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLDivElement>) => {
    const { onClose, closable } = this.props;
    if (closable && ev.key === "Escape" && onClose) {
      onClose(ev);
    }
  };

  handleClickOutside = (ev: MouseEvent) => {
    const { onClose, closable } = this.props;

    if (
      closable &&
      onClose &&
      this.node &&
      ev.target instanceof Node &&
      !this.node.contains(ev.target)
    ) {
      // If is clicked outside of modal
      onClose(ev);
    }
  };

  node: ?HTMLElement;
  offset = 40;

  render() {
    const {
      onClose,
      children,
      size = SIZES.NORMAL,
      closable = true,
      fixedFooter = false,
      dataTest,
    } = this.props;
    const { scrolled, loaded, fixedClose, fullyScrolled } = this.state;
    return (
      <ModalBody
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClickOutside}
        data-test={dataTest}
      >
        <ModalWrapper
          size={size}
          loaded={loaded}
          onScroll={this.handleScroll}
          fixedFooter={fixedFooter}
        >
          <ModalWrapperContent
            size={size}
            fixedFooter={fixedFooter}
            scrolled={scrolled}
            innerRef={node => {
              this.node = node;
            }}
            fixedClose={fixedClose}
            fullyScrolled={fullyScrolled}
          >
            <CloseElement onClose={onClose} closable={closable} />
            {children}
          </ModalWrapperContent>
        </ModalWrapper>
      </ModalBody>
    );
  }
}

export default Modal;
