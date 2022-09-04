import * as React from "react";
import styled from "styled-components";

import transition, { TransitionDuration } from "../transition";
import defaultTheme from "../../defaultTheme";
import { Props, State } from "./index.d";

const getMaxHeight = ({ maxHeight }) => {
  if (maxHeight === 0) return `0px`;
  if (!maxHeight) return undefined;
  return `${maxHeight}px`;
};

export const StyledSlide = styled.div<{
  transitionDuration?: TransitionDuration;
  transitionFinished?: boolean;
  visible?: boolean;
  expanded?: boolean;
  maxHeight: number | null;
}>`
  position: relative;
  width: 100%;
  transition: ${({ transitionDuration }) =>
    transitionDuration && transition(["max-height"], transitionDuration, "linear")};
  max-height: ${getMaxHeight};
  overflow: ${({ transitionFinished }) => !transitionFinished && "hidden"};
  visibility: ${({ visible }) => !visible && "hidden"};
`;

StyledSlide.defaultProps = {
  theme: defaultTheme,
};

class Slide extends React.Component<Props, State> {
  state: State = {
    maxHeight: typeof this.props.maxHeight !== "undefined" ? this.props.maxHeight : 0,
    transitionFinished: false,
    visible: false,
  };

  static defaultProps = {
    transitionDuration: "fast",
  };

  expandTimeout: NodeJS.Timeout | null = null;

  collapseTimeout: NodeJS.Timeout | null = null;

  transitionFinishedTimeout: NodeJS.Timeout | null = null;

  visibleTimeout: NodeJS.Timeout | null = null;

  componentDidMount() {
    if (this.props.expanded) {
      this.setState({ transitionFinished: true, visible: true });
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: null | true) {
    if (snapshot) {
      if (this.props.expanded) {
        this.setMaxHeight();
        if (typeof setTimeout === "function") {
          if (this.visibleTimeout && typeof clearTimeout === "function") {
            clearTimeout(this.visibleTimeout);
            this.visibleTimeout = null;
          }
          this.setVisible(true)();
          this.expandTimeout = setTimeout(this.expandCallback, 150);
        }
      } else {
        if (this.state.maxHeight !== this.props.maxHeight) {
          this.setMaxHeight();
        }
        if (typeof setTimeout === "function") {
          if (this.expandTimeout && typeof clearTimeout === "function") {
            clearTimeout(this.expandTimeout);
            this.expandTimeout = null;
          }
          this.collapseTimeout = setTimeout(this.collapseCallback, 1);
        }
      }
    }
  }

  componentWillUnmount() {
    if (typeof clearTimeout === "function") {
      if (this.expandTimeout) {
        clearTimeout(this.expandTimeout);
      }
      if (this.collapseTimeout) {
        clearTimeout(this.collapseTimeout);
      }
      if (this.transitionFinishedTimeout) {
        clearTimeout(this.transitionFinishedTimeout);
      }
      if (this.visibleTimeout) {
        clearTimeout(this.visibleTimeout);
      }
    }
  }

  getSnapshotBeforeUpdate(prevProps: Props): null | boolean {
    if (this.props.expanded === prevProps.expanded) return null;
    return true;
  }

  setVisible: (visible: boolean) => () => void = (visible: boolean) => () => {
    this.setState({ visible });
  };

  setMaxHeight: () => void = () => {
    const { maxHeight } = this.props;
    this.setState({
      maxHeight,
    });
  };

  expandCallback: () => void = () => {
    this.setState({
      maxHeight: null,
    });
    this.transitionFinishedTimeout = setTimeout(this.transitionFinishedCallback(true), 100);
  };

  collapseCallback: () => void = () => {
    this.setState({
      maxHeight: 0,
      transitionFinished: false,
    });
    this.visibleTimeout = setTimeout(this.setVisible(false), 150);

    if (this.transitionFinishedTimeout && typeof clearTimeout === "function") {
      clearTimeout(this.transitionFinishedTimeout);
      this.transitionFinishedTimeout = null;
    }
  };

  transitionFinishedCallback: (transitionFinished: boolean) => () => void = (
    transitionFinished: boolean,
  ) => () => {
    this.setState({ transitionFinished });
  };

  render() {
    const { children, expanded = false, id, ariaLabelledBy, transitionDuration } = this.props;
    const { transitionFinished, maxHeight, visible } = this.state;
    return (
      <StyledSlide
        maxHeight={maxHeight}
        expanded={expanded}
        transitionFinished={transitionFinished}
        transitionDuration={transitionDuration}
        aria-hidden={!expanded}
        id={id}
        aria-labelledby={ariaLabelledBy}
        visible={visible}
        onClick={ev => {
          ev.stopPropagation();
        }}
      >
        {children}
      </StyledSlide>
    );
  }
}

export default Slide;
