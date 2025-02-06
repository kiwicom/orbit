import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import type { Name } from "../Illustration/types";
import Button from "../Button";
import { SIZES } from "./consts";
import Illustration from "../Illustration";
import Text from "../Text";
import { NAMES } from "../Illustration/consts.mts";
import ChevronBackward from "../icons/ChevronBackward";
import FlightDirect from "../icons/FlightDirect";
import Stack from "../Stack";
import ButtonLink from "../ButtonLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Card from "../Card";
import CardSection from "../Card/CardSection";
import Tooltip from "../Tooltip";
import Box from "../Box";
import InputField from "../InputField";
import InputGroup from "../InputGroup";
import Select from "../Select";
import CountryFlag from "../CountryFlag";
import Radio from "../Radio";
import Checkbox from "../Checkbox";
import TextLink from "../TextLink";
import Itinerary, {
  ItinerarySegment,
  ItinerarySegmentDetail,
  ItinerarySegmentStop,
  ItineraryStatus,
} from "../Itinerary";
import Badge from "../Badge";

import Modal, { ModalHeader, ModalSection, ModalFooter } from ".";

const modalOutboundSection = (
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
);

const modalInboundSection = (
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
);

type ModalPropsAndCustomArgs = React.ComponentProps<typeof Modal> &
  React.ComponentProps<typeof ModalHeader> &
  React.ComponentProps<typeof ModalFooter> & {
    showSection: boolean;
    showBack: boolean;
  };

const meta: Meta<ModalPropsAndCustomArgs> = {
  title: "Modal",
  component: Modal,

  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

type Story = StoryObj<ModalPropsAndCustomArgs>;

export default meta;

function useModal() {
  const [open, toggle] = React.useState(true);
  return {
    Container: ({ children }) => (
      <>
        {open && children}
        <Button onClick={() => toggle(true)}>Open</Button>
      </>
    ),
    onClose: () => {
      toggle(false);
      action("onClose")();
    },
  };
}

export const RemovableSections: Story = {
  render: ({ showSection, children }) => {
    const { Container, onClose } = useModal();
    return (
      <Container>
        <Modal onClose={onClose}>
          <ModalHeader
            title="Enjoy something to eat while you fly"
            illustration={<Illustration name="Meal" size="small" />}
            description="Select a flight below to see the menu (where available)"
          />
          {showSection && (
            <ModalSection>
              <Text>{children}</Text>
            </ModalSection>
          )}
          <ModalSection suppressed>
            <Text>Lorem ipsum dolor sit amet</Text>
          </ModalSection>
          <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
            <Button iconLeft={<ChevronBackward />} type="secondary">
              Back
            </Button>
            <Button fullWidth>Proceed to Payment (23.98€)</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  },

  args: {
    showSection: false,
    children:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  parameters: {
    info: "An example of a modal with a removable section. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: [
        "size",
        "title",
        "mobileHeader",
        "autoFocus",
        "isMobileFullPage",
        "preventOverlayClose",
        "hasCloseButton",
        "disableAnimation",
        "labelClose",
        "lockScrolling",
        "fixedFooter",
      ],
    },
  },
};

export const WithFixedFooter: Story = {
  render: args => {
    const { Container, onClose } = useModal();
    return (
      <Container>
        <Modal onClose={onClose} {...args}>
          <ModalHeader
            title="Enjoy something to eat while you fly"
            illustration={<Illustration name="BaggageDrop" size="small" />}
            description="Select a flight below to see the menu (where available)"
          />
          <ModalSection suppressed>{modalOutboundSection}</ModalSection>
          <ModalSection>{modalInboundSection}</ModalSection>
          <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
            <Button iconLeft={<ChevronBackward />} type="secondary">
              Back
            </Button>
            <Button fullWidth>Proceed to Payment (23.98€)</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  },

  args: {
    fixedFooter: true,
  },

  parameters: {
    info: "An example of a modal with a fixed footer. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: [
        "size",
        "title",
        "mobileHeader",
        "autoFocus",
        "isMobileFullPage",
        "preventOverlayClose",
        "hasCloseButton",
        "disableAnimation",
        "labelClose",
        "lockScrolling",
      ],
    },
  },
};

export const WithForm: Story = {
  render: ({ showSection }) => {
    const { Container, onClose } = useModal();

    return (
      <Container>
        <Modal onClose={onClose} fixedFooter>
          <ModalHeader title="Refund" description="Reservation number: 123456789" />
          <ModalSection>
            <Stack>
              <Card title="Cancellation" />
              <Text size="small" weight="bold">
                Contact information
              </Text>
              <InputField label="E-mail" autoFocus placeholder="Your email" />
              <InputGroup
                flex={["0 0 120px", "1 1 100%"]}
                onChange={action("onChange")}
                label="Mobile phone"
              >
                <Select
                  options={[
                    { value: 1, label: "+420" },
                    { value: 2, label: "+421" },
                  ]}
                  value={1}
                  prefix={<CountryFlag code="cz" />}
                />
                <InputField placeholder="111 222 333" />
              </InputGroup>
              {showSection && (
                <>
                  <Text weight="bold" size="small">
                    Options
                  </Text>
                  <Radio label="Option one" checked />
                  <Radio label="Option two" />
                  <Text size="small" type="secondary" spaceAfter="large">
                    These are the most favorite. <TextLink href="#">Show more</TextLink>
                  </Text>
                  <Checkbox label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at mauris laoreet, eleifend nunc eu, venenatis sem. Etiam ullamcorper euismod suscipit. In a tortor ac velit elementum ultrices. Sed accumsan suscipit pulvinar." />
                </>
              )}
            </Stack>
          </ModalSection>
          <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
            <Button iconLeft={<ChevronBackward />} type="secondary">
              Back
            </Button>
            <Button fullWidth>Proceed to Payment (23.98€)</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  },

  args: {
    showSection: false,
  },

  parameters: {
    info: "An example of a modal with a form. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: [
        "size",
        "title",
        "mobileHeader",
        "autoFocus",
        "isMobileFullPage",
        "preventOverlayClose",
        "hasCloseButton",
        "disableAnimation",
        "labelClose",
        "lockScrolling",
        "fixedFooter",
      ],
    },
  },
};

export const WithItinerary: Story = {
  render: () => {
    const { Container, onClose } = useModal();

    return (
      <Container>
        <Modal ariaLabel="Itinerary from Prague to Frankfurt" onClose={onClose}>
          <ModalSection>
            <Itinerary>
              <ItineraryStatus type="success" label="This part is new">
                <ItinerarySegment>
                  <ItinerarySegmentStop
                    city="Prague"
                    station="Václav Haivel Airport Prague (PRG)"
                    time="16:20"
                    date="Wed, 15.6"
                  />
                  <ItinerarySegmentDetail
                    duration="2h 10m"
                    summary={<Badge carriers={[{ code: "FR", name: "Ryanair" }]}>Ryanair</Badge>}
                  />
                  <ItinerarySegmentStop
                    hidden
                    city="Frankfurt"
                    time="18:30"
                    date="Wed, 15.6"
                    station="Frankfurt International Airport "
                  />
                  <ItinerarySegmentStop city="New York JFK" station="United States" />
                </ItinerarySegment>
              </ItineraryStatus>
            </Itinerary>
          </ModalSection>
        </Modal>
      </Container>
    );
  },

  parameters: {
    info: "An example of a modal with an Itinerary component. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const WithModalHeaderOnly: Story = {
  render: args => {
    const { Container, onClose } = useModal();
    return (
      <Container>
        <Modal onClose={onClose} {...args}>
          <ModalHeader
            title="Enjoy something to eat while you fly"
            illustration={<Illustration name="BaggageDrop" size="small" />}
            description="Select a flight below to see the menu (where available)"
          />
        </Modal>
      </Container>
    );
  },

  args: {
    mobileHeader: true,
  },

  parameters: {
    info: "An example of a modal with a header only. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: [
        "size",
        "fixedFooter",
        "title",
        "autoFocus",
        "isMobileFullPage",
        "preventOverlayClose",
        "hasCloseButton",
        "disableAnimation",
        "labelClose",
        "lockScrolling",
      ],
    },
  },
};

type PlaygroundStoryProps = ModalPropsAndCustomArgs & { header: boolean; footer: boolean };
export const Playground: StoryObj<PlaygroundStoryProps> = {
  render: ({
    header,
    footer,
    title,
    description,
    illustration,
    suppressed,
    flex,
    showBack,
    showSection,
    ...args
  }) => {
    const { Container, onClose } = useModal();

    return (
      <Container>
        <Modal onClose={onClose} {...args}>
          {header && (
            <ModalHeader
              title={title}
              illustration={
                illustration && <Illustration name={illustration as Name} size="small" />
              }
              description={description}
              suppressed={suppressed}
            />
          )}
          <ModalSection suppressed={suppressed}>{modalOutboundSection}</ModalSection>
          {showSection && (
            <ModalSection suppressed={suppressed}>{modalInboundSection}</ModalSection>
          )}
          {footer && (
            <ModalFooter flex={flex}>
              {showBack && (
                <Stack direction="row">
                  <Button type="secondary" iconLeft={<ChevronBackward />}>
                    Back
                  </Button>
                  <ButtonLink type="secondary">Button</ButtonLink>
                </Stack>
              )}
              <Box justify="end" display="flex">
                <Button>Continue to Payment</Button>
              </Box>
            </ModalFooter>
          )}
        </Modal>
      </Container>
    );
  },

  args: {
    lockScrolling: false,
    preventOverlayClose: false,
    isMobileFullPage: false,
    suppressed: false,
    showBack: false,
    illustration: NAMES[0],
    showSection: false,
    fixedFooter: false,
    mobileHeader: false,
    size: SIZES.NORMAL,
    title: "Orbit design system",
    description: "I'm lovely description",
    flex: ["0 0 auto", "1 1 100%"],
    hasCloseButton: true,
    disableAnimation: false,
    labelClose: "Close",
    autoFocus: true,
    header: true,
    footer: true,
    id: "modal-id",
  },

  argTypes: {
    size: {
      options: Object.values(SIZES),
      control: {
        type: "select",
      },
    },
    illustration: {
      options: [undefined, ...NAMES],
      control: {
        type: "select",
      },
    },
  },

  parameters: {
    info: "Playground of Modal component. Check Orbit.Kiwi for more detailed design guidelines.",
    controls: {
      exclude: ["children"],
    },
  },
};

export const Rtl: Story = {
  render: () => {
    const { Container, onClose } = useModal();
    return (
      <Container>
        <RenderInRtl>
          <Modal onClose={onClose}>
            <ModalHeader
              title="The title of the ModalHeader"
              illustration={<Illustration name="Accommodation" size="small" />}
              description="The description of the ModalHeader"
            />
            <ModalSection>
              <Text>
                You can try all possible configurations of this component. However, check Orbit.Kiwi
                for more detailed design guidelines.
              </Text>
            </ModalSection>
            <ModalSection>
              <Text>
                You can try all possible configurations of this component. However, check Orbit.Kiwi
                for more detailed design guidelines.
              </Text>
            </ModalSection>
            <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
              <Button type="secondary" iconLeft={<ChevronBackward />}>
                Back
              </Button>
              <Button fullWidth>Continue to Payment</Button>
            </ModalFooter>
          </Modal>
        </RenderInRtl>
      </Container>
    );
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
