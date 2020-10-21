// @flow
import * as React from "react";

import Button from "../../Button";
import Modal from "../index";
import ModalFooter from "../ModalFooter";
import ModalSection from "../ModalSection";
import ModalHeader from "../ModalHeader";

export default {
  Example: () => {
    const [showModal, setShowModal] = React.useState(true);
    const modalRef: {| current: React.ElementRef<any> |} = React.useRef(null);

    const setScroll = () => {
      if (modalRef.current) {
        modalRef.current.setScrollPosition(100);
      }
    };
    return (
      <>
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
            ref={modalRef}
          >
            <ModalHeader title="Scrollable modal" />
            <ModalSection>
              Top of the modal. Scroll up here by clicking the button in the footer
            </ModalSection>
            <ModalSection>Scroll down to button</ModalSection>
            <ModalSection>Scroll down to button</ModalSection>
            <ModalSection>Scroll down to button</ModalSection>
            <ModalSection>Scroll down to button</ModalSection>
            <ModalSection>Scroll down to button</ModalSection>
            <ModalSection>Scroll down to button</ModalSection>
            <ModalFooter>
              <Button onClick={setScroll}>Change scrollTop</Button>
            </ModalFooter>
          </Modal>
        )}
        {!showModal && (
          <Button
            onClick={() => {
              setShowModal(true);
            }}
          >
            Show modal
          </Button>
        )}
      </>
    );
  },
  info: {
    title: "Set scroll for modal",
    description:
      "If you have a long modal and want to set the top for scrolling, use a reference and the setScrollPosition method.",
  },
};
