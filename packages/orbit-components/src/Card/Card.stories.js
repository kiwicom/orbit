// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import TripSector, { TripDate } from "../deprecated/TripSector";
import TripSegment from "../deprecated/TripSegment";
import CarrierLogo from "../CarrierLogo";
import Stack from "../Stack";
import Text from "../Text";
import Button from "../Button";
import Badge from "../Badge";
import Clock from "../icons/Clock";
import CardSection from "./CardSection";
import * as Icons from "../icons";
import List, { ListItem } from "../List";
import { ELEMENT_OPTIONS } from "../Heading/consts";

import Card from "./index";

storiesOf("Card", module)
  .add("Default", () => {
    const title = text("Title", "Card with title");
    const titleAs = select("titleAs", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
    return <Card icon={<Icons.Airplane />} title={title} titleAs={titleAs} />;
  })
  .add("Card with description", () => {
    const title = text("Title", "Card with title");
    const description = text("Description", "This is description of the card");
    return (
      <Card
        icon={<Icons.Airplane />}
        onClose={action("onClose")}
        title={title}
        description={description}
      />
    );
  })
  .add("Card with actions", () => {
    const title = text("Title", "Card with title");
    const description = text("Description", "This is description of the card");
    return (
      <Card
        icon={<Icons.Airplane />}
        title={title}
        description={description}
        actions={<Button size="small">Button</Button>}
      />
    );
  })
  .add("Card with only section", () => {
    return (
      <Card>
        <CardSection>This is content of card</CardSection>
      </Card>
    );
  })
  .add("Card with sections", () => {
    const titleAs = select("titleAs", Object.values(ELEMENT_OPTIONS), ELEMENT_OPTIONS.H2);
    const sectionTitle = text("SectionTitle", "Section Title");
    const sectionDescription = text("SectionDescription", "Section Description");
    return (
      <Card>
        <CardSection
          onClick={action("onClick")}
          title={sectionTitle}
          icon={<Icons.Airplane />}
          description={sectionDescription}
          titleAs={titleAs}
        />
        <CardSection
          icon={<Icons.Airplane />}
          title={sectionTitle}
          description={sectionDescription}
          titleAs={titleAs}
        />
        <CardSection
          icon={<Icons.Airplane />}
          title={sectionTitle}
          description={sectionDescription}
          titleAs={titleAs}
        />
      </Card>
    );
  })
  .add(
    "Card with expandable sections",
    () => {
      const title = text("Title", "Card with title");
      const description = text("Description", "This is description of the card");
      const sectionTitle = text("SectionTitle", "Section Title");
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
    },
    {
      info:
        "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Card with controlled and uncontrolled",
    () => {
      const expanded = boolean("expanded", true);
      const title = text("Title", "Card with title");
      const description = text("Description", "This is description of the card");
      const sectionTitle = text("SectionTitle", "Section Title");
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
    },
    {
      info:
        "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Card with controlled with knobe",
    () => {
      const expanded = boolean("expanded", false);
      const title = text("Title", "Card with title");
      const description = text("Description", "This is description of the card");
      const sectionTitle = text("SectionTitle", "Section Title");
      return (
        <Card title={title} description={description}>
          <CardSection expandable expanded={expanded} title={sectionTitle}>
            This is a section content
          </CardSection>
        </Card>
      );
    },
    {
      info:
        "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Card with default expanded",
    () => {
      const initialExpanded = boolean("initialExpended", true);
      return (
        <Card>
          <CardSection
            expandable
            icon={<CarrierLogo size="large" carriers={[{ code: "FR", name: "Ryanair" }]} />}
            header={
              <Stack inline align="center" justify="end">
                <Text type="secondary">Trip length: 1h55m</Text>
                <Badge icon={<Clock />} type="warning">
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
              <Button type="secondary" size="small">
                Close
              </Button>
            }
            icon={<CarrierLogo size="large" carriers={[{ code: "FR", name: "Ryanair" }]} />}
            onClose={action("onClose")}
            header={
              <Stack inline justify="end">
                <Text type="secondary">Trip length: 1h55m</Text>
                <Badge icon={<Clock />} type="warning">
                  Unavailable
                </Badge>
              </Stack>
            }
          >
            By default visible content
          </CardSection>
        </Card>
      );
    },
    {
      info:
        "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Card with mixed sections",
    () => {
      const title = text("Title", "Card with title");
      const description = text("Description", "This is description of the card");
      const sectionTitle = text("SectionTitle", "Section Title");
      const sectionDescription = text("SectionDescription", "Section Description");
      return (
        <Card
          title={title}
          description={description}
          actions={<Button size="small">Button</Button>}
        >
          <CardSection
            expandable
            icon={<Icons.Airplane />}
            title={sectionTitle}
            actions={
              <Button size="small" type="secondary">
                Button
              </Button>
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
    },
    {
      info:
        "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Loading Card",
    () => {
      const title = text("Title", "Card with title");
      return (
        <Card title={title} loading>
          <CardSection>kek</CardSection>
        </Card>
      );
    },
    {
      info:
        "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "TripSector Card",
    () => (
      <Card>
        <CardSection expandable initialExpanded title="Expandable dynamic height of Card">
          <TripSector dataTest="test">
            <TripDate>Mon 22 Oct</TripDate>
            <TripSegment
              carrier={{ code: "FR", type: "airline", name: "Ryanair" }}
              duration="2h"
              departure="Barcelona BCN"
              departureTime="6:30"
              arrival="Paris BVA"
              arrivalTime="8:30"
            >
              <List size="small" type="secondary">
                <ListItem>Airline: Ryanair</ListItem>
                <ListItem>Flight no: D8 1762</ListItem>
              </List>
            </TripSegment>
          </TripSector>
        </CardSection>
      </Card>
    ),
    {
      info: "TripSector in expandable Card to test if Whole TripSector is visible after expand",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Card
          title="Title of the CardHeader"
          icon={<Icons.Airplane />}
          description="Description of the CardHeader"
        >
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
            actions={<Button size="small">Action</Button>}
          >
            <Text>Text in content</Text>
          </CardSection>
        </Card>
      </RenderInRtl>
    ),
    {
      info:
        "Card sections allow you to create separate sections in every card when you need to create more advanced content structure. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Accessibility",
    () => {
      const title = text("Title", "Card with title");
      const dataA11ySection = text("dataA11ySection", "ID-OF-CARD");
      return <Card title={title} dataA11ySection={dataA11ySection} />;
    },
    {
      info: "This is a preview of component accessibility props",
    },
  );
