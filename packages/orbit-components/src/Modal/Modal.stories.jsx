// @flow
import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select, array } from "@storybook/addon-knobs";

import Button from "../Button";
import { SIZES } from "./consts";
import Illustration from "../Illustration";
import Text from "../Text";
import { NAMES } from "../Illustration/consts";
import ChevronLeft from "../icons/ChevronLeft";
import FlightDirect from "../icons/FlightDirect";
import Stack from "../Stack";
import ButtonLink from "../ButtonLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Card from "../Card";
import { CarrierLogo } from "..";
import CardSection from "../Card/CardSection";
import InputField from "../InputField";
import Select from "../Select";
import CountryFlag from "../CountryFlag";
import InputGroup from "../InputGroup";
import Airplane from "../icons/Airplane";
import TextLink from "../TextLink";
import Checkbox from "../Checkbox";
import Radio from "../Radio";
import Tooltip from "../Tooltip";
import Tile from "../Tile";

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

export const Sizes = (): React.Node => {
  const size = select("Size", Object.values(SIZES), SIZES.NORMAL);
  const title = text("Title", "Orbit design system");
  const description = text("Title", "I'm lovely description");
  const mobileHeader = boolean("mobileHeader", true);
  const { Container, onClose } = useModal();

  // const onClose = action("onClose");
  const content = text(
    "Content",
    "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  );
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const ShortModal = (): React.Node => {
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
                <Stack direction="row" align="center" justify="between" spacing="XSmall">
                  <CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />
                  <Stack spacing="XXSmall">
                    <Text size="small" type="secondary">
                      Sat, Mar 31 Trip length: 1h55m
                    </Text>
                    <Stack direction="row" spacing="XXSmall" align="center">
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const WithoutSection = (): React.Node => {
  const { Container, onClose } = useModal();
  const showMore = boolean("showMore", false);
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
          <Button iconLeft={<ChevronLeft />} type="secondary">
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const RemovableSections = (): React.Node => {
  const { Container, onClose } = useModal();
  const showMore = boolean(false);
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
          <Button iconLeft={<ChevronLeft />} type="secondary">
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const WithForm = (): React.Node => {
  const { Container, onClose } = useModal();
  const showMore = boolean(false);
  return (
    <Container>
      <Modal onClose={onClose} fixedFooter autoFocus={false}>
        <ModalHeader title="Refund" description="Reservation number: 123456789" />
        <ModalSection>
          <Stack>
            <Card title="Cancellation" icon={<Airplane />} />
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
          <Button iconLeft={<ChevronLeft />} type="secondary">
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const WithFixedFooter = (): React.Node => {
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
                icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />}
                title={
                  <Stack direction="row" align="center" justify="between" spacing="XSmall">
                    <Stack spacing="XXSmall">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="XXSmall" align="center">
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
                icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />}
                title={
                  <Stack direction="row" align="center" justify="between" spacing="XSmall">
                    <Stack spacing="XXSmall">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="XXSmall" align="center">
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
                icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />}
                title={
                  <Stack direction="row" align="center" justify="between" spacing="XSmall">
                    <Stack spacing="XXSmall">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="XXSmall" align="center">
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
                icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />}
                title={
                  <Stack direction="row" align="center" justify="between" spacing="XSmall">
                    <Stack spacing="XXSmall">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="XXSmall" align="center">
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
                icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />}
                title={
                  <Stack direction="row" align="center" justify="between" spacing="XSmall">
                    <Stack spacing="XXSmall">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="XXSmall" align="center">
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
                icon={<CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />}
                title={
                  <Stack direction="row" align="center" justify="between" spacing="XSmall">
                    <Stack spacing="XXSmall">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="XXSmall" align="center">
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
          <Button iconLeft={<ChevronLeft />} type="secondary">
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
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const FullPreview = (): React.Node => {
  const { Container, onClose } = useModal();
  const size = select("Size", Object.values(SIZES), SIZES.NORMAL);
  const title = text("Title", "Orbit design system");
  const description = text("Description", "Lorem ispum dolor sit amet");
  const illustration = select("Illustration", [null, ...Object.values(NAMES)], "Accommodation");
  const fixed = boolean("fixedFooter", false);
  const suppressed = boolean("suppressed", false);
  const content = text(
    "Text",
    "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  );
  const flex = array("Flex", ["0 0 auto", "1 1 100%"]);
  const dataTest = text("dataTest", "test");
  const isMobileFullPage = boolean("isMobileFullPage", false);
  const mobileHeader = boolean("mobileHeader", true);
  const showBack = boolean("showBackButton", true);
  const preventOverlayClose = boolean("preventOverlayClose", false);

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
        <ModalHeader
          title={title}
          illustration={illustration && <Illustration name={illustration} size="small" />}
          description={description}
          suppressed={suppressed}
        />
        <ModalSection suppressed={suppressed}>
          <Text>{content}</Text>
        </ModalSection>
        <ModalSection suppressed={suppressed}>
          <Text>{content}</Text>
        </ModalSection>
        <ModalSection suppressed={suppressed}>
          <Text>{content}</Text>
        </ModalSection>
        <ModalFooter flex={flex}>
          {showBack && (
            <Stack direction="row">
              <Button type="secondary" iconLeft={<ChevronLeft />}>
                Back
              </Button>
              <ButtonLink type="secondary">Button</ButtonLink>
            </Stack>
          )}
          <Button fullWidth>Continue to Payment</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

FullPreview.story = {
  name: "Full preview",

  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl = (): React.Node => {
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
            <Button type="secondary" iconLeft={<ChevronLeft />}>
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
