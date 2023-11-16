import React from "react";
import cx from "clsx";

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
    <div
      className={cx(
        "relative",
        "ms-sm",
        "flex flex-initial items-center",
        "h-full min-w-[50px]",
        "overflow-hidden",
        "z-[2]",
      )}
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className={cx(
          "overflow-x-scroll whitespace-nowrap",
          "space-x-xs flex items-center",
          "scrollbar-none",
        )}
        ref={tagsRef}
        onMouseDown={() => {
          if (tagsRef && tagsRef.current) {
            // @ts-expect-error TODO
            tagsRef.current.isDragging = true;
          }
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default InputTags;
