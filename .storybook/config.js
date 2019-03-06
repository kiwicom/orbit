/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import * as React from "react"
import { configure, addDecorator } from "@storybook/react";
import  { withInfo } from "@storybook/addon-info"
import  { withKnobs } from "@storybook/addon-knobs"
import 'loki/configure-react';
import Heading from "../src/Heading"

const orbitDecorator = (storyFn, context) =>
  <div style={{ padding: "20px" }}>
    <Heading spaceAfter="largest">{context.kind}</Heading>
    {storyFn(context)}
  </div>

addDecorator(
  orbitDecorator
)
addDecorator(
  withKnobs
)

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  const req = require.context("../src", true, /.stories.js$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
