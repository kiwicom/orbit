// @flow

import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "react-icons/lib/md/people";

import Header from "./Header";
import { colors } from "../../constants";

storiesOf("Container", module)
  .add("Header", () => <Header title="Section Title" />)
  .add("Header with description", () => (
    <Header
      title="Header Title"
      description="Write some other explaining info for what is this section about"
    />
  ))
  .add("Header with icon", () => (
    <Header icon={<Icon size={32} color={colors.ink.lighter} />} title="Header Title" />
  ));
