// @flow
import React, { useEffect } from "react";
import styled from "styled-components";

import { rtlSpacing } from "../../utils/rtl";
import defaultTheme from "../../defaultTheme";
import { StyledTag } from "../../Tag";

import type { Props } from "./index";

const StyledInputTags = styled.div`
  position: relative;
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  height: 100%;
  z-index: 2;
  min-width: 50px;
  overflow: hidden;

  order: -1;
`;

StyledInputTags.defaultProps = {
  theme: defaultTheme,
};

const StyledInputTagsInner = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */

  &::-webkit-scrollbar {
    display: none;
  }

  ${StyledTag} + ${StyledTag} {
    margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceXSmall}`)};
  }
`;

StyledInputTagsInner.defaultProps = {
  theme: defaultTheme,
};

const InputTags = ({ children }: Props) => {
  const tagsRef = React.createRef();

  useEffect(() => {
    const handleMouseMove = event => {
      if (tagsRef && tagsRef.current) {
        const { isDragging } = tagsRef.current;
        if (isDragging && event.movementX) {
          tagsRef.current.scrollLeft -= event.movementX;
        }
      }
    };

    const handleMouseUp = () => {
      if (tagsRef && tagsRef.current) {
        tagsRef.current.isDragging = false;
      }
    };

    if (tagsRef && tagsRef.current) {
      tagsRef.current.addEventListener("mousemove", handleMouseMove);
      tagsRef.current.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      const tagsNode = tagsRef.current;
      if (tagsNode) {
        tagsNode.removeEventListener("mousemove", handleMouseMove);
        tagsNode.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [tagsRef]);

  return (
    <StyledInputTags>
      <StyledInputTagsInner
        ref={tagsRef}
        onMouseDown={() => {
          if (tagsRef && tagsRef.current) {
            tagsRef.current.isDragging = true;
          }
        }}
      >
        {children}
      </StyledInputTagsInner>
    </StyledInputTags>
  );
};

export default InputTags;
