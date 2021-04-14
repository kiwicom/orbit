import * as React from "react";
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
              illustration={<Illustration name="PriorityBoarding" />}
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
  info: {
    title: "Modal with header and footer",
    description:
      "Modals can have structured headers, with an illustration and title, and footers, with a space for actions.",
  },
};
