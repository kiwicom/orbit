import * as React from "react";

import Modal from "..";

export default function Test() {
  const modalRef = React.useRef<React.ElementRef<typeof Modal> | null>(null);
  const scrollingElementRef = React.useCallback(node => {
    node?.addEventListener("scroll", () => {});
  }, []);
  React.useEffect(() => {
    modalRef.current?.getScrollPosition();
    modalRef.current?.setScrollPosition(20);
    modalRef.current?.modalBody.current?.addEventListener("scroll", () => {
      // do something
    });
    modalRef.current?.modalContent.current?.addEventListener("scroll", () => {
      // do something
    });
  }, []);
  return (
    <Modal ref={modalRef} scrollingElementRef={scrollingElementRef}>
      content
    </Modal>
  );
}
