// @flow
import * as React from "react";

import Button from "../../Button";
import Heading from "../../Heading";
import Modal from "../index";
import ModalHeader from "../ModalHeader";
import ModalSection from "../ModalSection";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: () => {
    const [showModal, setShowModal] = React.useState(true);
    return (
      <>
        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
          >
            <ModalHeader title="Important info about your trip" />
            <ModalSection suppressed>
              <Stack direction="column" spacing="large">
                <Stack flex>
                  <Icons.BaggagePersonal ariaHidden />
                  <Heading as="h3" type="title3">
                    Personal item only
                  </Heading>
                </Stack>
                <Text>
                  You won&apos;t have time to collect baggage in between flights, so don&apos;t take
                  anything that won&apos;t fit under the seat.
                </Text>
              </Stack>
            </ModalSection>
            <ModalSection>
              <Stack direction="column" spacing="large">
                <Stack flex>
                  <Icons.Visa ariaHidden />
                  <Heading as="h3" type="title3">
                    Visas needed
                  </Heading>
                </Stack>
                <Text>
                  Your itinerary includes multiple countries. Make sure you have permission to enter
                  all of them.
                </Text>
              </Stack>
            </ModalSection>
            <ModalSection suppressed>
              <Stack direction="column" spacing="large">
                <Stack flex>
                  <Icons.KiwicomGuarantee ariaHidden />
                  <Heading as="h3" type="title3">
                    Kiwi.com Guarantee
                  </Heading>
                </Stack>
                <Text>
                  You&apos;re completely covered by the Kiwi.com Guarantee, so you know you&apos;ll
                  get to your final destination.
                </Text>
              </Stack>
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
    title: "Modal with header and sections",
    description:
      "You can add structure to your content with sections. Suppressed sections stand out against white backgrounds.",
  },
};
