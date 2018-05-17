// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Card from "./Card";
import CardHeader from "./CardHeader/CardHeader";
import CardContent from "./CardContent/CardContent";
import CardSection from "./CardSection/CardSection";

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
                  <CardHeader title={title} subTitle={description} />
                  <CardSection>
                    <Heading type="title3" element="h3">
                      Insert your title here...
                    </Heading>
                    <Text>Insert your content here...</Text>
                  </CardSection>
                  <CardSection>
                    <Heading type="title3" element="h3">
                      Insert your title here...
                    </Heading>
                    <Text>Insert your content here...</Text>
                  </CardSection>
                  <CardSection>
                    <Heading type="title3" element="h3">
                      Insert your title here...
                    </Heading>
                    <Text>Insert your content here...</Text>
                  </CardSection>
                </Card>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Card with only content", () => {
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
                  <CardContent>
                    <Text>{content}</Text>
                  </CardContent>
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
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Card closable={closable} onClose={action("Close")}>
                  <CardHeader icon={<Icon />} title={title} subTitle={description} />
                  <CardContent>
                    <Heading type="title3" element="h3">
                      Content with Heading and text
                    </Heading>
                    <Text>Text in content</Text>
                  </CardContent>
                  <CardSection>
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
