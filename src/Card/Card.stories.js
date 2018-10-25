// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import Heading from "../Heading";
import Text from "../Text";
import CardHeader from "./CardHeader";
import CardSection from "./CardSection";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Card from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", Object.keys(Icons), defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => {
    const title = text("Title", "Card with title");
    const description = text("Description");
    return {
      info: "This is the default configuration of this component.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Card>
                  <CardHeader icon={<Icons.Airplane />} title={title} subTitle={description} />
                </Card>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Card with description", () => {
    const title = text("Title", "Card with title & description");
    const description = text("Description", "This is a description of the card.");
    return {
      info:
        "Card component is a simple container for grouping some relevant information. It’s possible to add title and description. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Card>
                  <CardHeader icon={<Icons.Airplane />} title={title} subTitle={description} />
                </Card>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Card with only section", () => {
    const content = text("Content", "This is a content of the card.");
    return {
      info:
        "Card component is a simple container for grouping some relevant information. You can add a content to Card. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Card>
                  <CardSection>
                    <Text>{content}</Text>
                  </CardSection>
                </Card>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Card with sections", () => {
    const title = text("Title", "Card with sections");
    const description = text("Description", "This is a description of the card.");
    return {
      info:
        "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Card>
                  <CardSection>
                    <Heading type="title3" element="h3">
                      {title}
                    </Heading>
                    <Text>{description}</Text>
                  </CardSection>
                  <CardSection>
                    <Heading type="title3" element="h3">
                      {title}
                    </Heading>
                    <Text>{description}</Text>
                  </CardSection>
                  <CardSection>
                    <Heading type="title3" element="h3">
                      {title}
                    </Heading>
                    <Text>{description}</Text>
                  </CardSection>
                </Card>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Card with expandable sections", () => {
    const title = text("Title", "Card with sections");
    const description = text("Description", "This is a description of the card.");
    return {
      info:
        "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Card>
                  <CardHeader title={title} subTitle={description} />
                  <CardSection title="Insert your title here..." subTitle="subtitle" expandable>
                    This is hidden content
                  </CardSection>
                  <CardSection title="Insert your title here..." subTitle="subtitle" expandable>
                    This is hidden content
                  </CardSection>
                  <CardSection title="Insert your title here..." subTitle="subtitle" expandable>
                    This is hidden content
                  </CardSection>
                </Card>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Card with mixed sections", () => {
    const title = text("Title", "Card with sections");
    const description = text("Description", "This is a description of the card.");
    return {
      info:
        "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Card>
                  <CardHeader title={title} subTitle={description} />
                  <CardSection title="Insert your title here..." subTitle="subtitle" />
                  <CardSection title="Insert your title here..." subTitle="subtitle" expandable>
                    This is hidden content
                  </CardSection>
                  <CardSection title="Insert your title here..." subTitle="subtitle" />
                </Card>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const title = text("Title", "Customisable card title");
    const description = text("Description", "This is a customisable description of the card.");
    const Icon = getIcon(getIcons("Airplane"));
    const closable = boolean("Closable", false);
    const dataTest = text("dataTest", "test");
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Card
                  closable={closable}
                  onClose={action("Close")}
                  dataTest={dataTest}
                  spaceAfter={spaceAfter}
                >
                  <CardHeader
                    icon={<Icon />}
                    title={title}
                    subTitle={description}
                    dataTest={dataTest}
                  />
                  <CardSection dataTest={dataTest}>
                    <Heading type="title3" element="h3">
                      Content with Heading and text
                    </Heading>
                    <Text>Text in content</Text>
                  </CardSection>
                  <CardSection dataTest={dataTest}>
                    <Heading type="title3" element="h3">
                      Section with Heading and text
                    </Heading>
                    <Text>Text in section</Text>
                  </CardSection>
                </Card>
              ),
            },
          ],
        },
      ],
    };
  });
