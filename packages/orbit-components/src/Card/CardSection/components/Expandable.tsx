import * as React from "react";

import Slide from "../../../utils/Slide";
import useBoundingRect from "../../../hooks/useBoundingRect";

interface Props {
  expanded?: boolean;
  children?: React.ReactNode;
  slideID: string;
  labelID: string;
}

export default function Expandable({ expanded, children, slideID, labelID }: Props) {
  const [{ height }, ref] = useBoundingRect<HTMLDivElement>({ height: expanded ? null : 0 });

  return (
    <Slide maxHeight={height} expanded={expanded} id={slideID} ariaLabelledBy={labelID}>
      <div ref={ref}>{children}</div>
    </Slide>
  );
}
