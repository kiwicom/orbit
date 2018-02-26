// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import faker from "faker";

import Header from "../src/Container/Header";

storiesOf("Container", module).add("Header", () => <Header title="Section Title" />);

faker.seed(1);
storiesOf("Container", module).add("Header with description", () => (
  <Header title="Section Title" description={faker.lorem.words(10)} />
));
