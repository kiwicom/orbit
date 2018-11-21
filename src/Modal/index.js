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
import { right } from "../utils/rtl";

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
  max-width: ${({ modalWidth }) => `${modalWidth}px`};
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
    margin-${right}: ${({ theme }) => theme.orbit.spaceXXSmall};

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
            ? `inset 0 1px 0 ${theme.orbit.paletteCloudNormal}, 0 -2px 4px 0 rgba(23, 27, 30, 0)`
            : `inset 0 0 0 transparent, 0 -2px 4px 0 rgba(23, 27, 30, 0.1)`};
        position: fixed;
        transition: box-shadow ${theme.orbit.durationFast} ease-in-out;
        ${media.desktop`
          & {
            ${({ fullyScrolled }) =>
              fullyScrolled &&
              css`
                position: absolute;
              `};
              box-shadow: ${({ fullyScrolled }) => fullyScrolled && "none"};
          }
        `};
      }
      ${StyledModalSection}:last-of-type {
        border-radius: 0;
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
      margin-bottom: ${({ fixedFooter, footerHeight }) =>
        fixedFooter ? `${footerHeight}px` : "0"};
      &::after {
        content: none;
      }
    }
    ${StyledModalFooter} {
      padding: ${({ theme }) => `${theme.orbit.spaceLarge} ${theme.orbit.spaceXXLarge}`};
      max-width: ${({ modalWidth }) => `${modalWidth}px`};
    }
    ${CloseContainer} {
      top: ${({ scrolled, fixedClose }) => (fixedClose || scrolled) && "0"};
      left: ${({ scrolled, fixedClose, modalLeft }) =>
        (fixedClose || scrolled) && `${modalLeft}px`};
    }
    ${MobileHeader} {
      top: 0;
      left: ${({ modalLeft }) => `${modalLeft}px`};
    }
  `};
`;

ModalWrapperContent.defaultProps = {
  theme: defaultTokens,
};

const CloseElement = ({ onClose, closable, modalWidth }: CloseElementType) => (
  <CloseContainer modalWidth={modalWidth}>
    {closable && <ButtonLink onClick={onClose} size="normal" icon={<Close />} transparent />}
  </CloseContainer>
);

class Modal extends React.PureComponent<Props, State> {
  state = {
    scrolled: false,
    loaded: false,
    fixedClose: false,
    fullyScrolled: false,
    modalLeft: 0,
    modalWidth: 0,
    footerHeight: 0,
  };

  componentDidMount() {
    this.setScrollPoint();
    this.decideFixedFooter();
    this.timeout = setTimeout(
      () =>
        this.setState({
          loaded: true,
        }),
      150,
    );
    this.setDimensions();
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    if (!this.state.scrolled) {
      this.setScrollPoint();
      this.setDimensions();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  setDimensions = () => {
    const content = this.modalContent.current;
    if (content) {
      const footerEl = content.querySelector(`.${<StyledModalFooter />.type.styledComponentId}`);
      const contentDimensions = content.getBoundingClientRect();
      const modalLeft = contentDimensions.left;
      const modalWidth = contentDimensions.width;
      const footerHeight = footerEl?.clientHeight;
      this.setState({ modalLeft, modalWidth, footerHeight });
    }
  };

  setScrollPoint = () => {
    setTimeout(() => {
      if (!this.state.scrolled) {
        const content = this.modalContent.current;
        if (content instanceof HTMLElement) {
          const el = content.querySelector(`.${<StyledHeading />.type.styledComponentId}`);
          if (el) {
            this.offset = el.clientHeight + el.offsetTop;
          }
        }
      }
    }, 550);
  };

  decideFixedFooter = () => {
    // if the content height is smaller than window height, we need to explicitly set fullyScrolled to false
    // I don't know why, but DOM returns height that is smaller by 92 pixels
    // devTools are showing height + 92px
    const content = this.modalContent.current;
    const fullyScrolled = content?.scrollHeight + 92 < window.innerHeight;
    this.setState({ fullyScrolled });
  };

  handleResize = () => {
    this.setDimensions();
    this.decideFixedFooter();
  };

  handleMobileScroll = (ev: Event) => {
    if (ev.target instanceof HTMLDivElement && ev.target === this.modalContent.current) {
      this.setState({
        scrolled: ev.target.scrollTop >= this.offset,
        fixedClose: ev.target.scrollTop >= 1,
        fullyScrolled:
          this.props.fixedFooter &&
          // set this state sooner than the exact end of the scroll (with 10 value)
          ev.target.scrollTop >= ev.target.scrollHeight - ev.target.clientHeight - 10,
      });
    }
  };

  handleScroll = (ev: Event) => {
    if (ev.target instanceof HTMLDivElement && ev.target === this.modalBody.current) {
      this.setState({
        scrolled: ev.target.scrollTop >= this.offset,
        fixedClose: ev.target.scrollTop >= 40,
        fullyScrolled: ev.target.scrollTop >= ev.target.scrollHeight - ev.target.clientHeight - 40,
      });
    }
  };

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
      this.modalContent?.current &&
      ev.target instanceof Node &&
      !this.modalContent.current.contains(ev.target)
    ) {
      // If is clicked outside of modal
      onClose(ev);
    }
  };

  modalContent: { current: any | HTMLElement } = React.createRef();
  modalBody: { current: any | HTMLElement } = React.createRef();
  timeout: TimeoutID;
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
    const {
      scrolled,
      loaded,
      fixedClose,
      fullyScrolled,
      modalLeft,
      modalWidth,
      footerHeight,
    } = this.state;
    return (
      <ModalBody
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        onScroll={this.handleScroll}
        onClick={this.handleClickOutside}
        data-test={dataTest}
        ref={this.modalBody}
      >
        <ModalWrapper
          size={size}
          loaded={loaded}
          onScroll={this.handleMobileScroll}
          fixedFooter={fixedFooter}
        >
          <ModalWrapperContent
            size={size}
            fixedFooter={fixedFooter}
            scrolled={scrolled}
            ref={this.modalContent}
            fixedClose={fixedClose}
            fullyScrolled={fullyScrolled}
            modalLeft={modalLeft}
            modalWidth={modalWidth}
            footerHeight={footerHeight}
          >
            <CloseElement onClose={onClose} closable={closable} modalWidth={modalWidth} />
            {children}
          </ModalWrapperContent>
        </ModalWrapper>
      </ModalBody>
    );
  }
}

export default Modal;
