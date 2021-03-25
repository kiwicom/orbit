import * as React from "react";
import { Button, Modal, ModalSection } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showModal, setShowModal] = React.useState(true);
    return (
      <>
        {showModal && (
          <Modal
            isMobileFullPage
            onClose={() => {
              setShowModal(false);
            }}
          >
            <ModalSection>
              This modal will cover the entire screen when the window width is small.
            </ModalSection>
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
    title: "Full page modal",
    description:
      "If you have lots to show users and the context isn't as important, set isModalFullPage to true and the modal will cover the whole screen on small devices.",
  },
};
