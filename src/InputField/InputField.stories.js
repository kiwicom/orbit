// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select, number } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import InputField from "./InputField";
import { SIZE_OPTIONS, TYPE_OPTIONS } from "./consts";
import ButtonLink from "../ButtonLink/ButtonLink";
import TextLink from "../TextLink/TextLink";

setAddon(chaptersAddon);

const getIcons = (name, defaultIcon) =>
  select(name, [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("InputField", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default input", () => {
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");

    return {
      info: "Some description about this type of InputField in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputField
                  label={label}
                  value={value}
                  placeholder={placeholder}
                  onChange={action("change")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Small input", () => {
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");

    return {
      info: "Some description about this type of InputField in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputField
                  size="small"
                  label={label}
                  value={value}
                  placeholder={placeholder}
                  onChange={action("change")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Number input", () => {
    const label = text("Label", "Number");
    const value = text("Value", 2);
    const placeholder = text("Placeholder", "Number");
    const maxValue = number("maxValue", 3);
    const minValue = number("minValue", 1);

    return {
      info: "Some description about this type of InputField in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputField
                  type="number"
                  label={label}
                  value={value}
                  placeholder={placeholder}
                  maxValue={maxValue}
                  minValue={minValue}
                  onChange={action("change")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Password input", () => {
    const label = text("Label", "Password");
    const value = text("Value", "p422W0rd");
    const placeholder = text("Placeholder", "Password");

    return {
      info: "Some description about this type of InputField in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputField
                  type="password"
                  label={label}
                  value={value}
                  placeholder={placeholder}
                  onChange={action("change")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Email input", () => {
    const label = text("Label", "Email");
    const value = text("Value", "name@example.co");
    const placeholder = text("Placeholder", "Email");

    return {
      info: "Some description about this type of InputField in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputField
                  type="email"
                  label={label}
                  value={value}
                  placeholder={placeholder}
                  onChange={action("change")}
                  help={
                    <div>
                      Did you mean&nbsp;
                      <TextLink onClick={action("clicked")}>name@example.com</TextLink>?
                    </div>
                  }
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With text prefix", () => {
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");
    const prefix = text("Prefix", "$");

    return {
      info: "Some description about this type of InputField in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputField
                  label={label}
                  value={value}
                  placeholder={placeholder}
                  prefix={prefix}
                  onChange={action("change")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With Icon prefix", () => {
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");
    const Prefix = getIcon(getIcons("Prefix", "Search"));

    return {
      info: "Some description about this type of InputField in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputField
                  label={label}
                  value={value}
                  placeholder={placeholder}
                  prefix={Prefix && <Prefix />}
                  onChange={action("change")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("With ButtonLink suffix", () => {
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");
    const Suffix = getIcon(getIcons("Suffix", "Visibility"));

    return {
      info: "Some description about this type of InputField in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputField
                  label={label}
                  value={value}
                  placeholder={placeholder}
                  suffix={
                    Suffix && (
                      <ButtonLink transparent icon={<Suffix />} onClick={action("clicked")} />
                    )
                  }
                  onChange={action("change")}
                />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.TEXT);
    const name = text("Name", "input");
    const label = text("Label", "Label");
    const value = text("Value", "");
    const placeholder = text("Placeholder", "Placeholder");
    const Prefix = getIcon(getIcons("Prefix", "Search"));
    const Suffix = getIcon(getIcons("Suffix", "Visibility"));
    const help = text("Help", undefined);
    const error = text("Error", undefined);
    const disabled = boolean("Disabled", false);
    const maxValue = number("maxValue", undefined);
    const minValue = number("minValue", undefined);
    const maxLength = number("maxLength", undefined);
    const minLength = number("minLength", undefined);

    return {
      info: "Some description about this type of InputField in general.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <InputField
                  size={size}
                  type={type}
                  name={name}
                  label={label}
                  value={value}
                  placeholder={placeholder}
                  prefix={Prefix && <Prefix />}
                  suffix={
                    Suffix && (
                      <ButtonLink
                        transparent
                        icon={<Suffix />}
                        size={size}
                        onClick={action("clicked")}
                        disabled={disabled}
                      />
                    )
                  }
                  help={help}
                  error={error}
                  disabled={disabled}
                  maxValue={maxValue}
                  minValue={minValue}
                  maxLength={maxLength}
                  minLength={minLength}
                  onChange={action("change")}
                  onFocus={action("focus")}
                  onBlur={action("blur")}
                />
              ),
            },
          ],
        },
      ],
    };
  });
