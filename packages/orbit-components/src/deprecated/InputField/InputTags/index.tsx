import * as React from "react";
import styled from "styled-components";

import { rtlSpacing } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";
import { StyledTag } from "../../../Tag";

const StyledInputTags = styled.div`
  position: relative;
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceThreeX}`)};
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  height: 100%;
  z-index: 2;
  min-width: 50px;
  overflow: hidden;
`;

StyledInputTags.defaultProps = {
  theme: defaultTheme,
};

const StyledInputTagsInner = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  display: flex;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }

  ${StyledTag} + ${StyledTag} {
    margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceTwoX}`)};
  }
`;

StyledInputTagsInner.defaultProps = {
  theme: defaultTheme,
};

const InputTags = ({ children }: { children: React.ReactNode }) => {
  const tagsRef = React.useRef() as React.RefObject<HTMLDivElement>;

  React.useEffect(() => {
    const handleMouseMove = event => {
      if (tagsRef && tagsRef.current) {
        // @ts-expect-error deprecated suppressed until remove
        const { isDragging } = tagsRef.current;
        if (isDragging && event.movementX) {
          tagsRef.current.scrollLeft -= event.movementX;
        }
      }
    };

    const handleMouseUp = () => {
      if (tagsRef && tagsRef.current) {
        // @ts-expect-error deprecated suppressed until remove
        tagsRef.current.isDragging = false;
      }
    };

    const tags = tagsRef.current;

    if (tags) {
      tags.addEventListener("mousemove", handleMouseMove);
      tags.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (tags) {
        tags.removeEventListener("mousemove", handleMouseMove);
        tags.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [tagsRef]);

  return (
    <StyledInputTags>
      <StyledInputTagsInner
        ref={tagsRef}
        onMouseDown={() => {
          if (tagsRef && tagsRef.current) {
            // @ts-expect-error deprecated suppressed until remove
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
