import React from "react";
import { Button, Modal, ModalSection } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        {showModal && (
          <Modal
            preventOverlayClose
            onClose={() => {
              setShowModal(false);
            }}
          >
            <ModalSection>
              This modal can only be closed by clicking the close button. Clicking outside the modal
              will not close it.
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
    title: "Modal without overlay close",
    description:
      "If you need users to explicitly dismiss a modal (such as when they're agreeing to cookies), set preventOverlayClose to true and clicks outside the modal won't close it. Do NOT use this except when absolutely necessary as it goes against patterns users are used to.",
  },
};
