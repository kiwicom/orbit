// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select, array } from "@storybook/addon-knobs";

import Button from "../Button";
import SIZES from "./consts";
import ModalHeader from "./ModalHeader";
import ModalSection from "./ModalSection";
import Illustration from "../Illustration";
import Text from "../Text";
import { NAMES } from "../Illustration/consts";
import ModalFooter from "./ModalFooter";
import ChevronLeft from "../icons/ChevronLeft";
import Stack from "../Stack";
import ButtonLink from "../ButtonLink";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Modal from "./index";

setAddon(chaptersAddon);

storiesOf("Modal", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Sizes", () => {
    const size = select("Size", Object.values(SIZES), SIZES.NORMAL);
    const title = text("Title", "Orbit design system");
    const description = text("Title", "I'm lovely description");

    const onClose = action("onClose");
    const content = text(
      "Content",
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    );
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
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
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Full preview", () => {
    const size = select("Size", Object.values(SIZES), SIZES.NORMAL);
    const title = text("Title", "Orbit design system");
    const description = text("Description", "Lorem ispum dolor sit amet");
    const illustration = select(
      "Illustration",
      [undefined, ...Object.values(NAMES)],
      "Accommodation",
    );
    const closable = boolean("closable", true);
    const onClose = action("onClose");
    const fixed = boolean("fixedFooter", false);
    const suppressed = boolean("suppressed", false);
    const content = text(
      "Text",
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    );
    const flex = array("Flex", ["0 0 auto", "1 1 100%"]);
    const dataTest = text("dataTest", "test");
    const showBack = boolean("showBackButton", true);
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Modal
                  onClose={onClose}
                  size={size}
                  closable={closable}
                  fixedFooter={fixed}
                  dataTest={dataTest}
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
                    <Button block>Continue to Payment</Button>
                  </ModalFooter>
                </Modal>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("RTL", () => ({
    info: "This is a preview of this component in RTL setup.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <RenderInRtl>
                <Modal>
                  <ModalHeader
                    title="The title of the ModalHeader"
                    illustration={<Illustration name="Accommodation" size="small" />}
                    description="The description of the ModalHeader"
                    suppressed
                  />
                  <ModalSection>
                    <Text>
                      You can try all possible configurations of this component. However, check
                      Orbit.Kiwi for more detailed design guidelines.
                    </Text>
                  </ModalSection>
                  <ModalSection suppressed>
                    <Text>
                      You can try all possible configurations of this component. However, check
                      Orbit.Kiwi for more detailed design guidelines.
                    </Text>
                  </ModalSection>
                  <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
                    <Button type="secondary" iconLeft={<ChevronLeft />}>
                      Back
                    </Button>
                    <Button block>Continue to Payment</Button>
                  </ModalFooter>
                </Modal>
              </RenderInRtl>
            ),
          },
        ],
      },
    ],
  }));
