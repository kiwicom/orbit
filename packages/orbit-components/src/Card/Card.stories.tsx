import * as React from "react";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";
import Text from "../Text";
import ButtonLink from "../ButtonLink";
import Badge from "../Badge";
import Clock from "../icons/Clock";
import CardSection from "./CardSection";
import { ELEMENT_OPTIONS } from "../Heading/consts";

import Card from ".";

export default {
  title: "Card",
};

export const Default = ({ title, titleAs }) => {
  return <Card title={title} titleAs={titleAs} />;
};

Default.args = {
  title: "Card with title",
  titleAs: ELEMENT_OPTIONS.H2,
};

Default.argTypes = {
  titleAs: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const CardWithDescription = ({ title, description }) => {
  return <Card onClose={action("onClose")} title={title} description={description} />;
};

CardWithDescription.story = {
  name: "Card with description",
};

CardWithDescription.args = {
  title: "Card with title",
  description: "This is description of the card",
};

export const CardWithActions = ({ title, description }) => {
  return (
    <Card
      title={title}
      description={description}
      actions={
        <ButtonLink compact size="small">
          Button
        </ButtonLink>
      }
    />
  );
};

CardWithActions.story = {
  name: "Card with actions",
};

CardWithActions.args = {
  title: "Card with title",
  description: "This is description of the card",
};

export const CardWithOnlySection = () => {
  return (
    <Card>
      <CardSection>This is content of card</CardSection>
    </Card>
  );
};

CardWithOnlySection.story = {
  name: "Card with only section",
};

export const CardWithSections = ({ titleAs, sectionTitle, sectionDescription }) => {
  return (
    <Card>
      <CardSection
        onClick={action("onClick")}
        title={sectionTitle}
        description={sectionDescription}
        titleAs={titleAs}
      />
      <CardSection title={sectionTitle} description={sectionDescription} titleAs={titleAs} />
      <CardSection title={sectionTitle} description={sectionDescription} titleAs={titleAs} />
    </Card>
  );
};

CardWithSections.story = {
  name: "Card with sections",
};

CardWithSections.args = {
  titleAs: ELEMENT_OPTIONS.H2,
  sectionTitle: "Section Title",
  sectionDescription: "Section Description",
};

CardWithSections.argTypes = {
  titleAs: {
    options: Object.values(ELEMENT_OPTIONS),
    control: {
      type: "select",
    },
  },
};

export const CardWithExpandableSections = ({ title, description, sectionTitle }) => {
  return (
    <Card title={title} onClose={action("onClose")} description={description}>
      <CardSection expandable title={sectionTitle}>
        This is a section content
      </CardSection>
      <CardSection expandable title={sectionTitle}>
        This is a section content
      </CardSection>
      <CardSection expandable title={sectionTitle}>
        This is a section content
      </CardSection>
    </Card>
  );
};

CardWithExpandableSections.story = {
  name: "Card with expandable sections",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

CardWithExpandableSections.args = {
  title: "Card with title",
  description: "This is description of the card",
  sectionTitle: "Section Title",
};

export const CardWithControlledAndUncontrolled = ({
  expanded,
  title,
  description,
  sectionTitle,
}) => {
  return (
    <Card title={title} description={description}>
      <CardSection
        expandable
        expanded={expanded}
        onClose={action("onClose")}
        onExpand={action("onExpand")}
        title={sectionTitle}
      >
        This is a section content
      </CardSection>
      <CardSection
        expandable
        title={sectionTitle}
        onClose={action("onClose")}
        onExpand={action("onExpand")}
      >
        This is a section content
      </CardSection>
    </Card>
  );
};

CardWithControlledAndUncontrolled.story = {
  name: "Card with controlled and uncontrolled",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

CardWithControlledAndUncontrolled.args = {
  expanded: true,
  title: "Card with title",
  description: "This is description of the card",
  sectionTitle: "Section Title",
};

export const CardWithControlledWithControls = ({ expanded, title, description, sectionTitle }) => {
  return (
    <Card title={title} description={description}>
      <CardSection expandable expanded={expanded} title={sectionTitle}>
        This is a section content
      </CardSection>
    </Card>
  );
};

CardWithControlledWithControls.story = {
  name: "Card with controlled with knobe",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

CardWithControlledWithControls.args = {
  expanded: false,
  title: "Card with title",
  description: "This is description of the card",
  sectionTitle: "Section Title",
};

export const CardWithDefaultExpanded = ({ initialExpanded }) => {
  return (
    <Card>
      <CardSection
        expandable
        header={
          <Stack inline align="center" justify="end">
            <Text type="secondary">Trip length: 1h55m</Text>
            <Badge icon={<Clock />} type="warningSubtle">
              Unavailable
            </Badge>
          </Stack>
        }
      >
        Hidden content
      </CardSection>
      <CardSection
        expandable
        initialExpanded={initialExpanded}
        onExpand={action("onExpand")}
        actions={
          <ButtonLink compact type="secondary" size="small">
            Close
          </ButtonLink>
        }
        onClose={action("onClose")}
        header={
          <Stack inline justify="end">
            <Text type="secondary">Trip length: 1h55m</Text>
            <Badge icon={<Clock />} type="warningSubtle">
              Unavailable
            </Badge>
          </Stack>
        }
      >
        By default visible content
      </CardSection>
    </Card>
  );
};

CardWithDefaultExpanded.story = {
  name: "Card with default expanded",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

CardWithDefaultExpanded.args = {
  initialExpanded: true,
};

export const CardWithMixedSections = ({ title, description, sectionTitle, sectionDescription }) => {
  return (
    <Card
      title={title}
      description={description}
      actions={
        <ButtonLink compact size="small">
          Button
        </ButtonLink>
      }
    >
      <CardSection
        expandable
        title={sectionTitle}
        actions={
          <ButtonLink compact size="small" type="secondary">
            Button
          </ButtonLink>
        }
        description={sectionDescription}
      >
        Section Content
      </CardSection>
      <CardSection expandable title={sectionTitle} description={sectionDescription}>
        Expandable Content
      </CardSection>
      <CardSection title={sectionTitle} description={sectionDescription}>
        Section Content
      </CardSection>
    </Card>
  );
};

CardWithMixedSections.story = {
  name: "Card with mixed sections",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

CardWithMixedSections.args = {
  title: "Card with title",
  description: "This is description of the card",
  sectionTitle: "Section Title",
  sectionDescription: "Section Description",
};

export const LoadingCard = ({ title }) => {
  return (
    <Card title={title} loading>
      <CardSection>kek</CardSection>
    </Card>
  );
};

LoadingCard.story = {
  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

LoadingCard.args = {
  title: "Card with title",
};

export const Rtl = () => (
  <RenderInRtl>
    <Card title="Title of the CardHeader" description="Description of the CardHeader">
      <CardSection title="Content with Heading and text">
        <Text>Text in content</Text>
      </CardSection>
      <CardSection title="Content with Heading and text">
        <Text>Text in content</Text>
      </CardSection>
      <CardSection title="Content with Heading and text" expandable>
        Text in content
      </CardSection>

      <CardSection
        expandable
        title="Content with Heading and text"
        initialExpanded
        actions={
          <ButtonLink compact size="small">
            Action
          </ButtonLink>
        }
      >
        <Text>Text in content</Text>
      </CardSection>
    </Card>
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Accessibility = ({ title, dataA11ySection }) => {
  return <Card title={title} dataA11ySection={dataA11ySection} />;
};

Accessibility.story = {
  parameters: {
    info: "This is a preview of component accessibility props",
  },
};

Accessibility.args = {
  title: "Card with title",
  dataA11ySection: "ID-OF-CARD",
};
