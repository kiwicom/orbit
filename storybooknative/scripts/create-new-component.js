// @flow strict

const fs = require("fs");
const path = require("path");

const component = process.argv[2];

if (component == null) {
  console.log("Please, specify the name of the component you want to create."); // eslint-disable-line no-console
  process.exit(1);
}

fs.mkdir(path.join(__dirname, "..", "src", component), 0o777, err => {
  if (err && err.code === "EEXIST") {
    console.log("A folder for that component already exists.", "Aborting"); // eslint-disable-line no-console
    process.exit(1);
  } else if (err) {
    console.log("There was a problem.", "Aborting"); // eslint-disable-line no-console
    process.exit(1);
  }
  fs.writeFile(
    path.join(__dirname, "..", "src", component, "index.js.flow"),
    `// @flow

export type Props = {||};

declare export default React$ComponentType<Props>;
`,
    () => {
      // ...
    },
  );

  fs.writeFile(
    path.join(__dirname, "..", "src", component, "index.js"),
    `// @flow
import * as React from "react";
import { View, Text } from "react-native";

import styled from "../styled";
import type { Props } from "./index.js.flow";

const StyledView = styled(View, {
  width: "100px",
});

const ${component} = (props: Props) => {
  console.log({ props });
  return (
    <StyledView>
      <Text>${component}</Text>
    </StyledView>
  );
};

export default ${component};
`,
    () => {
      // ...
    },
  );

  fs.writeFile(
    path.join(__dirname, "..", "src", component, `${component}.stories.js`),
    `// @flow

import React from "react";
import { action } from "@storybook/addon-actions";
import { number, boolean, select, text, withKnobs } from "@storybook/addon-knobs";

import { storiesOf } from "../../helpers/storiesOf";
import CenterView from "../../src/CenterView";
import ${component} from "../../src/${component}";

storiesOf("${component}", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Default", () => <${component}>Default ${component}</${component}>)
  .add("Playground", () => {
    // KNOBS
    const title = text("Title", "Basic ${component}");
    // const type = select("Type", Object.values(TYPE_OPTIONS), "primary");
    // const size = select("Size", Object.values(SIZE_OPTIONS), "normal");
    // const disabled = boolean("Disabled", false);
    // const block = boolean("Block", false);
    // const width = number("Width", 0);
    // const bordered = boolean("Bordered", false);
    // const circled = boolean("Circled", false);

    return (
      <${component}
      //     onPress={action("clicked")}
      //     type={type}
      //     size={size}
      //     disabled={disabled}
      //     block={block}
      //     width={width}
      //     bordered={bordered}
      //     circled={circled}
      >
        {title}
      </${component}>
    );
  });
`,
    () => {
      // ...
    },
  );

  fs.mkdir(path.join(__dirname, "..", "src", component, "__tests__"), 0o777, _err => {
    if (_err && _err.code === "EEXIST") {
      console.log("The folder __tests__ already exists.", "Aborting"); // eslint-disable-line no-console
      process.exit(1);
    } else if (_err) {
      console.log("There was a problem creating the __tests__ folder.", "Aborting"); // eslint-disable-line no-console
      process.exit(1);
    }

    fs.writeFile(
      path.join(__dirname, "..", "src", component, "__tests__", "index.js"),
      `// @flow

import * as React from "react";
import renderer from "react-test-renderer";

import ${component} from "../index";

describe("${component}", () => {
  const children = "Lorem ipsum";
  const component = renderer.create(<${component}>{children}</${component}>);
  const instance = component.root;
  it("shoud have title", () => {
    expect(instance.props.children).toBe(children);
  });
  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
`,
      () => {
        // ...
      },
    );
  });
});
