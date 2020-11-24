import React from "react";
import Modal from "../";

export default function Test() {
  const ref = React.useRef<React.ElementRef<typeof Modal> | null>(null);
  React.useEffect(() => {
    ref.current?.getScrollPosition();
  }, []);
  return <Modal ref={ref}>content</Modal>;
}
