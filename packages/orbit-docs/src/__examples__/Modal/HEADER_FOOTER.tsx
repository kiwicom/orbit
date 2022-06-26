import React from "react";
import { Button, Illustration, Modal, ModalFooter, ModalHeader } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
          >
            <ModalHeader
              title="Priority boarding"
              description="Skip the line and board in peace. Only $25!"
              illustration={<Illustration size="small" name="PriorityBoarding" />}
            />
            <ModalFooter>
              <Button>Add priority boarding</Button>
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
};
