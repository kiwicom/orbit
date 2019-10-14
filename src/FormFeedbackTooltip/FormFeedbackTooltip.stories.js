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
import Textarea from "../Textarea";
import Select from "../Select";
import InputFile from "../InputFile";
import InputGroup from "../InputGroup";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

const objectOptions = [
  { value: 0, label: "Zero-th item" },
  { value: 1, label: "First item" },
  { value: 2, label: "Second item" },
  { value: 3, label: "Third item" },
];

storiesOf("FormErrors Kitchensink", module).add(
  "Error",
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
        />
        <InputField
          label={label}
          value={value}
          placeholder={placeholder}
          required={required}
          error={error}
        />
        <Textarea label={label} placeholder={placeholder} error={error} value={value} />
        <Textarea placeholder={placeholder} error={error} value={value} />
        <Select
          label={label}
          options={objectOptions}
          value={1}
          error={error}
          onChange={action("onChange")}
        />
        <Select options={objectOptions} error={error} value={1} onChange={action("onChange")} />
        <InputFile label={label} error={error} onRemoveFile={action("removeFile")} />
        <InputFile error={error} onRemoveFile={action("removeFile")} />
        <InputGroup error={error} help={help} label={label}>
          <InputField placeholder="DD" />
          <Select options={objectOptions} value={1} placeholder="Month" />
          <InputField placeholder="YYYY" />
        </InputGroup>
        <InputGroup error={error} help={help}>
          <InputField placeholder="DD" />
          <Select options={objectOptions} value={1} placeholder="Month" />
          <InputField placeholder="YYYY" />
        </InputGroup>
      </Stack>
    );
  },
  {
    info: "Some description about this type of InputField in general.",
  },
);
