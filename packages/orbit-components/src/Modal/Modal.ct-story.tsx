import React from "react";

import { SIZES } from "./consts";
import Illustration from "../Illustration";
import Text from "../Text";
import Button from "../Button";
import Box from "../Box";
import ChevronBackward from "../icons/ChevronBackward";

import Modal, { ModalSection, ModalHeader, ModalFooter } from ".";

const content = "Lorem ispum dolor sit amet.";

export function ModalVisualDefaultStory({ size = SIZES.NORMAL, isMobileFullPage = false }) {
  return (
    <Modal onClose={() => {}} size={size} isMobileFullPage={isMobileFullPage}>
      <ModalHeader
        title="Normal header"
        illustration={<Illustration name="AppKiwi" size="small" />}
        description="Lorem ispum dolor sit amet"
      />
      <ModalSection>
        <Text>{content}</Text>
      </ModalSection>
      <ModalFooter flex={["0 auto", "1 100%"]}>
        <Button type="secondary" iconLeft={<ChevronBackward />}>
          Back
        </Button>
        <Box justify="end" display="flex">
          <Button>Continue</Button>
        </Box>
      </ModalFooter>
    </Modal>
  );
}

export function ModalVisualMobileHeader() {
  return (
    <Modal onClose={() => {}} size={SIZES.NORMAL} mobileHeader>
      <ModalHeader
        title="Suppressed header"
        illustration={<Illustration name="AppKiwi" size="small" />}
        suppressed
      />
      <ModalSection suppressed>
        <Text>{content}</Text>
      </ModalSection>
      <ModalFooter flex={["0 auto", "1 100%"]}>
        <Button type="secondary" iconLeft={<ChevronBackward />}>
          Back
        </Button>
        <Box justify="end" display="flex">
          <Button>Continue</Button>
        </Box>
      </ModalFooter>
    </Modal>
  );
}
