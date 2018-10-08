// @flow

/* eslint-disable jsx-a11y/accessible-emoji, import/no-unresolved, import/extensions */

import React from "react";
import { linkTo } from "@storybook/addon-links";

import { storiesOf } from "../../helpers/storiesOf";
import Welcome from "../../src/Welcome";

storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Button")} />);
