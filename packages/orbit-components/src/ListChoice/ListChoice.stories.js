// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import ListChoice from "./index";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("ListChoice", module)
  .add(
    "Default",
    () => {
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
    },
    {
      info: "Some description about this type of ListChoice in general.",
    },
  )
  .add(
    "Multiple choices",
    () => (
      <>
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
          disabled
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
      </>
    ),
    {
      info: "Some description about this type of ListChoice in general.",
    },
  )
  .add(
    "Playground",
    () => {
      const title = text("title", "Choice Title");
      const description = text("description", "Further description");
      const selectable = boolean("selectable", true);
      const selected = boolean("selected", false);
      const disabled = boolean("disabled", false);
      const Icon = getIcon(getIcons("icon", "Accommodation"));
      const dataTest = text("dataTest", "test");

      return (
        <ListChoice
          title={title}
          description={description}
          selectable={selectable}
          selected={selected}
          disabled={disabled}
          icon={Icon && <Icon />}
          onClick={action("onClick")}
          dataTest={dataTest}
        />
      );
    },
    {
      info: "Some description about this type of InputField in general.",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <>
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
            disabled
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
        </>
      </RenderInRtl>
    ),
    {
      info: "Some description about this type of ListChoice.",
    },
  );
