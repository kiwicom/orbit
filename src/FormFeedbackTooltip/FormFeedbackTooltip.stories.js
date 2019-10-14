// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select, number } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import { SIZE_OPTIONS, TYPE_OPTIONS, INPUTMODE } from "../InputField/consts";
import { NAME_OPTIONS } from "../ServiceLogo/consts";
import ButtonLink from "../ButtonLink";
import Stack from "../Stack";
import TextLink from "../TextLink";
import ServiceLogo from "../ServiceLogo";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Tag from "../Tag";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import InputField from "../InputField";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("FormErrors Kitchensink", module).add(
  "Default input",
  () => {
    const label = text("Label", "Label");
    const error = text("Label", "Something went wrong.");
    const help = text("Label", "Something doesn't seem quite right");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");
    const prefix = text("Prefix", "$");
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
    const required = boolean("required", true);

    return (
      <Stack>
        <InputField
          size={size}
          error={error}
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          size={size}
          error={error}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          size={size}
          error={error}
          inlineLabel
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          size={size}
          error={error}
          inlineLabel
          prefix={prefix}
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          label={label}
          inlineLabel
          tags={
            <div>
              <Tag selected onRemove={action("onRemove")}>
                Brno
              </Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
            </div>
          }
          error={error}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          label={label}
          value={value}
          placeholder={placeholder}
          required={required}
          error={error}
          onChange={action("change")}
        />
      </Stack>
    );
  },
  {
    info: "Some description about this type of InputField in general.",
  },
);
