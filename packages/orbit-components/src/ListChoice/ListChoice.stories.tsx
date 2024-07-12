import * as React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import * as Icons from "../icons";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import ListChoice from ".";

const getIcon = (source: string | null) => source && Icons[source];

export default {
  title: "ListChoice",
};

export const Default = ({ title, description, icon }) => {
  const Icon = getIcon(icon);

  return (
    <ListChoice
      title={title}
      description={description}
      icon={Icon && <Icon />}
      onClick={action("onClick")}
    />
  );
};

Default.story = {
  parameters: {
    info: "Some description about this type of ListChoice in general.",
  },
};

Default.args = {
  title: "Choice Title",
  description: "Further description",
  icon: "Accommodation",
};

Default.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const MultipleChoices = () => (
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
);

MultipleChoices.story = {
  name: "Multiple choices",

  parameters: {
    info: "Some description about this type of ListChoice in general.",
  },
};

export const WithAction = ({ title, description, disabled, icon, dataTest }) => {
  const Icon = getIcon(icon);

  return (
    <ListChoice
      title={title}
      description={description}
      disabled={disabled}
      icon={Icon && <Icon />}
      action={
        <Button
          onClick={action("onClick")}
          iconLeft={<Icons.Plus />}
          size="small"
          type="primarySubtle"
        />
      }
      onClick={action("onClick")}
      dataTest={dataTest}
    />
  );
};

WithAction.args = {
  title: "Choice Title",
  description: "Further description",
  disabled: false,
  icon: "Accommodation",
  dataTest: "test",
};

WithAction.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({
  title,
  description,
  selectable,
  selected,
  disabled,
  icon,
  dataTest,
}) => {
  const Icon = getIcon(icon);

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
};

Playground.story = {
  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

Playground.args = {
  title: "Choice Title",
  description: "Further description",
  selectable: true,
  selected: false,
  disabled: false,
  icon: "Accommodation",
  dataTest: "test",
};

Playground.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Controlled = ({ icon }) => {
  const [selected, setSelected] = React.useState(false);

  const Icon = getIcon(icon);

  return (
    <ListChoice
      title="Controlled ListChoice"
      description="This ListChoice is controlled by React.useState"
      icon={Icon && <Icon />}
      selectable
      selected={selected}
      onClick={e => {
        action("onClick")(e);
        setSelected(!selected);
      }}
    />
  );
};

Controlled.args = {
  icon: "Accommodation",
};

Controlled.argTypes = {
  icon: {
    options: Object.keys(Icons),
    control: {
      type: "select",
    },
  },
};

export const Rtl = () => (
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
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "Some description about this type of ListChoice.",
  },
};
