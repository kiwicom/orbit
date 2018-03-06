// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import faker from "faker";

import Section from "./Section";
import Header from "./Header";

storiesOf("Container", module).add("Section", () => <Section />);

faker.seed(1);
storiesOf("Container", module)
  .add("Section with Header", () => (
    <Section>
      <Header title="Section Title" description={faker.lorem.words(10)} />
    </Section>
  ))
  .add("Section with Header in compact mode (different padding)", () => (
    <Section type="compact">
      <Header title="Section Title" description={faker.lorem.words(10)} />
    </Section>
  ));
