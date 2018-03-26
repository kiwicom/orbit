// @flow

import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import Airplane from "../icons/Airplane";
import PlusCircle from "../icons/PlusCircle";

import Button from "./index";

setAddon(chaptersAddon);

const options = {
  showSource: false,
  allowSourceToggling: true,
  showPropTables: false,
  allowPropTablesToggling: false,
};

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(styles({
    padding: '20px',
  }))
  .addWithChapters("Primary button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Primary button',
      info: 'Buttons are used to initialize an action, either in the background or foreground of an experience.\n' +
      'Primary buttons should be used for the principle call to action on the page. Modify the behavior of the button by changing its event properties.\n' +
      'Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less.\n' +
      'The example below shows Primary Button component.',
      chapters: [
        {
          title: `Without icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="primary"
                />
              ),
              options,
            },
          ],
        },
        {
          title: `With icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="primary"
                  Icon={PlusCircle}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Secondary button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Secondary button',
      info: 'Bla bla',
      chapters: [
        {
          title: `Without icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="secondary"
                />
              ),
              options,
            },
          ],
        },
        {
          title: `With icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="secondary"
                  Icon={PlusCircle}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Link button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Link button',
      info: 'Bla bla',
      chapters: [
        {
          title: `Without icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="link"
                />
              ),
              options,
            },
          ],
        },
        {
          title: `With icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="link"
                  Icon={PlusCircle}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Facebook button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Facebook button',
      info: 'Bla bla',
      chapters: [
        {
          title: `Without icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="facebook"
                />
              ),
              options,
            },
          ],
        },
        {
          title: `With icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="facebook"
                  Icon={Airplane}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Google button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Google Button',
      info: 'Bla bla',
      chapters: [
        {
          title: `Without icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="google"
                />
              ),
              options,
            },
          ],
        },
        {
          title: `With icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="google"
                  Icon={Airplane}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Destructive button", () => {
    const size = select(
      "Size",
      {
        small: "small",
        normal: "normal",
        large: "large",
      },
      "normal",
    );
    return {
      title: 'Destructive Button',
      info: 'Bla bla',
      chapters: [
        {
          title: `Without icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isBordered={boolean("Bordered", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="destructive"
                />
              ),
              options,
            },
          ],
        },
        {
          title: `With icon`,
          info: "Some description about the different kinds of button sizes.",
          sections: [
            {
              title: `Button ${size}`,
              info: "Some description about the small button.",
              sectionFn: () => (
                <Button
                  title={text("Text", `Button ${size}`)}
                  isDisabled={boolean("Disabled", false)}
                  isBordered={boolean("Bordered", false)}
                  isLoading={boolean("Loading", false)}
                  onClick={action("clicked")}
                  size={size}
                  type="destructive"
                  Icon={Airplane}
                />
              ),
              options,
            },
          ],
        },
      ],
    };
  });
