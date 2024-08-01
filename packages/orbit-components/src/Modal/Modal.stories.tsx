import * as React from "react";
import { action } from "@storybook/addon-actions";

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
import CarrierLogo from "../CarrierLogo";
import CardSection from "../Card/CardSection";
import InputField from "../InputField";
import Select from "../Select";
import CountryFlag from "../CountryFlag";
import InputGroup from "../InputGroup";
import TextLink from "../TextLink";
import Checkbox from "../Checkbox";
import Radio from "../Radio";
import Tooltip from "../Tooltip";
import Tile from "../Tile";
import Box from "../Box";

import Modal, { ModalHeader, ModalSection, ModalFooter } from ".";

export default {
  title: "Modal",
};

function useModal() {
  const [open, toggle] = React.useReducer((_, next) => next, true);
  return {
    Container: ({ children }) => (
      <>
        <div style={{ display: open ? "block" : "none" }}>{children}</div>
        <Button onClick={() => toggle(true)}>Open</Button>
      </>
    ),
    onClose: () => {
      toggle(false);
      action("onClose")();
    },
  };
}

export const Sizes = ({ size, title, description, mobileHeader, content }) => {
  const { Container, onClose } = useModal();

  // const onClose = action("onClose");
  return (
    <Container>
      <Modal size={size} onClose={onClose} mobileHeader={mobileHeader}>
        <ModalHeader title={title}>{description}</ModalHeader>
        <ModalSection>
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
    </Container>
  );
};

Sizes.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Sizes.args = {
  size: SIZES.NORMAL,
  title: "Orbit design system",
  description: "I'm lovely description",
  mobileHeader: true,
  content:
    "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
};

Sizes.argTypes = {
  size: {
    options: Object.values(SIZES),
    control: {
      type: "select",
    },
  },
};

export const ShortModal = () => {
  const { Container, onClose } = useModal();
  return (
    <Container>
      <Modal onClose={onClose} fixedFooter>
        <ModalSection>
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
    </Container>
  );
};

ShortModal.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const WithoutSection = ({ showMore }) => {
  const { Container, onClose } = useModal();
  return (
    <Container>
      <Modal onClose={onClose} fixedFooter>
        <ModalHeader
          title="Enjoy something to eat while you fly"
          illustration={<Illustration name="Meal" size="small" />}
          description="Select a flight below to see the menu (where available)"
        />
        {showMore && (
          <ModalSection>
            <Text>Lorem ipsum dolor sit amet</Text>
          </ModalSection>
        )}
        <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
          <Button iconLeft={<ChevronBackward />} type="secondary">
            Back
          </Button>
          <Button fullWidth>Proceed to Payment (23.98€)</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

WithoutSection.story = {
  name: "Without section",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

WithoutSection.args = {
  showMore: false,
};

export const RemovableSections = ({ showMore }) => {
  const { Container, onClose } = useModal();
  return (
    <Container>
      <Modal onClose={onClose} fixedFooter>
        <ModalHeader
          title="Enjoy something to eat while you fly"
          illustration={<Illustration name="Meal" size="small" />}
          description="Select a flight below to see the menu (where available)"
        />
        {showMore && (
          <ModalSection>
            <Text>Lorem ipsum dolor sit amet</Text>
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
};

RemovableSections.story = {
  name: "Removable sections",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

RemovableSections.args = {
  showMore: false,
};

export const WithForm = ({ showMore }) => {
  const { Container, onClose } = useModal();
  return (
    <Container>
      <Modal onClose={onClose} fixedFooter autoFocus={false}>
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
            {showMore && (
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
};

WithForm.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

WithForm.args = {
  showMore: false,
};

export const WithFixedFooter = () => {
  const { Container, onClose } = useModal();
  return (
    <Container>
      <Modal onClose={onClose} fixedFooter>
        <ModalHeader
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
        <ModalSection>
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
        <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
          <Button iconLeft={<ChevronBackward />} type="secondary">
            Back
          </Button>
          <Button fullWidth>Proceed to Payment (23.98€)</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

WithFixedFooter.story = {
  name: "With fixedFooter",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const FullPreview = ({
  header,
  footer,
  size,
  title,
  description,
  illustration,
  fixed,
  suppressed,
  content,
  flex,
  dataTest,
  isMobileFullPage,
  mobileHeader,
  showBack,
  preventOverlayClose,
}) => {
  const { Container, onClose } = useModal();

  return (
    <Container>
      <Modal
        onClose={onClose}
        mobileHeader={mobileHeader}
        size={size}
        fixedFooter={fixed}
        dataTest={dataTest}
        isMobileFullPage={isMobileFullPage}
        preventOverlayClose={preventOverlayClose}
      >
        {header && (
          <ModalHeader
            title={title}
            illustration={illustration && <Illustration name={illustration} size="small" />}
            description={description}
            suppressed={suppressed}
          />
        )}
        <ModalSection suppressed={suppressed}>
          <Text>{content}</Text>
        </ModalSection>
        <ModalSection suppressed={suppressed}>
          <Text>{content}</Text>
        </ModalSection>
        <ModalSection suppressed={suppressed}>
          <Text>{content}</Text>
        </ModalSection>
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
};

FullPreview.story = {
  name: "Full preview",

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

FullPreview.args = {
  header: true,
  footer: true,
  size: SIZES.NORMAL,
  title: "Orbit design system",
  description: "Lorem ispum dolor sit amet",
  illustration: NAMES[0],
  fixed: false,
  suppressed: false,
  content:
    "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  flex: ["0 0 auto", "1 1 100%"],
  dataTest: "test",
  isMobileFullPage: false,
  mobileHeader: true,
  showBack: true,
  preventOverlayClose: false,
};

FullPreview.argTypes = {
  size: {
    options: Object.values(SIZES),
    control: {
      type: "select",
    },
  },
  illustration: {
    options: NAMES,
    control: {
      type: "select",
    },
  },
};

export const Rtl = () => {
  const { Container, onClose } = useModal();
  return (
    <Container>
      <RenderInRtl>
        <Modal onClose={onClose} fixedFooter>
          <ModalHeader
            title="The title of the ModalHeader"
            illustration={<Illustration name="Accommodation" size="small" />}
            description="The description of the ModalHeader"
            suppressed
          />
          <ModalSection>
            <Text>
              You can try all possible configurations of this component. However, check Orbit.Kiwi
              for more detailed design guidelines.
            </Text>
          </ModalSection>
          <ModalSection suppressed>
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
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
