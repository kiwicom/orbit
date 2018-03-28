// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import faker from "faker";

import Section from "./Section";
import Header from "./Header";

storiesOf("Container", module).add("Section", () => <Section />);

storiesOf("Container", module)
  .add("Section with Header", () => {
    faker.seed(1);
    return (
      <Section>
        <Header title="Section Title" description={faker.lorem.words(10)} />
      </Section>
    );
  })
  .add("Section with Header in compact mode (different padding)", () => {
    faker.seed(1);
    return (
      <Section type="compact">
        <Header title="Section Title" description={faker.lorem.words(10)} />
      </Section>
    );
  });
