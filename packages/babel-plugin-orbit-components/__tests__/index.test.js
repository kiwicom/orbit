// @flow

const os = require("os");
const { transform: babelTransform } = require("@babel/core");

const plugin = require("..");

expect.addSnapshotSerializer({
  print(serializerValue) {
    return Object.keys(serializerValue)
      .map(key => `~~~~~~~~~~ ${key.toUpperCase()} ~~~~~~~~~~\n${serializerValue[key]}`)
      .join(os.EOL);
  },
  test() {
    return true;
  },
});

function transform(input) {
  return babelTransform(input, {
    plugins: [plugin],
    root: __dirname,
    rootMode: "root",
  }).code;
}

// TODO: verify the generated output against the actual Orbit components somehow

test.each([
  [
    // This import path is unknown for this plugin is it's being ignored (returned as is).
    'import { Whatever } from "@kiwicom/orbit-components/unknown/import";',
  ],
  ['import { Alert } from "@kiwicom/orbit-components";'], // single
  ['import { Alert, Button } from "@kiwicom/orbit-components";'], // multi
  ['import Alert from "@kiwicom/orbit-components/lib/Alert";'], // from lib (stays as is)
  ['import { ModalSection } from "@kiwicom/orbit-components";'], // nested
  ['import { Alert, ModalSection } from "@kiwicom/orbit-components";'], // nested multi
  ['import { Passengers } from "@kiwicom/orbit-components/lib/icons";'], // icon
  ['import { LayoutColumn } from "@kiwicom/orbit-components";'],
  ['import { BreadcrumbsItem } from "@kiwicom/orbit-components";'],
  ['import { BadgePrimitive } from "@kiwicom/orbit-components";'],
  ['import { ListItem } from "@kiwicom/orbit-components";'],
  [
    // mixed
    `import { Alert, ModalSection, mediaQueries, useRandomIdSeed } from "@kiwicom/orbit-components";
import { Passengers, Invoice } from "@kiwicom/orbit-components/lib/icons";
import { Accommodation } from "@kiwicom/orbit-components/icons";`,
  ],

  // REPORTED ISSUES:
  ['import { mediaQueries } from "@kiwicom/orbit-components";'], // https://github.com/kiwicom/babel-plugin-orbit-components/pull/4
  ["import { Text, Stack, Grid } from '@kiwicom/orbit-components';"], // https://github.com/kiwicom/babel-plugin-orbit-components/issues/5
  ["import { Icon, Icons } from '@kiwicom/orbit-components'"], // https://github.com/kiwicom/babel-plugin-orbit-components/issues/6
  ["import { Grid } from '@kiwicom/orbit-components/icons'"],
])("transform imports as expected %#", rawInput => {
  const input = rawInput.trim();
  expect({
    input,
    output: transform(input),
  }).toMatchSnapshot();
});
