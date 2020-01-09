// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
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
import { CarrierLogo } from "../index";
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

import Modal, { ModalHeader, ModalSection, ModalFooter } from "./index";

storiesOf("Modal", module)
  .add(
    "Sizes",
    () => {
      const size = select("Size", Object.values(SIZES), SIZES.NORMAL);
      const title = text("Title", "Orbit design system");
      const description = text("Title", "I'm lovely description");

      const onClose = action("onClose");
      const content = text(
        "Content",
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      );
      return (
        <Modal onClose={onClose} size={size}>
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
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Short Modal",
    () => (
      <Modal onClose={action("onClose")} fixedFooter>
        <ModalSection>
          <Stack>
            <Text uppercase weight="bold">
              OUTBOUND
            </Text>
            <Tile
              title={
                <Stack direction="row" align="center" justify="between" spacing="condensed">
                  <CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size="large" />
                  <Stack spacing="tight">
                    <Text size="small" type="secondary">
                      Sat, Mar 31 Trip length: 1h55m
                    </Text>
                    <Stack direction="row" spacing="tight" align="center">
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
    ),
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Without section",
    () => {
      const showMore = boolean(false);
      return (
        <Modal onClose={action("onClose")} fixedFooter>
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
            <Button icon={<ChevronLeft />} type="secondary">
              Back
            </Button>
            <Button fullWidth>Proceed to Payment (23.98€)</Button>
          </ModalFooter>
        </Modal>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Removable sections",
    () => {
      const showMore = boolean(false);
      return (
        <Modal onClose={action("onClose")} fixedFooter>
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
            <Button icon={<ChevronLeft />} type="secondary">
              Back
            </Button>
            <Button fullWidth>Proceed to Payment (23.98€)</Button>
          </ModalFooter>
        </Modal>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "With Form",
    () => {
      const showMore = boolean(false);
      return (
        <Modal onClose={action("onClose")} fixedFooter>
          <ModalHeader title="Refund" description="Reservation number: 123456789" />
          <ModalSection>
            <Stack>
              <Card title="Cancellation" icon={<Airplane />} />
              <Text size="small" weight="bold">
                Contact information
              </Text>
              <InputField label="E-mail" placeholder="Your email" />
              <InputGroup
                flex={["0 0 120px", "1 1 100%"]}
                onChange={action("onChange")}
                label="Mobile phone"
              >
                <Select
                  options={[{ value: 1, label: "+420" }, { value: 2, label: "+421" }]}
                  value={1}
                  prefix={<CountryFlag code="cz" />}
                />
                <InputField placeholder="111 222 333" />
              </InputGroup>
              {showMore && (
                <React.Fragment>
                  <Text weight="bold" size="small">
                    Options
                  </Text>
                  <Radio label="Option one" checked />
                  <Radio label="Option two" />
                  <Text size="small" type="secondary" spaceAfter="large">
                    These are the most favorite. <TextLink href="#">Show more</TextLink>
                  </Text>
                  <Checkbox label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at mauris laoreet, eleifend nunc eu, venenatis sem. Etiam ullamcorper euismod suscipit. In a tortor ac velit elementum ultrices. Sed accumsan suscipit pulvinar." />
                </React.Fragment>
              )}
            </Stack>
          </ModalSection>
          <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
            <Button icon={<ChevronLeft />} type="secondary">
              Back
            </Button>
            <Button fullWidth>Proceed to Payment (23.98€)</Button>
          </ModalFooter>
        </Modal>
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "With fixedFooter",
    () => (
      <Modal onClose={action("onClose")} fixedFooter>
        <ModalHeader
          title="Enjoy something to eat while you fly"
          illustration={<Illustration name="Meal" size="small" />}
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
                  <Stack direction="row" align="center" justify="between" spacing="condensed">
                    <Stack spacing="tight">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="tight" align="center">
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
                  <Stack direction="row" align="center" justify="between" spacing="condensed">
                    <Stack spacing="tight">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="tight" align="center">
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
                  <Stack direction="row" align="center" justify="between" spacing="condensed">
                    <Stack spacing="tight">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="tight" align="center">
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
                  <Stack direction="row" align="center" justify="between" spacing="condensed">
                    <Stack spacing="tight">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="tight" align="center">
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
                  <Stack direction="row" align="center" justify="between" spacing="condensed">
                    <Stack spacing="tight">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="tight" align="center">
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
                  <Stack direction="row" align="center" justify="between" spacing="condensed">
                    <Stack spacing="tight">
                      <Text size="small" type="secondary">
                        Sat, Mar 31 Trip length: 1h55m
                      </Text>
                      <Stack direction="row" spacing="tight" align="center">
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
          <Button icon={<ChevronLeft />} type="secondary">
            Back
          </Button>
          <Button fullWidth>Proceed to Payment (23.98€)</Button>
        </ModalFooter>
      </Modal>
    ),
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "Full preview",
    () => {
      const size = select("Size", Object.values(SIZES), SIZES.NORMAL);
      const title = text("Title", "Orbit design system");
      const description = text("Description", "Lorem ispum dolor sit amet");
      const illustration = select("Illustration", [null, ...Object.values(NAMES)], "Accommodation");
      const onClose = action("onClose");
      const fixed = boolean("fixedFooter", false);
      const suppressed = boolean("suppressed", false);
      const content = text(
        "Text",
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      );
      const flex = array("Flex", ["0 0 auto", "1 1 100%"]);
      const dataTest = text("dataTest", "test");
      const isMobileFullPage = boolean("isMobileFullPage", false);
      const showBack = boolean("showBackButton", true);
      const preventOverlayClose = boolean("preventOverlayClose", false);

      return (
        <Modal
          onClose={onClose}
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
      );
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Modal onClose={action("onClose")} fixedFooter>
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
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
