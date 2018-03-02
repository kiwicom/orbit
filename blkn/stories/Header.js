// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "react-icons/lib/md/people";

import Header from "../src/Container/Header";
import { colors } from "../src/constants";

storiesOf("Container", module).add("Header", () => <Header title="Section Title" />);

storiesOf("Container", module).add("Header with description", () => (
  <Header
    title="Section Title"
    description="Write some other explaining info for what is this section about"
  />
));

storiesOf("Container", module).add("Header with icon", () => (
  <Header icon={<Icon size={32} color={colors.ink.lighter} />} title="Section Title" />
));
