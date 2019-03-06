// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import ListChoice from "./index";

const getIcons = (name, defaultIcon) =>
  select(name, [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("ListChoice", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default", () => {
    const title = text("title", "Choice Title");
    const description = text("description", "Further description");
    const Icon = getIcon(getIcons("icon", "Accommodation"));

    return (
      <ListChoice
        title={title}
        description={description}
        icon={Icon && <Icon />}
        onClick={action("onClick")}
      />
    );
  })
  .add("Multiple choices", () => (
    <React.Fragment>
      <ListChoice
        title="Choice Title"
        description="Further description"
        selectable
        icon={<Icons.Accommodation />}
        onClick={action("onClick")}
      />
      <ListChoice
        title="Choice Title"
        description="Further description"
        selectable
        selected
        icon={<Icons.Accommodation />}
        onClick={action("onClick")}
      />
      <ListChoice
        title="Choice Title"
        description="Further description"
        selectable
        icon={<Icons.Accommodation />}
        onClick={action("onClick")}
      />
    </React.Fragment>
  ))
  .add("Playground", () => {
    const title = text("title", "Choice Title");
    const description = text("description", "Further description");
    const selectable = boolean("selectable", true);
    const selected = boolean("selected", false);
    const Icon = getIcon(getIcons("icon", "Accommodation"));
    const dataTest = text("dataTest", "test");

    return (
      <ListChoice
        title={title}
        description={description}
        selectable={selectable}
        selected={selected}
        icon={Icon && <Icon />}
        onClick={action("onClick")}
        dataTest={dataTest}
      />
    );
  })
  .add("RTL", () => (
    <RenderInRtl>
      <React.Fragment>
        <ListChoice
          title="Choice Title"
          description="Further description"
          selectable
          icon={<Icons.Accommodation />}
          onClick={action("onClick")}
        />
        <ListChoice
          title="Choice Title"
          description="Further description"
          selectable
          selected
          icon={<Icons.Accommodation />}
          onClick={action("onClick")}
        />
        <ListChoice
          title="Choice Title"
          description="Further description"
          selectable
          icon={<Icons.Accommodation />}
          onClick={action("onClick")}
        />
      </React.Fragment>
    </RenderInRtl>
  ));
