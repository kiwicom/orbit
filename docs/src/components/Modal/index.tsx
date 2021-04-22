import React from "react";
import { Portal, Modal as OrbitModal } from "@kiwicom/orbit-components";

import useDisableScroll from "../../hooks/useDisableScroll";

interface Props extends Omit<React.ComponentProps<typeof OrbitModal>, "scrollingElementRef"> {}

export default function Modal(props: Props) {
  const scrollingElementRef = useDisableScroll();
  return (
    <Portal>
      <OrbitModal scrollingElementRef={scrollingElementRef} {...props} />
    </Portal>
  );
}
