import * as React from "react";
import styled from "styled-components";

import { rtlSpacing } from "../../utils/rtl";
import defaultTheme from "../../defaultTheme";
import { StyledTag } from "../../Tag";

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
    margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceXSmall}`)};
  }
`;

StyledInputTagsInner.defaultProps = {
  theme: defaultTheme,
};

const InputTags = ({ children }: { children: React.ReactNode }) => {
  const tagsRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = event => {
      if (tagsRef && tagsRef.current) {
        // @ts-expect-error TODO
        const { isDragging } = tagsRef.current;
        if (isDragging && event.movementX) {
          tagsRef.current.scrollLeft -= event.movementX;
        }
      }
    };

    const handleMouseUp: React.MouseEventHandler<HTMLDivElement> = () => {
      if (tagsRef && tagsRef.current) {
        // @ts-expect-error TODO
        tagsRef.current.isDragging = false;
      }
    };

    const tags = tagsRef.current as HTMLElement;

    if (tags) {
      // @ts-expect-error TODO
      tags.addEventListener("mousemove", handleMouseMove);
      // @ts-expect-error TODO
      tags.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (tags) {
        // @ts-expect-error TODO
        tags.removeEventListener("mousemove", handleMouseMove);
        // @ts-expect-error TODO
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
            // @ts-expect-error TODO
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
