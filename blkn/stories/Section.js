// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import faker from "faker";

import Section from "../src/Container/Section";
import Header from "../src/Container/Header";

storiesOf("Container", module).add("Section", () => <Section />);

faker.seed(1);
storiesOf("Container", module).add("Section with Header", () => (
  <Section>
    <Header title="Section Title" description={faker.lorem.words(10)} />
  </Section>
));
