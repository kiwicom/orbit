import * as React from "react";
// import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button";
import Text from "../Text";
import Tile from "../Tile";
import Stack from "../Stack";
import CarrierLogo from "../CarrierLogo";
import FlightDirect from "../icons/FlightDirect";
import Illustration from "../Illustration";
import ChevronBackward from "../icons/ChevronBackward";
import Tooltip from "../Tooltip";
import Card from "../Card";
import CardSection from "../Card/CardSection";
import ModalHeader from "./ModalHeader";
import ModalSection from "./ModalSection";
import ModalFooter from "./ModalFooter";

import Modal from ".";

type ModalArgsAndCustomProps = React.ComponentProps<typeof Modal> & {
  suppressed?: boolean;
};

const meta: Meta<ModalArgsAndCustomProps> = {
  title: "NewModal",
  component: Modal,

  args: {
    suppressed: false,
  },
};

type Story = StoryObj<ModalArgsAndCustomProps>;
export default meta;

export const HeaderSectionFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(true);

    const handleClose = () => {
      setIsOpen(false);
    };

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        {isOpen && (
          <Modal onClose={handleClose} fixedFooter>
            <ModalHeader
              // suppressed={suppressed}
              title="Enjoy something to eat while you fly"
              illustration={<Illustration name="BaggageDrop" size="small" />}
              description="Select a flight below to see the menu (where available)"
            />
            <ModalSection suppressed>
              <Stack>
                <Tooltip content={<div>Lorem ipsum dolor sit amet</div>}>
                  <Text uppercase weight="bold">
                    OUTBOUND
                  </Text>
                </Tooltip>
                <Card>
                  <CardSection
                    expandable
                    noSeparator
                    title={
                      <Stack direction="row" align="center" justify="between" spacing="200">
                        <Stack spacing="100">
                          <Text size="small" type="secondary">
                            Sat, Mar 31 Trip length: 1h55m
                          </Text>
                          <Stack direction="row" spacing="100" align="center">
                            <Text weight="bold">London LHR</Text>
                            <FlightDirect size="small" />
                            <Text weight="bold">Prague PRG</Text>
                          </Stack>
                        </Stack>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        Edit
                      </Button>
                    }
                  />
                  <CardSection
                    expandable
                    noSeparator
                    title={
                      <Stack direction="row" align="center" justify="between" spacing="200">
                        <Stack spacing="100">
                          <Text size="small" type="secondary">
                            Sat, Mar 31 Trip length: 1h55m
                          </Text>
                          <Stack direction="row" spacing="100" align="center">
                            <Text weight="bold">London LHR</Text>
                            <FlightDirect size="small" />
                            <Text weight="bold">Prague PRG</Text>
                          </Stack>
                        </Stack>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        Edit
                      </Button>
                    }
                  />
                  <CardSection
                    expandable
                    title={
                      <Stack direction="row" align="center" justify="between" spacing="200">
                        <Stack spacing="100">
                          <Text size="small" type="secondary">
                            Sat, Mar 31 Trip length: 1h55m
                          </Text>
                          <Stack direction="row" spacing="100" align="center">
                            <Text weight="bold">London LHR</Text>
                            <FlightDirect size="small" />
                            <Text weight="bold">Prague PRG</Text>
                          </Stack>
                        </Stack>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        Edit
                      </Button>
                    }
                  />
                </Card>
              </Stack>
            </ModalSection>
            <ModalSection
            // suppressed={false}
            >
              <Stack>
                <Text uppercase weight="bold">
                  INBOUND
                </Text>
                <Card>
                  <CardSection
                    title={
                      <Stack direction="row" align="center" justify="between" spacing="200">
                        <Stack spacing="100">
                          <Text size="small" type="secondary">
                            Sat, Mar 31 Trip length: 1h55m
                          </Text>
                          <Stack direction="row" spacing="100" align="center">
                            <Text weight="bold">London LHR</Text>
                            <FlightDirect size="small" />
                            <Text weight="bold">Prague PRG</Text>
                          </Stack>
                        </Stack>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        Edit
                      </Button>
                    }
                    expandable
                  />
                  <CardSection
                    expandable
                    title={
                      <Stack direction="row" align="center" justify="between" spacing="200">
                        <Stack spacing="100">
                          <Text size="small" type="secondary">
                            Sat, Mar 31 Trip length: 1h55m
                          </Text>
                          <Stack direction="row" spacing="100" align="center">
                            <Text weight="bold">London LHR</Text>
                            <FlightDirect size="small" />
                            <Text weight="bold">Prague PRG</Text>
                          </Stack>
                        </Stack>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        Edit
                      </Button>
                    }
                  />
                  <CardSection
                    expandable
                    title={
                      <Stack direction="row" align="center" justify="between" spacing="200">
                        <Stack spacing="100">
                          <Text size="small" type="secondary">
                            Sat, Mar 31 Trip length: 1h55m
                          </Text>
                          <Stack direction="row" spacing="100" align="center">
                            <Text weight="bold">London LHR</Text>
                            <FlightDirect size="small" />
                            <Text weight="bold">Prague PRG</Text>
                          </Stack>
                        </Stack>
                      </Stack>
                    }
                    actions={
                      <Button type="secondary" size="small">
                        Edit
                      </Button>
                    }
                  />
                </Card>
              </Stack>
            </ModalSection>
            <ModalFooter
            // flex={["0 0 auto", "1 1 100%"]}
            >
              <Button iconLeft={<ChevronBackward />} type="secondary">
                Back
              </Button>
              <Button fullWidth>Proceed to Payment (23.98€)</Button>
            </ModalFooter>
          </Modal>
        )}
      </>
    );
  },
};

export const HeaderSection = {
  args: {
    title: "Orbit design system",
    description: "I'm lovely description",
    content:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  render: ({ title, description, content, suppressed }) => {
    const [isOpen, setIsOpen] = React.useState(true);

    const handleClose = () => {
      setIsOpen(false);
    };

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        {isOpen && (
          <Modal onClose={handleClose} closeOnOverlayClick>
            <ModalHeader title={title}>{description}</ModalHeader>
            <ModalSection suppressed={suppressed}>
              <Text>{content}</Text>
            </ModalSection>
            <ModalSection>
              <Text>{content}</Text>
            </ModalSection>
            <ModalSection>
              <Text>{content}</Text>
            </ModalSection>
            <ModalSection>
              <Text>{content}</Text>
            </ModalSection>
          </Modal>
        )}
      </>
    );
  },
};

export const HeaderFooter = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      {isOpen && (
        <Modal
          onClose={handleClose}
          // fixedFooter
        >
          <ModalHeader
            title="Enjoy something to eat while you fly"
            illustration={<Illustration name="Meal" size="small" />}
            description="Select a flight below to see the menu (where available)"
          >
            {/* <span>Hello</span> */}
          </ModalHeader>
          {/* {showMore && ( */}
          {/* <ModalSection> */}
          {/*  <Text>Lorem ipsum dolor sit amet</Text> */}
          {/* </ModalSection> */}
          {/* )} */}
          <ModalFooter
          // flex={["0 0 auto", "1 1 100%"]}
          >
            <Button iconLeft={<ChevronBackward />} type="secondary">
              Back
            </Button>
            <Button fullWidth>Proceed to Payment (23.98€)</Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
};

export const Section = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      {isOpen && (
        <Modal onClose={handleClose}>
          <ModalSection suppressed>
            <Stack>
              <Text uppercase weight="bold">
                OUTBOUND
              </Text>
              <Tile
                expandable
                title={
                  <Stack direction="row" align="center" justify="between" spacing="200">
                    <CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />
                    <Stack spacing="100">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="100" align="center">
                        <Text weight="bold">London LHR</Text>
                        <FlightDirect size="small" />
                        <Text weight="bold">Prague PRG</Text>
                      </Stack>
                    </Stack>
                  </Stack>
                }
              >
                Hidden Content
              </Tile>
            </Stack>
          </ModalSection>
        </Modal>
      )}
    </>
  );
};

export const HeaderFooterOneButton = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      {isOpen && (
        <Modal
          onClose={handleClose}
          // fixedFooter
        >
          <ModalHeader
            title="Enjoy something to eat while you fly"
            illustration={<Illustration name="Meal" size="small" />}
            description="Select a flight below to see the menu (where available)"
          >
            {/* <span>Hello</span> */}
          </ModalHeader>
          {/* {showMore && ( */}
          {/* <ModalSection> */}
          {/*  <Text>Lorem ipsum dolor sit amet</Text> */}
          {/* </ModalSection> */}
          {/* )} */}
          <ModalFooter
          // flex={["0 0 auto", "1 1 100%"]}
          >
            <Button fullWidth>Proceed to Payment (23.98€)</Button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
};
