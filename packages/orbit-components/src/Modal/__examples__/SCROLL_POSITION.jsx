// @flow
import * as React from "react";

import Button from "../../Button";
import Heading from "../../Heading";
import Modal from "../index";
import ModalFooter from "../ModalFooter";
import ModalSection from "../ModalSection";
import ModalHeader from "../ModalHeader";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: (): React.Node => {
    const [showModal, setShowModal] = React.useState(true);
    const [localScrollPosition, setLocalScrollPosition] = React.useState();
    const modalRef = React.useRef<React.ElementRef<typeof Modal> | null>(null);

    const setScroll = () => {
      if (modalRef.current) {
        modalRef.current.setScrollPosition(100);
      }
    };
    const getScroll = () => {
      if (modalRef.current) {
        setLocalScrollPosition(modalRef.current.getScrollPosition());
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
            <ModalHeader
              title={
                <Stack direction="row" align="center" justify="between">
                  <Heading>Scrollable modal</Heading>
                  <Button type="secondary" onClick={getScroll}>
                    Scroll position: {localScrollPosition}
                  </Button>
                </Stack>
              }
            />
            <ModalSection>
              <Text>Top of the modal. Scroll up here by clicking the button in the footer.</Text>
              <Text>
                To see the current scroll position at any time, use the button in the header.
              </Text>
            </ModalSection>
            <ModalSection>Scroll down to button</ModalSection>
            <ModalSection>Scroll down to button</ModalSection>
            <ModalSection>Scroll down to button</ModalSection>
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
      "If you have a long modal and want to scroll to a specific place, use a reference and the setScrollPosition method. You can also get the current scroll position at any time using the getScrollPosition method. Use it on demand for performance reasons.",
  },
};
