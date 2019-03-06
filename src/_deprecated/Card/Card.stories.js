// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../../icons";
import Heading from "../../Heading";
import Text from "../../Text";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardSection from "./CardSection";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

import Card from "./index";

const getIcons = defaultIcon => select("Icon", Object.keys(Icons), defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Deprecated Card", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default", () => {
    const title = text("Title", "Card with title");
    const description = text("Description");
    return (
      <Card>
        <CardHeader icon={<Icons.Airplane />} title={title} subTitle={description} />
      </Card>
    );
  })
  .add("Card with description", () => {
    const title = text("Title", "Card with title & description");
    const description = text("Description", "This is a description of the card.");
    return (
      <Card>
        <CardHeader icon={<Icons.Airplane />} title={title} subTitle={description} />
      </Card>
    );
  })
  .add("Card with sections", () => {
    const title = text("Title", "Card with sections");
    const description = text("Description", "This is a description of the card.");
    return (
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
    );
  })
  .add("Card with only content", () => {
    const content = text("Content", "This is a content of the card.");
    return (
      <Card>
        <CardContent>
          <Text>{content}</Text>
        </CardContent>
      </Card>
    );
  })
  .add("Playground", () => {
    const title = text("Title", "Customisable card title");
    const description = text("Description", "This is a customisable description of the card.");
    const Icon = getIcon(getIcons("Airplane"));
    const closable = boolean("Closable", false);
    const dataTest = text("dataTest", "test");
    const spaceAfter = select("spaceAfter", [undefined, ...Object.values(SPACINGS_AFTER)]);
    return (
      <Card
        closable={closable}
        onClose={action("Close")}
        dataTest={dataTest}
        spaceAfter={spaceAfter}
      >
        <CardHeader icon={<Icon />} title={title} subTitle={description} dataTest={dataTest} />
        <CardContent dataTest={dataTest}>
          <Heading type="title3" element="h3">
            Content with Heading and text
          </Heading>
          <Text>Text in content</Text>
        </CardContent>
        <CardSection dataTest={dataTest}>
          <Heading type="title3" element="h3">
            Section with Heading and text
          </Heading>
          <Text>Text in section</Text>
        </CardSection>
      </Card>
    );
  });
