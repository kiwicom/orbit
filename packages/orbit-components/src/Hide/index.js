// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import getViewportHideStyles from "./helpers/getViewportHideStyles";
import getDisplay from "./helpers/getDisplay";

import type { Props } from "./index";

const StyledHide = styled(({ on, block, theme, forwardRef, hidden, ...props }) => (
  <div {...props} ref={forwardRef} aria-hidden={hidden} />
))`
  ${({ on }) => getViewportHideStyles(on, getDisplay)};
`;

StyledHide.defaultProps = {
  theme: defaultTheme,
};

const Hide = ({ on = [], block, children }: Props) => {
  const [hidden, setHidden] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const getDisplayStatus = () => {
      if (ref && ref.current) {
        const { display } = getComputedStyle(ref.current);
        if (display === "none") setHidden(true);
        else setHidden(false);
      }
    };

    window.addEventListener("resize", getDisplayStatus);

    return () => {
      window.removeEventListener("resize", getDisplayStatus);
    };
  }, []);

  return (
    <StyledHide on={on} forwardRef={ref} hidden={hidden} block={block}>
      {children}
    </StyledHide>
  );
};

export default Hide;
