import React from "react";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { Button, Stack, ModalSection, Modal } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [showModalExtraSmall, setShowModalExtraSmall] = React.useState(false);
    const [showModalSmall, setShowModalSmall] = React.useState(false);
    const [showModalNormal, setShowModalNormal] = React.useState(false);
    const [showModalLarge, setShowModalLarge] = React.useState(false);
    const [showModalExtraLarge, setShowModalExtraLarge] = React.useState(false);

    return (
      <>
        {showModalExtraSmall && (
          <Modal
            size="extraSmall"
            onClose={() => {
              setShowModalExtraSmall(false);
            }}
          >
            <ModalSection>
              Orbit is an open source design system for your next travel project.
            </ModalSection>
          </Modal>
        )}
        {showModalSmall && (
          <Modal
            size="small"
            onClose={() => {
              setShowModalSmall(false);
            }}
          >
            <ModalSection>
              Orbit is an open source design system for your next travel project.
            </ModalSection>
          </Modal>
        )}
        {showModalNormal && (
          <Modal
            onClose={() => {
              setShowModalNormal(false);
            }}
          >
            <ModalSection>
              Orbit is an open source design system for your next travel project.
            </ModalSection>
          </Modal>
        )}
        {showModalLarge && (
          <Modal
            size="large"
            onClose={() => {
              setShowModalLarge(false);
            }}
          >
            <ModalSection>
              Orbit is an open source design system for your next travel project.
            </ModalSection>
          </Modal>
        )}
        {showModalExtraLarge && (
          <Modal
            size="extraLarge"
            onClose={() => {
              setShowModalExtraLarge(false);
            }}
          >
            <ModalSection>
              Orbit is an open source design system for your next travel project.
            </ModalSection>
          </Modal>
        )}
        <Stack>
          <Button
            onClick={() => {
              setShowModalExtraSmall(true);
            }}
          >
            Show extra small modal
          </Button>
          <Button
            onClick={() => {
              setShowModalSmall(true);
            }}
          >
            Show small modal
          </Button>
          <Button
            onClick={() => {
              setShowModalNormal(true);
            }}
          >
            Show normal modal
          </Button>
          <Button
            onClick={() => {
              setShowModalLarge(true);
            }}
          >
            Show large modal
          </Button>
          <Button
            onClick={() => {
              setShowModalExtraLarge(true);
            }}
          >
            Show extra large modal
          </Button>
        </Stack>
      </>
    );
  },
  info: {
    title: "Sizes",
    description: `Modals can have four sizes: extra small (360px), small (${defaultTheme.orbit.widthModalSmall}), normal (${defaultTheme.orbit.widthModalNormal}, the default), and large (${defaultTheme.orbit.widthModalLarge}). This sets their maximum width on larger screens`,
  },
};
